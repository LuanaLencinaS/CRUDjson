const Game = require('../model/Game');

let gamesController = {

    /*
        index,
            //metodo principal
        show,
            //serve para exibir um unico usuario/produto/post, geralmente recebe um id
        create,
            //exibe o formulario para criar um usario/post/produto
        store,
            //grava as infos do form do create
        edit,
            //exibe o form de edição
        update,
            //salva as infos do edit
        destroy
            //exclusão
    */

    //READ (ALL)
    index: (req, res) => {
        let listaJogos = Game.listarJogos();
        res.render("jogos.ejs", {listaJogos})
    },

    //CADASTRO
    create: (req, res) => {
        //exibe form cadastro
        res.render("cadastrar.ejs")
    },
    store: (req, res) => {
        //realiza cadastro
        let {nomeJogo, precoJogo} = req.body
        Game.cadastrar(nomeJogo, precoJogo);
        res.redirect("/games/ver")
    },

    //UPDADE
    edit: (req, res) => {
        //exibe form para editar
        let indice = req.params.i;
        let jogo = Game.exibeJogo(indice);

        res.render("editar.ejs", {jogo, indice})
    },
    update: (req, res) => {
        //realiza edição
        let {indice, nomeJogo, precoJogo} = req.body
        Game.editarJogo(indice, nomeJogo, precoJogo);
        res.redirect("/games/ver");
    },

    //DELETE
    destroy: (req, res) => {
        let indice = req.params.i;
        //pega o indice da rota

        Game.deletar(indice)
        res.redirect("/games/ver")
        //redireciona para a rota ver aoós deletar o item
    }
}

module.exports = gamesController;