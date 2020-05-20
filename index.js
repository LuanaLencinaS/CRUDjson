const express = require('express');
const methodOverride = require("method-override");

const rotaGames = require('./app/routes/gamesRouter');
const logMiddleware = require('./app/middleware/logSite');
const logDBmiddleware = require('./app/middleware/logDB');

const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("public"));

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}));
app.use(methodOverride("_method"));
//sobrescreve o método de envio
app.use(logMiddleware);

app.use("/games", rotaGames);

app.use((req, res, next) => {
    res.status(404).render('erro404');
    next();
}); 

app.listen(3111, () => {
    console.log("rodando na porta 3111...")
})