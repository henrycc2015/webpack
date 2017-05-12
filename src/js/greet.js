// require('../css/greet.css');
var p = document.createElement('p');
var moment = require('moment');

p.innerHTML = moment().format();
module.exports = p;