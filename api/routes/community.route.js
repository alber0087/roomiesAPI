const router = require('express').Router()

const { createCommunity, getAllCommunities, getOneCommunity, deleteOneCommunity, updateOneComunity, addUserToCommunity, removeUserFromCommunity, createCommunityByAdmin } = require('../controllers/community.controller')
const { checkAdmin, checkManager } = require('../middlewares/auth')


router.post('/', checkAdmin, createCommunityByAdmin)
router.get('/', checkAdmin, getAllCommunities)
router.get('/:id', checkAdmin, getOneCommunity)
router.delete('/:id', checkAdmin, deleteOneCommunity)

router.post('/profile', createCommunity)
// router.post('/profile/:id/user/:userId', checkManager, addUserToCommunity)
router.put('/profile/:id', checkManager, updateOneComunity)
router.delete('/profile/:id', checkManager, removeUserFromCommunity)

module.exports = router