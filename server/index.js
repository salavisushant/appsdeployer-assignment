const express = require('express');

const authController= require("./controller/auth.controller")


const app = express();

app.use(express.json());

app.post("/register", authController.signUpUser);
app.post("/login", authController.verifyEmail);





module.exports = app;