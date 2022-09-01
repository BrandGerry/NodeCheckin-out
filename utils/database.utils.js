const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Pitodemono20',
    port: 5432,
    database: 'employees',
    logging: false,
})
module.exports = { db } 