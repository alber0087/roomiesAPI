const Task = require('../models/task.model')

async function createTask(req, res) {
  try {
    const task = await Task.create(req.body)
    return res.status(200).json(task)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = { createTask }