const { Router } = require("express");
const router = Router();

const crearRaza = require("../controllers/crearDog.controleador.js");

// Configurar los routers 'dog'
router.post("/", crearRaza);
// router.post("/crearTemperamento", crearTemperamento)

module.exports = router;
