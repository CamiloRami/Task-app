import React from "react";
import { whitStorageListener } from "./whitStorageListener";
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow, sincronize }) {
  if (show) {
    return (
      <div className="ChangeAletrt-bg">
        <div className="ChangeAletrt-container">
          <p>Memory changes have been observed and the tabs are out of sync.</p>
          <p>Do you want the tabs to be synced?</p>
          <button
            className="ChangeAletrt-container__button"
            onClick={ () => toggleShow(false) }
          >
            Sync up
          </button>
        </div> 
      </div>
    )
  } else {
    return null
  }
}

const ChangeAlertWhitStorageListener = whitStorageListener(ChangeAlert)

export { ChangeAlertWhitStorageListener }