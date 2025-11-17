const { randomUUID } = require('crypto')
const { Server } = require('socket.io')

const server = new Server({
    cors: {
        origin: '*'
    }
})


server.on('connection', socket => {
    
    const id = randomUUID()

    console.log(`new client joined and given id ${id}`)

    socket.emit('welcome', {
        id
    })
    
    server.emit('new-user', {
        id
    })

    socket.on('disconnect', () => {
        console.log(`user ${id} disconnected`)
    })

})

server.listen(3005)