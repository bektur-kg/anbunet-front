import React, {useState, useEffect, useMemo} from "react";
import {requests} from "../../api/requests.js";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture.jsx";
import {useNavigate} from "react-router";
import {useParams} from "react-router";

function FollowersNumber({userId}) {
    const cId = useParams();
  
    const myId = localStorage.getItem("id");
    const navigate = useNavigate();
    const [followings, setFollowings] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [myFollowings, setMyFollowings] = useState([]);
    const [mapper, setMapper] = useState([]);
    const [followingsNum, setFollowingsNum] = useState();
    const [followersNum, setFollowersNum] = useState();
    const [numberOf, setNumberOf] = useState();
    const [labelOf, setLabelOf] = useState("");
    const [userName, setUserName] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [followCounter, setFollowCounter] = useState(0);
    const [test, setTest] = useState(false);
  
    useEffect(() => {
        requests.getUserFollowings(userId).then((res) => {
            setFollowings(res.data);
            setFollowingsNum(res.data.length);
        });

        requests.getUserFollowers(userId).then((res) => {
            setFollowers(res.data);
            setFollowersNum(res.data.length);
        });

        requests.getUserProfile(userId).then((res) => {
            setUserName(res.data.login);
        });

        requests.getUserFollowings(myId).then((res) => {
            const res2 = res.data.map((item) => item.id);
            setMyFollowings(res2);
        });
    }, [userId, myFollowings]);
  
    const url = "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png";
  
    const outputFollowings = useMemo(() => (
        <>
            {mapper.map((i) => (
                <div
                    key={i.login}
                    className="mx-auto py-2 px-3 rounded bg-white/65 flex flex-row items-center justify-between"
                >
                    {i.login && (
                        <>
                            <span className="rounded bg-white/65 flex flex-row items-center">
                                <ProfilePicture
                                    url={i.profilePicture ? i.profilePicture : url}
                                />
                                <span className="text-black-800 font-bold text-xl hover:text-blue-800 hover:cursor-pointer text-center ml-5">
                                    <span
                                        onClick={() => {
                                            navigate(`/profile/${i.id}`);
                                            setShowModal(false);
                                        }}
                                    >
                                        {i.login}
                                    </span>
                                </span>
                                <span className="text-blue-800 p-2 text-base ml-2 flex">
                                    {myFollowings.includes(i.id) ? (
                                        <span
                                            onClick={() => {
                                                unFollowUser(i.id);
                                            }}
                                            className="text-blue-300 text-base"
                                        >
                                            subscribed
                                        </span>
                                    ) : (
                                        <span
                                            onClick={() => {
                                                followUser(i.id);
                                                setTest;
                                            }}
                                            className="bg-blue-400 text-white-800 rounded p-1"
                                        >
                                            subscribe
                                        </span>
                                    )}
                                </span>
                            </span>
                        </>
                    )}
                </div>
            ))}
        </>
    ), [followCounter, followers, myFollowings, followings, showModal]);
  
    function openModal1() {
        setNumberOf(followers.length);
        setMapper(followers);
        setLabelOf(`Followers of ${userName}:`);
        setShowModal(true);
    }
  
    function followUser(id) {
        requests.followUser(id);
        setFollowCounter(followCounter + 1);
    }
  
    function unFollowUser(id) {
        requests.unfollowUser(id);
        setFollowCounter(followCounter + 1);
    }
  
    function openModal2() {
        setNumberOf(followings.length);
        setMapper(followings);
        setLabelOf(`${userName} is following:`);
        setShowModal(true);
    }
  
    return (
        <>
            <div className="flex pl-1 items-center gap-1 cursor-pointer">
                <span className="font-bold text-emerald-500" onClick={openModal1}>
                    {followersNum}
                </span>
                <span onClick={openModal1}>followers</span>
            </div>
            <div className="flex pl-1 items-center gap-1 cursor-pointer">
                <span className="font-bold text-emerald-500" onClick={openModal2}>
                    {followingsNum}
                </span>
                <span onClick={openModal2}>followings</span>
            </div>
            {showModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">{labelOf}</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        {outputFollowings}
                                    </div>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    );
}

export default FollowersNumber;
