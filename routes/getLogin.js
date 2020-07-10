const express = require('express');
const router = express.Router();

// route to controller for show Login& Registration page
router.get('/login',); //show login page
router.post('/login',); //login user on site with session key
router.get('/logout',); //logout user session from site & db
router.post('/register',); //register user on site & db

module.exports = router;