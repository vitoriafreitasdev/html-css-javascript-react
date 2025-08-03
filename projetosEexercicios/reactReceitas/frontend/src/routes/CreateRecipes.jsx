/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react"
import programFetch from "../axios/config"
import { useParams } from "react-router-dom"

import "./CreateRecipes.css"
import useToast from "../hooks/useToast"

import { useNavigate } from "react-router-dom"
const CreateRecipes = () => {
    const [user, setUser] = useState(null)
    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState(null)
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        const load = async () =>{
            const res = await programFetch.get(`/user/${id}`)
            setUser(res.data)
        } 

        load()
    }, [])

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
            navigate("/")
        } catch (error) {
            console.log(error)
            useToast(error.response.data.msg, "error")
        }


    }
  return (
    <div>
        {user && (
            <div key={user._id} className="user-div">
              <h3>Ola,  {user.name}.  Coloque os dados abaixo para postar a sua receita.</h3>
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
        
    </div>
  )
}

export default CreateRecipes