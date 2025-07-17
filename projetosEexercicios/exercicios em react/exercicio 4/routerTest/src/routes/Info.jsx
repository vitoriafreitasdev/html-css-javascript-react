
import { useParams } from "react-router-dom"

const Info = () => {
    const {id} = useParams()
  return (
    <div>Informações: {id}</div>
  )
}

export default Info