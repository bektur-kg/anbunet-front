import React from 'react';
import {formatDateWithTime} from '../../helpers'

const MessageChat = ({ user, createdDate, text }) => {

    return (
        <div className='message'>
            <div className="messageInfo">
                <img
                    src={user.profilePicture ? user.profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                    alt="profile picutre"
                />
                <span>{formatDateWithTime(createdDate)}</span>
            </div>
            <div className="messageContent">
                <p>{text}</p>
            </div>
        </div>

    );
};

export default MessageChat;