import React from 'react'
import './HeaderButton.css'

function HeaderButton({ children, setOpenModal, openModal, setModalContent }) {
  const onClickButton = () => {
    setOpenModal(!openModal)
    setModalContent(children)
  }

  return (
    <button className="HeaderButton" onClick={onClickButton}>
      {children}
    </button>
  )
}

export { HeaderButton }