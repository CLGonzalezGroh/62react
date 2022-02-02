import { useState } from "react"
import useLocalStorage from "./useLocalStorage"

const KEY = "ToDos_V1"

const useToDo = () => {
  const {
    storageValue: toDos,
    saveValue: saveToDos,
    loading,
    error,
    synchronize: synchronizeToDo,
  } = useLocalStorage(KEY, [])

  const [searchValue, setSearchValue] = useState("")
  const [showToDoModal, setShowToDoModal] = useState(false)

  const completedToDos = toDos.filter((toDo) => toDo.completed).length
  const totalToDos = toDos.length

  let filteredToDos = []

  if (!searchValue.length >= 1) {
    filteredToDos = toDos
  } else {
    filteredToDos = toDos.filter((toDo) =>
      toDo.text.toLocaleLowerCase().includes(searchValue.toLowerCase())
    )
  }

  const addToDo = (text) => {
    const newToDos = [...toDos]
    newToDos.push({ text: text, completed: false })
    saveToDos(newToDos)
  }
  const toggleToDo = (text) => {
    const toDoIndex = toDos.findIndex((todo) => todo.text === text)
    const newToDos = [...toDos]
    newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed
    saveToDos(newToDos)
  }
  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((todo) => todo.text === text)
    const newToDos = [...toDos]
    newToDos.splice(toDoIndex, 1)
    saveToDos(newToDos)
  }

  return {
    loading,
    error,
    synchronizeToDo,
    filteredToDos,
    searchValue,
    setSearchValue,
    addToDo,
    toggleToDo,
    deleteToDo,
    completedToDos,
    totalToDos,
    showToDoModal,
    setShowToDoModal,
  }
}

export { useToDo }
