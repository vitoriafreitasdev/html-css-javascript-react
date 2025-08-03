/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import programFetch from "../axios/config"
import useToast from "../hooks/useToast"
import "./Cadastrar.css"

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

        if(res.status == 200) {
          useToast(res.data.msg)
          localStorage.setItem("token", res.data.token)
          navigate(`/criarreceita/${res.data.id}`)
        }
    } catch (error) {
        console.log(error)
        useToast(error.response.data.msg, "error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="formcadastro">
        <h1>Faça o login abaixo:</h1>
        <label>Coloque o seu e-mail:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
      
        <label>Coloque a sua senha:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" value="Enviar" />
    </form>
  )
}


export default Login