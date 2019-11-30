/**
 * Controlador de Solicitud_Servicio
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/solicitud_servicio');

class solicitudServicioController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = solicitudServicioController;