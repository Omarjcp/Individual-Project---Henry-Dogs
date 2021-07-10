const { Router } = require('express');
const router = Router();

const { obtenerRazas } = require('../controllers/dogs.controlador')

// Configurar los routers 'dogs'
router.get('/', obtenerRazas)


module.exports = router;