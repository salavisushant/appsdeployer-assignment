const nodemailer = require('nodemailer');

const transporter = require("../configs/test")

const sendMail= async (params) => {
  try {
    let info = await transporter.sendMail({
      from:"salavisush88@gamil.com",
      to: params.to, // list of receivers
      subject: 'Hello ✔', // Subject line
      html: `
      <div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h2>Welcome to the club.</h2>
        <h4>You are officially In ✔</h4>
        <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
        <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.OTP}</h1>
        <p style="margin-top:50px;">If you do not request for verification please do not respond to the mail. You can in turn un subscribe to the mailing list and we will never bother you again.</p>
      </div>
    `,
    });
    console.log(info);
    return info;

  } catch (error) {
    console.log(error);
    return false;
  }
};


module.exports = sendMail;