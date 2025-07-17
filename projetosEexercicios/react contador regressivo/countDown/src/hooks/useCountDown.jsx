
import { useState } from "react";

const useCountDown = (date) => {
    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()


    const countDown = () => {
        const countDate = new Date(date).getTime()// extrai o tempo de date
        const now = new Date().getTime() // extrai o tempo atual.getTime para pegar em milisegundos
        
        const interval = countDate - now
        
        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        const dayNumber = Math.floor(interval / day)
        const hourNumber = Math.floor((interval % day) / hour)
        const minuteNumber = Math.floor((interval % hour) / minute)
        const secondNumber = Math.floor((interval % minute) / second)

        setDay(dayNumber)
        setHour(hourNumber)
        setMinute(minuteNumber)
        setSecond(secondNumber)

    }
    
    setInterval(countDown, 1000)

    return [day, hour, minute, second]
}


export default useCountDown