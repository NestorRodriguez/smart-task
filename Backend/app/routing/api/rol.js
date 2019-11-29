/**
 * Implementación de la ruta: /api/v1.0/rol
 * @author jaimecastrillon@gmail.com
 */

const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/rol');
const Routing = require('../routing');
const routing = Routing(new Controller());
const Auth = require('../../middlewares/auth');

router
    .get('/rol', routing.all)
    .get('/rol/:id', routing.one)
    .post('/rol', routing.create)
    .put('/rol/:id', routing.update)
    .delete('/rol/:id', routing.destroy);

module.exports = router;