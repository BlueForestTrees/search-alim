import {cols} from "./collections"

const debug = require('debug')('api:search:alim')

export const watchCollections = async bfdb => {
    debug("connected")

    const trunk = bfdb.collection("test")

    await trunk.insertOne({hello: "world", how: "are you"})
    debug(await trunk.findOne({hello: "world"}))


    // const changeStream = collection.watch()
    //
    // let next
    // while (next = await changeStream.next()) {
    //     debug("un hcahge! %o", next)
    // }
}