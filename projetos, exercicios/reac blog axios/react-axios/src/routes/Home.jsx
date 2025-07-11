/* eslint-disable no-unused-vars */
import axios from 'axios'
import blogFetch from '../axios/config'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import './Home.css'

const Home = () => {
    const [posts, setPost] = useState([])

    const getPost = async() => {
        try{
           // const response = await axios.get("https://jsonplaceholder.typicode.com/posts") usando axios
            const response = await blogFetch.get("/posts") // usando a blogFetch
            const data = response.data
            setPost(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

  return (
    <div className="home">
        <h1>Último posts</h1>
        {posts.length === 0 ? <p>Carregando...</p> : (
            posts.map((post) => (
                <div className='post' key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
                </div>
            ))
        )}
    </div>
  )
}

export default Home