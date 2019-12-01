/**
 * Implementación de la ruta: /api/v1.0/usuarios
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/usuarios');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/usuarios', routing.all)
    .get('/usuarios/:id', routing.one)
    .post('/usuarios', routing.create)
    .put('/usuarios/:id', routing.update)
    .delete('/usuarios/:id', routing.destroy);

module.exports = router;