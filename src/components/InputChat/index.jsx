import React, { useState } from 'react';
import { FaFileCirclePlus } from "react-icons/fa6";
import { requests } from '../../api/requests';

const InputChat = ({ setChatId,userId, connection, chat, chatId }) => {
    const [message, setMessage] = useState("")

    const onSendMessage = async () => {
        console.log(userId);
        if (!chatId) requests.createChat(userId).then(async (res) => {
            setChatId(res.data.chatId)
            await connection.invoke("SendMessage", res.data.chatId, message)
            await connection.invoke("GetChatsGroup", res.data.chatId)
            setMessage("")
        })
        else{
            const currentChatId = chatId
            await connection.invoke("SendMessage", currentChatId, message)
            await connection.invoke("GetChatsGroup", currentChatId)
            setMessage("")
        }
    }

    return (
        <div className='input'>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Type something' />
            <div className="send">
                <input type="file" style={{ display: "none" }} id="file" />
                <label htmlFor="file">
                    <FaFileCirclePlus className='cursor-pointer' />
                </label>
                <button onClick={onSendMessage}>
                    send
                </button>
            </div>
        </div>
    );
};

export default InputChat;