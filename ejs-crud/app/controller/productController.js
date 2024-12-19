const Products = require("../model/Product")
const controller = {}



// Get All 
controller.index = async (req, res) => {
  try {

    const products = await Products.findAll()
    res.render("index", {products})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get by id
controller.show = async (req, res) => {
  try {
    const product = await Products.findByPk(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: "Product not found!" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Post create
controller.create = async (req, res) => {
  try {
    const { name, quantity, price, description } = req.body
    const product = await Products.create({ 
      name, 
      quantity, 
      price, 
      description 
    })
    res.status(201).json({ product, message: "Product created successfully!" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Put update
controller.update = async (req, res) => {
  try {
    const { name, quantity, price, description } = req.body
    const product = await Products.update(
      { name, quantity, price, description },
      { where: { id: req.params.id } }
    )
    if (product[0] === 0) {
      res.status(404).json({ message: "Product not found!" })
    } else {
      res.status(200).json({ message: "Product updated successfully!" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Delete supprimer
controller.destroy = async (req, res) => {
  try {
    const result = await Products.destroy({
      where: { id: req.params.id }
    })
    if (result === 0) {
      res.status(404).json({ message: "Product not found!" })
    } else {
      res.status(200).json({ message: "Product deleted successfully!" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


module.exports = controller