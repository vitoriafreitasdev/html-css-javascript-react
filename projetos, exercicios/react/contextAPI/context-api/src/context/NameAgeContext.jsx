/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const NameAgeContext = createContext()

export const NameAgeContextProvider = ({children}) => {

    const [name, setName] = useState()
    const [age, setAge] = useState()

    const value = {
        name, setName,
        age, setAge
    }

    return (
        <NameAgeContext.Provider value={value}>
            {children}
        </NameAgeContext.Provider>
    )
}