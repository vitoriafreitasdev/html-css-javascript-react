import { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {
    const [contador, setContador] = useState(0)
    const [intervalo, setIntervalo] = useState(null)
    
    const click = () => {
        if(intervalo){
        return
        }
        const novoIntervalo = setInterval(() => {
        setContador(prevCont => prevCont + 1)
        }, 1000)

        setIntervalo(novoIntervalo)
    }
    const clickParar = () => {
    if(intervalo){
        clearInterval(intervalo)
        setIntervalo(null)
    }
    }
    useEffect(() => {
        return () => {
        if(intervalo) {
            clearInterval(intervalo)
        }
        }
    }, [intervalo])
  return (
    <div>
        <p>Contador: {contador}</p>
      <button onClick={click}>Iniciar</button>
      <button onClick={clickParar}>Parar</button>
    </div>
  )
}

export default Counter