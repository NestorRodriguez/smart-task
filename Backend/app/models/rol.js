/**
 * Modelo de la tabla rol
 * @author jaimecastrillon@gmail.com
 */
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('rol', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción del rol es requerida'
            },
            len: {
                args: [5, 45],
                msg: "la descripción del rol debe tener minimo 5 y máximo 45 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción del rol no debe estar vacía");
                }
            },
            isUnique: function(descripcion, next) {
                const self = this;
                return Validator.isUnique('../models/rol.js', self, next, { descripcion }, 'la descripción del rol está asociada a usuarios');
            }
        }
    }
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
});