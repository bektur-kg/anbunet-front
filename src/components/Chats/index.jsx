import React from 'react';
import { Loader } from '../../components';

const Chats = ({ chats }) => {

    if (!chats) return <Loader />
    return (
        <div className='chats'>
            {chats.map(c => (
                <div className="userChat" key={c.id}>
                    <img 
                        src={c.user.profilePicture || "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                        alt="" />
                    <div className="userChatInfo">
                        <span>{c.user.login}</span>
                        <p>{c.messages[c.messages.length - 1]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;
