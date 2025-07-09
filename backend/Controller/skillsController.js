const Skill = require("../models/skillsModel")


exports.createSkill = async (req, res) => {
    try {
        const skill = await Skill.create(req.body);
        res.status(200).json({
            success: true,
            skill
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

exports.getAllSkills = async (req, res) => {
   

    try {
        const skills = await Skill.find();
        
        if (!skills ||skills.length ===0){
          return  res.status(404).json({
            success:false,
            message:"no Skills Found this category"
          })
        }
        res.status(201).json({
            messgae: true,
            skills: skills
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            messgae: error.message
        })
    }
}
exports.updateSkills = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedSkill = await Skill.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedSkill) {
            return res.status(404).json({
                success: false,
                message: "Skill not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Skill updated successfully",
            skill: updatedSkill,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}; 


exports.deleteSkill = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedSkill = await Skill.findByIdAndDelete(id);
  
      if (!deletedSkill) {
        return res.status(404).json({
          success: false,
          message: "Skill not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Skill deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  
  exports.getOneSkill = async (req, res) => {
    const { id } = req.params;
  
    try {
      const skill = await Skill.findById(id);
  
      if (!skill) {
        return res.status(404).json({
          success: false,
          message: "Skill not found",
        });
      }
  
      res.status(200).json({
        success: true,
        skill,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  