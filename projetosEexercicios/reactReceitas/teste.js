const email = "vitoria@gmail.com"
const temEspaco2 = (str) => str.includes(" ")
const emailVerfication = email.includes("@")
const emailVerfication2 = email.includes(".")
if(email.length <= 254 && !temEspaco2(email) && emailVerfication && emailVerfication2){
    console.log("permitido")
} else{
    console.log("não permitido")
}