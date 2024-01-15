const express = require('express')
const app = express()

const MessageBroker = require('./utils/subscriber')
const { development } = require('./config')

const PORT = development.port || 4000 

app.use(express.json())

const main = async () => {
    const msg = await new MessageBroker().init()
    const data = await msg.subscribe()
    console.log("Success", data) 

    const server = app.listen(PORT, () => {
        console.log(`email service listening on port ${PORT}`)
    })

    process.on('unhandledRejection', (err, promise) => {
        console.log(`Logged Error: ${err}`)
        server.close(() => process.exit(1))
    })
}
main().catch((error) => {
    console.error(error)
})