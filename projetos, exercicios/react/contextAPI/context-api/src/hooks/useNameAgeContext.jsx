import { useContext } from "react";
import { NameAgeContext } from "../context/NameAgeContext";

export const useNameAgeContext = () => {
    const context = useContext(NameAgeContext)

    if(!context){
        console.log("Contexto não achado.")
        return
    }

    return context
}