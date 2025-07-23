import { useLayoutEffect, useState} from "react"
import { useParams } from "react-router-dom"
import programFetch from "../axios/config"

import "./UserPrivateRoute.css"



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
      
    }, [])
   // colocar os serviços disponiveis na home, e fazer a o usuario conseguir adicionar serviços, foto de seu carro etc dinamicamente.
  return (
      <div className="div-container">
        {user && (
          <div key={user._id} className="user-div">
            <h2>Proprietária: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Orçamento: {user.budget}</p>
            <p>Seu carro logado: </p>
            <p><img src={user.image} alt={user.image} className="user-image"/></p>
            <p>Serviços contratados:</p>
            <div>{user.services.map((service) => (
              <div key={user._id}>
                <p>Nome: {service.name}.</p>
                <p>Preço: {service.price} R$</p>
                <p>Descrição: {service.description}</p>
                <img src={service.image} alt={service.name} className="service-image"/> 
              </div>
            ))}</div>
          </div>
        )}
        </div>
)
}

export default UserPrivateRoute

