import { useContext } from "react"
import { ToDoContext } from "../../context/ToDoContext"
import ToDoCounter from "../ToDoCounter"
import ToDoSearch from "../ToDoSearch"
import ToDoList from "../ToDoList"
import ToDoItem from "../ToDoItem"
import CreateToDoButton from "../CreateToDoButton"
import MovilContainer from "../MovilContainer"
import { Modal } from "../Modal"
import ToDoForm from "../ToDoForm"
import ToDoError from "../ToDoError"
import ToDoLoading from "../ToDoLoading"
import ToDoEmpty from "../ToDoEmpty"

const AppUI = () => {
  const {
    error,
    loading,
    filteredToDos,
    toggleToDo,
    deleteToDo,
    showToDoModal,
  } = useContext(ToDoContext)

  return (
    <MovilContainer>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {error && <ToDoError error={error} />}
        {loading && <ToDoLoading />}
        {!loading && !filteredToDos.length && <ToDoEmpty />}
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
      {showToDoModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}
    </MovilContainer>
  )
}

export default AppUI
