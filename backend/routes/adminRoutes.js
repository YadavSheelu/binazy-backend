const express = require("express");
const { createTestimonial, getAllTestimonials, updateTestimonialStatus, submitContactMessage, getContactMessages, createEmployeeProfile, getAllEmployeeProfiles, getEmployeeProfile, updateEmployeeProfile, deleteEmployeeProfile, deleteTestimonial, getmyTestimonials, getApprovedTestimonials } = require("../Controller/adminController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


const router = express.Router();



router.route("/employee").post(isAuthenticatedUser, authorizeRoles("admin"), createEmployeeProfile);

router.route("/admin/testimonial").get(isAuthenticatedUser, authorizeRoles("admin"), getAllTestimonials)

router.route("/admin/testimonial").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteTestimonial)

router.route("/admin/testimonial/:id").patch(isAuthenticatedUser, authorizeRoles("admin"), updateTestimonialStatus)

router.route("/employee/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getEmployeeProfile);

router.route("/employee/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateEmployeeProfile);

router.route("/employee/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteEmployeeProfile);


// user

router.route("/submit-message").post(submitContactMessage)

router.route("/getmessage").get(isAuthenticatedUser, getContactMessages)

// exployee user
router.route("/employee").post(createEmployeeProfile);

router.route("/employees").get(getAllEmployeeProfiles);

router.route("/testimonials").get(isAuthenticatedUser, getmyTestimonials)

router.route("/testimonialApproved").get(getApprovedTestimonials)

router.route("/testimonials").post(createTestimonial)

module.exports = router

