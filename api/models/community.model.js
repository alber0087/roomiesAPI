const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Community = sequelize.define(
  "community",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    {
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      }
    }
  },
  { timestamps: false }
);

module.exports = Community
