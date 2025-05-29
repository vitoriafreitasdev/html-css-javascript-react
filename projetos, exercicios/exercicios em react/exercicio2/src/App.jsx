//'https://jsonplaceholder.typicode.com/users'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
const url = "http://localhost:3000/products"
const jsonURL = "https://jsonplaceholder.typicode.com/users"

function App() {

  const [contador, setContador] = useState(0)
  const [intervalo, setIntervalo] = useState(null)
  const [dados, setDados] = useState([])
  const {data: items} = useFetch(url)
  
  const click = () => {
    if(intervalo){
      return
    }
    const novoIntervalo = setInterval(() => {
      setContador(prevCont => prevCont + 1)
    }, 1000)

    setIntervalo(novoIntervalo)
  }
  const clickParar = () => {
   if(intervalo){
    clearInterval(intervalo)
    setIntervalo(null)
   }
  }
  useEffect(() => {
    return () => {
      if(intervalo) {
        clearInterval(intervalo)
      }
    }
   }, [intervalo])

   

    // useEffect(() => {
    //  async function getData() {
    //    const res = await fetch(url)
    //    const data = await res.json()

    //    setDados(data)
   
    //  }
    //  getData()
    // }, [])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

   const criar = async (e) =>{
    e.preventDefault()
    const produto = {
      name,
      price
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(produto)
    })
    const produtosAdicionados = await res.json()

    setDados((produtosAnterior) => [...produtosAnterior, produtosAdicionados])

   }
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={click}>Iniciar</button>
      <button onClick={clickParar}>Parar</button>
      <ul>
        <p>Dados:</p>
        {items && items.map(dado => (
          <li key={dado.id}> {dado.name} - {dado.price}</li>
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
            <input type='submit' value="Criar"></input>
          </label>
      </form>
    </div>
  )
}

  


export default App