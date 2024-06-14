import React from 'react';
import NavbarChat from '../NavbarChat';
import SearchChat from '../SearchChat';
import Chats from '../Chats';

const SidebarChat = ({ contacts, setContacts,connection }) => {
    return (
        <div className='sidebar'>
            <NavbarChat />
            <SearchChat setContacts={setContacts} connection={connection}/>
            <Chats contacts={contacts} connection={connection} />
        </div>
    );
};

export default SidebarChat;
