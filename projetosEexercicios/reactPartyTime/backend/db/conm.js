// importa o mongoose
const mongoose = require("mongoose");

async function main() {
    //para fazer a conexão com o banco de dados
    try{
        //para evitar um erro no mongoose
        mongoose.set("strictQuery", true);

        await mongoose.connect(
        "mongodb+srv://vitoria:QZqaZBmDverhwW37E@cluster0.m8qk4l1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Conectado ao banco")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}
module.exports = main;

// QZqaZBmDverhwW37E

//mongodb+srv://vitoria:<db_password>@cluster0.m8qk4l1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//npm install mongodb

// https://cloud.mongodb.com/v2/68755fc4daf4243e6ddd24b0#/overview