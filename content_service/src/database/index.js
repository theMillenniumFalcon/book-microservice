const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect('mongodb://mongo:27017/content', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('MongoDB connected')
}

module.exports = connectDB