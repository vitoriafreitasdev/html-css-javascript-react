/* eslint-disable no-unused-vars */
import { useState, useCallback } from "react"
import Search from "./Search"

import ListTest from "./ListTest"
const allUsers = [
      'john',
      'alex',
      'george',
      'simon',
      'james'
    ]

const HookUseCallbackTest = () => {
    const [count, setCount] = useState(0)
    const getItems = useCallback(() => {
        return  [
            { id: 1, nome: "João", idade: 12 },
            { id: 2, nome: "Maria", idade: 16 },
            { id: 3, nome: "Marcelo", idade: 25 },
            { id: 4, nome: "Junior", idade: 18 },
            { id: 5, nome: "Gabriela", idade: 45 }
        ]
    }, [])

    // tuturial video

    const [users, setUsers] = useState(allUsers)

    function shuffle(array) {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Troca moderna
      }
      return newArray; // Retorna o novo array embaralhado
    }

    const handleSearch = useCallback((text) => {
      console.log(users[0])
      const filteredUsers = allUsers.filter((user) => user.includes(text))
      setUsers(filteredUsers)
    }, [users])

    
    

  return (
    <div>
        <h2>useCallback</h2>
        <ListTest getItems={getItems}/>
        <button onClick={() => setCount(count + 1)}>Alterar</button>
        <p>{count}</p>

        {/* Turial Video */}

        <div>
          <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
          
          <Search handleSearch={handleSearch}/>
        </div>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
    </div>
  )
}

export default HookUseCallbackTest