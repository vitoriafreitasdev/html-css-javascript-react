
const useLocalStorage = () => {
      

    const getEvents = () => {
        const events = JSON.parse(localStorage.getItem("events")) || []

        return events
    }

    const saveEvents = (date) => {
        const events = getEvents()

        const uptade = [...events, date]
        localStorage.setItem("events", JSON.stringify(uptade))
    }


    
    return {saveEvents, getEvents}
    
}

export default useLocalStorage;