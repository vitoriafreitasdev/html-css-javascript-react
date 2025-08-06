

// 1 - arrays 
let numbers: number[] = [1,2,3]

numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["Camila", "Mario"]

// nomes.push(4)

// 2 - outra sintaxe array 
const nums: Array<number> = [100, 200]
nums.push(300)
console.log(nums)

// nums.push("teste")
console.log(nums[0])

// 3 - any 

const arr1: any = [1, "teste", true, [], {nome: "Vitória"}]
console.log(arr1)


// 4 - parametros tipados 

function soma(a:number, b:number) {
    console.log(a + b)
}
soma(4, 5)
// soma("4", "5")

// 5 - retorno de função 

function greeting(name: string): string {
    // return 5
    return `Olá ${name}`
}

console.log(greeting("Mike"))
// console.log(greeting(123))

// 6 - funcao anonina


setTimeout(function() {
    const sallary: number = 1000
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000) 


// 7 - tipos de objeto 
function passCoordinates(coord: {x: number, y: number}) {
    console.log("x coordinates: " + coord.x)
    console.log("y coordinates: " + coord.y)

}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)
// passCoordinates(1, 1)
passCoordinates({x: 43.4, y: 76.3})
// passCoordinates({nome: 1, sobrenome: 2})

const pessoaObj: {nome: string, surname: string} = {nome: "Nala", surname: "Scar"}

// props opcionais

function showNumbers(a: number, b: number, c?: number){
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
        console.log("C: " + c)
    }
}

showNumbers(1, 2, 3)

//  9 - validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string) {
    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`

}

console.log(advancedGreeting("Joaquim", "Marques"))
console.log(advancedGreeting("Mariana"))
