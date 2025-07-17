
const router = require("express").Router()

// Services router 
const servicesRouter = require("./services")

// todas as rotas q vai vim do serviço
router.use("/", servicesRouter)

// Parties routes
const partyRouter = require("./parties")

router.use("/", partyRouter)

module.exports = router;