import React from "react";
import "../styles/Toast.scss";
import { statusState } from "../customHooks/useStatus";
import { Check, X } from "react-feather";

interface IToast {
  status: statusState;
}
const getIconFromStatus = (status: statusState) => {
  switch (status) {
    case statusState.LOADING:
      return <div className="toast_loadingSpinner toast_img" />;

    case statusState.SUCCESS:
      return <Check className="toast_img toast_success" />;

    case statusState.REJECTED:
      return <X className="toast_img toast_error" />;

    default:
      null;
  }
};

const getMessageFromStatus = (status: statusState) => {
  switch (status) {
    case statusState.LOADING:
      return <p>Sending email</p>;

    case statusState.SUCCESS:
      return <span>Email sent successfully!</span>;

    case statusState.REJECTED:
      return <span>Error</span>;

    default:
      null;
  }
};

const Toast = ({ status }: IToast) => {
  if (status === statusState.WAITING) return null;

  return (
    <div className="toast">
      {getIconFromStatus(status)}
      {getMessageFromStatus(status)}
    </div>
  );
};

export default Toast;
