import React, { useEffect, useState } from 'react';
import { requests } from '../../api/requests'
import { Loader } from '../index'


const NavbarChat = () => {

    const [foundUser, setFoundUser] = useState()

    useEffect(() => {
        requests.getCurrentUserProfile().then(res => setFoundUser(res.data))
    }, [])

    if (!foundUser) return <Loader />
    return (
        <div className='navbar'>
            <div className='user'>

                <img
                    src={foundUser.profilePicture ? foundUser.profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                    alt="" />
                <span>{foundUser.login}</span>
            </div>
        </div>
    );
};

export default NavbarChat;