const express = require('express');

const gamesController = require('../controller/gamesController')

let router = express.Router();

//read
router.get("/ver", gamesController.index)
//localhost3111/games/ver

//create
router.get("/cadastrar", gamesController.create);
//localhost3111/games/cadastrar
router.post("/cadastrar", gamesController.store);

//update
router.get("/editar/:i", gamesController.edit)
//localhost3111/games/editar
router.put("/editar", gamesController.update)

//delete
router.delete("/excluir/:i", gamesController.destroy)
//localhost3111/games/excluir

module.exports = router;