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
export {};
//# sourceMappingURL=index.js.map