const debug = require('debug')('api:search:alim')
import {version} from './../package.json'

const ENV = {
    REST_PATH: process.env.REST_PATH || "rest",
    
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING || "mongodb://doudou:masta@mongodb-replicaset.mongodb-replicaset.svc.cluster.local:27017/BlueForestTrees?replicaSet=rs0&authSource=admin",
    DB_NAME: process.env.DB_NAME || "BlueForestTreesDB",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: process.env.DB_PORT || 27017,
    DB_USER: process.env.DB_USER || "doudou",
    DB_PWD: process.env.DB_PWD || "masta",

    NODE_ENV: process.env.NODE_ENV || null,
    VERSION: version,
}

debug({ENV})

export default ENV