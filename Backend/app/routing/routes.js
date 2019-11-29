/**
 * Funcionalidad que implementa las rutas que van a ser configuradas en la aplicación
 * por los Controladores
 *
 * @author jaimecastrillon@gmail.com
 */

const profile = require('./api/profile');
const user = require('./api/user');
const query = require('./api/query');
const calificacion = require('./api/calificacion');
const estado_solicitud = require('./api/estado_solicitud');
const profesion = require('./api/profesion');
const rol = require('./api/rol');
const servicios = require('./api/servicios');
const solicitud_servicio = require('./api/solicitud_servicio');

module.exports = [
    profile,
    user,
    query,
    calificacion,
    estado_solicitud,
    profesion,
    rol,
    servicios,
    solicitud_servicio,

];