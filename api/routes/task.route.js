const router = require('express').Router()

const { createTask, getAllTasks, getOneTask, updateTask, deleteTask, userAddTask, taskCompleted } = require('../controllers/task.controller')

router.post('/', createTask)
router.get('/', getAllTasks)
router.get('/:id', getOneTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

router.post('/addTask', userAddTask)
router.put('/taskCompleted/:id', taskCompleted)

module.exports = router