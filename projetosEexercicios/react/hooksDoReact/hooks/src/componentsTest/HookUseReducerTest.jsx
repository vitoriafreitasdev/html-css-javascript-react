
import { useReducer, useContext } from 'react'
import { TestContext } from './HookUseContextTest'

const HookUseReducerTest = () => {
    const {testContextValue} = useContext(TestContext)
    const inicial = 0

    const counterReducer = (state, action) => {
        switch(action.type) {
            case "ADDNUMBER":
                return state + 10
            case "DECREASENUMBER":
               return state - 10
            default:
                return state
        }
    }

    const [counter, dispatchCounter] = useReducer(counterReducer, inicial)

    const add = () => {
        dispatchCounter({type: "ADDNUMBER"})
    }

    const decrease = () => {
        dispatchCounter({type: "DECREASENUMBER"})
    }
  return (
    <div>
        <h1>Testes</h1>
        <h2>useReducer</h2>
        <h3>Contador: {counter}</h3>
        <button onClick={() => add()}>Adicionar</button>
        <button onClick={() => decrease()}>Diminuir</button>
        <p>Contexto: {testContextValue}</p>
    </div>
  )
}

export default HookUseReducerTest