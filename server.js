const { app } = require('./app')

// DATABASE
const { db } = require('./utils/database.utils')

const startServer = async () => {
    try {
        //AUTENTICAR
        await db.authenticate()
        //SINCRONIZAR BASE DE DATOS
        await db.sync()
        //ESCUCHAR SERVIDOR
        const PORT = 4001
        app.listen(PORT, () => {
            console.log('Express running')
        })

    } catch (error) {
        console.log(error)
    }
}

startServer() 