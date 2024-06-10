import React from 'react';
import NavbarChat from '../NavbarChat';
import SearchChat from '../SearchChat';
import Chats from '../Chats';

const SidebarChat = () => {
    return (
        <div className='sidebar'>
            <NavbarChat/>
            <SearchChat/>
            <Chats/>
        </div>
    );
};

export default SidebarChat;