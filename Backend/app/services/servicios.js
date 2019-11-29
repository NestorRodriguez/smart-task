/**
 * Servicio que implementa la funcionalidad del modelo Servicios
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/servicios');
const Service = require('./service');

class ServiciosService extends Service {

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id", "descripcionServicio"]
            },
            one: {
                attributes: ["id", "descripcionServicio"]
            },
            all: {
                attributes: ["id", "descripcionServicio"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = ServiciosService;