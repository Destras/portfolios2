import React from "react";
import "../styles/Modal.scss";
import { XCircle } from "react-feather";

interface IModal {
  isOpen?: boolean;
  toggleModal?: () => void;
  children?: JSX.Element;
}

const Modal = ({ isOpen, toggleModal, children }: IModal) => {
  const handleClick = (e: any) =>
    (e.target.id = "modalRelative" && toggleModal());

  return (
    isOpen && (
      <div className="modal_container">
        <div onClick={handleClick} id="modalRelative" className="modal_relative">
          <div id="modal" className="modal_body">
            <div className="modal_close">
              <XCircle id='modalCloseButton' onClick={toggleModal} />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
