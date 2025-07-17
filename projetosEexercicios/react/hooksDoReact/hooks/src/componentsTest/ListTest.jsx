import  { useEffect, useState } from 'react'

const ListTest = ({getItems}) => {
  const [items, setItems] = useState()
  useEffect(() => {
    console.log("Buscando....")
    setItems(getItems)
  }, [getItems])
  return (
    <div>
      {items && items.map((item, id) => <p key={id}>{item.nome} - {item.idade}</p>)}
    </div>
  )
}

export default ListTest