import React from 'react'
import { useState } from 'react'
const Name = (props) => {
    const frutas = ["maça", "pera", "morango"]
    const [contador, setContator] = useState(0)
    const [nome, setNome] = useState("")
    const [botao, setBotao] = useState(true)
  return (
    <div>
        <h1>Meu nome é: {props.name}</h1>
        <ul>
            {frutas.map((fruta, index) =>(
                <li key={index}>{fruta}</li>
            ))}

            

        </ul>
            <button onClick={() => setContator(contador + 1)}>+</button>
            <button onClick={() => setContator(contador - 1)}>-</button>
            <p>Contador: {contador}</p>
            <div>
                <label>Nome:</label>
                <input type="text"value={nome} onChange={(e) => setNome(e.target.value)}/>
                <p>Seu nome é {nome}</p>
            </div>
            <button onClick={() => setBotao(!botao)}>{ botao ? 'escoder' : 'mostrar'} texto abaixo</button>
            {botao && <p>Texto</p>}

    </div>
  )
}

export default Name