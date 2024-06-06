import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { requests } from "../../api/requests.js";
import "./FollowersNumber.css"

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
  const [followings, setFollowings] = useState();
  const [followers, setFollowers] = useState();
  const [followingsNum, setFollowingsNum] = useState();
  const [followersNum, setFollowersNum] = useState();

  const [numberOf, setNumberOf] = useState();
  const [labelOf, setLabelOf] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    requests
      .getUserFollowings(userId)
      .then((res) => {setFollowings(res.data);
        setFollowingsNum(res.data.length)
      });
      
    requests
      .getUserFollowers(userId)
      .then((res) => {setFollowers(res.data);
        setFollowersNum(res.data.length)

      });

      requests
      .getUserProfile(userId)
      .then((res) => {setUserName(res.data.login);

      });
      
  

  }, []);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function openModal1() {
    setNumberOf(followers.length);
    setLabelOf(`Followers of ${userName}:`)
    setIsOpen(true); 
  }

  function openModal2() {
    setNumberOf(followings.length);
    setLabelOf(`${userName} is following:`)
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
          
        </Modal>
        <span onClick={openModal1}>followers</span>
      </div>
      <div className={"flex items-center gap-1 cursor-pointer"}>
        <span className={"font-bold text-emerald-500"} onClick={openModal2}>
          {followingsNum}
        </span>
        <span onClick={openModal2} >followers</span>
      </div>
    </>
  );
}

export default FollowersNumber;
