const Testimonial = require('../models/TestimonialModel');
const ContactMessage = require('../models/ContactMessageModel');
const EmployeeProfile = require('../models/EmployeeModel');

// 📝 Create testimonial (public submission)
exports.createTestimonial = async (req, res) => {
    try {
      const testimonial = new Testimonial(req.body); 
      await testimonial.save();
      res.status(201).json({ message: 'Testimonial submitted for approval.' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.getmyTestimonials = async (req, res) => {
    try {
     
      const testimonials = await Testimonial.find({ status: 'approved' }).sort({ createdAt: -1 });
  
    
      if (testimonials.length === 0) {
        return res.json({
          message: 'No approved testimonials yet. Please check back later!',
          status: 'no_approved_testimonials'
        });
      }
  
      res.json(testimonials);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
// GET /testimonials
exports.getApprovedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ status: 'approved' }).sort({ createdAt: -1 });

    if (testimonials.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No approved testimonials yet",
        data: [],
        count: 0
      });
    }

    res.status(200).json({
      success: true,
      message: "Approved testimonials fetched successfully",
      data: testimonials,
      count: testimonials.length
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching testimonials",
      error: err.message
    });
  }
};



  exports.getAllTestimonials = async (req, res) => {
    try {
     
      const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  
      
      res.json({
        testimonials: testimonials,
        count: testimonials.length
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  
  exports.deleteTestimonial = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleted = await Testimonial.findByIdAndDelete(id);
  
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Testimonial not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Testimonial deleted successfully",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Failed to delete testimonial",
        error: err.message,
      });
    }
  };
  

  // 🔐 Admin: Approve/Reject testimonial
  exports.updateTestimonialStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
  
      if (!['approved', 'rejected'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status value.' });
      }
  
      const updated = await Testimonial.findByIdAndUpdate(id, { status }, { new: true });
      if (!updated) return res.status(404).json({ error: 'Testimonial not found.' });
  
      res.json({ message: `Testimonial ${status}.`, testimonial: updated });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
// Submit Contact Message
exports.submitContactMessage = async (req, res) => {
  try {
    const message = new ContactMessage(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Contact Messages (Admin use)
exports.getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Create Employee Profile
exports.createEmployeeProfile = async (req, res) => {
  try {
     
      const { firstName, lastName,  phone, position, department, salary, status, profileImage, gallery } = req.body;

   
      const newEmployee = new EmployeeProfile({
          firstName,
          lastName,
          phone,
          position,
          department,
          salary,
          status,
          profileImage, 
          gallery,     
      });

      await newEmployee.save();

    
      res.status(201).json(newEmployee);
  } catch (err) {
    
      res.status(400).json({ error: err.message });
  }
};

  
  // Get All Employee Profiles
  exports.getAllEmployeeProfiles = async (req, res) => {
    try {
      const employees = await EmployeeProfile.find();
      res.status(200).json(employees);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Get One Employee Profile by ID
  exports.getEmployeeProfile = async (req, res) => {
    try {
      const employee = await EmployeeProfile.findById(req.params.id);
  
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }
  
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Update Employee Profile by ID
  exports.updateEmployeeProfile = async (req, res) => {
    try {
      const updatedEmployee = await EmployeeProfile.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      if (!updatedEmployee) {
        return res.status(404).json({ error: "Employee not found" });
      }
  
      res.status(200).json(updatedEmployee);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // Delete Employee Profile by ID
  exports.deleteEmployeeProfile = async (req, res) => {
    try {
      const deletedEmployee = await EmployeeProfile.findByIdAndDelete(req.params.id);
  
      if (!deletedEmployee) {
        return res.status(404).json({ error: "Employee not found" });
      }
  
      res.status(200).json({ message: "Employee deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
