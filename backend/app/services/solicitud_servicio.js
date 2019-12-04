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
            all: {
                attributes: ["id", "descripcion_solicitud_servicio", "fecha_solicitud", "lugar_solicitud", "telefono", "calificacion_id", "estado_solicitud_id", "usuarios_id", "usuario_solicita_servicio", "servicios_id"]
            },
            one: {
                attributes: ["id", "descripcion_solicitud_servicio", "fecha_solicitud", "lugar_solicitud", "telefono", "calificacion_id", "estado_solicitud_id", "usuarios_id", "usuario_solicita_servicio", "servicios_id"]
            },
            create: {
                attributes: ["id", "descripcion_solicitud_servicio", "fecha_solicitud", "lugar_solicitud", "telefono", "calificacion_id", "estado_solicitud_id", "usuarios_id", "usuario_solicita_servicio", "servicios_id"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = solicitudServicioService;