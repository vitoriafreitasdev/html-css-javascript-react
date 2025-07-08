
// 3 - alterando valor do contexto
// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

// 4 - refatorando com hook
import {useCounterContext} from "../hooks/useCounterContext"

// 5 - contexto mais completo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  const {color, dispatch}  = useTitleColorContext()

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  // criar mais 2 contexto um com reducer outro, e outro mais simples
  return (
    
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador: {counter}</p>
        <ChangeCounter/>

        {/* 6 - alterando contexto completo */}
        <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>
    </div>
  )
}

export default Home