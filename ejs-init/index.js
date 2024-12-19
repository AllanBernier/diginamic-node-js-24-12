// npm init -y
// npm i express
// npm i -D nodemon

const express = require("express")
let ejs = require('ejs');

const app = express()

app.listen(3000, () => {
  console.log("App running on port 3000")
})

app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("views", "views")

app.get('/hello', (req,res) => {
  res.send("<h1>Hello</h1>")
})

app.get("/hello-world", (req, res) => {
  res.render("helloworld", { message : "Hello from ejs" })
})




