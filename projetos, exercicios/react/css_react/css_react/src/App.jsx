import './App.css'

// css  de componente
import MyComponents from './components/MyComponents' 

function App() {
  return (
    <div className='App'>
      {/* css global */}
      <h1>CSS no React</h1>
      {/* css de componente */}
      <MyComponents/>
      <p>Pegou o CSS do componente</p>
    </div>
  )
}

export default App
