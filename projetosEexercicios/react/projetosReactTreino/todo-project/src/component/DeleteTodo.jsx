
/* eslint-disable no-unused-vars */
import {  useContext,useState, useEffect} from "react"
import { TodoContext } from "../context/Context"

import "./DeleteTodo.css"

const DeleteTodo = ({index}) => {
    const [, dispatch] = useContext(TodoContext)

  
  return (
       <button className="deletarBtn" onClick={() => dispatch({type: "DELETE_TODO", payload: index})}>Deletar</button>
  )
}

export default DeleteTodo