
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom'
import useToast from '../hooks/useToast'
import programFetch from '../axios/config'
import { useState } from 'react'



const Login = () => {

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
      console.log(res.data.token)
      localStorage.setItem("token", res.data.token)
   
      navigate(`/user/${res.data.id}`)

    } catch (error) {
      console.log(error)
      useToast(error.response.data.msg, "error")

    }

  }
  // fazer o login, passar pelo "/login".post (testar enviando para home primeiro com o useNavigate), dps de funcionando essa parte, usar o msm useNavigate para enviar o usuario para rota privada, passando o id dele 

  return (
    <div className='form-div'>
      <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
        <label>
            <span>Seu e-mail: </span>
            <input type="text" placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
            <span>Sua senha: </span>
            <input type='password' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
      <input type="submit" value={"Enviar"} className='btn'/>
      </form>
    </div>
  )
}

export default Login