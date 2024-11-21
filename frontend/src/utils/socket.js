import { io } from 'socket.io-client'

export const socketIO = () => {
  return io(process.env.URL_API, {
    reconnection: true,
    autoConnect: true,
    pingTimeout: 10000,
    reconnectionDelay: 1000,
    reconnectionAttempts: 10,
    pingInterval: 5000,
    transports: ['websocket', 'polling'],
    auth: (cb) => {
      const tokenItem = localStorage.getItem('token')
      const token = tokenItem ? JSON.parse(tokenItem) : null
      // eslint-disable-next-line standard/no-callback-literal
      cb({ token })
    }
  })
}

const socket = socketIO()

socket.io.on('error', (error) => {
  console.error('socket error', error)
})

socket.on('disconnect', (reason) => {
  console.info('socket disconnect', reason)

  if (reason === 'io server disconnect') {
    // the disconnection was initiated by the server, you need to reconnect manually
    socket.connect()
  }
  // else the socket will automatically try to reconnect
})

export default socket
