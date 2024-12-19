let { Users } = require("../model/Users")
const sequelize = require("sequelize")
const controller = {}

controller.index = (req, res) => {

  Users.findAll().then((users) => {
    res.render("index", { users })
  })

}

controller.show = (req, res) => {
  Users.findByPk(parseInt(req.params.id)).then((user) => {
    res.json(user)
  }).catch((err) => {
    res.status(400).json({ message: "User not found !" })
  })
}

controller.edit = (req, res) => {
  const id = parseInt(req.params.id)
  Users.findByPk(id).then((user) => {
    res.render("edit", { user })
  })

}

controller.create = async (req, res) => {
  const user = await Users.create(req.body)
  res.status(201).json(user)
}

controller.store = (req, res) => {

}

controller.update = (req, res) => {
  const { name, age } = req.body
  const id = parseInt(req.params.id)

  Users.update({ name, age }, { where: { id } }).then((u) => {
    res.redirect("/users")
  })
}

controller.destroy = (req, res) => {
  Users.destroy({ where: { id: parseInt(req.params.id) } }).then((u) => {
    res.json({ message: "User deleted", u })
  }).catch((err) => {
    res.status(400).json({ message: "User not found !" })
  })
}


module.exports = controller