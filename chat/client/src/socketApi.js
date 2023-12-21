import io from 'socket.io-client';

let socket;

export const init = () => {
    console.log('Connetcing...')
    socket = io('http://localhost:3001',{
        transports: ['websocket']
    })
    socket.on('connect', () => {
        console.log('Connected !')
    })
    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
}