const router = require('express').Router()

const { createCommunity, getAllCommunities, getOneCommunity, deleteOneCommunity, updateOneComunity } = require('../controllers/community.controller')
const { checkAuth, checkAdmin } = require('../middlewares/auth')

router.post('/:id', updateOneComunity)
router.post('/', createCommunity)
router.get('/', getAllCommunities)
router.get('/:id', getOneCommunity)
router.delete('/:id', deleteOneCommunity)

module.exports = router