const mongoose = require("mongoose")
require("dotenv").config()
const dbConection = process.env.DB_CONECTION

async function main() {
    try{
        mongoose.set("strictQuery", true)

        await mongoose.connect(`${dbConection}`)
        console.log("Conectado ao banco")
    } catch(error) {
        console.log(error)
    }
}

module.exports = main