const GetUsers = require("../Middlewares/GetUsers");
const userExistMiddleware = require("../Middlewares/InsertUser");

function CheckRoute (req, res) {
  const url = req.url
  let body = ''
  req.on('data', async chunk => {
    body = await body + chunk.toString();
  }).on('end', () => {
    switch (url) {
      case '/register/v1':
        const registerResponse = userExistMiddleware(JSON.parse(body))
        res.end(JSON.stringify(registerResponse))
        break
      case '/users/v1':
        const users = GetUsers(req, res)
        res.end(JSON.stringify(users))
        break
      default:
        res.statusCode = 404
        const data = {
          message: 'Not found',
          status: 404
        }
        res.end(JSON.stringify(data))
        break
    }
  })
}
module.exports = CheckRoute