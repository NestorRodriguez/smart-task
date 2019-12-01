/**
 * Controlador de usuarios_has_servicios
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/usuarios_has_servicios');

class usuarioHasServiciosController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = usuarioHasServiciosController;