const ejs = require('ejs')
const fs = require('fs');
const path = require('path');

function TemplateEngine (req, res) {
    console.log('hi')
    const usersData = fs.readFileSync(path.dirname(__dirname) + '/files/Users.json', 'utf-8')
    // const template = fs.readFileSync(path.dirname(__dirname) + '/views/pages/Users.ejs', 'utf-8')
    const template = ejs.render(path.dirname(__dirname) + '/views/pages/index', usersData)
    res.end(template)
}

module.exports = TemplateEngine