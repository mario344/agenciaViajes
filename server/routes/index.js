const express = require('express');
const router = express.Router();

const { render } = require('pug');
const nosotrosController = require('../controllers/nosotrosController');

const homeController = require('../controllers/homeController');

const viajesController = require('../controllers/viajes');

const testimonialesController = require('../controllers/testimonialesController');
//exporta las rutas

module.exports = function(){

    
router.get('/', homeController.consultasHome);

router.get('/nosotros', nosotrosController.infoNosotros);

router.get('/viajes',viajesController.mostrarViajes );

router.get('/viajes/:id',viajesController.mostrarViaje);
    
router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    
 //para el formulario

router.post('/testimoniales',testimonialesController.agregarTestimonial)


return router; //para hacerlo disponible en el otro metodo
}