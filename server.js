const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Create an express app
const app = express();

// Parse JSON request bodies
app.use(bodyParser.json());

// Handle POST request to /subscribe endpoint
app.post('/subscribe', (req, res) => {
  const email = req.body.email;

  if (email) {
    // Send the confirmation email
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Replace with your email provider
      auth: {
        user: 'prmafaz2006@gmail.com', // Replace with your email address
        pass: 'ctoftxjjsdeyqlbv' // Replace with your email password
      }
    });

    const mailOptions = {
      from: 'prmafaz2006@gmail.com', // Replace with your email address
      to: email,
      subject: 'Email Subscription Confirmation',
      text: 'Thank you for subscribing!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending confirmation email:', error);
        res.status(500).send('Failed to send confirmation email');
      } else {
        console.log('Confirmation email sent:', info.response);
        res.status(200).send('Confirmation email sent');
      }
    });
  } else {
    res.status(400).send('Missing email parameter');
  }
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
