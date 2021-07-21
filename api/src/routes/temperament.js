const { Router } = require("express");
const router = Router();

const {
  obtenerTemperamento,
  temperamentosDeApi,
} = require("../controllers/obtenerTemperamentos.controlador.js");

// Configurar la ruta de temperament
router.get("/", obtenerTemperamento);
router.get("/crearTemps", temperamentosDeApi);

module.exports = router;
