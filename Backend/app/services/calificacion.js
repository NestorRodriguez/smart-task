/**
 * Servicio que implementa la funcionalidad del modelo Calificación
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/calificacion');
const Service = require('./service');

class CalificacionService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "descripcionCalificacion"]
            },
            one: {
                attributes: ["id", "descripcionCalificacion"]
            },
            all: {
                attributes: ["id", "descripcionCalificacion"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = CalificacionService;