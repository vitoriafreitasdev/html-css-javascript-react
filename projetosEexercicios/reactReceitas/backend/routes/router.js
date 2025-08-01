const router = require("express").Router()

const siteServer = require("./site")

router.use("/", siteServer)

module.exports = router