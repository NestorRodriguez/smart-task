/**
 * Implementación de la ruta: /api/v1.0/Servicios
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/servicios');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/servicios', routing.all)
    .get('/servicios/:id', routing.one)
    .post('/servicios', routing.create)
    .put('/servicios/:id', routing.update)
    .delete('/servicios/:id', routing.destroy);

module.exports = router;