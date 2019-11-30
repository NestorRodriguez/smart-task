/**
 * Implementación de la ruta: /api/v1.0/profesion
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/profesion');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/profesion', routing.all)
    .get('/profesion/:id', routing.one)
    .post('/profesion', routing.create)
    .put('/profesion/:id', routing.update)
    .delete('/profesion/:id', routing.destroy);

module.exports = router;