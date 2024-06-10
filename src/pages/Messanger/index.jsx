import React from 'react';
import SidebarChat from '../../components/SidebarChat';
import Chat from '../../components/Chat';

const Messanger = () => {
    return (
        <div className='home'>
            <div className="container">
                <SidebarChat/>
                <Chat/>

            </div>
        </div>
    );
};

export default Messanger;