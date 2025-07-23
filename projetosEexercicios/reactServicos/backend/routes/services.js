const router = require("express").Router()
const serviceController = require("../controllers/serviceController")

router.route("/service").post((req, res) => serviceController.create(req, res))
router.route("/service").get((req, res) => serviceController.getAll(req, res))
router.route("/service/:id").get((req, res) => serviceController.get(req, res))
router.route("/service/:id").delete((req, res) => serviceController.delete(req, res))
router.route("/service/:id").put((req, res) => serviceController.update(req, res))



module.exports = router