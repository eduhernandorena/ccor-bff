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
const civilStatusRoutes = require('./routes/civilstatus.routes');
const legalConstitutionRoutes = require('./routes/legalconstitution.routes');


// API de Log de acessos a informação
app.use(morgan('combined', { stream: pathLogFile }));

//set o endpoint da rotas
app.use('/', addressTypeRoutes);
app.use('/', groupRoutes);
app.use('/', ufRoutes);
app.use('/', caeeRoutes);
app.use('/', civilStatusRoutes);
app.use('/', legalConstitutionRoutes);

module.exports = app
