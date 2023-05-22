const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Community = sequelize.define('community', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
  { timestamps: false })

module.exports = Community