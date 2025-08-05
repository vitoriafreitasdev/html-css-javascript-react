/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import useToast from "../hooks/useToast"
import programFetch from "../axios/config"

const EditRecipe = () => {
    const {id} = useParams()
    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState(null)
    const navigate = useNavigate()
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

        if(image) formData.append("image", image)
        if(inputs.title) formData.append("title", inputs.title)
        if(inputs.ingredients) formData.append("ingredients", inputs.ingredients)
        if(inputs.preparation) formData.append("preparation", inputs.preparation)
        if(inputs.preparationTime) formData.append("preparationTime", inputs.preparationTime)

        try {
            const response = await programFetch.patch(`/user/editrecipes/${id}`, formData, {
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
      <h1>Edite sua receita.</h1>
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
  )
}

export default EditRecipe