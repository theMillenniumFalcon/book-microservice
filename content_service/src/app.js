const express = require('express')
const app = express()

const connectDB = require('./database')
const contents = require('./routes')
const { development } = require('./config')
const { pageNotfound, ErrorHandler} = require('./utils/error/error-handler')

const PORT = development.port || 5000 

app.use(express.json())

const main = async () => {
    connectDB()
    app.use('/api/contents', contents)
    app.use(pageNotfound)
    app.use(ErrorHandler)

    const server = app.listen(PORT, () => {
        console.log(`content service listening on port ${PORT}`)
    })

    process.on('unhandledRejection', (err, promise) => {
        console.log(`Logged Error: ${err}`)
        server.close(() => process.exit(1))
    })
}
main().catch((error) => {
    console.error(error)
})