import React from 'react';
import { Loader } from '../../components';
import {formatDateWithTime} from '../../helpers'


const Chats = ({ contacts, connection ,setLogin,setChatId}) => {


    const getChat = async (chatId,login) => {
        setChatId(chatId)
        setLogin(login)
        await connection.invoke("GetChatsGroup", chatId)
    }
    if (!contacts) return <Loader />
    return (
        <div className='chats hide-scrollbar'>
            {contacts.map(c => (
                <div
                    className="userChat"
                    key={c.id}
                    onClick={() => getChat(c.chatId,c.user.login)}
                >
                    <img
                        src={c.user.profilePicture || "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                        alt="" />
                    <div className="userChatInfo">
                        <span>{c.user.login}</span>
                        <p>{c.lastMessage}</p>
                        <p>{formatDateWithTime(c.lastMessageDate)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;
