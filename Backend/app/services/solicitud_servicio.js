/**
 * Servicio que implementa la funcionalidad del modelo solicitud de servicio
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/solicitud_servicio');
const Service = require('./service');

class solicitudServicioService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "descripcionSolicitudServicio"]
            },
            one: {
                attributes: ["id", "descripcionSolicitudServicio"]
            },
            all: {
                attributes: ["id", "descripcionSolicitudServicio"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = solicitudServicioService;