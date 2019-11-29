/**
 * Controlador de Estado_Solicitud
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/estado_solicitud');

class estadoSolicitudController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = estadoSolicitudController;