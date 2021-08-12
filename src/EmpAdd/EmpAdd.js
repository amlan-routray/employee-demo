import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../Modal";

export default function EmpAdd(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    props.addEmployee({
      id: new Date().getTime(),
      name: nameRef.current.value,
      email: emailRef.current.value,
      username: usernameRef.current.value,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    history.replace("/emplist");
  };

  return (
    <div className="docker">
      <form style={{ margin: "30px 0px 0px 550px" }} onSubmit={submitHandler}>
        <p>Add Details</p>
        <input
          type="text"
          ref={nameRef}
          placeholder="Enter your name"
          required
        />
        <br/>
        <input
          type="email"
          ref={emailRef}
          placeholder="Enter your email"
          required
        />
        <br/>
        <input
          type="text"
          ref={usernameRef}
          placeholder="Enter your username"
          required
        />
        <br/>
        <input type="submit" value="Add Employee" />
      </form>
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
}
