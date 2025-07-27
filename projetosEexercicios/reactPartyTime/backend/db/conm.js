// importa o mongoose
const mongoose = require("mongoose");
require("dotenv").config()
const dbUser = process.env.DBUSER
const dbPassword = process.env.DBPASS
async function main() {
    //para fazer a conexão com o banco de dados
    try{
        //para evitar um erro no mongoose
        mongoose.set("strictQuery", true);

        await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.m8qk4l1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

        console.log("Conectado ao banco")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}
module.exports = main;
