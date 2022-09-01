const { DataTypes } = require('sequelize')
const { db } = require('../utils/database.utils')

//DEFINIR PRIMER MODELO

const Employees = db.define('employees', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Working'
    }
})

module.exports = { Employees } 