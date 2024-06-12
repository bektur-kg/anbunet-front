import React, { useState, useEffect } from 'react';
import SidebarChat from '../../components/SidebarChat';
import Chat from '../../components/Chat';
import { requests } from '../../api/requests';

const Messanger = () => {
    const [chats, setChats] = useState(null)

    useEffect(() => {
        requests.getChats()
        .then(res => setChats(res.data))
    }, [])

    return (
        <div className='home w-full h-screen flex justify-center items-center bg-purple-bg'>
            <div className="container">
                <SidebarChat chats={chats} />
                <Chat />
            </div>
        </div>
    );
};

export default Messanger;


