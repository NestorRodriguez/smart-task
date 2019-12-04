/**
 * Servicio que implementa la funcionalidad del modelo usuarios_has_servicios
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/usuarios_has_servicios');
const Service = require('./service');

class usuariosHasServiciosService extends Service {

    constructor() {
        const modelOptions = {
            all: {
                attributes: ["usuarios_id", "usuarios_rol_id", "servicios_id"]
            },
            one: {
                attributes: ["usuarios_id", "usuarios_rol_id", "servicios_id"]
            },
            create: {
                attributes: ["usuarios_id", "usuarios_rol_id", "servicios_id"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = usuariosHasServiciosService;