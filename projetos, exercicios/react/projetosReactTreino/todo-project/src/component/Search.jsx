
import {  useContext,useState} from "react"
import { TodoContext } from "../context/Context"
import "./Search.css"

const Search = () => {
    // eslint-disable-next-line no-unused-vars
    const [, dispatch] = useContext(TodoContext)
    const [search, setSearch] = useState()
    const handleClick = () => {
        dispatch({type: "SEARCH",
        payload: search})
    }
  return (
        <div>
            <h1>Barra de busca</h1>
            <input type="text" className="search" placeholder="Procure por uma tarefa aqui." onChange={(e) => setSearch(e.target.value)}/>
            <button className="searchBtn" onClick={handleClick}>Buscar</button>
        </div>
  )
}

export default Search