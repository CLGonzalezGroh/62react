import { useState, useEffect } from "react"

const useLocalStorage = (key, initialValue) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [synchronizedItem, SetSynchronizedItem] = useState(true)

  const [storageValue, setStorageValue] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = JSON.parse(localStorage.getItem(key))
        if (localStorageItem) {
          setStorageValue(localStorageItem)
        }
        setLoading(false)
        SetSynchronizedItem(true)
      } catch (error) {
        setError(error.message)
      }
    }, 1000)
  }, [synchronizedItem])

  const saveValue = (newValue) => {
    setStorageValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  const synchronize = () => {
    setLoading(true)
    SetSynchronizedItem(false)
  }

  return { storageValue, saveValue, loading, error, synchronize }
}

export default useLocalStorage
