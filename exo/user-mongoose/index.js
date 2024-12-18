// npm init -y
// npm i express
// npm i -D nodemon

const express = require("express")
const userRouter = require("./app/router/userRouter")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())
app.use(userRouter)


app.listen(3000, () => {
  console.log("App running on port 3000")
})

mongoose.connect("mongodb+srv://root:root@cluster0.w7evgzl.mongodb.net/autrement?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log("Connected")
}).catch( (err) => {
  console.log(err)
})


app.use((req, res) => {
  res.status(404).json({ message: "Page not found !" })
})
