const router = require('express').Router()

const { createUser, getAllUsers, updateUser, getOneUser, deleteUser } = require('../controllers/user.controller')

router.post('/', createUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.get('/:id', getOneUser)
router.delete('/:id', deleteUser)

module.exports = router