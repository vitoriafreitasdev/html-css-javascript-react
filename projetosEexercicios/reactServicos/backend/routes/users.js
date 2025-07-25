
const router = require("express").Router()
const jwt = require('jsonwebtoken')
const userController = require("../controllers/userController")

require("dotenv").config(); 
const secret = process.env.SECRET

const checkToken = (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(" ")[1]

        if(!token){
            return res.status(401).json({msg: "Acesso negado!"})
        }
        try {
            jwt.verify(token, secret)
            next()
        } catch (error) {
            console.log(error)
            res.status(400).json({msg: "Token inválido!"})
        }
}

router.route("/cadastro").post((req, res) => userController.register(req, res))
router.route("/login").post((req, res) => userController.login(req, res))
router.route("/user/:id").get(checkToken, (req, res) => userController.userRoute(req, res))
router.route("/user/addServices/:id").put((req, res) => userController.addServices(req, res));
router.route("/user/deleteUserServices/:id").delete((req, res) => userController.deleteUserService(req, res));




module.exports = router;