const YogaClass = require('../models/Class.js');
const cloudinary = require('../config/cloudinary.js');

// Add a new yoga class
const addClass = async (req, res) => {
  
  try {
    const { title, description, batchType, price, schedule } = req.body;

    // Ensure file is uploaded
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file uploaded' });
    }

    // Upload image to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'yoga_classes' }, // Optional: Specify Cloudinary folder
      async (error, result) => {
        if (error) {
          return res.status(500).json({ success: false, message: 'Image upload failed', error });
        }

        // Save class details with Cloudinary image URL
        const newClass = new YogaClass({
          title,
          description,
          image: result.secure_url, // Save Cloudinary image URL
          batchType,
          price,
          schedule,
        });

        await newClass.save();
        res.status(201).json({ success: true, message: 'Yoga class added', class: newClass });
      }
    );

    // Pipe the image buffer to Cloudinary
    uploadStream.end(req.file.buffer);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding class', error: error.message });
  }
};


// Get all yoga classes
const getClasses = async (req, res) => {
  try {
    const classes = await YogaClass.find();
    res.status(200).json({ success: true, classes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching classes', error: error.message });
  }
};

module.exports = { addClass, getClasses };
