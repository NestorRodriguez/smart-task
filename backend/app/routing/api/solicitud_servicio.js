/**
 * Implementación de la ruta: /api/v1.0/solicitud_servicio
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/solicitud_servicio');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/solicitud-servicio', routing.all)
    .get('/solicitud-servicio/:id', routing.one)
    .post('/solicitud-servicio', routing.create)
    .put('/solicitud-servicio/:id', routing.update)
    .delete('/solicitud-servicio/:id', routing.destroy);

module.exports = router;