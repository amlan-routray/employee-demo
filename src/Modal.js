import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="dialog">
        <h2>New Employee</h2>
        <p>New Employee has been added successfully</p>
        <button onClick={props.closeModal}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
