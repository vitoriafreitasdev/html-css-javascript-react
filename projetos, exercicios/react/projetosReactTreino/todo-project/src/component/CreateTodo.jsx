
import {  useContext,useState, useEffect} from "react"
import { TodoContext } from "../context/Context"

import DeleteTodo from "./DeleteTodo"
import EditTodo from "./EditTodo"

import "./CreateTodo.css"
import Checked from "./Checked"

const CreateTodo = () => {
  // pegar os todo da localstorage e salvar no array do context tbm
   const [state, dispatch] = useContext(TodoContext)
   const [todo, setTodo] = useState()

  const getTodosLocalStorage = () => {
      const todos = JSON.parse(localStorage.getItem("todos")) || []
      return todos
      
  }

  const saveTodos = (todo) => {
     if (!todo.trim()) return; // se tiver espaço vazio ele retorna
     if (todo === "") return
    const todosLocal = getTodosLocalStorage()
    const uptade = [...todosLocal, todo]
  
    localStorage.setItem("todos", JSON.stringify(uptade))

    dispatch({type: "ADD_TODO",
    payload: uptade})
    setTodo('');
  }


  useEffect(() => {
      const todosLocal = getTodosLocalStorage()
      dispatch({type: "ADD_TODO",
      payload: todosLocal})
      
  }, [dispatch])
  
  console.log(`state todo: ${state.todo} e setTodo: ${todo}`)
    const handleSubmit = (e) => {
      e.preventDefault()
      saveTodos(todo)
    }
    
  return (
    <div className="formCont">
        <form onSubmit={handleSubmit} className="addForm">
            <h1>Adicione sua tarefa:</h1>
            
            <div className="input-btn-cont">
              <input type="text" placeholder="Tarefa: " className="addInput"  onChange={(e) => setTodo(e.target.value)}/>
              <button type="submit" className="addBtn">Adicionar</button>
              {state.todo.map((todo, index) => (
                <div className={`todosP ${state.todoCompleted.includes(index) ? "complete" : ""}`}  key={index}><h2>{todo}</h2> <DeleteTodo index={index} /> <EditTodo todoToEdit={todo} index={index}/> <Checked index={index}/></div>
              ))}            
              </div>
        </form>
    </div>
  )
}

export default CreateTodo