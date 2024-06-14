import React, { useState, useEffect } from 'react';
import SidebarChat from '../../components/SidebarChat';
import Chat from '../../components/Chat';
import { requests } from '../../api/requests';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

const Messanger = () => {
    const [connection, setConnection] = useState(null)
    const [contacts, setContacts] = useState(null)
    const [chat, setChat] = useState(null)


    const joinChat = async () => {
        const token = localStorage.getItem('token');
        var connection = new HubConnectionBuilder()
            .withUrl("https://localhost:7199/chat",{ accessTokenFactory: () => token })
            .withAutomaticReconnect()
            .build();


        connection.on("SendMessageUser", (userName, message) => {
            console.log(userName);
            console.log(message);
        })

        connection.on("Contacts", (contacts) => {
            setContacts(contacts)
        })

        connection.on("Chat", (chat) => {
            console.log(chat);
            setChat(chat)
        })

        try {
            await connection.start();
            await connection.invoke("JoinChat");

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
                <SidebarChat contacts={contacts} setContacts={setContacts} connection={connection} />
                <Chat chat={chat} connection={connection}/>
            </div>
        </div>
    );
};

export default Messanger;


