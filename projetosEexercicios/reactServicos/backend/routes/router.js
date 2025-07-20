const router = require("express").Router()

const usersServer = require("./users")

router.use("/", usersServer)

module.exports = router