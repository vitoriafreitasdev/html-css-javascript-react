
/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from "react"

const HookUseRefTest = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    const divRef = useRef()
    const [time, setTime] = useState(0)
    const intervalRef = useRef(null)

    const startTimer = () => {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1)
      },  1000)
    }

    const stopTimer = () => {
      clearInterval(intervalRef.current)
    }


    const handleIncrement = () => {
        // setCount(count + 1)
        countRef.current ++
        // console.log('State', count)
        console.log('Ref', countRef.current)
    }

    useEffect(() => {
      console.log("Largura da div: ", divRef.current.offsetWidth)
    }, [])


  return (
    <div>
        <h2>useRef</h2>
        {/* Só vai mostrar o valor atualizado, se tiver outra coisa para causar a redenrização, por exemplo o useState. O useRef não re-redenriza o componente.*/}
        <p>Count ref {countRef.current}</p>
        {/* <p>Count: {count}</p> */}
        <button onClick={handleIncrement}>Increment</button> 
        <div ref={divRef}>Meça minha largura no console!</div>
        <p>Timer: {time}</p>
        <button onClick={startTimer}>Iniciar</button>
        <button onClick={stopTimer}>Parar</button>
    </div>
  )
}

export default HookUseRefTest