const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Service name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  icon: {
    type: String,
    default: "fa-cogs",
  },
  features: [
    {
      type: String,
    },
  ],
  technologyStack: {
    type: [String],
    required: [true, "Technology stack is required"],
    enum: [
      "JavaScript", "Python", "Ruby", "Java", "C#", "React", "Node.js", 
      "Vue.js", "Angular", "Django", "Flutter", "PHP", "Go", "AWS", "Azure", 
      "MongoDB", "TypeScript", "Kotlin", "Swift", "Express", "GraphQL", "Redis",
      "Docker", "Terraform", "MySQL", "PostgreSQL", "Ruby on Rails", "Elixir", "C++", "Scala", "Golang", 
      "Jenkins", "Vue.js", "Sass", "Bootstrap", "Tailwind CSS", "WordPress", "Firebase", "Cloud Functions", "Azure Functions"
    ]
    
  },
  
  serviceLevel: {
    type: String,
    required: [true, "Service level is required"],
    enum: ["Basic", "Intermediate", "Advanced", "Enterprise"],
  },
  targetAudience: {
    type: String,
    required: [true, "Target audience is required"],
    enum: ["Startups", "SMEs", "Enterprises", "Freelancers"],
  },
  estimatedDuration: {
    type: String,
    required: [true, "Estimated duration is required"],
  },
  pricingModel: {
    type: String,
    required: [true, "Pricing model is required"],
    enum: ["Fixed Price", "Hourly", "Subscription"],
    default: null,
  },
  pricingRange: {
    type: String,
    default: "Contact for pricing",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
