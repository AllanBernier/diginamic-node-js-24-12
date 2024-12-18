let Users = require("../model/Users")
const controller = {}

controller.index = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 3

  const users = await Users.find().limit(limit).skip((page - 1) * limit)
  const count = await Users.countDocuments()

  res.json({
    totalPages: Math.round(count / limit),
    currentPage: page,
    limit: limit,
    total : count,
    links: {
      prev: `http://localhost:3000/users?page=${page - 1}&limit=${limit}`,
      current: `http://localhost:3000/users?page=${page}&limit=${limit}`,
      next: `http://localhost:3000/users?page=${page + 1}&limit=${limit}`
    },
    data: users
  })
}

controller.search = async (req, res) => {
  const users = await Users.find( { name : { $regex: `.*${req.query.name}.*`  } } )
  res.json(users)
}

controller.show = (req, res) => {
  Users.findByPK(parseInt(req.params.id)).then((user) => {
    res.json(user)
  }).catch((err) => {
    res.status(400).json({ message: "User not found !" })
  })
}


controller.create = async (req, res) => {
  Users.create(req.body)
    .then((user) => {
      res.json(user)
    }).catch((err) => {
      res.status(500).json({ err })
    })
}

controller.update = (req, res) => {
  Users.updateOne({ _id: req.params.id }, req.body).then((queryResult) => {
    res.json({ message: "User updated", queryResult })
  }).catch((err) => {
    res.status(400).json({ message: "User not found !" })
  })
}


controller.destroy = (req, res) => {
  Users.deleteOne({ _id: req.params.id }).then((queryResult) => {
    res.json({ message: "User deleted", queryResult })
  }).catch((err) => {
    res.status(400).json({ message: "User not found !" })
  })
}

module.exports = controller