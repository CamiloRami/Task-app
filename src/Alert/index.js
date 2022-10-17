import React from "react";
import './Alert.css'

function Alert({ message, setAlert, type }) {
  const onClose = () => {
    setAlert(null)
  }
  return (
    <div className="Alert">
      <div className={`Alert-content ${type.toLowerCase()}`}>
        <p className="Alert-type">{type}</p>
        <p className="Alert-message">{message}</p>
        <span className="Alert-close" onClick={onClose} type='button'>
          &#10006;
        </span>
      </div>
    </div>
  )
} 

export { Alert }