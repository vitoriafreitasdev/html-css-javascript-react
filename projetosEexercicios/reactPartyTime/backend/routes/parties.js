
const router = require("express").Router(); // como a gente acessa esse recurso que queremos controlar. Cada rota vai ser uma funcionalidade

const partyController = require("../controllers/partyController");

// funções

router.route("/parties").post((req, res) => partyController.create(req, res))

router.route("/parties").get((req, res) => partyController.getAll(req, res))

router.route("/parties/:id").get((req, res) => partyController.get(req, res))

router.route("/parties/:id").delete((req, res) => partyController.delete(req, res))

router.route("/parties/:id").put((req, res) => partyController.update(req, res))

module.exports = router;