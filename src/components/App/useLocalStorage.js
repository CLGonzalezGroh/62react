import { useEffect, useReducer } from "react"

const useLocalStorage = (key, initialValue) => {
  const initialState = {
    loading: true,
    error: false,
    synchronizedItem: true,
    storageValue: initialValue,
  }

  const actionTypes = {
    error: "ERROR",
    success: "SUCCESS",
    save: "SAVE",
    synchronize: "SYNCHRONIZE",
  }
  const reducerObject = (state, payload) => ({
    [actionTypes.error]: { ...state, error: true },
    [actionTypes.success]: {
      ...state,
      error: false,
      loading: false,
      storageValue: payload,
      synchronizedItem: true,
    },
    [actionTypes.save]: { ...state, storageValue: payload },
    [actionTypes.synchronize]: {
      ...state,
      synchronizedItem: false,
      loading: true,
    },
  })
  const reducer = (state, action) =>
    reducerObject(state, action.payload)[action.type] || state

  const [state, dispatch] = useReducer(reducer, initialState)
  const { loading, error, synchronizedItem, storageValue } = state

  // ACTION CREATORS
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error.message })
  const onSuccess = (parsedItem) =>
    dispatch({ type: actionTypes.success, payload: parsedItem })
  const onSave = (newValue) =>
    dispatch({ type: actionTypes.save, payload: newValue })
  const onSynchronize = () => dispatch({ type: actionTypes.synchronize })

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(key)
        let parsedItem
        if (!localStorageItem) {
          localStorage.setItem(key, initialValue)
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        onSuccess(parsedItem)
      } catch (error) {
        onError(error)
      }
    }, 1000)
  }, [synchronizedItem])

  const saveValue = (newValue) => {
    onSave(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  const synchronize = onSynchronize

  return { storageValue, saveValue, loading, error, synchronize }
}

export default useLocalStorage
