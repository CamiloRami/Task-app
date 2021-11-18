import React from "react";
import { whitStorageListener } from "./whitStorageListener";

function ChangeAlert({ show, toggleShow, sincronize }) {
  if (show) {
    return (
      <div>
        <p>Se han observando cambios en la memoria</p>
        <button
          onClick={ () => toggleShow(false) }
        >
          Reload tasks
        </button>
      </div>
    )
  } else {
    return null
  }
}

const ChangeAlertWhitStorageListener = whitStorageListener(ChangeAlert)

export { ChangeAlertWhitStorageListener }