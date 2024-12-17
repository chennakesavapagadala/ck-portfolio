const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chennakesavapagadala@gmail.com',
    pass: 'vzcg syyq ohbm ujug',
  },
});

app.post("/api/contact", async (req, res) => {
  console.log("Received data:", req.body); // Check request body
  
  const { name, email, message } = req.body;

  // Send email with nodemailer
  try {
    const info = await transporter.sendMail({
      from: email,
      to: "chennakesavapagadala@gmail.com",
      subject: `New Message from your portfolio.com`,
      text: `Message From ${name}\n ${message}`,
    });
    console.log("Email sent:", info);
    res.status(200).send({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error); // Log the error
    res.status(500).send({ message: "Error sending message." });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
