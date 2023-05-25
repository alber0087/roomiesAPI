const Expense = require('../models/expense.model')
const Community = require('../models/community.model')
const Community_expense = require('../models/community_expense.model')

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

async function addExpense(req, res) {
  try {
    const userLogged = res.locals.user
    if (!userLogged) {
      return res.status(500).send('Operation not allowed')
    }
    const expense = await Expense.create(req.body)
    const data = {
      userId: userLogged.id,
      to_pay: req.body.price
    }
    const community = await Community.findByPk(userLogged.communityId)

    await userLogged.addExpense(expense.id)
    await community.addExpense(expense.id)

    await Community_expense.update(data, {
      where: { expenseId: expense.id }
    })

    res.status(200).send('Expense succesfully added!')
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function expensePaid(req, res) {
  try {
    const userLogged = res.locals.user
    if (!userLogged) {
      return res.status(500).send('Operation not allowed')
    }
    const community_expense = await Community_expense.findOne({ where: { expenseId: req.params.id } })
    if (community_expense.status === 'Paid') {
      return res.status(500).send('Expense already paid')
    }
    const data = { 
      status: 'Paid',
      to_pay: 0
    }
    await community_expense.update(data, {
      where: { communityId: community_expense.communityId }
    })
    res.status(200).send('Expense paid')
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function getAllExpensesByCommunity(req, res) {
  try {
    const userLogged = res.locals.user
    if (!userLogged) {
      return res.status(500).send('Operation not allowed')
    }
    const expenses = await Community.findByPk(userLogged.communityId, {
      include: Expense
    })
    return res.status(200).json(expenses)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = { 
  createExpense, 
  getAllExpenses, 
  updateExpense, 
  getOneExpense, 
  deleteExpense, 
  addExpense, 
  expensePaid,
  getAllExpensesByCommunity 
}
