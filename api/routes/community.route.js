const router = require('express').Router()

const { createCommunity, getAllCommunities, getOneCommunity, deleteOneCommunity, updateOneComunity, addUserToCommunity, removeUserFromCommunity, createCommunityByAdmin } = require('../controllers/community.controller')
const { checkAdmin, checkManager } = require('../middlewares/auth')


router.post('/', checkAdmin, createCommunityByAdmin)
router.get('/', checkAdmin, getAllCommunities)
router.get('/:id', checkAdmin, getOneCommunity)
router.delete('/:id', checkAdmin, deleteOneCommunity)

router.post('/createCommunity', createCommunity)
router.post('/addUser/:id', checkManager, addUserToCommunity)
router.post('/:id', checkManager, updateOneComunity)
router.delete('/removeUser/:id', checkManager, removeUserFromCommunity)

module.exports = router