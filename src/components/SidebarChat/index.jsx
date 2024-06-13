import React from 'react';
import NavbarChat from '../NavbarChat';
import SearchChat from '../SearchChat';
import Chats from '../Chats';

const SidebarChat = ({ chats, setChats,connection }) => {
    return (
        <div className='sidebar'>
            <NavbarChat />
            <SearchChat setChats={setChats} connection={connection}/>
            <Chats chats={chats} />
        </div>
    );
};

export default SidebarChat;
