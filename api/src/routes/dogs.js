const { Router } = require('express');
const router = Router();

const { obtenerRazas, obtenerRazaId } = require('../controllers/dogs.controlador')

// Configurar los routers 'dogs'
router.get('/', obtenerRazas)
router.get('/:idRaza', obtenerRazaId)


module.exports = router;