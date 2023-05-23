const router = require('express').Router()

const { createExpense, getAllExpenses, updateExpense, getOneExpense, deleteExpense } = require('../controllers/expense.controller')

router.post('/', createExpense)
router.get('/', getAllExpenses)
router.put('/:id', updateExpense)
router.get('/:id', getOneExpense)
router.delete('/:id', deleteExpense)

module.exports = router