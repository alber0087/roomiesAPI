const router = require('express').Router()

const { createCommunity } = require('../controllers/community.controller')

router.post('/', createCommunity)

module.exports = router