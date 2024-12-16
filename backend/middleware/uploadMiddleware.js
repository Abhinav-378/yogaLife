const multer = require('multer');

// Configure storage to use memory (buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload;
