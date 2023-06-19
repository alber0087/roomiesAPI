const Task = require('../models/task.model')
const Task_community = require('../models/task_community.model')
const Community = require('../models/community.model')

async function createTask(req, res) {
  try {
    const task = await Task.create(req.body)
    return res.status(200).json(task)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function getAllTasks(req, res) {
  try {
    const task = await Task.findAll()
    return res.status(200).json(task)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function getOneTask(req, res) {
  try {
    const task = await Task.findByPk(req.params.id)
    res.status(200).json(task)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function updateTask(req, res) {
  try {
    const [taskExist, task] = await Task.update(req.body, {
      returning: true,
      where: { id: req.params.id },
    })
    if (taskExist !== 0) {
      return res.status(200).json({ message: 'Task updated successfully' })
    } else {
      return res.status(404).send('Task not found')
    }

  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function deleteTask(req, res) {
  try {
    const task = await Task.destroy({
      where: { id: req.params.id }
    })
    if (task) {
      return res.status(200).send('Task removed successfully')
    } else {
      return res.status(404).send('Task not found')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function userAddTask(req, res) {
  try {
    const userLogged = res.locals.user
    const task = await Task.create(req.body)
    const data = { userId: userLogged.id }
    const community = await Community.findByPk(userLogged.communityId)
    await community.addTask(task.id)
    await Task_community.update(data, {
      where: { taskId: task.id }
    })
    res.status(200).send('Task succesfully added!')
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function taskCompleted(req, res) {
  try {
    const userLogged = res.locals.user
    if (!userLogged) {
      return res.status(500).send('Operation not allowed')
    }
    const task = await Task.findByPk(req.params.id)
    if (task.status === 'Completed') {
      return res.status(500).send('Task already completed')
    }
    const data = { status: 'Completed' }
    const taskExist = await Task.update(data, {
      where: { id: req.params.id }
    })
    if (taskExist !== 0) {
      return res.status(200).send('Task completed')
    } else {
      return res.status(404).send('Task not found')
    }
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function getAllTasksByCommunity(req, res) {
  try {
    const userLogged = res.locals.user
    if (!userLogged) {
      return res.status(500).send('Operation not allowed')
    }
    const tasks = await Community.findByPk(userLogged.communityId, {
      include: Task
    })
    return res.status(200).json(tasks)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = { 
  createTask, 
  getAllTasks, 
  getOneTask, 
  updateTask, 
  deleteTask, 
  userAddTask, 
  taskCompleted,
  getAllTasksByCommunity 
}


