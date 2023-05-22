const Community = require('../models/community.model')

async function createCommunity(req, res) {
  try {
    const community = await Community.create(req.body)
    return res.status(200).json(community)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = { createCommunity }