const mongoose = require('mongoose')

const { development } = require('../config')

const DB_PORT = development.db_port

const connectDB = async() => {
    await mongoose.connect(`mongodb://mongo:${DB_PORT}/user_events`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('user interaction database connected')
}

module.exports = connectDB