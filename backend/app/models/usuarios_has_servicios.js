/**
 * Modelo de la tabla usuarios_has_servicios
 * @author jaimecastrillon@gmail.com
 */
const Validator = require('../utils/validator');

module.exports = (sequelize, DataTypes) => sequelize.define('usuarios_has_servicios', {
    usuarios_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {},
            usuarios_rol_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {

                    },
                    servicios_id: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        validate: {
                            notNull: {}
                        }
                    }
                }
            }
        }
    }

});