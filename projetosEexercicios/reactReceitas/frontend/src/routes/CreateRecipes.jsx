/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react"
import programFetch from "../axios/config"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./CreateRecipes.css"
import useToast from "../hooks/useToast"

import { useNavigate } from "react-router-dom"
const CreateRecipes = () => {
    const [user, setUser] = useState(null)
    const [recipes, setRecipes] = useState(null)

    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState(null)
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        const load = async () =>{
            const res = await programFetch.get(`/user/${id}`)
            setUser(res.data)
        } 
        const loadRecipe = async () => {
        const res = await programFetch.get("/receitas")
        setRecipes(res.data)
        }
        loadRecipe()
        load()
    }, [recipes, id])

    const handleChange = (event) => {
        if(event.target.name === "image"){
            setImage(event.target.files[0])
        } else {
            setInputs({...inputs, [event.target.name]: event.target.value})
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()

        formData.append("image", image)
        formData.append("title", inputs.title)
        formData.append("ingredients", inputs.ingredients)
        formData.append("preparation", inputs.preparation)
        formData.append("preparationTime", inputs.preparationTime)

        try {
            const response = await programFetch.post("/user/addRecipes", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            })

            useToast(response.data.msg)
        } catch (error) {
            console.log(error)
            useToast(error.response.data.msg, "error")
        }


    }
    const handleDelete = async (recipeId) => {
        const res = await programFetch.delete(`/receitas/delete/${recipeId}`)
        if (res.status === 200){
            useToast(res.data.msg)
        }
    }

    /* Fazer o editar agora! */
  return (
    <div>
        {user && (
            <div key={user._id} className="user-div">
              <h3>Ola,  {user.name}.  Coloque os dados abaixo para postar uma nova receita.</h3>
                <form onSubmit={handleSubmit} className="form-recipe">
                    <label>
                    <p>Título:</p>
                    <input type="text" placeholder="Defina um título" name="title" onChange={handleChange}/>
                    </label>
                    <label>
                    <p>Ingredientes:</p>
                    <textarea type="text" name="ingredients" placeholder="Explique o que aconteceu..." onChange={handleChange}> </textarea>
                    </label>
                    <label>
                    <p>Preparação:</p>
                    <textarea type="text" name="preparation" placeholder="Explique o que aconteceu..." onChange={handleChange}> </textarea>
                    </label>
                    <label>
                      <label>
                    <p>Tempo de preparo:</p>
                    <input type="text" placeholder="20 minutos" name="preparationTime" onChange={handleChange}/>
                    </label>   
                    <p>Foto:</p>
                    <input type="file" name="image" onChange={handleChange}/>
                    </label>
                    <div><input type="submit" className="btn" value="Enviar"/></div>
                </form>
            </div>
          )}
         {recipes && recipes.map((recipe) => (
          <div> 
            {recipe.author === id ? <div key={recipe._id} className="user-recipes">
                <h1>Suas receitas:</h1>
                <h2>{recipe.title}</h2>
                <h3>Ingredientes: </h3>
                <p>{recipe.ingredients}</p>
                <h3>Preparação: </h3>
                <p>{recipe.preparation}</p>
                <h3>Tempo de preparo: </h3>
                <p>{recipe.preparationTime}</p>
                <h3>Imagem:</h3>
                <img className="img" src={`http://localhost:3000/${recipe.src}`} alt={recipe.title} />
                <div>
                    <button className="btn edit-btn"><Link className="link" to={`/editar/${recipe._id}`}>Editar</Link></button>
                    <button className="btn delete-btn" onClick={() => handleDelete(recipe._id)}>Deletar</button>
                </div>
          </div> : ""}
          </div>
        ))}
    </div>
  )
}

export default CreateRecipes