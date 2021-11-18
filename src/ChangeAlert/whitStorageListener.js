import React from 'react'

function whitStorageListener(WrappedComponent) {
  return function WrappedComponentWhitStorageListener(props) {  
    const [storageChange, setStorageChange] = React.useState(false)

    window.addEventListener('storage', (ev) => {
      if (ev.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODOS_V1')
        // console.log(ev)
        setStorageChange(true)
      }
    })

    const toggleShow = () => {
      props.sincronize()
      setStorageChange(false)
    }

    return (
      <WrappedComponent 
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}

export { whitStorageListener }