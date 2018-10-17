import {cols} from "./collections"

const debug = require('debug')('api:search:alim')

export const watchCollections = async bfdb => {
    debug("connected")

    const collection = bfdb.collection(cols.TRUNK)
    const changeStream = collection.watch()

    let next
    while (next = await changeStream.next()) {
        debug("un hcahge! %o", next)
    }
}