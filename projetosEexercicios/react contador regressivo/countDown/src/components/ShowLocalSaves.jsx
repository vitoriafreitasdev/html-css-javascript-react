/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { CountdownContext } from "../context/CountdownContext";
import { useNavigate } from "react-router-dom";
import useLocalStorage from '../hooks/useLocalStorage'
import './ShowLocalSaves.css'

const ShowLocalSaves = () => {
    const {event, setEvent}   = useContext(CountdownContext);
    const navigate = useNavigate();
    const {getEvents} = useLocalStorage()
    const events = getEvents()

    
    const handleClick = (value) => {
        setEvent(events[value])
        navigate("/countdown");
    }
  return (
    <div className='container-saves'>
        <h1>Escolha um dos dados para acessar!</h1>
        <div className='container-dates'>
            {
                events.map((event, index) => 
                <div key={index}>
                    <button className='dates-button'  onClick={() => handleClick(index)}>
                        {event.title} {event.date} {event.color} {event.image}
                    </button>
                </div> )
            }
        </div>
    
    </div>
  )
}

export default ShowLocalSaves