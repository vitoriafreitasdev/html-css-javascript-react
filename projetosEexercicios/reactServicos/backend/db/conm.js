const mongoose = require("mongoose");
require("dotenv").config(); 
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

async function main() {
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.1fcdfnl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Conectado ao banco")
    } catch (error) {
        console.log(error)
    }
}

module.exports = main
 
