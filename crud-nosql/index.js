// npm init -y
// npm i express
// npm i -D nodemon
// npm i mongoose 


const express = require("express")
const mongoose = require("mongoose")

const Product = require("./model/Product")

const app = express()
app.listen(3000, () => {
  console.log("App running on port 3000")
})

mongoose.connect("mongodb://127.0.0.1:27017/products").then( (data) => {
  console.log("Connected")
} ).catch( (err) => {
  console.log({message : "Not connected" , err})
} )

app.post("/products", (req,res) => {

  Product.create({
    name: "Laptop",
    description: "High performance laptop",
    quantity: 10,
    price: 999.99
  }).then( (result) => {
    res.json(result)
  } ).catch( (err) => {
    res.json(err)
  })
})
