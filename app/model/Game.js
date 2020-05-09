const fs = require('fs');
const path = require('path');

const caminho = path.join("jogos.json")
//pega caminho do arquivo

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

module.exports = {cadastrar}
//exportas as funções separadas por virgula