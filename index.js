const express = require("express")
const ejsMate = require("ejs-mate")
const path = require("path")
const app = express()

// config
app.engine("ejs", ejsMate)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// middleware
app.use(express.static(path.join(__dirname, "public")))

// routes
app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", (req, res) => {
    res.render("commingSoon")
})

app.all("*", (req, res) => {
    res.render("notFound")
})
// run server
app.listen(3000)