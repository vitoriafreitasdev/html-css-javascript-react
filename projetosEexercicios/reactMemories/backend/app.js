const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
// para fazer a pasta public visivel no frontend
app.use(express.static("public"))

require("./db/conm")

const port = 3000

const memoryRoutes = require("./routes")

app.use("/memories", memoryRoutes)

app.listen(port, async () => {
    console.log(`O servidor iniciou na porta ${port}`)
})

