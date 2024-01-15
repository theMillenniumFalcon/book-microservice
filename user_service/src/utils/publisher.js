const amqplib = require('amqplib')

class MessageBroker {
    constructor(){
        this.channel
        this.queue = "email"
    }
    async init(){
        this.connection = await amqplib.connect('amqp://rabbitmq')
        console.log(this.connection)
        this.channel = await this.connection.createChannel()
        await this.channel.assertQueue(this.queue)
        return this
    }
    async publisher(data){
        const res = await this.channel.sendToQueue(this.queue,Buffer.from(JSON.stringify(data)))
        await this.channel.close()
        await this.connection.close()
        return res
    }
}
module.exports = {
    amqplib, MessageBroker
}