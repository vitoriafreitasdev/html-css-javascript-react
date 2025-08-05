
import { useState, useEffect } from "react"
import programFetch from "../axios/config"
import { Link } from "react-router-dom"
import "./Home.css"
const Home = () => {
  const [recipes, setRecipes] = useState(null)
  //const [users, setUsers] = useState(null)

  useEffect(() => {
    const load = async () => {
      const res = await programFetch.get("/receitas")
      setRecipes(res.data)
    }
    load()
  }, [])
 
  return (
    
    <div className="home">
      
      <div className="div">
        <h2>Cadastre-se e poste suas proprias receitas.</h2>
        <p>Aqui você encontra as melhores receitas para deliciosos pratos. Como as abaixo, já cadastradas, clique nelas para mais detalhes.</p>
        {recipes &&
        recipes.map((recipe) => (
          <div>
            {/* vai ser um link que vai levar o usuario para a pagina individual da receita */}
            <Link className="link" to={`/receita/${recipe._id}`}><h4>{recipe.title}</h4></Link>    
          </div>
        ))}
        
      </div>
      <div className="recipescontainer">
        <h1>Receitas:</h1>
        {recipes &&
        recipes.map((recipe) => (
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
        ))
        }
        
      </div>
    </div>
  )
}

export default Home