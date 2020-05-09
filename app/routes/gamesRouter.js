const express = require('express');

const gamesController = require('../controller/gamesController')

let router = express.Router();

//read
router.get("/ver", (req, res) => {
    res.send("lista de jogos")
})
//localhost3111/games/ver

//create
router.get("/cadastrar", gamesController.create);
//localhost3111/games/cadastrar
router.post("/cadastrar", gamesController.store);

//update
router.get("/editar", (req, res) => {
    res.send("editar jogos")
})
//localhost3111/games/editar

//delete
router.get("/excluir", (req, res) => {
    res.send("excluir jogos")
})
//localhost3111/games/excluir

module.exports = router;