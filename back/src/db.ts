import mongoose = require('mongoose')

const server : string = '127.0.0.1:27017'
const database : string = 'CoachRed'

class Database {
    constructor() {
        this._connect()
        this._configure()
    }

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }

    _configure() {
        mongoose.set('useFindAndModify', false)
    }
}

export const db = new Database