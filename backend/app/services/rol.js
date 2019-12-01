/**
 * Servicio que implementa la funcionalidad del modelo Rol
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/rol');
const Service = require('./service');

class RolService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "descripcion"]
            },
            one: {
                attributes: ["id", "descripcion"]
            },
            all: {
                attributes: ["id", "descripcion"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = RolService;