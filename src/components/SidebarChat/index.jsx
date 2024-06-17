import React from 'react';
import NavbarChat from '../NavbarChat';
import SearchChat from '../SearchChat';
import Chats from '../Chats';

const SidebarChat = ({ setUserId,setLogin, contacts, setContacts,connection ,setChatId}) => {
    return (
        <div className='sidebar'>
            <NavbarChat />
            <SearchChat contacts={contacts}setUserId={setUserId}setChatId={setChatId}setLogin={setLogin} setContacts={setContacts} connection={connection}/>
            <Chats setChatId={setChatId} setLogin={setLogin} contacts={contacts} connection={connection} />
        </div>
    );
};

export default SidebarChat;
