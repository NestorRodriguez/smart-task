/**
 * Implementación de la ruta: /api/v1.0/estado_solicitud
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/estado_solicitud');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/estado-solicitud', routing.all)
    .get('/estado-solicitud/:id', routing.one)
    .post('/estado-solicitud', routing.create)
    .put('/estado-solicitud/:id', routing.update)
    .delete('/estado-solicitud/:id', routing.destroy);

module.exports = router;