import { useState } from "react"
import ToDoCounter from "../ToDoCounter"
import ToDoSearch from "../ToDoSearch"
import ToDoList from "../ToDoList"
import ToDoItem from "../ToDoItem"
import CreateToDoButton from "../CreateToDoButton"
import MovilContainer from "../MovilContainer"

// const defaultToDos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Pasear el perro", completed: false },
//   { text: "Llorar con la Llorona", completed: false },
// ]
const STORAGE = "ToDos_V1"

function App() {
  const localStorageToDos = JSON.parse(localStorage.getItem(STORAGE)) || []

  const [searchValue, setSearchValue] = useState("")
  const [toDos, setToDos] = useState(localStorageToDos)

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

  const saveToDos = (newToDos) => {
    setToDos(newToDos)
    localStorage.setItem(STORAGE, JSON.stringify(newToDos))
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

  return (
    <MovilContainer>
      <ToDoCounter total={totalToDos} completed={completedToDos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {filteredToDos.map((toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            toggleToDo={() => toggleToDo(toDo.text)}
            deleteToDo={() => deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </MovilContainer>
  )
}

export default App
