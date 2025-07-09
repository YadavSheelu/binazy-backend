const express = require("express");
const { createSkill, getAllSkills, updateSkills, deleteSkill, getOneSkill } = require("../Controller/skillsController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router=express.Router();

router.route('/create-skill').post(isAuthenticatedUser,authorizeRoles("admin"), createSkill)
router.route("/getallskills").get(getAllSkills)


router.route("/skill/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateSkills)

router.route("/skill/:id").get(getOneSkill)

router.route("/skill/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteSkill)

module.exports = router