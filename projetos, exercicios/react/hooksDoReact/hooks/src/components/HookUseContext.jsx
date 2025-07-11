/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react"
export const SomeContext = createContext()

export const HookUseContext = ({children}) => {
    const contextValue = "testing context"

  return (
    <SomeContext.Provider value={{contextValue}}>
        {children}
    </SomeContext.Provider>
  )
}

export default HookUseContext