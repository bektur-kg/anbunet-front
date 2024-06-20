import React from 'react'
import MessagesChat from '../MessagesChat'
import InputChat from '../InputChat'


const Chat = ({setChatId, userId, chats, connection, login, chatId}) => {
    const currentChat = chats?.find(c => c.chatId === chatId)

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{login}</span>
            </div>
            <MessagesChat chat={currentChat}/>
            <InputChat
                setChatId={setChatId}
                userId={userId}
                chatId={chatId}
                connection={connection}
            />
        </div>
    )
}

export default Chat