const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Community_expense = sequelize.define('community_expense', {
  to_pay: {
    type: DataTypes.DECIMAL,
    defaultValue: 0
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},
  { timestamps: false })

module.exports = Community_expense