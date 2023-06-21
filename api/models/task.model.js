const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM(['Pending', 'Completed']),
    allowNull: false,
    defaultValue: 'Pending'
  }
},
  { timestamps: false })

module.exports = Task
