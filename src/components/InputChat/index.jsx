import React, { useState } from 'react'
import { FaFileCirclePlus } from "react-icons/fa6"
import { requests } from '../../api/requests'
import cn from 'classnames'

const InputChat = ({ setChatId,userId, connection, chatId }) => {
    const [message, setMessage] = useState("")

    const onSendMessage = async () => {
        const messageText = message
        setMessage("")

        if (!chatId) requests.createChat(userId).then(async (res) => {
            setChatId(res.data.chatId)
            await connection.invoke("SendMessage", res.data.chatId, message)
            await connection.invoke("GetChatsGroup", res.data.chatId)
        })
        else{
            const currentChatId = chatId
            await connection.invoke("SendMessage", currentChatId, message)
            await connection.invoke("GetChatsGroup", currentChatId)
        }
    }

    return (
        <div className='input'>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Type something'
                onKeyDown={e => e.key === 'Enter' ? onSendMessage: ''}
            />
            <div className="send">
                <button
                    onClick={onSendMessage}
                    className={cn({
                        ["pointer-events-none"]: message.length === 0
                    })}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default InputChat;