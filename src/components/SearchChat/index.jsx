import React, { useEffect, useState } from 'react'
import { requests } from '../../api/requests'

const SearchChat = ({setUserId,setLogin ,connection,setChatId, contacts}) => {
    const [searchValue, setSearchValue] = useState("")
    const [foundUsers, setFoundUsers] = useState([])


    useEffect(() => {
        requests.getUserSearch(searchValue).then(res => setFoundUsers(res.data))
    }, [searchValue])

    const createChatHandler = async (userLogin,userId) => {


                setSearchValue("")
                setFoundUsers(null)
                setLogin(userLogin)

                const contact = contacts.find(c => c.user.id === userId) 
                if(contact){
                    setChatId(contact.chatId)
                }else{
                    setChatId(null)
                }

                setUserId(userId)
                await connection.invoke("GetContactsAsync")
        
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
                <div className="contacts hide-scrollbar">
                {
                    foundUsers.map(u => (
                        <div
                            key={u.id}
                            className="userChat flex items-center gap-2 w-full h-20"
                            onClick={() => createChatHandler(u.login,u.id)}
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