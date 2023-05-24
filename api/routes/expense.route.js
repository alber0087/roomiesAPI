const router = require('express').Router()

const { createExpense, getAllExpenses, updateExpense, getOneExpense, deleteExpense, addExpense } = require('../controllers/expense.controller')

router.post('/', createExpense)
router.get('/', getAllExpenses)
router.put('/:id', updateExpense)
router.get('/:id', getOneExpense)
router.delete('/:id', deleteExpense)

router.post('/addExpense', addExpense)

module.exports = router