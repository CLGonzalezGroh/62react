import { useContext } from "react"
import { ToDoContext } from "../../context/ToDoContext"
import "./ToDoSearch.css"

const ToDoSearch = () => {
  const { searchValue, setSearchValue } = useContext(ToDoContext)
  const onSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <input
      onChange={onSearchChange}
      value={searchValue}
      className="ToDoSearch"
      placeholder="Buscar tareas ..."
    />
  )
}

export default ToDoSearch
