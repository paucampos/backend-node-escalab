// const express = require("express");
const router = require("express").Router();

const {
    signup,
    signin,
    signout,
    requireSignin
} = require("../controllers/auth");

const { userSignupValidator } = require('../validators');

// Routes
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.post("/signout", signout);

module.exports = router;