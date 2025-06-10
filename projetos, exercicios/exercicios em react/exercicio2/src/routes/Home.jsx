import {Link} from "react-router-dom"
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
const url = "http://localhost:3000/products"

const Home = () => {
  
  const {data: items, httpConfig, loading, error} = useFetch(url)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

   const criar = async (e) =>{
    e.preventDefault()
    const produto = {
      name,
      price
    }

    httpConfig(produto, "POST")
  }
    
  return (
    <div>
        <h1>Home</h1>
        
        <p>Dados:</p>

        <ul className="products">
          {items &&
            items.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>R$: {product.price}</p>
                <Link to={`/products/${product.id}`}>Detalhes</Link>
              </li>
            ))}
      
      </ul>
        <form onSubmit={criar}>
          <label>
            <span>name do produto: </span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span>Preço do produto: </span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            {loading && <input type='submit' disabled value="Aguarde"></input>}
            {!loading && <input type='submit' value="Criar"></input>}
          </label>
          {loading && <p>Carregando...</p>}
          {error && <p>{error}</p>}
          
      </form>
    </div>
  )
}

export default Home