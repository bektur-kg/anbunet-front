import React, { useEffect, useState } from 'react'
import { requests } from '../../api/requests'

const SearchChat = () => {
    const [searchValue, setSearchValue] = useState("")
    const [foundUsers, setFoundUsers] = useState([])


    useEffect(() => {
        requests.getUserSearch(searchValue).then(res => setFoundUsers(res.data))
    }, [searchValue])

    const createChatHandler = (userId) => {
        requests.createChat(userId)
        setSearchValue("")
        setFoundUsers(null)
    }

    return (
        <div className='search'>
            <div className='searchForm'>
                <input
                    type="text"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    placeholder='Find a user'
                />
            </div>
            {
                searchValue &&
                <div className=" flex flex-col">
                {
                    foundUsers.map(u => (
                        <div clas
                            key={u.id}
                            className="userChat flex items-center gap-2 w-full"
                            onClick={() => createChatHandler(u.id)}
                        >
                            <img
                                src={u.profilePicture ? u.profilePicture : "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"}
                                alt="profileImage"
                            />
                            <div className="userChatInfo">
                                <span>{u.login}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            }

        </div>
    );
};

export default SearchChat;