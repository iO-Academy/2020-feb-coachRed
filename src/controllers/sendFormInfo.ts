import Coach from '../app/models/coachModel'

async function sendFormInfo(req, res) {
     
      let coach = req.params.coach
      let data = await Coach.insertOne(coach)

      if (data.insertedCount == 1) {
          let responseData = {
              status: "success",
              message: "Coach successfully added!",
              data: coach
          };
          return res.json(responseData)
      }
  
      let responseData = {
          status: "failure",
          message: "error adding coach",
          data: {}
      };
      return res.json(responseData)
   
}

export default sendFormInfo
