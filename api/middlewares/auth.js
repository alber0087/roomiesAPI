const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const checkAuth = (req, res, next) => {
  if (!req.headers.token) {
    return res.status(500).send('Error: Token not valid!')
  }
  jwt.verify(req.headers.token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.status(500).send('Error: Token not valid!')
    }
    const user = await User.findOne({
      where: { email: data.email }
    })
    if (!user) {
      return res.status(500).send('Error: Token not valid!')
    }
    res.locals.user = user
    next()
  })
}

const checkManager = async (req, res, next) => {
  console.log(res.locals.user.role)
  if (res.locals.user.role !== 'Manager') {
    return res.status(500).send('You are not authorized to access this rource')
  }
  next()
}

const checkAdmin = async (req, res, next) => {
  console.log(res.locals.user.role)
  if (res.locals.user.role !== 'Admin') {
    return res.status(500).send('You are not authorized to access this rource')
  }
  next()
}

module.exports = { checkAuth, checkAdmin, checkManager }