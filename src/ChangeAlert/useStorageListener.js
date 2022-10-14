import React from 'react'

function useStorageListener( sincronize, logout, isLogged ) { 
  const [show, toggleShow] = React.useState(false)
  React.useEffect(() => {
    if (isLogged) {
      toggleShow(true)
    }
  }, [isLogged])
  const sincUp = () => {
    sincronize()
    toggleShow()
  }

  const logOut = () => {
    logout()
    toggleShow()
  }
  

  return {
    show,
    toggleShow,
    sincUp,
    logOut,
  }
}

export { useStorageListener }