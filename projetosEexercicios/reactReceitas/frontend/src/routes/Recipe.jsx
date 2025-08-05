/* eslint-disable react-hooks/rules-of-hooks */

import { Await, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import programFetch from "../axios/config"

import "./Recipe.css"
import useToast from "../hooks/useToast"

const Recipe = () => {
    const {id} = useParams()
    const [recipe, setRecipe] = useState(null)
    const [comments, setComments] = useState([])
    const [name, setName] = useState("")
    const [text, setText] = useState("")

    useEffect(() => {
      const load = async () => {
        const res = await programFetch.get(`receitas/${id}`)
    
        setRecipe(res.data)
        setComments(res.data.comments)
      }
       
      load()
    }, [recipe, comments, id])

    const handleSubmit = async (e) => {
      e.preventDefault()
      const comment = {name, text}
      
      const res = await programFetch.patch(`/receitas/addcomment/${id}`, comment)

      const lastComment = res.data.recipe.comments.pop()

      setComments((comments) => [...comments, lastComment])
      setName("")
      setText("")
      useToast(res.data.msg)
    }
    const handleLike = async () => {
      await programFetch.patch(`/receitas/addlike/${id}`)
    }
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

            <div className="likes-container">
                <button className="btn-like" onClick={handleLike}>&#x1F44D; {recipe.likes}</button>
            </div>
            <div className="comment-form">
                  <form onSubmit={handleSubmit}>
                    <label>
                      <span>Seu nome:</span>
                      <input type="text" onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>
                      <span>Seu comentário:</span>
                      <input type="text" onChange={(e) => setText(e.target.value)}/>
                    </label>
                    <input type="submit" value="Enviar" className="btn"/>
                  </form>
            </div>
            <div className="comments-container">
              <h3>Cometários: {comments.length}</h3>
              {comments.length === 0 ? <p>Não há comentários</p> : comments.map((comment) => (
                <div className="comment" key={comment._id}>
                        <p className='comment-name'>{comment.name}</p>
                        <p className='comment-text'>{comment.text}</p>
                </div>
              ))}
            </div>
        </div>

      }
    </div>
  )
}

export default Recipe