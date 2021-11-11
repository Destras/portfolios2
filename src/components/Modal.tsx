import React from "react";
import "../styles/Modal.scss";
import { XCircle } from "react-feather";

const clickedOutsideOfModal = (e: any, fatherClassName: string): boolean => {
  return e.target.className === fatherClassName;
};

interface IModal {
  isOpen?: boolean;
  toggleModal?: () => void;
  children?: JSX.Element;
}

const Modal = ({ isOpen, toggleModal, children }: IModal) => {
  const handleClick = (e: any) =>
    clickedOutsideOfModal(e, "modal_relative") && toggleModal();

  return (
    isOpen && (
      <div onClick={handleClick} className="modal_container">
        <div className="modal_relative">
          <div className="modal_body">
            <div className="modal_close">
              <XCircle onClick={toggleModal} />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
