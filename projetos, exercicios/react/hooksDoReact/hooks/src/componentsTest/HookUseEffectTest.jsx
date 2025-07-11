import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { TestContext } from './HookUseContextTest'

const HookUseEffectTest = () => {
  const {testContextValue} = useContext(TestContext)
  const [changeNumber, setChangeNumber] = useState(false)
  const [number, setNumber] = useState(0)
 

  useEffect(() => {
    if (changeNumber){
      setNumber(number + 10)
    }
  }, [changeNumber])

  // tutorial video

   const [count, setCount] = useState(0)

   useEffect(() => {
      // the code that we want to run
      console.log('The count is', count)

      // Optional return function => clean up function

      return () => {
        console.log("I am being cleaned up!")
      }
   }, [count]) //The dependency array

  return (
    <div>
      <h2>useEffect</h2>
      <p>{number}</p>
      <button onClick={() => setChangeNumber(!changeNumber)}>Mudar Numero</button>
      <p>Contexto: {testContextValue}</p>


      {/* Tutorial video */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default HookUseEffectTest