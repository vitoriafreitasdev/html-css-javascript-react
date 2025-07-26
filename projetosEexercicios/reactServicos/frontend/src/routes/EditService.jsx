/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import "./EditService.css"
import programFetch from '../axios/config'
import useToast from '../hooks/useToast'

const EditService = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [serviceName, setServiceName] = useState("")
    const [serviceDescription, setServiceDescription] = useState("")
    const [servicePrice, setServicePrice] = useState("")
    const [serviceImage, setServiceImage] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const serviceUptade = {
                name: serviceName,
                description: serviceDescription,
                price: servicePrice,
                image: serviceImage
            }

            const res = await programFetch.put(`/service/${id}`, serviceUptade)
            if (res.status === 200) {
                useToast(res.data.msg)
            }
            navigate("/administration")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='admin-container edit'>
        <h1>Atualize os dados do serviço.</h1>
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
            <input type="submit" className='add-services-btn' value="Editar o serviço" />
        </form>
    </div>
  )
}

export default EditService