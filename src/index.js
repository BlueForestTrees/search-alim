import {watchCollections} from "./watch"
import mongodb from 'mongodb'
import ENV from './env'

const debug = require('debug')('api:search:alim')

const auth = ENV => (ENV.DB_USER && ENV.DB_PWD) ? (ENV.DB_USER + ":" + ENV.DB_PWD + "@") : ""
let connString = ENV.DB_CONNECTION_STRING ? ENV.DB_CONNECTION_STRING : `mongodb://${auth(ENV)}${ENV.DB_HOST}:${ENV.DB_PORT}/${ENV.DB_NAME}?authSource=admin`

debug("conncting to %o", connString)

mongodb.MongoClient.connect(connString, {useNewUrlParser: true})
    .then(client => client.db(ENV.DB_NAME))
    .then(watchCollections)