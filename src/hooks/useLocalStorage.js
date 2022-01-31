import { useState, useEffect } from "react"

const useLocalStorage = (key, initialValue) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(true)

  const [storageValue, setStorageValue] = useState(initialValue)

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = JSON.parse(localStorage.getItem(key))
        if (localStorageItem) {
          setStorageValue(localStorageItem)
        }
        setLoading(false)
      }, 1000)
    } catch (error) {
      setError(error.message)
    }
  }, [key])

  const saveValue = (newValue) => {
    setStorageValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return { storageValue, saveValue, loading, error }
}

export default useLocalStorage
