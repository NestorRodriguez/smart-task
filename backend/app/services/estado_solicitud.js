/**
 * Servicio que implementa la funcionalidad del modelo estado de solicitud
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/estado_solicitud');
const Service = require('./service');

class estadoSolicitudService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "detalleEstado"]
            },
            one: {
                attributes: ["id", "detalleEstado"]
            },
            all: {
                attributes: ["id", "detalleEstado"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = estadoSolicitudService;