const mongoose = require('mongoose');


const employeeProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  hireDate: {
    type: Date,
    default: Date.now,
  },
  salary: {
    type: Number,
    required: false, 
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
 
  profileImage: {
    type: String, 
    default: '', 
  },
  
  gallery: [{
    type: String,  
  }],
  
  comments: [{
    commenter: {
      type: String,  
      required: true,
    },
    message: {
      type: String,  
      required: true,
    },
    createdAt: {
      type: Date,  
      default: Date.now,
    },
  }],
}, { timestamps: true });


const EmployeeProfile = mongoose.model('EmployeeProfile', employeeProfileSchema);

module.exports = EmployeeProfile;
