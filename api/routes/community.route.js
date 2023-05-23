const router = require('express').Router()

const { createCommunity, getAllCommunities, getOneCommunity, deleteOneCommunity, updateOneComunity, addUserToCommunity, removeUserFromCommunity } = require('../controllers/community.controller')
const { checkAdmin, checkManager } = require('../middlewares/auth')

router.post('/:id', checkManager, updateOneComunity)
router.post('/', createCommunity)
router.get('/', checkAdmin, getAllCommunities)
router.get('/:id', checkAdmin, getOneCommunity)
router.delete('/:id', checkAdmin, deleteOneCommunity)
router.post('/addUser/:id', checkManager, addUserToCommunity)
router.delete('/removeUser/:id', checkManager, removeUserFromCommunity)

module.exports = router