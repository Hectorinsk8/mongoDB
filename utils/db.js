import mongoose from 'mongoose';
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

mongoose.set('debug', true)

mongoose.set('strictQuery', false)


async function connect() {
 try {

    if (mongoose.connection.readyState) {
        console.log('Conexion establecida'.yellow.bold)
        return
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connection '.green.bold)
 } catch (err) {
    console.log('Error al conectar a la base de datos:', err.message.red.bold)
 }
}

export default connect