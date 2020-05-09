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

    create: (req, res) => {
        //exibe form cadastro
        res.render("cadastrar.ejs")
    },
    store: (req, res) => {
        //realiza cadastro
    },
}

module.exports = gamesController;