/* eslint-disable react-hooks/rules-of-hooks */
import programFetch from '../axios/config'
import { useState, useEffect } from 'react'
import "./AdminPanel.css"
import useToast from '../hooks/useToast'
const AdminPanel = () => {
    const [services, setServices] = useState(null)
    const [serviceName, setServiceName] = useState("")
    const [serviceDescription, setServiceDescription] = useState("")
    const [servicePrice, setServicePrice] = useState("")
    const [serviceImage, setServiceImage] = useState("")

    useEffect(() => {
        const loadData = async () => {
        const res = await programFetch.get("/service")
        setServices(res.data)
        
        }
        
        loadData()
    }, [services])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const service = {
                name: serviceName,
                description: serviceDescription,
                price: servicePrice,
                image: serviceImage
            }
            const res = await programFetch.post("/service", service)
            
            if(res.status === 201){
                useToast(res.data.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // fazer agora o de editar e excluir serviços

  return (
    <div className='admin-container'>
        <h2>Edite, exclua e adicione serviços.</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                <input type="text" placeholder='Nome do serviço' onChange={(e) => setServiceName(e.target.value)} value={serviceName}/>
            </label>
            <label>
                <input type="text" placeholder='Descrição do serviço' onChange={(e) => setServiceDescription(e.target.value)} value={serviceDescription}/>
            </label>
            <label>
                <input type="text" placeholder='Preço do serviço' onChange={(e) => setServicePrice(e.target.value)} value={servicePrice}/>
            </label>
            <label>
                <input type="text" placeholder='Imagem do serviço' onChange={(e) => setServiceImage(e.target.value)} value={serviceImage}/>
            </label>
            <input type="submit" className='add-services-btn' value="Adicionar serviços" />
        </form>
        <div className='services-container'>
          {services ? services.map((service) => (
            <div key={service.id} className='service-card'>
              <h2>Serviço: {service.name}</h2>
              <p>Descrição: {service.description}</p>
              <p>Preço: {service.price} R$</p>
              <img src={service.image} alt={service.image} />
              <button className='edit-services-btn'>Editar</button>
              <button className='delete-services-btn'>Excluir</button>
            </div>
          )) : <p>Carregando...</p>}
        </div>
    </div>
  )
}

export default AdminPanel