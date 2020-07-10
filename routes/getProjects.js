const express = require('express');
const router = express.Router()

// route to controller for show projects for worker & employer
router.get('/projects',); //show all projects on the site
router.get('/projects/:id/edit',); //show project editor on the site for employers only
router.get('/projects/:id',); //show current project on the site
router.get('/projects/add',); //show add editor on the site for employers only

module.exports = router