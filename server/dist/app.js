'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('../routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const errorHandler = require('./middlewares/errorHandler');


var app = (0, _express2.default)();

// app.use(errorHandler);

app.use((0, _morgan2.default)('dev'));

app.use(_bodyParser2.default.json());

app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use('/', _index2.default);
app.get('/', function (req, res) {
  return res.send('Welcome to greatness! ');
});

var port = process.env.PORT || 8000; // very important. Many ports fail

app.listen(port);

exports.default = app;