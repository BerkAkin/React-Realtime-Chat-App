import React from 'react'
import styles from './styles.module.css'
import { useState } from 'react'

function ChatForm() {
  const [message,setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
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