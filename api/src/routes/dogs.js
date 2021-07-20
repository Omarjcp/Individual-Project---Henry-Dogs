const { Router } = require("express");
const router = Router();

const {
  obtenerRazas,
  obtenerRazaId,
  obtenerOrdenado,
} = require("../controllers/dogs.controlador");
const obtenerPorTemperamento = require("../controllers/razasPorTemper.controlador");

// Configurar los routers 'dogs'
router.get("/", obtenerRazas);
router.get("/orden", obtenerOrdenado);
router.get("/temp", obtenerPorTemperamento);
router.get("/:idRaza", obtenerRazaId);

module.exports = router;
