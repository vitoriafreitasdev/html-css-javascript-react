// array
/*
const lista = [1, 2, 3, 4 , 5]

console.log(lista)

console.log(typeof lista)

const itens = ["Matheus", true, 2, 4.12, []]

console.log(itens)

// mais sobre array

const arr = ["a", "b", "c", "d"]

console.log(arr[0])
console.log(arr[2])

// propriedades 

const numbers = [5, 3, 4]

console.log(numbers.length)

console.log(numbers["length"]) 

const myName = "Matheus"

console.log(myName.length)

// métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = "algum texto"

console.log(text.toUpperCase())

console.log(text.indexOf("g"))

// objetos

const person = {
    name: "Matheus",
    age: 31,
    job: "Programador"
}


console.log(person)

console.log(person.name)

console.log(person.name.length)

console.log(typeof person)
*/
// criando e deletando propriedades
/*

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)

// mais sobre objetos

const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object)

const obj2 = {
    c:[]
}

Object.assign(obj2, obj)

console.log(obj2)


// conhecendo melhor os objetos

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))

*/

// mutacao
/*
const a ={
    name: "Matheus"
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age= 31

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// loops em arrays

const users = ["Marcos", "João", "Pedro", "Miguel",]

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`)  
}

// push and pop

const array = ["a", "b", "c"]

array.push("d")

console.log(array)
console.log(array.length)

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

array.push("z", "x", "y")

console.log(array)

*/

// exercicio praticos 
// soma vetor
/*
function somaVetor(numeros){
    soma = 0
    for (let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i]
    }
    return soma
}

//const numeros =  [1, 2, 3, 4, 5]
const resultado = somaVetor([1, 2, 3, 4, 5]) // (numeros)

console.log(`O resultado da soma é igual a ${resultado}`)
*/
// apenas pares 
/*

function apenasPares(pares){
   return{
    pares: function(){
        let resultado = []
        for (let i = 0; i < pares.length; i++){
            if (pares[i] % 2 === 0){
                resultado.push(pares[i])
            }
        }
        return `Pares: ${resultado.join(", ")}`;
    },
    
    todos: function(){
        for (let i = 0; i < pares.length; i++){
            return `Todos: ${pares.join(", ")}`;
           }
       }
   }
   
}

const par = apenasPares([2, 3, 4, 5, 6])

console.log(par.pares())
console.log(par.todos())
*/

// exercicio pratico para objetos
// carro
/*
const carro = {
    modelo: "Corolla",
    marca: "Toyata",
    ano: 2020,
    cor: "Prata",
    ligado: false,

    ligar() {
        this.ligado = true
        console.log("Carro foi ligado")
    },
    
    desligar(){
        this.ligado === false
        console.log("Carro foi desligado")
        
    }
}


// Exibindo as propriedades do carro
console.log("Informações do carro:");
console.log(`Marca: ${carro.marca}`);
console.log(`Modelo: ${carro.modelo}`);
console.log(`Ano: ${carro.ano}`);
console.log(`Cor: ${carro.cor}`);
console.log(`Está ligado? ${carro.ligado ? "Sim" : "Não"}`);



// Ligando e desligando o carro
carro.ligar();
carro.desligar();

*/
// cadastro de usuario
/*
let cadastro = {
    nome: "Vitória",
    idade: 21,
    email: "vitoria@gmail.com",

    apresentar: function(){
        console.log(`idade: ${this.idade}, nome: ${this.nome}`)
    }
}

console.log(cadastro)
cadastro.apresentar()

cadastro.idade = 22
cadastro.apresentar()
*/

// shift e unshift
/*
const letters = ["a", "b", "c"]
const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("p", "q", "r")
letters.unshift("z")

console.log(letters)

// indexOf e lastInOf

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("Abacate")]) 

console.log(myElements.lastIndexOf("Abacate"))
console.log(myElements.lastIndexOf("Mamão")) // retorna -1
console.log(myElements.indexOf("Mamão")) // retorna -1
*/

// slice
/*
const testeSlice = ["a", "b", "c", "d", "e", "f"]
 
const subArray = testeSlice.slice(2, 4)

console.log(subArray)

console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3) // retorna lista vazia "[]"

const subArray4 = testeSlice.slice(2)

console.log(subArray4) */


// exercicio pratico slice

// Exercício: Pegando Parte de uma Frase

const frase = "JavaScript é muito divertido!"

const primeiraPalavra = frase.slice(0, 10)
const ultimaPalavra = frase.slice(-10, -1)

console.log(primeiraPalavra)
console.log(ultimaPalavra)

// Exercício: Manipulando Arrays com slice

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const primeiros = numeros.slice(0, 2+1)
console.log(primeiros)

const indice4a7 = numeros.slice(4, 8)
console.log(indice4a7)

const ultimos = numeros.slice(-3) // (7, 10)
console.log(ultimos)