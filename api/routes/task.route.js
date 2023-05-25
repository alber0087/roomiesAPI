const router = require('express').Router()

const { 
  createTask, 
  getAllTasks, 
  getOneTask, 
  updateTask, 
  deleteTask, 
  userAddTask, 
  taskCompleted, 
  getAllTasksByCommunity
} = require('../controllers/task.controller')

const { checkAdmin } = require('../middlewares/auth')

router.get('/:id', checkAdmin, getOneTask)
router.get('/', checkAdmin, getAllTasks)
router.get('/profile/tasks', getAllTasksByCommunity)
router.post('/', checkAdmin, createTask)
router.post('/profile', userAddTask)
router.put('/:id', checkAdmin, updateTask)
router.put('/profile/:id', taskCompleted)
router.delete('/:id', checkAdmin, deleteTask)

module.exports = router