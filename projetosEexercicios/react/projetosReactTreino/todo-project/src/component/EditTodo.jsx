import {  useContext} from "react"
import { TodoContext } from "../context/Context"
import "./EditTodo.css"
const EditTodo = ({todoToEdit, index}) => {
   const [, dispatch] = useContext(TodoContext)
    const handleClick = () => {

         dispatch({type: "EDIT_TO_TRUE", payload: {todoToEdit, index}})
  
    }
  return (
    <button className="editarBtn" onClick={() => handleClick()}>Editar</button>
  )
}

export default EditTodo