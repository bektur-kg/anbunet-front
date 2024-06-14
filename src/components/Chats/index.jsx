import React from 'react';
import { Loader } from '../../components';

const Chats = ({ contacts, connection }) => {

    // доделать
    const getChat = async (chatId) => {
        console.log(chatId);
        await connection.invoke("GetChat", chatId)
    }
    // доделать
    if (!contacts) return <Loader />
    return (
        <div className='chats'>
            {contacts.map(c => (
                <div
                    className="userChat"
                    key={c.id}
                    onClick={() => getChat(c.chatId)}
                >
                    <img
                        src={c.user.profilePicture || "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                        alt="" />
                    <div className="userChatInfo">
                        <span>{c.user.login}</span>
                        <p>{c.lastMessage}</p>
                        <p>{c.lastMessageDate}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;
