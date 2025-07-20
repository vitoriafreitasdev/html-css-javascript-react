const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const conn = require("./db/conm.js");
conn();

const routes = require("./routes/router.js")
app.use("/api", routes)

app.listen(3000, function(){
    console.log("Servidor online")
})


