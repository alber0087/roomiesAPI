const router = require('express').Router()

const userRouter = require('./user.route')
const communityRouter = require('./community.route')
const taskRouter = require('./task.route')
const expenseRouter = require('./expense.route')
const authRouter = require('./auth.route')

const checkAuth = require('../middlewares/auth')

router.use('/users', checkAuth, userRouter)
router.use('/communities', checkAuth, communityRouter)
router.use('/tasks', checkAuth, taskRouter)
router.use('/expenses', checkAuth, expenseRouter)
router.use('/auth', authRouter)

module.exports = router
