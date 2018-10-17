import {watchCollections} from "./watch"

const debug = require('debug')('api:search:alim')

import mongodb from 'mongodb'
import ENV from './env'

const auth = ENV => (ENV.DB_USER && ENV.DB_PWD) ? (ENV.DB_USER + ":" + ENV.DB_PWD + "@") : ""

let conn = `mongodb://${auth(ENV)}${ENV.DB_HOST}:${ENV.DB_PORT}/${ENV.DB_NAME}?authSource=admin`

debug("conncting to %o",conn)

mongodb.MongoClient.connect(conn, {useNewUrlParser: true})
    .then(client => client.db(ENV.DB_NAME))
    .then(watchCollections)