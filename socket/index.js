import { Server } from 'socket.io'

const io = new Server(4000, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let onlineUsers = []

const addNewUser = (username, socketId) => {
    !onlineUsers.some(user => user.username === username) && onlineUsers.push({ username, socketId })
    console.log(onlineUsers, 'onlineUsers')
}

const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socketId)
}

const getUser = (username) => {
    return onlineUsers.find(user => user.username === username)
}

io.on("connection", (socket) => {

    socket.on("newUser", (username) => {
        addNewUser(username, socket.id)
    })

    socket.on("sendLikeNotification", ({ senderName, recieverName }) => {
        const receiver = getUser(recieverName)
        console.log(receiver, 'receiver')
        io.to(receiver.socketId).emit("getNotification", {
            senderName
        })
    })
    socket.on("disconnect", () => {
        removeUser(socket.id)
    })
})