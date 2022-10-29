// Create Express router

const { Router } = require('express');
const crewController = require('../controllers/crewController.js');

const router = new Router();

router.route('/names')
    .get(crewController.getNames) // Route to serve all existing names to the client
    .post(crewController.addName); // Route to add a name in database

module.exports = router;
