// Require External Dependencies
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Require Internal dependencies
const routes = require('./routes');

const app = express();

// Enable cors
const origin = ['*'];
const corsOptions = {
  allowedHeaders: [
    'Origin',
    ' X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'X-Access-Token',
  ],
  origin,
  methods: ['OPTIONS', 'GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

// Application Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Application Health Check Route
app.get('/status', (req, res) => res.sendStatus(200));

// Application Live Documentation (using swagger ui)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Applications Routes
routes(app);

// 404 Error Handler
app.use('*', (req, res) => res.sendStatus(404));

module.exports = app;
