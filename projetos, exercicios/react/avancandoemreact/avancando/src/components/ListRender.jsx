import {useState} from 'react'

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias", "Matheus"])
  
  const [users, setUsers] = useState([
    {id: 1, name: "Matheus", age:31},
    {id: 2, name: "Pedro", age: 20 },
    {id: 3, name: "João", age: 19}
  ]) 

  const [usuarios, setUser] =  useState([
    {id: 1, name: "Mariana", age: 19},
    {id: 2, name: "Joana", age: 30},
    {id: 3, name: "Luana", age: 22} 
  ])
  
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => 
        prevUsers.filter((user) => randomNumber !== user.id)
    )
  }

  const deletar = () => {
    const numAleatorio = Math.floor(Math.random() * usuarios.length)

    setUser((prevUsers) => 
      prevUsers.filter((usuario) => numAleatorio !== usuario.id) 
    ) 
  }

  return (
    <div>
        {/* render sem key, metodo nao aconselhável */}
        <ul>
            {list.map((item, i) =>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* render com key*/}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        {/* previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
        <ul>
          {usuarios.map((usuario) =>(
            <li key={usuario}>
              {usuario.name} - {usuario.age} anos
            </li>
          ))}
        </ul>
        <button onClick={deletar}>Deletar um</button>
    </div>
  )
}

export default ListRender