/**
 * Modelo de la tabla profesion
 * @author jaimecastrillon@gmail.com
 */
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('profesion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcionOcupacion: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de la profesion es requerida'
            },
            len: {
                args: [5, 200],
                msg: "la descripción de la profesion debe tener minimo 5 y máximo 200 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de la profesion no debe estar vacía");
                }
            },
            isUnique: function(descripcionOcupacion, next) {
                const self = this;
                return Validator.isUnique('../models/profesion.js', self, next, { descripcionOcupacion }, 'la descripción de la profesion está asociada a otra profesion');
            }
        }
    }
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
});