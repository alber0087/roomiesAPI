const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Task = sequelize.define('task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM(['pending', 'completed']),
    allowNull: false,
    defaultValue: 'pending'
  }
},
  { timestamps: false })

module.exports = Task