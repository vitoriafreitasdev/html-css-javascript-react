/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import partyFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import useToast from "../hook/useToast";

import './Party.css'


const Party = () => {
    const { id } = useParams();

    const [party, setParty] = useState(null)

    const navigate = useNavigate()

    // Load party
    useEffect(() => {

        const loadParty = async () => {
            const res = await partyFetch.get(`/parties/${id}`)

            console.log(res.data)

            setParty(res.data)
        }

        loadParty()
    }, [])

    // Delete this party

    const  handleDelete = async () => {
        const res = await partyFetch.delete(`/parties/${id}`)

        if (res.status === 200){
            navigate("/")

            useToast(res.data.msg)
        }

    }

    if(!party) return <p>Carregando...</p>

  return (
    <div className="party">
        <h1>{party.title}</h1>
        <div className="actions-container">
            <Link to={`/party/edit/${party._id}`} className="btn">Editar</Link>
            <button className="btn-secondary" onClick={handleDelete}>Excluir</button>
        </div>
        <p>Orçamento: R${party.budget}</p>
        <h3>Serviços contratados:</h3>
        <div className="services-container">
            {party.services.map((service) => (
                <div className="service" key={service._id}>
                    <img src={service.image} alt={service.name} />
                    <p>{service.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Party