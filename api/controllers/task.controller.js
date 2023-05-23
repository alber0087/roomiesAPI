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
    console.log(userLogged.id)

    const task = await Task.create(req.body)
    console.log(task.dataValues)

    const data = { userId: userLogged.id }

    console.log(task.id)

    

    const community = await Community.findByPk(userLogged.communityId)
    await community.addTask(task.id)
    
    await Task_community.update(data, {
      where: { taskId: task.id } 
    }) 


    res.status(200).send('Task succesfully added!')
  } catch(err) {
    res.status(500).send(err.message)
  }
}



module.exports = { createTask, getAllTasks, getOneTask, updateTask, deleteTask, userAddTask }

