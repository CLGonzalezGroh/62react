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
import ToDoEmptySearched from "../ToDoEmptySearched"
import ToDoHeader from "../ToDoHeader"
import { useToDo } from "./useToDo"
import { ChangeAlert } from "../ChangeAlert"

function App() {
  const {
    error,
    loading,
    synchronizeToDo,
    filteredToDos,
    toggleToDo,
    deleteToDo,
    showToDoModal,
    setShowToDoModal,
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    addToDo,
  } = useToDo()

  return (
    <MovilContainer>
      <ToDoHeader loading={loading}>
        <ToDoCounter totalToDos={totalToDos} completedToDos={completedToDos} />
        <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </ToDoHeader>
      <ToDoList
        error={error}
        loading={loading}
        filteredToDos={filteredToDos}
        searchValue={searchValue}
        totalToDos={totalToDos}
        onError={(error) => <ToDoError error={error} />}
        onLoading={() => <ToDoLoading />}
        onEmptyToDo={() => <ToDoEmpty />}
        onEmptyToDoSearched={(text) => <ToDoEmptySearched text={text} />}
      >
        {(toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            toggleToDo={() => toggleToDo(toDo.text)}
            deleteToDo={() => deleteToDo(toDo.text)}
          />
        )}
      </ToDoList>
      <CreateToDoButton setShowToDoModal={setShowToDoModal} />
      {showToDoModal && (
        <Modal>
          <ToDoForm addToDo={addToDo} setShowToDoModal={setShowToDoModal} />
        </Modal>
      )}
      <ChangeAlert synchronizeToDo={synchronizeToDo} />
    </MovilContainer>
  )
}

export default App
