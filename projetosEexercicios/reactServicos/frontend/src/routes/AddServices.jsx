/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from 'react'
import useToast from '../hooks/useToast'
import programFetch from '../axios/config'
import "./AddServices.css"
const AddServices = ({id, user}) => {

    const [services, setServices] = useState(null)
    const [userServices, setUserServices] = useState([])



    useEffect(() => {
        const loadServices = async () => {
            const res = await programFetch.get("/service")
            setServices(res.data)
        }

        loadServices()
    }, [services, userServices])

    const checkPartyBudget = (budget, services) => {
        const priceSum = services.reduce((sum, service) => sum + service.price, 0)
        if(priceSum > budget) {
            return false
        }

        return true
    }

    const handleServices = (e) => {
        const checked = e.target.checked 
        const value = e.target.value 
        const filteredServices = services.filter((s) => s._id === value)
        if(checked){
            setUserServices((services) => [...services, filteredServices[0]])
        } else {
            setUserServices((services) => services.filter((s) => s._id !== value))
        }
    }
    
    const handleClick = async () => {
        if(!checkPartyBudget(user?.budget, userServices)){
            return useToast("Orçamento insuficiente!")
        }

        try {
            const res = await programFetch.put(`/user/addServices/${id}`, {services: userServices})
            if (res.status === 200) {
                useToast(res.data.msg)
            }
        } catch (error) {
            console.log(error)
        }

        
    }

  return (
    <div className='services-div'>
             {services && services.map((service) => (
              <div className="service" key={service._id}>
                <img src={service.image} alt={service.name} />
                <p className="service-name">{service.name}</p>
                <p className="service-price">R${service.price}</p>
                <div className="checkbox-container">
                  <input type="checkbox" value={service._id} onChange={(e) => handleServices(e)}/>
                  <p>Marque para solicitar</p>
                </div>
              </div>
             ))}
        <div className='btn-div'>
            <button onClick={handleClick} className='btn-add'>Adicionar</button>
        </div>
    </div>
  )
}

export default AddServices

