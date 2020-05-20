const fs = require('fs');

function logDB(req, res, next){
    fs.appendFileSync('logDB.txt', "Registro gerado apartir da url: " + req.url + "\n")
    next();
}

module.exports = logDB;