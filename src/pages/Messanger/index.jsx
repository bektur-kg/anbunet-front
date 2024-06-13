import React, { useState, useEffect } from 'react';
import SidebarChat from '../../components/SidebarChat';
import Chat from '../../components/Chat';
import { requests } from '../../api/requests';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

const Messanger = () => {
    const [connection, setConnection] = useState(null)
    const [chats, setChats] = useState(null)

    const joinChat = async () => {
        const currentUserId = localStorage.getItem('id');
        var connection = new HubConnectionBuilder()
            .withUrl("https://localhost:7199/chat")
            .withAutomaticReconnect()
            .build();

        connection.on("SendMessageUser", (userName, message) => {
            console.log(userName);
            console.log(message);
        })

        connection.on("GetChats", (chats) => {
            setChats(chats)
        })

        try {
            await connection.start();
            await connection.invoke("JoinChat", currentUserId);

            setConnection(connection)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        joinChat();
    }, []);

    return (
        <div className='home w-full h-screen flex justify-center items-center bg-purple-bg'>
            <div className="container">
                <SidebarChat chats={chats} setChats={setChats} connection={connection} />
                <Chat />
            </div>
        </div>
    );
};

export default Messanger;


