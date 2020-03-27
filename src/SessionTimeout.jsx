import React, { useContext, useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import { AppStateContext } from "./contexts/AppStateContext";
import SessionTimeoutDialog from "./SessionTimeoutDialog";

let countdownInterval;
let timeout;

export default function SessionTimeout() {
  const { isAuthenticated, handleLogoutUser } = useContext(
    AppStateContext
  );
  const [timeoutModalOpen, setTimeoutModalOpen] = useState(false);
  const [timeoutCountdown, setTimeoutCountdown] = useState(0);
  const idleTimer = useRef(null);

  const clearSessionTimeout = () => {
    clearTimeout(timeout);
  };

  const clearSessionInterval = () => {
    clearInterval(countdownInterval);
  };

  const handleLogout = (isTimedOut = false) => {
    setTimeoutModalOpen(false);
    clearSessionInterval();
    clearSessionTimeout();
    handleLogoutUser(isTimedOut);
  };

  const handleContinue = () => {
    setTimeoutModalOpen(false);
    clearSessionInterval();
    clearSessionTimeout();
  };

  const onActive = () => {
    if (!timeoutModalOpen) {
      clearSessionInterval();
      clearSessionTimeout();
    }
  };

  const onIdle = () => {
    const delay = 1000 * 5 * 1;
    if (isAuthenticated && !timeoutModalOpen) {
      timeout = setTimeout(() => {
        let countDown = 10;
        setTimeoutModalOpen(true);
        setTimeoutCountdown(countDown);
        countdownInterval = setInterval(() => {
          if (countDown > 0) {
            setTimeoutCountdown(--countDown);
          } else {
            handleLogout(true);
          }
        }, 1000);
      }, delay);
    }
  };

  return (
    <>
      <IdleTimer
        ref={idleTimer}
        onActive={onActive}
        onIdle={onIdle}
        debounce={250}
        timeout={5000}
      />
      <SessionTimeoutDialog
        countdown={timeoutCountdown}
        onContinue={handleContinue}
        onLogout={() => handleLogout(false)}
        open={timeoutModalOpen}
      />
    </>
  );
}
