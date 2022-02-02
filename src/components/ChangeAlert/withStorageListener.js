import { useState, useEffect } from "react"

const KEY = "ToDos_V1"

const withStorageListener = (WrapperComponent) => {
  return function ComponentWithStorageListener({ synchronizeToDo }) {
    const [storageChange, setStorageChange] = useState(false)

    const onChange = (change) => {
      if (change.key === KEY) {
        console.log("Hubo cambios")
        setStorageChange(true)
      }
    }
    useEffect(() => {
      window.addEventListener("storage", onChange)
    }, [])

    const toggleShow = () => {
      setStorageChange(false)
      synchronizeToDo()
    }

    return <WrapperComponent show={storageChange} toggleShow={toggleShow} />
  }
}

export default withStorageListener
