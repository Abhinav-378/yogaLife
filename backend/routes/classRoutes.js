const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware.js');
const { addClass, getClasses } = require('../controllers/classController.js');

// Route to add a new class (upload.single('image') processes file)
router.post('/', upload.single('image'), addClass);

router.get('/', getClasses);

module.exports = router;
