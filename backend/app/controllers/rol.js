/**
 * Controlador de rol
 * @author jaimecastrillon@gmail.com
 */

const Controller = require('./controller');
const Service = require('../services/rol');

class rolController extends Controller {

    constructor() {
        super(Service);
    }
}

module.exports = rolController;