let totalValor = 0
const produtos = [
    {name: "computador", price: 2000},
    {name: "celular", price: 1400},
    {name: "PS4", price: 3500}
]

produtos.forEach((produto) => {
    totalValor = produto.price + totalValor
})

console.log(totalValor)