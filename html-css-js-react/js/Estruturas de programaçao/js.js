// variaveis

/* let a = 2, b = 3, c = 5
const d = 2 // const nao vai atribuir outro valor, nao muda


console.log(a, b, c) 




// prompt e alert

const age = prompt("Digite a sua idade")

window.alert(`voce tem ${age} anos`)



// math

console.log(Math.max(5, 2 , 4, 7))
console.log(Math.floor(5.14))
console.log(Math.ceil(5.14))

// console

console.error("erro!")
console.warn("aviso!")

// if

const user = "João"

if (user === "João"){
    console.log("ola, João ")
}

// if else

const loggedIn = false

if(loggedIn) {
    console.log("Está autenticado")
} else{
    console.log("Não está autenticado")
}

const q = 10
const w = 15

if(q > 5 && w > 20){
    console.log("true")
} else{
    console.log("false")
}

*/

/*
const n2 = parseFloat(prompt("digite outro numero:"))
const op = prompt("escolha um deles (* / + -);")


if (op === "+") {
    const res = n1 + n2;
    console.log(`Resultado: ${res}`)
}
else if(op === "*"){
    const res = n1 * n2
    console.log(`resultado: ${res}`)
} else if (op === "/"){
    const res = n1 / n2
    console.log(`resultado: ${res}`)
} else if (op === "-"){
    const res = n1 - n2
    console.log(`resultado: ${res}`)
} else if (op === "+"){
    const res = n1 + n2
    console.log(`resultado: ${res}`)
}else{
    alert("valores invalidos")
}

*/

/*

// while

let p = 0;

while (p <= 5){
    console.log(`Repetindo ${p}`)
    p++
}


let o = 10

do {
    console.log(`Valor de o: ${o}`)
    o--
}while (o >= 1)

*/
// for
/*
for (let t = 1; t <= 3; t++){
    console.log(`repetindo algo...${t}`)
}

r = 10

for(r; r > 0; r = r - 1){
    console.log(`r = ${r}`)
}

*/
/*

// adivinhar numero


let valor = Math.floor(Math.random()*10) + 1
let res = parseInt(prompt("Tente adivinhar o número secreto entre 1 e 10:"))

while(res != valor){
    res = parseInt(prompt("Errado! Tente novamente:"))
}

alert("Parabéns! Você acertou!")

*/
/*
// tabuada

let num = parseFloat(prompt("escreva o numero da tabuada:"))

for( let t = 1; t <= 10; t++){
    let res = num * t
    console.log(`${num} x ${t} = ${res}`)
}
*/

// identação 
/*
for (let u = 0; u < 10; u++){
    if(u * 2 > 10) {
        console.log(`maior que 10! ${u}`)
    } else {
        if (u / 2 === 0){
            console.log("deu 0")
        }
    }
        
}

// break 

for (let g = 20; g > 10; g--){
     console.log(`O valor de g é: ${g}`)

     if (g === 15){
        console.log("O g é 15!")
        break
     }
}
*/

// continue

/*

for(let s = 0; s < 10; s = s + 1){
    if (s % 2 === 0){
        console.log("Número par!")
        continue
    }

    console.log(s)
}
*/

// switch
/*
const job = prompt("Qual é sua profissão?")

switch (job){
    case "Programador":
        alert("voce é um programador")
        break
    case "Advogado":
        alert("voce é um advogado")
        break
    case "Engenheiro":
        alert("voce é um engenheiro")
        break
    default:
        alert("Profissão não encontrada.")
}
*/

const nota = prompt("Digite sua nota (A, B, C, D, E, F)")

switch (nota){
    case "A":
        alert("Excelente! Parabéns!")
        break
    case "B":
        alert("Muito bom! Continue assim!")
        break
    case "C":
        alert("Bom, mas há espaço para melhorar.")
        break
    case "D":
        alert("Você passou, mas precisa estudar mais.")
        break 
    case "F":
        alert("Reprovado. Precisa se esforçar mais.")
        break
    default:
        alert("Nota invalida.")
}

