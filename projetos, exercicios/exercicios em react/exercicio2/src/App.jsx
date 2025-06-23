//'https://jsonplaceholder.typicode.com/users'
import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import  SearchForm  from './components/SearchForm'
function App() {

  


    // useEffect(() => {
    //  async function getData() {
    //    const res = await fetch(url)
    //    const data = await res.json()

    //    setDados(data)
   
    //  }
    //  getData()
    // }, [])

    

  return (
    <div>
      <Navbar/>
      <SearchForm/>
      <Outlet/>
     
    </div>
  )
}

  


export default App