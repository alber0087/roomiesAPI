const router = require('express').Router()

const { createUser, getAllUsers, updateUser, getOneUser, deleteUser } = require('../controllers/user.controller')
const { checkAdmin } = require('../middlewares/auth')

router.post('/', checkAdmin, createUser)
router.get('/', checkAdmin, getAllUsers)
router.put('/:id', checkAdmin, updateUser)
router.get('/:id', checkAdmin, getOneUser)
router.delete('/:id', checkAdmin, deleteUser)

module.exports = router