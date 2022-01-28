import "./ToDoSearch.css"

const ToDoSearch = ({ searchValue, setSearchValue }) => {
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
