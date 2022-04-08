const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "be3d6bd48d3a0d",
    pass: "0974c97dc46e0f"
  }
});