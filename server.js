const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const emailValidator = require('deep-email-validator');

async function isEmailValid(email) {
  return emailValidator.validate(email)
}
const app = express();




app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://sanrsa:rahman417@cluster0.w7dwc.mongodb.net/todolistDB", {useNewUrlparser: true});

const tech_details = {  
    name: String,
    email: String,
    phone_no: Number
}


const TechTalk = mongoose.model("TechTalk", tech_details)


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", async (req, res) => {
const add = req.body;
const email = add.email;

const tech = new TechTalk ({
    name: add.name,
    email: add.email,
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