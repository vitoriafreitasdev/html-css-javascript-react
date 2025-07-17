
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <div className='App'>
      <h1>form em React</h1>
      <MyForm user={{ name: "Josias", email: "josias@hotmail.com" }}/>
    </div>
  )
}

export default App
