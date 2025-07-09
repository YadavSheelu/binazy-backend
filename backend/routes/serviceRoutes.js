const express = require("express");
const { createService, getAllServices, getOneService, updateService, deleteService } = require("../Controller/serviceController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router=express.Router();
// admin
router.route("/create-service").post(isAuthenticatedUser,authorizeRoles("admin"), createService)

router.route("/service/:id").put(isAuthenticatedUser,authorizeRoles("admin"), updateService)

router.route("/service/:id").delete(isAuthenticatedUser,authorizeRoles("admin"), deleteService)

// user
router.route("/getallservices").get(getAllServices)

router.route("/service/:id").get( getOneService)



module.exports = router