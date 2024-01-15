const express = require('express')
const app = express()

const connectDB = require('./database')
const { development } = require('./config')
const user_events = require('./routes')
const { pageNotfound, ErrorHandler } = require('./utils/error/error-handler')

const PORT = development.port || 6000 

app.use(express.json())

const main = async () => {
    connectDB()
    app.use('/api/interact', user_events)
    app.use(pageNotfound)
    app.use(ErrorHandler)

    const server = app.listen(PORT, () => {
        console.log(`user events service listening on port ${PORT}`)
    })

    process.on('unhandledRejection', (err, promise) => {
        console.log(`Logged Error: ${err}`)
        server.close(() => process.exit(1))
    })
}
main().catch((error) => {
    console.error(error)
})