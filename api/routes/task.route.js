const router = require('express').Router()

const { createTask, getAllTasks, getOneTask, updateTask, deleteTask, userAddTask, taskCompleted } = require('../controllers/task.controller')
const { checkAdmin } = require('../middlewares/auth')

router.post('/', checkAdmin, createTask)
router.get('/', checkAdmin, getAllTasks)
router.get('/:id', checkAdmin, getOneTask)
router.put('/:id', checkAdmin, updateTask)
router.delete('/:id', checkAdmin, deleteTask)

router.post('/addTask', userAddTask)
router.put('/taskCompleted/:id', taskCompleted)

module.exports = router