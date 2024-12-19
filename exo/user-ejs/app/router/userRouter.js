const express = require("express")
const router = express.Router()
const controller = require("../controller/userController")
const { nameIsPresent, ageIsPresentAndPositive} = require("../middleware/userRequestForm")

router.get("/users", controller.index)
router.get("/users/:id", controller.show)
router.get("/users/:id/edit", controller.edit)
router.get("/users/:id/create", controller.create)

router.post("/users", [nameIsPresent, ageIsPresentAndPositive], controller.store)
router.post("/users/:id/update", [nameIsPresent, ageIsPresentAndPositive], controller.update)
router.post("/users/:id/destroy", controller.destroy)

module.exports = router