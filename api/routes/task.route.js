const router = require('express').Router()

const { createTask, getAllTasks, getOneTask, updateTask, deleteTask } = require('../controllers/task.controller')

router.post('/', createTask)
router.get('/', getAllTasks)
router.get('/:id', getOneTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router