import "./ToDoList.css"

const ToDoList = ({
  error,
  loading,
  totalToDos,
  searchValue,
  filteredToDos,
  onError,
  onLoading,
  onEmptyToDo,
  onEmptyToDoSearched,
  render,
  children,
}) => {
  const noToDos = !loading && !totalToDos
  const noSearchedToDos = !loading && !!totalToDos && !filteredToDos.length
  const renderFunc = children || render
  return (
    <section className=".ToDoContainer">
      {error && onError(error)}
      {loading && onLoading()}
      {noToDos && onEmptyToDo()}
      {noSearchedToDos && onEmptyToDoSearched(searchValue)}
      <ul>{!error && !loading && filteredToDos.map(renderFunc)}</ul>
    </section>
  )
}

export default ToDoList
