import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { requests } from "../../api/requests.js";
import "./FollowersNumber.css";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { redirect } from "react-router";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function FollowersNumber({ userId }) {
  const cId = useParams();
  console.log(cId.id);
  const navigate = useNavigate();
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [mapper, setMapper] = useState([]);
  const [followingsNum, setFollowingsNum] = useState();
  const [followersNum, setFollowersNum] = useState();

  const [numberOf, setNumberOf] = useState();
  const [labelOf, setLabelOf] = useState("");
  const [userName, setUserName] = useState("");

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
  }, [userId]);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const url =
    "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png";
  const outputFollowings = () => {
    return (
      <>
        {mapper.map((i) => (
          <div
            key={i.login}
            className="mx-auto py-2 px-3 rounded bg-white/65 flex flex-row items-center"
          >
            {i.login && (
              <>
                <ProfilePicture
                  url={i.profilePicture ? i.profilePicture : url}
                />
                <span
                  onClick={() => {
                    navigate(`/profile/${i.id}`);
                    setIsOpen(false);
                  }}
                  className="text-black-800 font-bold text-xl hover:text-blue-800 hover:underline text-center ml-5"
                >
                  {i.login}
                </span>
              </>
            )}
          </div>
        ))}
      </>
    );
  };

  function openModal1() {
    setNumberOf(followers.length);
    setMapper(followers);
    setLabelOf(`Followers of ${userName}:`);
    setIsOpen(true);
  }

  function openModal2() {
    setNumberOf(followings.length);
    setMapper(followings);
    setLabelOf(`${userName} is following:`);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  console.log(followings);
  return (
    <>
      <div className={"flex items-center gap-1 cursor-pointer"}>
        <span className={"font-bold text-emerald-500"} onClick={openModal1}>
          {followersNum}
        </span>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          contentClassName="custom-modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{labelOf}</h2>
          <div>{numberOf}</div>
          <div>{outputFollowings()}</div>
        </Modal>
        <span onClick={openModal1}>followers</span>
      </div>
      <div className={"flex items-center gap-1 cursor-pointer"}>
        <span className={"font-bold text-emerald-500"} onClick={openModal2}>
          {followingsNum}
        </span>
        <span onClick={openModal2}>followers</span>
      </div>
    </>
  );
}

export default FollowersNumber;
