import { useState } from "react";

export enum statusState {
  WAITING = "WAITING",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  REJECTED = "REJECTED",
}

const useStatus = (initialState: statusState = statusState.WAITING) => {
  const [status, setStatus] = useState<statusState>(initialState);

  const setWaiting = () => setStatus(statusState.WAITING);
  const setLoading = () => setStatus(statusState.LOADING);
  const setSuccess = () => setStatus(statusState.SUCCESS);
  const setRejected = () => setStatus(statusState.REJECTED);

  return {
    status,
    setStatus,
    setWaiting,
    setLoading,
    setSuccess,
    setRejected,
  };
};

export default useStatus;
