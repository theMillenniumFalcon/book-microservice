const mongoose = require('mongoose')

const { development } = require('../config')

const DB_PORT = development.db_port

const connectDB = async() => {
    await mongoose.connect(`mongodb://mongo:${DB_PORT}/content`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('content database connected')
}

module.exports = connectDB