import React, { useState, useEffect } from 'react';
import SidebarChat from '../../components/SidebarChat';
import Chat from '../../components/Chat';
import { requests } from '../../api/requests';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

const Messanger = () => {
    const [connection, setConnection] = useState(null)
    const [contacts, setContacts] = useState(null)
    const [chats, setChats] = useState(null)
    const [chatId, setChatId] = useState(null)
    const [login,setLogin] = useState(null)
    const [userId,setUserId] = useState(null)

    const joinChat = async () => {
        const token = localStorage.getItem('token');
        var connection = new HubConnectionBuilder()
            .withUrl("https://localhost:7199/chat",{ accessTokenFactory: () => token })
            .withAutomaticReconnect()
            .build();

        connection.on("Contacts", (contacts) => {
            
            setContacts(contacts)
        })

        connection.on("Chats", (chats) => {
            setChats(chats)
        })

        connection.on("Update", async() => {
            await connection.invoke("GetChats")
            await connection.invoke("GetContactsAsync")
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
            <div className="chat-container">
                <SidebarChat
                 setUserId={setUserId}
                 setChatId={setChatId}
                 setLogin={setLogin}
                 contacts={contacts} 
                 setContacts={setContacts}
                 connection={connection} 
                   />
                <Chat 
                 setChatId={setChatId}
                 userId={userId}
                 chats={chats}
                 chatId = {chatId}
                 connection={connection}
                 login={login}/>
            </div>
        </div>
    );
};

export default Messanger;


