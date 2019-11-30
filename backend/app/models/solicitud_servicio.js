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
            }
        }
    },
    fechaSolicitud: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de la fecha de la solicitud es requerida'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de la fecha de la solicitud no debe estar vacía");
                }
            }
        }
    },
    lugarSolicitud: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción del lugar de  solicitud de servicio es requerida'
            },
            len: {
                args: [5, 200],
                msg: "la descripción del lugar de solicitud de servicio debe tener minimo 5 y máximo 200 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción del lugar de  solicitud de servicio no debe estar vacía");
                }
            }
        }
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción del telefono de servicio es requerida'
            },
            len: {
                args: [5, 20],
                msg: "la descripción del telefono de servicio debe tener minimo 5 y máximo 20 caracteres"
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción del solicitud de servicio no debe estar vacía");
                }
            }
        }
    },
    calificacionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de la calificacion id de servicio es requerida'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de la calificacion id de servicio no debe estar vacía");
                }
            }
        }
    },
    estadoSolicitudId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción del estado de la solicitud id de servicio es requerida'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción del estado de la solicitud id de servicio no debe estar vacía");
                }
            }
        }
    },
    usuariosId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de usuarios id de servicio es requerida'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de usuarios id de servicio no debe estar vacía");
                }
            }
        }
    },
    usuarioSolicitaServicio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de usuario solicita servicio es requerida'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de usuario solicita servicio no debe estar vacía");
                }
            }
        }
    },
    serviciosId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'la descripción de  servicios id de servicio es requerida'
            },
            customValidator(value) {
                if (!value) {
                    throw new Error("la descripción de servicios id de servicio no debe estar vacía");
                }
            }
        }
    },
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
});