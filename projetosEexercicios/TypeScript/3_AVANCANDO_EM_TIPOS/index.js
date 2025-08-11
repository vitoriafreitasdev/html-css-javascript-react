// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["Camila", "Mario"];
// nomes.push(4)
// 2 - outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// nums.push("teste")
console.log(nums[0]);
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "Vitória" }];
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("4", "5")
// 5 - retorno de função
function greeting(name) {
    // return 5
    return `Olá ${name}`;
}
console.log(greeting("Mike"));
// console.log(greeting(123))
// 6 - funcao anonina
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("x coordinates: " + coord.x);
    console.log("y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// passCoordinates(1, 1)
passCoordinates({ x: 43.4, y: 76.3 });
// passCoordinates({nome: 1, sobrenome: 2})
const pessoaObj = { nome: "Nala", surname: "Scar" };
// props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
//  9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Joaquim", "Marques"));
console.log(advancedGreeting("Mariana"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance("500");
showBalance(500);
const arr2 = [1, "teste", true];
// 11 - avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("admin"));
function showId(id) {
    console.log(`O id é: ${id}`);
}
showId(5457737);
showId("5457737");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y:${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Kalel", age: 20 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15 - literal types => valores como tipos
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(direction);
}
showDirection("left");
// showDirection("top")
// 16 - non null assertion
const p = document.getElementById("some-p");
console.log(p.innerText);
p.innerText = "Outra coisa";
console.log(p.innerText);
// 17 - bigint
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18 - symbol => da uma referencia unica para um valor 
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
export {};
//# sourceMappingURL=index.js.map