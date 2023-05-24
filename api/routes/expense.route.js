const router = require('express').Router()

const { createExpense, getAllExpenses, updateExpense, getOneExpense, deleteExpense, addExpense, expensePaid } = require('../controllers/expense.controller')
const { checkAdmin } = require('../middlewares/auth')

router.post('/', checkAdmin, createExpense)
router.get('/', checkAdmin, getAllExpenses)
router.put('/:id', checkAdmin, updateExpense)
router.get('/:id', checkAdmin, getOneExpense)
router.delete('/:id', checkAdmin, deleteExpense)

router.post('/addExpense', addExpense)
router.put('/expensePaid/:id', expensePaid)

module.exports = router