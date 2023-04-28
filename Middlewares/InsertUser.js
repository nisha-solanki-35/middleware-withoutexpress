const fs = require('fs')
const path = require('path')

function userExistMiddleware (registrationData) {
  let usersData = []
  let res =  {
      status: 200,
      message: 'Registered successfully'
    }
  if (fs.existsSync(path.dirname(__dirname) + '/files/Users.json')) {
    let users = fs.readFileSync(path.dirname(__dirname) + '/files/Users.json', 'utf-8')
    if (users === '') {
      usersData.push(registrationData)
      fs.writeFileSync(path.dirname(__dirname) + '/files/Users.json', JSON.stringify(usersData))
    } else {
      const index = JSON.parse(users)?.findIndex(data => (data.sEmail === registrationData.sEmail) || (data.sUsername === registrationData.sUsername))
      if (index >= 0) {
        res = {
          status: 400,
          message: 'User already exist!!'
        }
      } else {
        usersData = [...JSON.parse(users)]
        usersData.push(registrationData)
        fs.writeFileSync(path.dirname(__dirname) + '/files/Users.json', JSON.stringify(usersData))
      }
    }
  } else {
    const usersData = []
    usersData.push(registrationData)
    fs.writeFileSync(path.dirname(__dirname) + '/files/Users.json', JSON.stringify(usersData))
  }
  return res
}

module.exports = userExistMiddleware