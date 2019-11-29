/**
 * Modelo de la tabla solicitud_servicio
 * @author jaimecastrillon@gmail.com
 */
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('solicitud_servicio', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcionSolicitudServicio: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de la solicitud de servicio es requerida'
            },
            len: {
                args: [5, 200],
                msg: "la descripción de la solicitud de servicio debe tener minimo 5 y máximo 200 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de la solicitud de servicio no debe estar vacía");
                }
            },
            isUnique: function(descripcionSolicitudServicio, next) {
                const self = this;
                return Validator.isUnique('../models/solicitud_servicio.js', self, next, { descripcionSolicitudServicio }, 'la descripción de la solicitud de servicio está asociada a otras tablas');
            }
        }
    }
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
});