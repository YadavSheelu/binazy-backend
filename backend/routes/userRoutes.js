const express = require("express");
const { loginUser, registerUser, updateProfile, getProfile,  logoutUser, makeUserAdmin } = require("../Controller/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


const router=express.Router();

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/profile/:id").put(isAuthenticatedUser, updateProfile)

router.route("/profile/:id").get(isAuthenticatedUser, getProfile)

router.route("/logout").post(isAuthenticatedUser, logoutUser)

router.route("/make-admin/:id").post(isAuthenticatedUser,authorizeRoles("admin"), makeUserAdmin)

module.exports = router