/**
 * Controlador de Calificación
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/calificacion');

class CalificacionController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = CalificacionController;