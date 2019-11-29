/**
 * Modelo de la tabla Servicios
 * @author jaimecastrillon@gmail.com
 */
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('servicios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcionServicio: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de servicios es requerida'
            },
            len: {
                args: [5, 45],
                msg: "la descripción de servicios debe tener minimo 5 y máximo 200 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de servicios no debe estar vacía");
                }
            },
            isUnique: function(descripcionServicio, next) {
                const self = this;
                return Validator.isUnique('../models/servicios.js', self, next, { descripcionServicio }, 'la descripción de servicios está asociada a usuarios has servicios y solicitud de servicio');
            }
        }
    }
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
});