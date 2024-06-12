import React from 'react';

const NavbarChat = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Anbunet</span>
            <div className='user'>
                <img src="https://avatars.githubusercontent.com/u/75365404?v=4" alt="" />
                <span>Beks</span>
                <button>logout</button>
            </div>
        </div>
    );
};

export default NavbarChat;