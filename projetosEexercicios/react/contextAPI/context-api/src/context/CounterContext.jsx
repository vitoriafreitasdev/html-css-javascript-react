/* eslint-disable react-refresh/only-export-components */
// 1 - criar contexto
import { createContext, useState } from "react";

export const CounterContext = createContext()

export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}