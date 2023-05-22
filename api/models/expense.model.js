const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Expense = sequelize.define('expense', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  split_by: {
    type: DataTypes.STRING,
    defaultValue: 'equally'
  }
},
  { timestamps: false })

module.exports = Expense