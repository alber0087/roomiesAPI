const User = require('../models/user.model')

async function createUser(req, res) {
  try {
    const user = await User.create(req.body)
    return res.status(200).json(user)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = { createUser }