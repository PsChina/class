var rem = require('../base/rem.js');
require('./controller/main.js')
require('./directive/top.js')
// require('../directive/top')
angular.module('app',['main','top'])
rem(13.66);


