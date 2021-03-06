/**
 * Servicio que implementa la funcionalidad del modelo usuarios
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/usuarios');
const Service = require('./service');

class usuariosService extends Service {

    constructor() {
        const modelOptions = {
            all: {
                attributes: ["id", "nombres", "apellidos", "email", "celular", "contrasena", "rol_id", "documento", "profesion_id", "foto"]
            },
            one: {
                attributes: ["id", "nombres", "apellidos", "email", "celular", "contrasena", "rol_id", "documento", "profesion_id", "foto"]
            },
            create: {
                attributes: ["id", "nombres", "apellidos", "email", "celular", "contrasena", "rol_id", "documento", "profesion_id", "foto"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = usuariosService;