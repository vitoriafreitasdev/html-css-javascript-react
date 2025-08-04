

const router = require("express").Router()
const jwt = require("jsonwebtoken")
const siteController = require("../controllers/siteController")

const secret = process.env.SECRET

const upload = require("../helpers/upload")

require("dotenv").config()

const checkToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({msg: "Acesso negado!"})
    }
    try {
        const decoded = jwt.verify(token, secret)
        req.userId = decoded.id
        next()
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: "Ocorreu um erro."})
    }
}
router.route("/cadastro").post((req, res) => siteController.register(req, res))
router.route("/login").post((req, res) => siteController.login(req, res))
router.route("/user/:id").get(checkToken, (req, res) => siteController.userRoute(req, res))
router.route("/user/addRecipes")
  .post(checkToken, upload.single("image"), (req, res, next) => {
    const image = req.file;
    
    if(!image) {
      return res.status(400).json({msg: "Por favor, envie um arquivo."});
    }
    
    next();
  }, siteController.addRecipes);

router.route("/receitas").get((req, res) => siteController.getRecipes(req, res))
router.route("/receitas/:id").get((req, res) => siteController.getRecipe(req, res))
router.route("/receitas/delete/:id")
  .delete(checkToken, siteController.deleteRecipe);
router.route("/user/editrecipes/:id").patch(checkToken, upload.single("image"), (req, res, next) => {
    const image = req.file;
    
    if(!image) {
      return res.status(400).json({msg: "Por favor, envie um arquivo."});
    }
    
    next();
  }, siteController.uptadeRecipe)
router.route("/receitas/addlike/:id").patch((req, res) => siteController.addLike(req, res))
router.route("/receitas/addcomment/:id").patch((req, res) => siteController.addComents(req, res))
router.route("/users").get((req, res) => siteController.getUser(req, res))
module.exports = router