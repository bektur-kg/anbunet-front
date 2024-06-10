import React from 'react';

const SearchChat = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type="text" placeholder='Find a user'/>
            </div>
            <div className="userChat">
                <img src="https://avatars.githubusercontent.com/u/75365404?v=4https://avatars.githubusercontent.com/u/75365404?v=4" alt="" />
                <div className="userChatInfo">
                    <span>Beks</span>
                </div>
            </div>

        </div>
    );
};

export default SearchChat;