/* eslint-disable no-unused-vars */
import {  useContext} from "react"
import { TodoContext } from "./context/Context"

import CreateTodo from './component/CreateTodo'
import EditComponent from "./component/EditComponent"
import Search from "./component/Search"
import SearchValues from "./component/SearchValues"

import './App.css'

function App() {
  const [state, dispatch] = useContext(TodoContext)

  return (
    <div>
        {state.stage === "Creating" &&  <Search/>}
        {state.stage === "Searching" && <SearchValues/>}
        {state.stage === "Creating" && <CreateTodo/>}
        {state.stage === "Editing" && <EditComponent/>}
    </div>
  )
}

export default App
