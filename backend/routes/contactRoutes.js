const express = require('express');
const router = express.Router();
const { sendContactData } = require('../controllers/contactController');

// Route to add a new class (upload.single('image') processes file)
router.post('/', sendContactData);

module.exports = router;
