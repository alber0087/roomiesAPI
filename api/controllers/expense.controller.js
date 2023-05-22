const Expense = require('../models/expense.model')

async function createExpense(req, res) {
  try {
    const expense = await Expense.create(req.body)
    return res.status(200).json(expense)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = { createExpense }