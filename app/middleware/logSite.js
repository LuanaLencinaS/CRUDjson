const fs = require('fs');

function logSite(req, res, next){
    fs.appendFileSync('log.txt', "Usuário entrou na url: " + req.url + "\n")
    next();
}

module.exports = logSite;