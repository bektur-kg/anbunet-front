import React from 'react';
import { FaFileCirclePlus } from "react-icons/fa6";

const InputChat = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Type something' />
            <div className="send">
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                  <FaFileCirclePlus className='cursor-pointer'/>
                </label>
                <button>send</button>
            </div>
        </div>
    );
};

export default InputChat;