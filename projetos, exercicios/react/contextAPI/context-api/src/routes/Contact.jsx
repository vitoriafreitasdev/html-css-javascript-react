// 3 - alterando valor do context
// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"
// 5 - contexto mais completo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Contact = () => {
  const {counter} = useCounterContext()
  
  const {color}  = useTitleColorContext()
  return (
    <div>
        <h1 style={{color: color}}>Página de contato</h1>
        <p>Valor do counter: {counter}</p>
    </div>
  )
}

export default Contact