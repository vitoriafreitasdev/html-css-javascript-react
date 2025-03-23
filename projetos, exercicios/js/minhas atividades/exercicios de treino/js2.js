/* pizza treino logico */

class Pizzas{
  constructor( quantDispo, saldoDaConta){
    let pizzasDispo = quantDispo
    let saldo = saldoDaConta

    this.comprar = function(quantidade, valorDaCompra){
      if( saldo < valorDaCompra || pizzasDispo <= 0){
        console.log("Saldo insuficiente ou quantidade indisponivel")
        
      }else{
        saldo = saldo - valorDaCompra
        pizzasDispo = pizzasDispo - quantidade
        console.log(`Valor da compra: ${valorDaCompra}, saldo que restou: ${saldo}, quantidade disponiveis: ${pizzasDispo}`)
      }
    }
  }
}

const compras = new Pizzas(1, 300)
compras.comprar(1, 100)
compras.comprar(1, 100)
