'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');


let pathLogFile = fs.createWriteStream(path.join(__dirname, 'logFile.log'), {flags : 'a'})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet.frameguard());
app.disable('x-powered-by');

// carrega as rotas
const addressTypeRoutes = require('./routes/addresstype.routes');
const groupRoutes = require('./routes/group.routes');
const caeeRoutes = require('./routes/caee.routes');
const ufRoutes = require('./routes/uf.routes');


// API de Log de acessos a informação
app.use(morgan('combined', { stream: pathLogFile }));

//set o endpoint da rotas
app.use('/addresstype', addressTypeRoutes);
app.use('/group', groupRoutes);
app.use('/uf', ufRoutes);
app.use('/caee', caeeRoutes);

module.exports = app
