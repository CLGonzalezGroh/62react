import { ToDoProvider } from "../../context/ToDoContext"
import AppUI from "./AppUI"

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  )
}

export default App
