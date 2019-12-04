/**
 * Modelo de la tabla usuarios_has_servicios
 * @author jaimecastrillon@gmail.com
 */
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('usuarios_has_servicios', {
    usuarios_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    usuarios_rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de usuarios rol id es requerida'
            },
            len: {
                args: [1, 200],
                msg: "la descripción de usuarios rol id debe tener minimo 1 y máximo 200 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de usuarios rol id no debe estar vacía");
                }
            }
        }
    },
    servicios_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de servicios id es requerida'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de servicios id no debe estar vacía");
                }
            }
        }
    },
    underscored: true,
    timestamps: false,
    freezeTableName: true,
});