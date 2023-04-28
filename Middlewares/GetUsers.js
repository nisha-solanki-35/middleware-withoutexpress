const fs = require('fs')
const path = require('path')
const authToken = require('../AuthToken')

function GetUsers (req, res) {
  const auth = req.headers.authorization
  if (auth === authToken) {
    if (fs.existsSync(path.dirname(__dirname) + '/files/Users.json')) {
      const data = fs.readFileSync(path.dirname(__dirname) + '/files/Users.json', 'utf-8')
      if (data === '') {
        res.statusCode = 200
        return {
          status: 200,
          data: []
        }
      } else {
        res.statusCode = 200
        return {
          status: 200,
          data: JSON.parse(data)
        }
      }
    } 
  } else {
    res.statusCode = 401
    return {
      status: 401,
      message: "Authentication failed"
    }
  }
}

module.exports = GetUsers