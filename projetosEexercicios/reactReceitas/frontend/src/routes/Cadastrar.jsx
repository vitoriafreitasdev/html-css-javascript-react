/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import programFetch from "../axios/config"
import useToast from "../hooks/useToast"
import "./Cadastrar.css"

const Cadastrar = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

        const user = {
          name: name,
          email: email,
          password: password,
          confirmpassword: confirmPassword
        }

        const res = await programFetch.post("/cadastro", user)

        if(res.status == 201) {
          useToast(res.data.msg)
          navigate("/login")
        }
    } catch (error) {
        console.log(error)
        useToast(error.response.data.msg, "error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="formcadastro">
        <h1>Cadastre-se abaixo:</h1>
        <label>Coloque o seu nome: </label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
      
        <label>Coloque o seu e-mail:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
      
        <label>Coloque a sua senha:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      
        <label>Confirme a sua senha:</label>
        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>       
        <input type="submit" value="Enviar" />
    </form>
  )
}

export default Cadastrar