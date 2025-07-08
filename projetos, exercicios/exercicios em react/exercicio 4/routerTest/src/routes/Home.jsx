import { useState } from 'react'

import { useFetch } from '../hooks/useFetch'

const Home = () => {
    const url = "http://localhost:3000/products"
      const {data: items, httpConfig, loading, error} = useFetch(url)
      const [name, setName] = useState("")
      const [price, setPrice] = useState()
      const handleSubmit = (e) => {
        e.preventDefault()
        let product = {
          name: name,
          price: price
        }
    
        httpConfig(product, "POST")
      }
  return (
    <div><h1>Produtos disponiveis:</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <div>
        {items && items.map((item) => (
          <li key={item.id}>
           Nome: {item.name} - Preço: {item.price}
          </li>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome do Item' onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='Preço do Item' onChange={(e) => setPrice(e.target.value)}/>
        
        {loading && <input type="submit" disabled value="Aguarde"/>}
        {!loading && <input type="submit" value="Criar"/>}
      </form></div>
  )
}

export default Home