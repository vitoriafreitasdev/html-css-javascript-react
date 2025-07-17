import React from 'react'

const ConditionalRender = () => {
    const x = 5

    const name = "Matheus"

  return (
    <div>
        <h3>Isso será exibido?</h3>
        {x > 2 && <p>Se x for maior que 2, sim</p>}
        {/* 8 - else */}
        <h3>Render ternário</h3>
        {name === "João" ? (
            <div>
                <p>Olá João</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender