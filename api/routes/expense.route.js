const router = require('express').Router()

const { 
  createExpense, 
  getAllExpenses, 
  updateExpense, 
  getOneExpense, 
  deleteExpense, 
  addExpense, 
  expensePaid, 
  getAllExpensesByCommunity
} = require('../controllers/expense.controller')

const { checkAdmin } = require('../middlewares/auth')

router.get('/', checkAdmin, getAllExpenses)
router.get('/:id', checkAdmin, getOneExpense)
router.get('/profile/expenses', getAllExpensesByCommunity)
router.post('/', checkAdmin, createExpense)
router.post('/profile', addExpense)
router.put('/:id', checkAdmin, updateExpense)
router.put('/profile/:id', expensePaid)
router.delete('/:id', checkAdmin, deleteExpense)

module.exports = router