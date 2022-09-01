const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')

//ROUTER
const { employeesRouter } = require('./routes/employees.routes')

//INICIALIZAR NUESTRO EXPRESS
const app = express()

//RECIBA JSON
app.use(express.json())

//DEFINIR ENDPOINTS
//CREAR E IMPORTAR EMPLOYYESROUTER
app.use('/api/v1/registrations', employeesRouter)



module.exports = { app }