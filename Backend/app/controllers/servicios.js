/**
 * Controlador de Servicios
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/servicios');

class serviciosController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = serviciosController;