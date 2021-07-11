const { Router } = require('express');
const router = Router();

const obtenerTemperamento = require('../controllers/obtenerTemperamentos.controlador.js')

// Configurar la ruta de temperament
router.get('/', obtenerTemperamento)


module.exports = router;