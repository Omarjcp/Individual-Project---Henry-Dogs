const { Router } = require('express');
const router = Router();

const { crearRaza } = require('../controllers/crearDog.controleador.js')

// Configurar los routers 'dogs'
router.get('/', crearRaza)


module.exports = router;