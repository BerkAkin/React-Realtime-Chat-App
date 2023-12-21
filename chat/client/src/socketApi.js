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

export const sendMessage = (message) =>{
    if(socket){
        socket.emit('new-message',message);
    }
}


export const subscribeChat = (callback) =>{

    if(!socket){
        return
    }

    socket.on('receive-message',(message)=>{
        callback(message);
    })
    
}


export const subscribeInitialMessages = (callback) =>{
    if(!socket){
        return
    }

    socket.on('message-list',(message)=>{
        console.log("initial")
        callback(message);
    })

}