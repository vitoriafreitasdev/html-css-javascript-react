import { useFetch } from "../hooks/useFetch"

import { useParams, Link  } from "react-router-dom"

const Product = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/products/" + id;
    const { data: item, loading, error } = useFetch(url);
  return (
    <div>
        <p>ID: {id}</p>
        <p>{error && <p>Ocorreu um erro!</p>}</p>
        <p>{loading && <p>Loading...</p>}</p>
    
        <p>{item && (
            <p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <Link to={`/products/${item.id}/info`}>Mais detalhes</Link>
            </p>
        )}</p>

    </div>
       
  )

  // terminar de fazer e configurar no main, dps fazer o info component
}

export default Product

