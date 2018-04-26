import express from 'express';
import routes from '../routes/index';


const logger = require('morgan');
const bodyParser = require('body-parser');


// const errorHandler = require('./middlewares/errorHandler');


const app = express();

// app.use(errorHandler);

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.get('/', (req, res) => res.send('Welcome to greatness! '));


const port = process.env.PORT || 8000; // very important. Many ports fail

app.listen(port);

export default app;
