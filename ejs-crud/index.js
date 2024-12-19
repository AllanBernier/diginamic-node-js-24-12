const express = require("express")
const app = express()
const productRouter = require("./app/router/productRouter")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(productRouter)


app.set("view engine", "ejs")
app.set("views", "app/views")

app.listen(3000, () => {
  console.log("App running on port 3000")
})

