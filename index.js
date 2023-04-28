const http = require('http')
const CheckRoute = require('./Routes')
const template = require('./Routes/TemplateEngine')

const server = http.createServer((req, res) => {
//   CheckRoute(req, res)
    const temp = template(req, res)
    res.end(temp)
})

server.listen(8080, () => {
    console.log('port listening on 8080')
})
