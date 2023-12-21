import {React,useEffect} from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init, subscribeChat, subscribeInitialMessages} from '../socketApi'
import {useChat} from '../context/ChatContext'

function Container() {
  const {setMessages}=useChat();

  useEffect(()=>{

    init();

    subscribeChat((message)=>{
      setMessages((prev)=>[...prev,{message}])
    });

    subscribeInitialMessages((messages)=>{
      setMessages(messages)
      console.log(messages);
    })

  },[])


  return (
    <div>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container