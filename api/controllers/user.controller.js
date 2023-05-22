const User = require('../models/user.model')

async function createUser(req, res) {
  try {
    const user = await User.create(req.body)
    return res.status(200).json(user)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function getAllUsers(req, res) {
  try {
    const user = await User.findAll()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateUser(req, res) {
  try {
    const [userExist, user] = await User.update(req.body, {
      returning: true,
      where: { id: req.params.id },
    })

    if (userExist !== 0) {
      return res.status(200).json({ message: 'User updated successfully', user: user })
    } else {
      return res.status(404).send('User not found')
    }

  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: { id: req.params.id }
    })
    if (user) {
      return res.status(200).send('User removed successfully')
    } else {
      return res.status(404).send('User not found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = { createUser, getAllUsers, updateUser, getOneUser, deleteUser }