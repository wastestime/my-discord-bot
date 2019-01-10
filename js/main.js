// var logger = require('../config/loggerConfig');
var clientService = require('./services/clientService');
var auth = require('../assets/auth.json');

clientService.registerListeners();
clientService.login(auth.token);