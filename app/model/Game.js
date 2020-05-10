const fs = require('fs');
const path = require('path');

const caminho = path.join("jogos.json")
//pega caminho do arquivo

//CREATE
function cadastrar(nome, preco){
    let conteudoJogos = fs.readFileSync(caminho, {
        encoding: 'utf-8'
    })
    //le o arquivo

    let jogos = JSON.parse(conteudoJogos);
    //converte JSON para objeto

    jogos.push(
        {
            nome, 
            preco
        })
    //adiciona um jogo À variável jogos

    let jogosJSON = JSON.stringify(jogos)
    //converte o objeto em uma string json

    fs.writeFileSync(caminho, jogosJSON);
    //sobrescreve o arquivo JSON (caminho) com o novo conteudo (jogosJSON)
}

//READ (ALL)
function listarJogos(){
    let conteudoJogos = fs.readFileSync(caminho, {
        encoding: 'utf-8'
    })
    //le o arquivo

    return (JSON.parse(conteudoJogos))
    //retorna o arquivo em formato de array de objs
}

//DELETAR
function deletar(indice){
    let jogos = listarJogos();
    jogos.splice(indice, 1);

    let jogosJSON = JSON.stringify(jogos)
    //converte o objeto em uma string json

    fs.writeFileSync(caminho, jogosJSON);
    //sobrescreve o arquivo JSON (caminho) com o novo conteudo (jogosJSON)
}

function exibeJogo(indice){
    let jogo = listarJogos();
    jogo = jogo[indice];

    return jogo;
}

function editarJogo(indice, nome, preco){
    let jogos = listarJogos();

    jogos[indice] = {
        nome, 
        preco
    }

    let jogosJSON = JSON.stringify(jogos)
    //converte o objeto em uma string json

    fs.writeFileSync(caminho, jogosJSON);
    //sobrescreve o arquivo JSON (caminho) com o novo conteudo (jogosJSON)
}

module.exports = {cadastrar, listarJogos, deletar, exibeJogo, editarJogo}
//exportas as funções separadas por virgula