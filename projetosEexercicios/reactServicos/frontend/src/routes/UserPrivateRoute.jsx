/* eslint-disable react-hooks/rules-of-hooks */


import { useLayoutEffect, useState} from "react"
import { useParams, NavLink } from "react-router-dom"
import programFetch from "../axios/config"
import useToast from "../hooks/useToast"

import "./UserPrivateRoute.css"
import AddServices from "./AddServices"



const UserPrivateRoute = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    // usar  useLayoutEffect para pegar os dados do usuario antes do componente redenrizar
    useLayoutEffect(() => {
      const privateRoute = async () => {
        const res = await programFetch.get(`/user/${id}`)
        setUser(res.data.user)
        
      }
      privateRoute()
      
    }, [user, id])

    const handleDelete = async (servId) => {
      try {
          const res = await  programFetch.delete(`/user/deleteUserServices/${id}`, {
            data: { serviceId: servId } 
          }) // precisa do data por ser um delete
      
          console.log(res.status.msg)

          if(res.status === 200){
            useToast(res.data.msg);
            setUser(prev => ({
            ...prev,
            services: prev.services.filter(s => s._id !== servId)
          }));
          }
      } catch (error) {
        console.log(error)
      }
    
      
    }
    
  return (
      <div>
          {user?._id === "68839c7f6c586bbc21280f9f" ? <buttom className="adminPanel-btn"><NavLink to="/administration" className="admin-link">Painel administrativo</NavLink></buttom> : ""}
          <div className="div-container">
          {user && (
            <div key={user._id} className="user-div">
              <h2>Proprietário: {user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Orçamento: {user.budget}</p>
              <p>Seu carro logado: </p>
              <p><img src={user.image} alt={user.image} className="user-image"/></p>
              <p>Serviços contratados:</p>
              <div className="service-div">{user.services.map((service) => (
                <div key={service._id}>
                  <p>Nome: {service.name}.</p>
                  <p>Preço: {service.price} R$</p>
                  <p>Descrição: {service.description}</p>
                  <img src={service.image} alt={service.name} className="service-image"/> 
                  <div className="btn-div">
                    <button className="btn-delete" onClick={() => handleDelete(service._id)}>Excluir</button>
                  </div>
                </div>
              ))}</div>
            </div>
          )}
          <h3>Para adicionar clique no botão abaixo!</h3>
              <AddServices id={id} user={user}/>
          </div>
      </div>
)
}

export default UserPrivateRoute

