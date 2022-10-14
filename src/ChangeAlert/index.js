import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({ sincronize, logout, isLogged }) {
  const { show, logOut, sincUp } = useStorageListener(sincronize, logout, isLogged)

  if (show) {
    return (
      <div className="ChangeAletrt-bg">
        <div className="ChangeAletrt-container">
          <p>You have successfully logged in</p>
          <p>Do you want to synchronize your tasks or stay without logging in?</p>
          <button
            className="ChangeAletrt-container__button"
            onClick={sincUp}
          >
            Sync up
          </button>
          <button
            className="ChangeAletrt-container__button"
            onClick={logOut}
          >
            Logout
          </button>
        </div> 
      </div>
    )
  } else {
    return null
  }
}

export { ChangeAlert }