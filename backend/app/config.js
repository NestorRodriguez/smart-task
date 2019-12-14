const path = require('path');

module.exports = {
    language: 'es',
    host: process.env.URL,
    port: process.env.PORT || 3000,
    sessionEncrypt: "$ZC6rNk/Y5MWPj8-3Q0WcK48ZgHvL.",
    sessionToken: "$Tv8eZm/G2jEwI9-5V9TLK86bQGcD.",
    sessionTime: 3, // Definicion en horas de sesión
    appPath: path.dirname(__dirname),
    db: {
        user: "kmellapp@kmellappdb",
        access: "}?Be*G/9,9DYLycp",
        database: "kmellapp",
        host: "kmellappdb.mysql.database.azure.com",
        port: "3306",
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};