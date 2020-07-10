const express = require('express');
const router = express.Router();
const getLogin = require('./getLogin');
const getProfile = require('./getProfile');
const getProjects = require('./getProjects');
const postProfile = require('./postProfile');
const postProjects = require('./postProjects');
// all routes
router.use('/getLogin',getLogin);
router.use('/getProfile',getProfile);
router.use('/getProjects',getProjects);
router.use('/postProfile',postProfile);
router.use('/postProjects',postProjects);
router.get("/", (req, res) => {
	res.render("home");
});

module.exports = router;