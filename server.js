require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const emailValidator = require('deep-email-validator');
var crypto = require("crypto")
var nodemailer = require("nodemailer");
async function isEmailValid(email) {
  return emailValidator.validate(email)
}
const app = express();




app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect(process.env.DB, {useNewUrlparser: true});

const tech_details = {  
    name: String,
    email: String,
    phone_no: Number
}


const User = mongoose.model("User", tech_details)


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", async (req, res) => {
const add = req.body;
const email = add.email;

const tech = new User ({
    name: add.name,
    email: email,
    phone_no: add.phone
})

const {valid, reason, validators} = await isEmailValid(email);

if (valid) {
    
    tech.save();
} else{

return res.status(400).send({
  message: "Please provide a valid email address.",
  reason: validators[reason].reason
})}

res.redirect("/");

})








app.listen(process.env.PORT ||3000, function(){
    console.log("you are running on port 3000");
  })