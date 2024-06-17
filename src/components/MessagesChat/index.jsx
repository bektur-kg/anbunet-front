import React from 'react';
import MessageChat from '../MessageChat';

const MessagesChat = ({ chat }) => {

    if (!chat?.messages) return (
        <div className='messages flex justify-center items-center'>
            <span className="text-xl font-medium text-gray-400">Начните чат</span>
        </div>
    );

    console.log(chat);

    return (
        <div className='messages hide-scrollbar'>
            {
                chat.messages.map(m => (
                    <MessageChat 
                        createdDate={m.dateTime}
                        text={m.text}
                        user={m.user}
                    />
                ))
            }
        </div>
    );
};

export default MessagesChat;
