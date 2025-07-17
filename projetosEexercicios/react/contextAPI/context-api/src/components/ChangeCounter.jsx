// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"
const ChangeCounter = () => {
    const {counter, setCounter} = useCounterContext()
  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementer</button>
    </div>
  )
}

export default ChangeCounter