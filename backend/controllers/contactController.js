const nodemailer = require('nodemailer');

const sendContactData = async (req , res) => {
    const { name, email, query } = req.body;

    // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any other email service
    auth: {
      user: process.env.EMAIL, // Replace with your email
      pass: process.env.EMAIL_PASSWORD , // Replace with your email app password (not normal password)
    },
  });

  const mailOptions = {
    from: process.env.EMAIL, // Sender's email address
    to: process.env.EMAIL, // Replace with the recipient email
    // want to send and receive email from same same email 
    subject: `New Query regarding YogaLife`,
    text: `Name: ${name}\nEmail: ${email}\n\nQuery: ${query}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Query sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send query' });
  }
}

module.exports = { sendContactData };