const Community = require('../models/community.model')
const User = require('../models/user.model')

async function createCommunity(req, res) {
  try {
    console.log(res.locals.user.id)
    const community = await Community.create(req.body)
    const result = {
      role: 'Manager',
      communityId: community.id
      }
    const user = await User.update(result, {
      where: { id: res.locals.user.id }
    })
    return res.status(200).json(community)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function getAllCommunities(req, res) {
  try {
    const community = await Community.findAll()
    return res.status(200).json(community)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function getOneCommunity(req, res) {
  try {
    const community = await Community.findByPk(req.params.id)
    return res.status(200).json(community)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function deleteOneCommunity(req, res) {
  try {
    await Community.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.status(200).send(`successfully deleted a community`)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function updateOneComunity(req, res) {
  try {
    const {communityExist, community} = await Community.update(req.body, {
      returning: true,
      where:{ id: req.params.id }
    })
    if (communityExist !== 0) {
      return res.status(200).json({ message: 'Community updated successfully', community: community })
    } else {
      return res.status(404).send('Community not found')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function addUserToCommunity (req, res) {
  try {
    const user = await User.findByPk({
      where: { id: res.locals.user.id }
    })
    const community = await Community.findByPk({})
  } catch (err) {
    res.status(500).send(err.message)
  }
}


module.exports = { createCommunity, getAllCommunities, getOneCommunity, deleteOneCommunity, updateOneComunity }