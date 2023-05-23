const router = require('express').Router()

const userRouter = require('./user.route')
const communityRouter = require('./community.route')
const taskRouter = require('./task.route')
const expenseRouter = require('./expense.route')
const authRouter = require('./auth.route')

router.use('/users', userRouter)
router.use('/communities', communityRouter)
router.use('/tasks', taskRouter)
router.use('/expenses', expenseRouter)
router.use('/auth', authRouter)

module.exports = router
