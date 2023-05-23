const Expense = require('../models/expense.model')

async function createExpense(req, res) {
  try {
    const expense = await Expense.create(req.body)
    return res.status(200).json(expense)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function getOneExpense(req, res) {
  try {
    const expense = await Expense.findByPk(req.params.id)
    res.status(200).json(expense)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function getAllExpenses(req, res) {
  try {
    const expenses = await Expense.findAll()
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateExpense(req, res) {
  try {
    const [expenseExists, expense] = await Expense.update(req.body, {
      returning: true,
      where: { id: req.params.id },
    })

    if (expenseExists !== 0) {
      return res.status(200).json({ message: 'Expense updated successfully', expense: expense })
    } else {
      return res.status(404).send('Expense not found')
    }

  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function deleteExpense(req, res) {
  try {
    const expense = await Expense.destroy({
      where: { id: req.params.id }
    })
    if (expense) {
      return res.status(200).send('Expense removed successfully')
    } else {
      return res.status(404).send('Expense not found')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = { createExpense, getAllExpenses, updateExpense, getOneExpense, deleteExpense }