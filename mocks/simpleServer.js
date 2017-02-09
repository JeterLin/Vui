const express = require('express');
const mock = require(__dirname+'/mock.js');
var app = express();
mock(app);
app.listen(8000);