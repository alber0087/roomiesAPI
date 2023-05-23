const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: { 
    type: DataTypes.STRING, 
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM(['male', 'female']),
    allowNull: true
  },
  smoker: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  schedule: {
    type: DataTypes.ENUM(['morning', 'afternoon', 'night']),
    allowNull: true,
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM(['User','Manager', 'Admin']),
    allowNull: false,
    defaultValue: 'User'
  }
},
  { timestamps: false })

module.exports = User