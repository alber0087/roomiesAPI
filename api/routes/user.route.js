const router = require('express').Router()

const { createUser, getAllUsers, updateUser, getOneUser, deleteUser, selfDelete, selfUpdate } = require('../controllers/user.controller')
const { checkAdmin } = require('../middlewares/auth')

router.post('/', checkAdmin, createUser)
router.get('/', checkAdmin, getAllUsers)
router.put('/:id', checkAdmin, updateUser)
router.get('/:id', checkAdmin, getOneUser)
router.delete('/:id', checkAdmin, deleteUser)

router.delete('/profile', selfDelete)
router.put('/profile/:id', selfUpdate)

module.exports = router