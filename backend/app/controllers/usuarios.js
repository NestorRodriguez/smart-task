/**
 * Controlador de usuarios
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../usuarios');

class usuariosController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = usuariosController;