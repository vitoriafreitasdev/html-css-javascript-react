
import React, {useState} from "react";

const CountdownContext = React.createContext(null)

const CountdownProvider = ({children}) => {
    const [event, setEvent] = useState(null)
    const [eventLocalStorage,  setEventLocalStorage] = useState([])
    

    return (
        <CountdownContext.Provider value={{event, setEvent, eventLocalStorage, setEventLocalStorage}}>
            {children}
        </CountdownContext.Provider>
    )
}

export {CountdownContext, CountdownProvider}