import { useState } from "react";
import ServiceContext from "./ServiceContext";

function Provider({children}) {
    const [isLogged, setLogged] = useState(false)

    const values = {
        isLogged,
        setLogged
    }

    return (
        <ServiceContext.Provider value={values}>
            {children}
        </ServiceContext.Provider>
    )
}

export default Provider;