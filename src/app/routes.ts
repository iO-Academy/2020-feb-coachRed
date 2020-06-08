import express = require('express')
import getAllSports from './controllers/getAllSports'
import sendFormInfo from './controllers/sendFormInfo'

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const routes = (app : express.Application) :void => {
    app.get('/sport', getAllSports)
    app.post('/newCoach/:coach', sendFormInfo)
}

app.post('/addTask/:task', jsonParser, async (req, res) => {
    // AddToDo

    await Client.connect()
    let db = Client.db('toDo')
    let collection = db.collection('toDo')

    let task = req.params.task

    let data = await collection.insertOne({
        Task: task,
        Done: 0
    })
    console.log(data)
    if (data.insertedCount == 1) {
        let responseData = {
            status: "success",
            message: "ToDo successfully added!",
            data: {}
        };
        return res.json(responseData)
    }

    let responseData = {
        status: "failure",
        message: "error getting data from database",
        data: {}
    };
    return res.json(responseData)
})

export default routes