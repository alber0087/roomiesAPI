const router = require('express').Router()

const { 
  createUser, 
  getAllUsers, 
  updateUser, 
  getOneUser, 
  deleteUser, 
  selfDelete, 
  selfUpdate 
} = require('../controllers/user.controller')

const { checkAdmin } = require('../middlewares/auth')

router.get('/', checkAdmin, getAllUsers)
router.get('/:id', checkAdmin, getOneUser)
router.post('/', checkAdmin, createUser)
router.put('/:id', checkAdmin, updateUser)
router.put('/profile/:id', selfUpdate)
router.delete('/:id', checkAdmin, deleteUser)
router.delete('/profile', selfDelete)

module.exports = router