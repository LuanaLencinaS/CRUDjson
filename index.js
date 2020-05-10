const express = require('express');
const app = express();
const methodOverride = require("method-override");
const rotaGames = require('./app/routes/gamesRouter');

app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("public"));

app.use(methodOverride("_method"));
//sobrescreve o método de envio

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json())

app.use("/games", rotaGames);

app.listen(3111, () => {
    console.log("rodando na porta 3111...")
})