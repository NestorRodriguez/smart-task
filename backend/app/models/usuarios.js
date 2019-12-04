/**
 * Modelo de la tabla usuarios
 * @author jaimecastrillon@gmail.com
 */
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombres: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de los nombres de usuarios es requerida'
            },
            len: {
                args: [5, 45],
                msg: "la descripción de los nombres de usuarios debe tener minimo 5 y máximo 45 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de los nombres de usuarios no debe estar vacía");
                }
            }
        }
    },
    apellidos: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de los apellidos de usuarios es requerida'
            },
            len: {
                args: [5, 45],
                msg: "la descripción de los apellidos de usuarios debe tener minimo 5 y máximo 45 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de los apellidos de usuarios no debe estar vacía");
                }
            }
        }
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción del email de  usuarios es requerida'
            },
            len: {
                args: [5, 50],
                msg: "la descripción del email de usuarios debe tener minimo 5 y máximo 50 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción del email de  usuarios no debe estar vacía");
                }
            }
        }
    },
    celular: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción del celular de usuarios es requerida'
            },
            len: {
                args: [5, 20],
                msg: "la descripción del celular de usuarios debe tener minimo 5 y máximo 20 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción del celular de usuarios no debe estar vacía");
                }
            }
        }
    },
    contrasena: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de la contrasena de usuarios es requerida'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de la contrasena de usuarios no debe estar vacía");
                }
            }
        }
    },
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    documento: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    profesion_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
    },
    foto: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    underscored: true,
    timestamps: false,
    freezeTableName: true,
});