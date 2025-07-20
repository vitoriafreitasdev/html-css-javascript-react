
const router = require("express").Router()

const userController = require("../controllers/userController")

router.route("/login").post((req, res) => userController.register(req, res))

module.exports = router;