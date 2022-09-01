const { userInfo } = require('os')
const { Employees } = require('../models/employes.model')

//FUNCION TRAER TODOS LOS EMPLEADOS
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employees.findAll()
        res.status(200).json({
            status: 'Success',
            data: {
                employees,
            }
        })

    } catch (error) {
        console.log(error)
    }
}

//FUNCION TRAER SOLO UN EMPLEADO
const getOnlyEmployee = async (req, res) => {
    try {
        const { id } = req.params
        //VERIFICAR SI EXISTE
        const employee = await Employees.findOne({ where: { id } })
        if (!employee) {
            return res.status(404).json({
                status: 'error',
                message: 'employee not found'
            })
        }
        res.status(200).json({
            status: 'Sucess',
            data: {
                employee,
            }
        })

    } catch (error) {
        console.log(error)
    }
}

//FUNCION PARA AGREGAR EMPLEADOS
const createEmployees = async (req, res) => {
    try {
        const { entranceTime } = req.body
        const newEmployee = await Employees.create({ entranceTime })
        res.status(201).json({
            status: 'Success',
            data: { newEmployee },
        })

    } catch (error) {
        console.log(error)
    }
}

//FUNCION PARA ACTUALIZAR EMPLEADOS
const updatedEmployees = async (req, res) => {
    try {
        const { exitTime, status } = req.body
        const { id } = req.params

        //VERIFICAR SI EXISTE
        const employee = await Employees.findOne({ where: { id } })
        if (!employee) {
            return res.status(404).json({
                status: 'error',
                message: 'employee not found',
            })
        }
        const updatedEmployee = await employee.update({ exitTime, status })
        res.status(200).json({
            status: 'sucess',
            data: { updatedEmployee }
        })

    } catch (error) {
        console.log(error)

    }
}

//FUNCION ELIMINAR/CANCELAR EMPLEADOS
const deletedEmployees = async (req, res) => {
    try {
        const { id } = req.params
        //CHECAMOS SI EL USUARIO EXISTE
        const employee = await Employees.findOne({ where: { id } })
        if (!employee) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found',
            })
        }
        const deleteEmployee = await employee.update({ status: 'cancelled' })
        res.status(204).json({
            status: 'sucess',
        })

    } catch (error) {
        console.log(error)

    }
}

module.exports = {
    getAllEmployees,
    getOnlyEmployee,
    createEmployees,
    updatedEmployees,
    deletedEmployees
}