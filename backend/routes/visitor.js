// routes/visitor.js
const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

router.get('/visit', visitorController.getVisitorCount);

module.exports = router;
