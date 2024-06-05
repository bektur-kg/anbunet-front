import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { requests } from "../../api/requests.js";

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
  const [baraba, setBaraba] = useState();

  useEffect(() => {
    requests
      .getUserFollowings(userId)
      .then((res) => setFollowings(res.data.length));
    requests
      .getUserFollowers(userId)
      .then((res) => setFollowers(res.data.length));
  }, []);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function openModal1() {
    setBaraba(followers);
    setIsOpen(true); 
  }

  function openModal2() {
    setBaraba(followings);
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
          {followers}
        </span>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>{baraba}</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        <span>followers</span>
      </div>
      <div className={"flex items-center gap-1 cursor-pointer"}>
        <span className={"font-bold text-emerald-500"} onClick={openModal2}>
          {followings}
        </span>
        <span>followings</span>
      </div>
    </>
  );
}

export default FollowersNumber;
