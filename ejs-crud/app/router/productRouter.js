
const express = require("express")
const router = express.Router()
const controller = require("../controller/productController")


// Page index (voir tout nos produits)
// page show
// page edit
// page créer

// action créer
// action modifier
// action supprimer


router.get("/products", controller.index)
router.get("/products/:id", controller.index)
router.post("/products", controller.create)
router.put("/products/:id",controller.update)
router.delete("/products/:id", controller.destroy)


module.exports = router