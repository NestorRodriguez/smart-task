/**
 * Modelo de la tabla calificación
 * @author jaimecastrillon@gmail.com
 */
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('calificacion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcionCalificacion: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de la calificación es requerida'
            },
            len: {
                args: [5, 45],
                msg: "la descripción de la calificación debe tener minimo 5 y máximo 45 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de la calificación no debe estar vacía");
                }
            },
            isUnique: function(descripcionCalificacion, next) {
                const self = this;
                return Validator.isUnique('../models/calificacion.js', self, next, { descripcionCalificacion }, 'la descripción de la calificación está asociada a otra calificacion');
            }
        }
    }
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
});