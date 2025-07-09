const Project = require('../models/projectModel');

// Create new project
exports.createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      domain,
      liveLink,
      githubLink,
      technologies,
      image
    } = req.body;

    const newProject = new Project({
      title,
      description,
      domain,
      liveLink,
      githubLink,
      technologies,
      image,
      
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Create Project Error:", error);
    res.status(500).json({ message: "Project create failed", error });
  }
};


// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error("Get All Projects Error:", error);
    res.status(500).json({ message: "Error fetching projects", error });
  }
};

// Get one project by ID
exports.getOneProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    console.error("Get One Project Error:", error);
    res.status(500).json({ message: "Error fetching project", error });
  }
};

// Update project by ID
exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(updatedProject);
  } catch (error) {
    console.error("Update Project Error:", error);
    res.status(500).json({ message: "Error updating project", error });
  }
};

// Delete project by ID
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Delete Project Error:", error);
    res.status(500).json({ message: "Error deleting project", error });
  }
};