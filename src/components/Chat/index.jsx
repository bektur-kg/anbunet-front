import React from 'react';
import { RiUserAddLine } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import MessagesChat from '../MessagesChat';
import InputChat from '../InputChat';



const Chat = () => {

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Erzhan</span>
                <div className="chatIcons">
                     <RiUserAddLine className=' cursor-pointer'/>
                     <FaCamera className=' cursor-pointer'/>
                     <SlOptions className=' cursor-pointer'/>
                </div>  
            </div>
             <MessagesChat/>
             <InputChat/>
        </div>
    );
};

export default Chat;