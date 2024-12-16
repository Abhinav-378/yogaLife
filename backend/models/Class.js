const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Cloudinary image URL will be saved here
    required: true,
  },
  batchType: {
    type: String,
    enum: ['Individual', 'Group'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
});

const YogaClass = mongoose.model('YogaClass', classSchema);

module.exports = YogaClass;
