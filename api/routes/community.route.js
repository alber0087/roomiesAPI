const router = require('express').Router()

const { createCommunity, getAllCommunities, getOneCommunity, deleteOneCommunity, updateOneComunity, addUserToCommunity } = require('../controllers/community.controller')
const { checkAdmin, checkManager } = require('../middlewares/auth')

router.post('/:id', checkManager, updateOneComunity)
router.post('/', createCommunity)
router.get('/', checkAdmin, getAllCommunities)
router.get('/:id', checkAdmin, getOneCommunity)
router.delete('/:id', checkAdmin, deleteOneCommunity)
router.post('/addUser/:id', checkManager, addUserToCommunity)

module.exports = router