import { useState,  } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
const url = "http://localhost:3000/products"
// 
function App() {
  // resgatando dados
 // const [products, setProducts] = useState([])

  // custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)
  //useEffect(() =>{
    //async function getData() {
      //const res = await fetch(url);
      //const data = await res.json()
      
     // setProducts(data)
   // }

  //  getData()
  //}, [])

  // envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
      
    const product = {
       name,
       price,
     }

    // refatorando 
    httpConfig(product, "POST")

  
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // // carregamento dinamico
    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])
  }

  return (
    <div className='App'>
      <h1>HTTP em React</h1>
      {/* loading */}
      {loading && <p>Carregando...</p>}
      {/* Tratando erros */}
      {error && <p>{error}</p>}
      {/* resgate de dados */}
       <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}  
            </li>
          ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            <span>Preço</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* <input type="submit" value={"Enviar"}/> */}
          {/* loading post */}
          {loading && <input type='submit' disabled value="Aguarde"></input>}
          {!loading && <input type='submit' value="Criar"></input>}
        </form>
      </div>
    </div>
  )
}

export default App
