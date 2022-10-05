const { Client } = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'akhtar_backend_2',
    port: 5432,
    password: 'fais6666'
})

module.exports = databaseConfig