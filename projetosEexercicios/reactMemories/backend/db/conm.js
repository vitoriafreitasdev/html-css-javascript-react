const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.ft4hvmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log("Conectado com sucesso!")
}

main().catch((err) => console.log(err))

module.exports = main;