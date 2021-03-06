const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const requestLogger = require('./utilities/requestLogger')
const errorLogger = require('./utilities/errorLogger')
const routes = require('./routes/routing')

app.use(cors());
app.use(requestLogger);
app.use(bodyParser.json());
app.use('/', routes);
app.use(errorLogger);

app.listen(process.env.PORT || 1234);