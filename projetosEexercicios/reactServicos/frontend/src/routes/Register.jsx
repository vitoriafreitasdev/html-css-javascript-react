/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useToast from '../hooks/useToast'
import programFetch from '../axios/config'

import './Register.css'


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [budget, setBudget] = useState()
    const [image, setImage] = useState()


   const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const newUser = {
                name: name,
                email: email,
                password: password,
                confirmpassword: confirmPassword,
                budget: budget,
                image: image
            }

            const res = await programFetch.post("/cadastro", newUser)
            if(res.status === 201){
                navigate("/login")
                useToast(res.data.msg)
            }
        } catch (error) {
            console.log(error)
            useToast(error.response.data.msg, "error")
        }
    }
  return (
    <div className='form-div'>
        <form className='form-container' onSubmit={(e) => handleSubmit(e)}>
            <label>
                <span>Seu nome: </span>
                <input type="text" placeholder='Digite seu nome' value={name} onChange={(e) => setName(e.target.value)} required/>
            </label>
            <label>
                <span>Seu e-mail: </span>
                <input type="text" placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label>
                <span>Sua senha: </span>
                <input type='password' placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <label>
                <span>Confirme sua senha: </span>
                <input type='password' placeholder='Confirme sua senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
            </label>
            <label>
                <span>Orçamento: </span>
                <input type='number' placeholder='Orçamento' value={budget} onChange={(e) => setBudget(e.target.value)} required/>
            </label>
            <label>
                <span>Imagem do seu veículo: </span>
                <input type='string' placeholder='Imagem do seu veículo' value={image} onChange={(e) => setImage(e.target.value)} required/>
            </label>
            <input type="submit" value={"Enviar"} className='btn'/>
        </form>
    </div>
  )
}

export default Register