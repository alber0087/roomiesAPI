const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastName: { 
    type: DataTypes.STRING, 
    allowNull: true
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
    type: DataTypes.ENUM(['Male', 'Female', 'Other']),
    allowNull: true
  },
  smoker: {
    type: DataTypes.ENUM(['Yes', 'No']),
    allowNull: true,
  },
  schedule: {
    type: DataTypes.ENUM(['Morning', 'Afternoon', 'Night']),
    allowNull: true,
  },
  birth_date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  role: {
    type: DataTypes.ENUM(['User','Manager', 'Admin']),
    allowNull: false,
    defaultValue: 'User'
  },
    image: {
    type: DataTypes.TEXT,
    allowNull: true
  },
},
  { timestamps: false })

module.exports = User
