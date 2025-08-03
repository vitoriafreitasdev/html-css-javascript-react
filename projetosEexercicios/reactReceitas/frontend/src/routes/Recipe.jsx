
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import programFetch from "../axios/config"

import "./Recipe.css"

const Recipe = () => {
    const {id} = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
      const load = async () => {
        const res = await programFetch.get(`receitas/${id}`)
    
        setRecipe(res.data)
      }
       
      load()
    }, [])

    const deleteBtn = async () => {
      
    }

    const editBtn = async () => {

    }

    /* Fazer o botão de editar e deletar funcionar */
  return (
    <div className="recipescontainer recipe">
      {
      recipe && 
        <div key={recipe._id}>
              <h2>{recipe.title}</h2>
              <h3>Ingredientes: </h3>
              <p>{recipe.ingredients}</p>
              <h3>Preparação: </h3>
              <p>{recipe.preparation}</p>
              <h3>Tempo de preparo: </h3>
              <p>{recipe.preparationTime}</p>
              <h3>Imagem:</h3>
              <img className="img" src={`http://localhost:3000/${recipe.src}`} alt={recipe.title} />
        </div>
      }
      <button onClick={deleteBtn} className="delete-btn btn">Deletar</button>
      <button onClick={editBtn} className="edit-btn btn">Editar</button>
    </div>
  )
}

export default Recipe