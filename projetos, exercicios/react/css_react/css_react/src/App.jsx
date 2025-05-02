import './App.css'

// css  de componente
import MyComponents from './components/MyComponents' 
import Title from './components/Title'

function App() {
  // CSS inline dinamico
  const n = 15

  // classes dinamicas
  const redTitle = true

  return (
    <div className='App'>
      {/* css global */}
      <h1>CSS no React</h1>
      {/* css de componente */}
      <MyComponents/>
      <p>Pegou o CSS do componente</p>
      {/* inline style */}
      <p style={{ color: "blue", padding:"25px", borderTop: "1px dotted blue"}}>Este elemento tem estilos inline</p>
      {/* inline style dinamico */}
      <h2 style={n > 10 ? {color: "purple"} : { color: "magenta"}}>
        CSS dinâmico
      </h2>
      <h2 style={n > 20 ? { color: "purple"} : {color: "magenta"}}>
        CSS dinâmico
      </h2>
      {/* classes dinamicas */}
      <h1 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe
      </h1>
      {/* css module */}
      <Title/>
    </div>
  )
}

export default App
