import React from 'react'
import styles from './styles.module.css'
import { useState } from 'react'
import {sendMessage} from '../socketApi'
import { useChat } from '../context/ChatContext'

function ChatForm() {
  const [message,setMessage] = useState('')

  const {setMessages} = useChat();

  const handleSubmit = (e) => {

    e.preventDefault();

    setMessages((prev)=>[...prev,{message, fromMe:true}])

    sendMessage(message)

    setMessage('');
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={message} onChange={(e)=>setMessage(e.target.value)} type='text' className={styles.textInput}></input>
      </form>
    </div>
  )
}

export default ChatForm