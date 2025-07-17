/* eslint-disable no-unused-vars */

import {  useContext, useState} from "react"
import { TodoContext } from "../context/Context"

import "./EditComponent.css"

const EditComponent = () => {
    const [newname, setNewName] = useState("")
    const [state, dispatch] = useContext(TodoContext)
    const handleEditBtn = () => {
        if (newname === "") return
        dispatch({type: "EDIT", payload: newname})
    }
  return (
     <div className="edit-div">
        <h1>Coloque um novo nome para sua tarefa:</h1>
        <input type="text"  onChange={(e) => setNewName(e.target.value)}/>
        <button className="newNameBtn" onClick={() => handleEditBtn()}>Mudar</button>
     </div>
  )
}

export default EditComponent