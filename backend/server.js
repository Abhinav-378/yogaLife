require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/db');

const classRoutes = require('./routes/classRoutes');

// Initialize Express
const app = express();

// Connect to Database
connectToDb();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // For URL-encoded payloads


// Routes
app.use('/api/classes', classRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
