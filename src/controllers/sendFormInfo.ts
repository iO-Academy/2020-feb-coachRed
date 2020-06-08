import express = require('../app/node_modules/express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


async function sendFormInfo(req, res) {
    try{
      await Client.connect()
      let db = Client.db('toDo')
      let collection = db.collection('toDo')
  
      let coach = req.params.coach
  
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
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

