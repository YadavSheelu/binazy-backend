const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  
  },
  category: {
    type: String,
    enum: ['Frontend', 'Backend', 'Full-stack', 'Database', 'DevOps', 'Mobile'],
    required: true,  
  },
  proficiency: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Expert'],
    default: 'Intermediate', 
  },
  description: {
    type: String,
    required: false,
  },
  tools: {
    type: [String], 
    required: false, 
  },
  lastUpdated: {
    type: Date,
    default: Date.now, 
  },
  icon: {
    type: String, 
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Skill', skillSchema);
