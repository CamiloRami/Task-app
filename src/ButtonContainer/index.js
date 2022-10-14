import React from 'react'
import './ButtonContainer.css'

function ButtonContainer({ children }) {
  return (
    <div className="ButtonContainer">
      { children }
    </div>
  )
}

export { ButtonContainer }