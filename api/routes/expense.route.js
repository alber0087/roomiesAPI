const router = require('express').Router()

const { createExpense } = require('../controllers/expense.controller')

router.post('/', createExpense)

module.exports = router