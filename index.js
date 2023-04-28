const http = require('http')
const CheckRoute = require('./Routes')

const server = http.createServer((req, res) => {
  CheckRoute(req, res)
})

server.listen(8080, () => {
    console.log('port listening on 8080')
})
