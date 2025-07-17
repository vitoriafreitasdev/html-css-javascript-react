 // pizza treino logico 

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

// hash table

class HashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size  
  }

  hash(key){
    let total = 0
    for(let i = 0; i < key.length; i++){
      total += key.charCodeAt(i)
    }
    return total % this.size
  }  

  set(key, value){
    const index = this.hash(key)
    //this.table[index] = value
    const bucket = this.table[index]
    if(!bucket) {
      this.table[index] = [[key, value]]
    } else {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem) {
        sameKeyItem[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }

  get(key) {
    const index = this.hash(key)
   // return this.table[index]
   const bucket = this.table[index]
   if (bucket) {
    const sameKeyItem = bucket.find(item => item[0] === key)
    if(sameKeyItem) {
      return sameKeyItem[1]
    }
   }
   return undefined
  }

  remove(key) {
    const index = this.hash(key)
    // this.table[index] = undefined
    const bucket = this.table[index]
    if(bucket){
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1)
      }
    }
  }

  display(){
    for(let i = 0; i < this.table.length; i++){
      if(this.table[i]){
        console.log(i, this.table[i])
      }
    }
  }
}

const table = new HashTable(50)


table.set("name", "Bruce")
table.set("age", 25)
table.display()

console.log(table.get("name"))

table.set("mane", "Clark")
table.set("name", "Diana")
table.remove("name")
table.display()
