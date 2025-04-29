// 4 - template expression

const TemplateExpression = () => {
    const name = "Vitória"
    const data = {
        age: 21,
        job: "Programadora"
    }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vinda, {name}</h3>
        <p>Sua idade é {data.age} anos, você é uma {data.job}</p>
    </div>
    
  )
}

export default TemplateExpression