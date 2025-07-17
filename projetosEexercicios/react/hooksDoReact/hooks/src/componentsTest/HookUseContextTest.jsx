/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react"

export const TestContext = createContext()

export const HookUseContextTest = ({children}) => {
    const testContextValue = "Valor do teste"
  return (
    <div>
        <TestContext.Provider value={{testContextValue}}>
            {children}
        </TestContext.Provider>
    </div>
  )
}

export default HookUseContextTest