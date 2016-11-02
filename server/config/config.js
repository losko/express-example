const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
    development: {
        rootPath:__dirname + '/../../',
        db: 'mongodb://localhost:27017/code-name-site',
        port: 1337
    },
    production: {
        rootPath: rootPath,
        db: process.env.MONGO_DB_CONN_STRING,
        port: process.env.port
    }
}