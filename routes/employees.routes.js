const express = require('express')

//TRAER LAS FUNCIONES DEL CONTROLER
const { getAllEmployees, createEmployees, updatedEmployees, deletedEmployees, getOnlyEmployee } = require('../controllers/employees.controller')

//ROUTER
const employeesRouter = express.Router()

//ENDPOINTS
employeesRouter.get('/', getAllEmployees)
employeesRouter.get('/:id', getOnlyEmployee)
employeesRouter.post('/', createEmployees)
employeesRouter.patch('/:id', updatedEmployees)
employeesRouter.delete('/:id', deletedEmployees)

module.exports = { employeesRouter }
