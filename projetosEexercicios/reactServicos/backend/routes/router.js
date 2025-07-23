const router = require("express").Router()

const usersServer = require("./users")

router.use("/", usersServer)

const serviceServer = require("./services")

router.use("/", serviceServer)

module.exports = router