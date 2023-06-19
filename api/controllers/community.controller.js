const Community = require('../models/community.model')
const User = require('../models/user.model')

async function createCommunityByAdmin(req, res) {
  try {
    const community = await Community.create(req.body)
    return res.status(200).json(community)
  } catch (err) { res.status(500).send(err.message) }
}

async function createCommunity(req, res) {
  try {
    if (res.locals.user.communityId !== null) { return res.status(500).send('User already belong to a community') }
    const community = await Community.create(req.body)
    const result = {
      role: 'Manager',
      communityId: community.id
    }
    await User.update(result, { where: { id: res.locals.user.id } })
    return res.status(200).json(community)
  } catch (err) { res.status(500).send(err.message) }
}

async function getAllCommunities(req, res) {
  try {
    const community = await Community.findAll()
    return res.status(200).json(community)
  } catch (err) { res.status(500).send(err.message) }
}

async function getOneCommunity(req, res) {
  try {
    const community = await Community.findByPk(req.params.id)
    return res.status(200).json(community)
  } catch (err) { res.status(500).send(err.message) }
}

async function deleteOneCommunity(req, res) {
  try {
    const community = await Community.findByPk(req.params.id)
    console.log(community)
    if (!community) {
      return res.status(404).send('Community not found')
    }
    await Community.destroy({ where: { id: req.params.id } })
    return res.status(200).send(`successfully deleted a community`)
  } catch (err) { res.status(500).send(err.message) }
}

async function updateOneComunity(req, res) {
  try {
    const { communityExist, community } = await Community.update(req.body, {
      returning: true,
      where: { id: req.params.id }
    })
    if (communityExist !== 0) {
      return res.status(200).json({ message: 'Community updated successfully', community: community })
    } else {
      return res.status(404).send('Community not found')
    }
  } catch (err) { res.status(500).send(err.message) }
}

/* async function addUserToCommunity(req, res) {
  try {
    const user = res.locals.user
    if (user.role !== "Manager") { return res.status(500).send('Operation not allowed') }

    const userInvited = await User.findByPk(req.params.id)
    if (!userInvited) { return res.status(500).send('User not found') }
    if (userInvited.communityId) { return res.status(500).send('You already belong to a community') }

    const community = { communityId: user.communityId }
    await User.update(community, {
      returning: true,
      where: { id: req.params.id }
    })
    res.status(200).send('User successfully added to the community!!')
  } catch (err) { res.status(500).send(err.message) }
} */

async function removeUserFromCommunity(req, res) {
  try {
    const user = res.locals.user
    if (user.role !== "Manager") { return res.status(500).send('Operation not allowed') }

    const userRemoved = await User.findByPk(req.params.id)
    if (userRemoved.communityId === null) { return res.status(500).send('User does not belong to the community') }

    const community = { communityId: null }
    await User.update(community, {
      returning: true,
      where: { id: req.params.id }
    })
    res.status(200).send('User successfully removed from the community!!')
  } catch (err) { res.status(500).send(err.message) }
}

async function inviteUser(req, res) {
  try {
    const user = res.locals.user
    const community = await Community.findByPk(user.communityId)
    res.status(200).json({community})
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function joinCommunity(req, res) {
  try {
    const userLogged = res.locals.user
    const communityId = req.params.communityId
    const data = { communityId: communityId }
    if(userLogged.communityId){
      return res.status(500).send('You already belong to a community')
    }

    await User.update(data, {
      where: {
        id: userLogged.id
      }
    })
    res.status(200).send('Welcome to the Community')
  } catch (err) {
    res.status(404).send('Community not found')
  }
}

async function getCommunityUsers(req, res) {
  try {
    const userLogged = res.locals.user;
    if (!userLogged) {
      return res.status(500).send("Operation not allowed");
    }
    const users = await Community.findByPk(userLogged.communityId, {
      include: User,
    });
    return res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
}


module.exports = {
  createCommunity,
  getAllCommunities,
  getOneCommunity,
  deleteOneCommunity,
  updateOneComunity,
  removeUserFromCommunity,
  createCommunityByAdmin,
  inviteUser,
  joinCommunity,
  getCommunityUsers
};
