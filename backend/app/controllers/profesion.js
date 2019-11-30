/**
 * Controlador de Profesion
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/profesion');

class ProfesionController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = ProfesionController;