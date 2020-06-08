import express = require('express')
// import Sport from '../models/sportModel'

let app: express.application = express

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


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