/**
 * Implementación de la ruta: /api/v1.0/usuarios_has_servicios
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/solicitud_servicio');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/usuarios_has_servicios', routing.all)
    .get('/usuarios_has_servicios/:id', routing.one)
    .post('/usuarios_has_servicios', routing.create)
    .put('/usuarios_has_servicios/:id', routing.update)
    .delete('/usuarios_has_servicios/:id', routing.destroy);

module.exports = router;