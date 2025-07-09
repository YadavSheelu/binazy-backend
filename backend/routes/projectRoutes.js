const express = require("express");
const { createProject, getOneProject, updateProject, deleteProject, getAllProjects } = require("../Controller/projectController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router=express.Router();
// admin
router.route("/create-project").post(isAuthenticatedUser,authorizeRoles("admin"), createProject)


router.route("/project/:id").put(isAuthenticatedUser,authorizeRoles("admin"), updateProject)

router.route("/project/:id").delete(isAuthenticatedUser,authorizeRoles("admin"), deleteProject)



// user
router.route("/getallproject").get(getAllProjects)

router.route("/project/:id").get( getOneProject)





module.exports = router