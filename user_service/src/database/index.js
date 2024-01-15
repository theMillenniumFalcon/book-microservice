const mongoose = require('mongoose')

const { development } = require('../config')

const DB_PORT = development.db_port

const connectDB = async() => {
    await mongoose.connect(`mongodb://mongo:${DB_PORT}/user`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('user database connected')
}

module.exports = connectDB