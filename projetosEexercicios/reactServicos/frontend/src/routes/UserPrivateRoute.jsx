
import { useLayoutEffect, useState} from "react"
import { useParams } from "react-router-dom"
import "./UserPrivateRoute.css"
import programFetch from "../axios/config"


const UserPrivateRoute = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null)

    // usar  useLayoutEffect para pegar os dados do usuario antes do componente redenrizar
    useLayoutEffect(() => {
      const privateRoute = async () => {
        const res = await programFetch.get(`/user/${id}`)
        setUser(res.data.user)
        console.log(user)
        
      }
      privateRoute()
      
    }, [])
    // fazer o logged out, usa isLogged do useContext, se for false mostre o botão login, se verdadeiro mostra o de sair 
  return (
  <div>
    <div>
    {user && (
      <div key={user._id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user._id}</p>
      </div>
    )}
    </div>
  </div>
)
}

export default UserPrivateRoute

