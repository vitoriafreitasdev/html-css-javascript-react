
import "./Checked.css"

/* eslint-disable no-unused-vars */
import {  useContext,useState, useEffect} from "react"
import { TodoContext } from "../context/Context"


const Checked = ({index}) => {
    const [state, dispatch] = useContext(TodoContext)
    const isCompleted = state.todoCompleted.includes(index)
  
  return (
    <button className={`checkedBtn `} onClick={() => dispatch({type: "CHECKED_TODO", payload: index})}>{isCompleted ? 'Completo' : 'Marcar'}</button>
  )
}

export default Checked