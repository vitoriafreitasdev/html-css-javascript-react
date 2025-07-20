const email = "vitoriagmail.com"

const emailVerificacao = email.includes("@")
const emailVerificacao2 = email.includes(".")

if(emailVerificacao && emailVerificacao2){
    console.log("permitido")
} else {
    console.log("não permitido")
}

