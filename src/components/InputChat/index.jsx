import React, { useState } from 'react';
import { FaFileCirclePlus } from "react-icons/fa6";

const InputChat = ({connection,chat,chatId}) => {
    const [message, setMessage] = useState("")

    const onSendMessage = async() =>{
        const currentChatId = chatId
        await connection.invoke("SendMessage", currentChatId,message)
        await connection.invoke("GetChatsGroup", currentChatId)
        setMessage("")
    }

    return (
        <div className='input'>
            <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Type something' />
            <div className="send">
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                  <FaFileCirclePlus className='cursor-pointer'/>
                </label>
                <button onClick={onSendMessage}>
                    send
                </button>
            </div>
        </div>
    );
};

export default InputChat;