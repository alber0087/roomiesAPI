const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Task_community = sequelize.define('task_community', {
/*   community_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  } */
},
  { timestamps: false })

module.exports = Task_community