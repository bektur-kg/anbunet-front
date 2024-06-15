import React from 'react';
import NavbarChat from '../NavbarChat';
import SearchChat from '../SearchChat';
import Chats from '../Chats';

const SidebarChat = ({ setLogin, contacts, setContacts,connection ,setChatId}) => {
    return (
        <div className='sidebar'>
            <NavbarChat />
            <SearchChat setLogin={setLogin} setContacts={setContacts} connection={connection}/>
            <Chats setChatId={setChatId} setLogin={setLogin} contacts={contacts} connection={connection} />
        </div>
    );
};

export default SidebarChat;
