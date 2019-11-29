/**
 * Modelo de la tabla estado_solicitud
 * @author jaimecastrillon@gmail.com
 */
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('estado_solicitud', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    detalleEstado: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción del estado de solicitud es requerida'
            },
            len: {
                args: [5, 45],
                msg: "la descripción del estado de solicitud debe tener minimo 5 y máximo 200 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción del estado de solicitud no debe estar vacía");
                }
            },
            isUnique: function(detalleEstado, next) {
                const self = this;
                return Validator.isUnique('../models/estado_solicitud.js', self, next, { detalleEstado }, 'la descripción del estado de solicitud está asociada a otra estado de solicitud');
            }
        }
    }
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
});