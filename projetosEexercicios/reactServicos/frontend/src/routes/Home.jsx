
import programFetch from '../axios/config'
import { useState, useEffect } from 'react'

import './Home.css'

const Home = () => {
  const [services, setServices] = useState(null)
  useEffect(() => {
    const loadData = async () => {
      const res = await programFetch.get("/service")
      setServices(res.data)
      
    }
    
    loadData()
  }, [services])
  
  return (
    <div className='home-container'>
        <h1>Cadastre-se e tenha acesso a diversos tipos de serviços, como os abaixo, para o seu veículo! </h1>
        <div className='services-container'>
          {services ? services.map((service) => (
            <div key={service._id} className='service-card'>
              <h2>Serviço: {service.name}</h2>
              <p>Descrição: {service.description}</p>
              <p>Preço: {service.price} R$</p>
              <img src={service.image} alt={service.image} />
            </div>
          )) : <p>Carregando...</p>}
        </div>
    </div>
  )
}

export default Home
