const router = require('express').Router()

const { createCommunity, getAllCommunities, getOneCommunity, deleteOneCommunity, updateOneComunity } = require('../controllers/community.controller')
const { checkAdmin, checkManager } = require('../middlewares/auth')

router.post('/:id', checkManager, updateOneComunity)
router.post('/', createCommunity)
router.get('/', checkAdmin, getAllCommunities)
router.get('/:id', checkAdmin, getOneCommunity)
router.delete('/:id', checkAdmin, deleteOneCommunity)

module.exports = router