import React from 'react';
import NavbarChat from '../NavbarChat';
import SearchChat from '../SearchChat';
import Chats from '../Chats';

const SidebarChat = ({ chats }) => {
    return (
        <div className='sidebar'>
            <NavbarChat />
            <SearchChat />
            <Chats chats={chats} />
        </div>
    );
};

export default SidebarChat;
