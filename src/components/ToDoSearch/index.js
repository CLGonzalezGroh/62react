import "./ToDoSearch.css"

const ToDoSearch = ({ searchValue, setSearchValue, loading }) => {
  const onSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <input
      onChange={onSearchChange}
      value={searchValue}
      className="ToDoSearch"
      placeholder="Buscar tareas ..."
      disabled={loading}
    />
  )
}

export default ToDoSearch
