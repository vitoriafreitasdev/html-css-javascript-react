
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom'
import useToast from '../hooks/useToast'
import programFetch from '../axios/config'
import { useState, useContext } from 'react'
import ServiceContext from '../context/ServiceContext'
import "./login.css"

const Login = () => {
  const {setLogged} = useContext(ServiceContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const user = {
      email: email,
      password: password
      }
      const res = await programFetch.post("/login", user)
      
      useToast(res.data.msg)
  
      localStorage.setItem("token", res.data.token)
      setLogged(true)
      navigate(`/user/${res.data.id}`)

    } catch (error) {
      console.log(error)
      useToast(error.response.data.msg, "error")

    }

  }


  return (
    <div className='form-div login'>
      <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
        <label>
            <span>Seu e-mail: </span>
            <input type="text" placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <label>
            <span>Sua senha: </span>
            <input type='password' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </label>
      <input type="submit" value={"Enviar"} className='btn'/>
      </form>
    </div>
  )
}

export default Login