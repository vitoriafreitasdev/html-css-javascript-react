// 1 -numbers
let x: number = 10

console.log(x)

x = 16 

console.log(typeof x)

const y:number = 15.542523

console.log(typeof y)
console.log( y)
console.log(y.toPrecision(3))
//console.log(y.toUpperCase()) => esse tipo de metodo não existe para tipos numericos


// 2 - string
const firstName: string = "Matheus"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Battisti"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - boolean 
let a: boolean = false 

console.log(a)
console.log(typeof a)

a = true 

console.log(a)

// 4 - anotation nos colocamos o tipo
let ann: string = "Teste"
// inference o typescript coloca para a gente
let inf = "Teste"

// ann = 1
// inf = 1

console.log("testando")