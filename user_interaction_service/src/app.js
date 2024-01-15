const express = require('express')
const app = express()

const { development } = require('./config')

const PORT = development.port || 6000 

app.use(express.json())

const main = async () => {
    const server = app.listen(PORT, () => {
        console.log(`user interaction service listening on port ${PORT}`)
    })

    process.on('unhandledRejection', (err, promise) => {
        console.log(`Logged Error: ${err}`)
        server.close(() => process.exit(1))
    })
}
main().catch((error) => {
    console.error(error)
})