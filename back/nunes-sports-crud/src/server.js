const express = require('express');
const http = require("http");
const app = express();
const routes = require('./routes');
const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
    allowedHeaders: 'Content-Type,Authorization,X-Requested-With'
}

app.use(express.json(), cors(corsOptions));
routes(app);

http.createServer(app).listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});