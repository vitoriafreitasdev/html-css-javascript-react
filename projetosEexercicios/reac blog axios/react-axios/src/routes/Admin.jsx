/* eslint-disable no-unused-vars */
import blogFetch from '../axios/config'

import {useState, useEffect} from "react"

import { Link } from 'react-router-dom'

import './Admin.css'

const Admin = () => {
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

    const deletePost = async(id) => {
        await blogFetch.delete(`/posts/${id}`)

        const filteredPosts = posts.filter((post) => post.id !== id)

        setPost(filteredPosts)
    }

    useEffect(() => {
        getPost()
    }, [])

  return (
    <div className="admin">
        <h1>Gerenciar Post</h1>
        {posts.length === 0 ? <p>Carregando...</p> : posts.map((post) => (<div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <div className='actions'>
                <Link className='btn edit-btn' to={`/posts/edit/${post.id}`}>Editar</Link>
                <button className='btn delete-btn' onClick={() => deletePost(post.id)}>Excluir</button>
            </div>
        </div>))}
    </div>
  )
}

export default Admin