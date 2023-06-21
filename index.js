require('dotenv').config()
const express = require('express')
const sequelize = require('./db/index')
const router = require('./api/routes')
const createRelations = require('./db/relationships')
const cors = require('cors')



const api = express()

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    createRelations()
    await sequelize.sync({ alter: true }) 
    console.log('Connection has been established successfully.')
  } catch (err) {
    throw new Error('Cannot connect to the database')
  }
}

const http = require('http')
const server = http.createServer()

const io = require('socket.io')(server, {
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log('Client connected')

  socket.broadcast.emit('chat_message', {
    user: 'INFO',
    message: 'New roomie connected'
  })

  socket.on('chat_message', (data) => {
    io.emit('chat_message', data)
  })
})

server.listen(3001)

const start = async () => {
  try {
    api.use(cors())
    api.use(express.json())
    api.use('/api', router)
    api.listen(process.env.PORT || 5000)
    await connectDB()
    console.info(`Server running on port ${process.env.PORT}`)
  } catch (err) {
    throw new Error(`Cannot start server on port ${process.env.PORT}`)
  }
}

start()
