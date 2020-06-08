import mongoose = require('mongoose')

const server : string = '127.0.0.1:27017'
const database : string = 'CoachRed'

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

export const db = new Database