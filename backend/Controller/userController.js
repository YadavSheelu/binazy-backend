const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Register User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return next(new ErrorHander("Please provide all required fields", 400));
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return next(new ErrorHander("User already exists", 400));
    }

    const user = await User.create({ name, email, password }); 

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });

    // Set token in cookies
    res.cookie("token", token, {
        httpOnly: true,  // Securely send cookies
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
    });

    // Send Response with Token and User Details
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        token,
        user,
    });
});


// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHander("Please provide email and password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHander("Invalid email or password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHander("Invalid email or password", 401));
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });

    // Set token in cookies
    res.cookie("token", token, {
        httpOnly: true,  // Securely send cookies
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),  // Set expiration to 7 days
    });

    // Send Response with Token and User Details
    res.status(200).json({
        success: true,
        message: "User logged in successfully",
        token,
        user,
    });
});


// logout user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "User logged out successfully",
    });
});

  exports.getProfile = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User.findById(id).select('-password -otp -otpExpiry');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  


exports.updateProfile = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    res.status(200).json({
      message: 'Profile updated successfully',
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// role chnage 
exports.makeUserAdmin = catchAsyncErrors(async (req, res, next) => {
  const userId = req.params.id;

  const user = await User.findById(userId);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  user.role = "admin";
  await user.save();

  res.status(200).json({
    success: true,
    message: `User with ID ${userId} is now an admin.`,
  });
});
