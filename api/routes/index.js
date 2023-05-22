const router = require('express').Router()

const userRouter = require('./user.route')
const communityRouter = require('./community.route')
const taskRouter = require('./task.route')
const expenseRouter = require('./expense.route')

router.use('/users', userRouter)
router.use('/communities', communityRouter)
router.use('/tasks', taskRouter)
router.use('/expenses', expenseRouter)

module.exports = router
