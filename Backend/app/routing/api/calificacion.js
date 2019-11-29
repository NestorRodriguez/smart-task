/**
 * Implementación de la ruta: /api/v1.0/calificacion
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/calificacion');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/calificaciones', routing.all)
    .get('/calificaciones/:id', routing.one)
    .post('/calificaciones', routing.create)
    .put('/calificaciones/:id', routing.update)
    .delete('/calificaciones/:id', routing.destroy);

module.exports = router;