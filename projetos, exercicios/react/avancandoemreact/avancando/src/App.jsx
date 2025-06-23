
import './App.css'
//img em assets
import estrada from './assets/img2.jpg'

// useState
import Data from "./components/Data"

// renderizacao de lista
import ListRender from './components/listRender'

// render conditional 
import ConditionalRender from './components/ConditionalRender'

// props 
import ShowUserName from './components/showUserName'

// desestruturando props
import CarDetails from './components/CarDetails'

// Fragments
import Fragment from './components/Fragment'

// children
import Container from './components/Container'

// funcao em prop
import ExecuteFunction from './components/ExecuteFunction'

// state lift
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

// renderização de listas com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km:0},
  {id: 2, brand: "KIA", color: "Branco", km:200000},
  {id: 3, brand: "Renault", color: "Azul", km: 32000}

]
function App() {
  
  // funcao em prop
  function showMessage(){
    console.log("Evento do componente pai")
  }

  // state lift 
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  
  return (
    <div className='App' style={{paddingBottom: "500px"}}>
      <h1>Avançando em React </h1>
      {/* img em public*/}
      <img src="/img1.jpg" alt="Alguma imagem" />
      {/* img em assets*/}
      <img src={estrada} alt="Outra imagem" />
      {/* useState*/}
      <Data/>
      {/* ListRender*/}
      <ListRender/>
      {/*ConditionalRender*/}
      <ConditionalRender/>
      {/*Props*/}
      <ShowUserName name="Vitória"/>
      {/*desestruturando props*/}
      <CarDetails brand="VW" km={1000} color="Vermelho"/>
      {/*reaproveitamento de componentes*/}
      <CarDetails brand="Fiat" km={12000} color="Branco"/>
      <CarDetails brand="Honda" km={20000} color="Azul"/>
      {/*renderização de lista com componente*/}
      {cars.map((car) => (
        <CarDetails 
        key={car.id} brand={car.brand}
        color={car.color} km={car.km}
        />
      ))}
      {/*Fragment*/}
      <Fragment/>
      {/*Container*/}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <h2>Teste</h2>
        <p>Meu Container</p>
      </Container>
      {/* funcao em prop */}
      <ExecuteFunction myFunction={showMessage}/>
      {/*state lift*/}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
      
    </div>
  )
}

export default App
