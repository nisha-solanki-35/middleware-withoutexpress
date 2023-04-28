const ejs = require('ejs')
const fs = require('fs');
const path = require('path');

function TemplateEngine (req, res) {
    const usersData = fs.readFileSync(path.dirname(__dirname) + '/files/Users.json', 'utf-8')
    const template = fs.readFileSync(path.dirname(__dirname) + '/views/pages/index.ejs', 'utf-8')
    const userData = JSON.parse(usersData)
    const renderTemplate = ejs.render(template, { userData } )
    return renderTemplate
}

module.exports = TemplateEngine