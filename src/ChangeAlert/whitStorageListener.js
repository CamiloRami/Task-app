import React from 'react'

function whitStorageListener(WrappedComponent) {
  return function WrappedComponentWhitStorageListener(props) {  
    const [storageChange, setStorageChange] = React.useState(false)

    // window.addEventListener('storage', (ev) => {
    //   if (ev.key === 'TODOS_V1') {
    //     console.log('Hubo cambios en TODOS_V1')
    //     // console.log(ev)
    //     setStorageChange(true)
    //   }
    // })
    
    React.useEffect(() => {
      const onChange = (change) => {
        if (change.key === "TODOS_V1") {
          console.log("Hubo cambios en TODOS_V1");
          setStorageChange(true);
        }
      };

      window.addEventListener("storage", onChange);

      return () => {
        window.removeEventListener("storage", onChange);
      };
    }, []);

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