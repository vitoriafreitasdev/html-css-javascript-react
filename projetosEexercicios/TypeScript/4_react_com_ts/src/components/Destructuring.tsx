import React from 'react'

interface Props  {
    title: string 
    content: string 
    commentsQty: number
    tags: string[]

    // 8 - enum
      category: Category 
}

export enum Category {
  JS = "JavaScript",
  TS = "TypesScript",
  G = "GO"
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários: {commentsQty}</p>
        <div>
            {tags.map((t) => (<span>#{t} </span>))}
        </div>
        <p>Categoria: {category}</p>
    </div>
  )
}

export default Destructuring