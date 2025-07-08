/* eslint-disable no-unused-vars */
import { useContext} from "react"
import { TodoContext } from "../context/Context"
import DeleteTodo from "./DeleteTodo"
import EditTodo from "./EditTodo"
const SearchValues = () => {
    const [state, dispatch] = useContext(TodoContext)

  return (
    <div>  
        {state.searchValues.map((todo, index) => (
                <div className="todosP" key={index}><h2>{todo}</h2> <DeleteTodo index={state.searchItemId} /> <EditTodo todoToEdit={todo} index={state.searchItemId}/></div>
              ))}
    </div>
  )
}

export default SearchValues