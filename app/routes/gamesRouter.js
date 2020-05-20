const express = require('express');
const multer = require('multer');
const path = require('path');

const gamesController = require('../controller/gamesController');
const logDBmiddleware = require('../middleware/logDB');

var storage = multer.diskStorage({
        destination: function (req, file, cb){
            //indica em qual pasta o arquivo será armazenado
            cb(null, path.join('public', 'uploads'))
        },
        filename: function (req, file, cb){
            let extensao = path.extname(file.originalname)
            //indica com que nome ele será salvo
            cb(null, file.fieldname + '-' + Date.now() + extensao)
        }
    });

    var upload = multer({ storage: storage });

let router = express.Router();

//read
router.get("/ver", gamesController.index)
//localhost3111/games/ver

//create
router.get("/cadastrar", gamesController.create);
//localhost3111/games/cadastrar
router.post("/cadastrar", upload.any(), logDBmiddleware, gamesController.store);

//update
router.get("/editar/:i", gamesController.edit)
//localhost3111/games/editar
router.put("/editar", upload.any(), gamesController.update)

//delete
router.delete("/excluir/:i", gamesController.destroy)
//localhost3111/games/excluir

module.exports = router;