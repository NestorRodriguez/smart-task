/**
 * Servicio que implementa la funcionalidad del modelo profesion
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/profesion');
const Service = require('./service');

class ProfesionService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "descripcionOcupacion"]
            },
            one: {
                attributes: ["id", "descripcionOcupacion"]
            },
            all: {
                attributes: ["id", "descripcionOcupacion"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = ProfesionService;