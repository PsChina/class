(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (value) {
    document.documentElement.style.fontSize = window.screen.width / value + 'px';
    window.onresize = function () {
        document.documentElement.style.fontSize = window.screen.width / value + 'px';
    };
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('./controller/mainController');

require('./directive/header');

require('./directive/body');

require('./directive/body-left');

require('./directive/body-right');

require('./directive/pagecontrol');

exports.default = angular.module('bootstrapApp', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'mainController', 'header', 'body', 'bodyLeft', 'bodyRight', 'pagecontrol']).config(['$stateProvider', function ($stateProvider) {
	$stateProvider.state('startExam', {
		url: '/startexam',
		templateUrl: '../../component/routertemplate/startexam.html',
		controller: ['$scope', 'data', 'deleteExam', function ($scope, data, deleteExam) {
			$scope.examlist = data;
			$scope.deleteExam = function (examName) {
				deleteExam(examName, $scope);
			};
		}],
		resolve: {
			data: ['$http', function ($http) {
				return $http({
					url: 'http://169.254.206.26:3000/examlist'
				}).then(function (result) {
					return result.data;
				}, function (error) {
					return error;
				});
			}],
			deleteExam: ['$http', function ($http) {
				return function (examName, scope) {
					$http({
						url: 'http://169.254.206.26:3000/deleteExam',
						method: 'POST',
						data: {
							examName: examName
						}
					}).then(function (result) {

						angular.forEach(scope.examlist, function (value, index, array) {
							if (examName == value.examName) {
								array.splice(index, 1);
							}
						});
					}, function (error) {
						throw new Error(error);
					});
				};
			}]
		}
	}).state('historyPaper', {
		url: '/historypaper',
		templateUrl: '../../component/routertemplate/historypaper.html',
		controller: ['$scope', 'historyData', '$http', function ($scope, historyData, $http) {
			$scope.data = historyData;
			$scope.edit = function (event, item) {
				item.flag = !item.flag;
				var target = event.target;
				if (target.innerText == '编辑') {
					target.innerText = '保存';
					var date = new Date(item.examTime);
					item.showTime = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
				} else {
					target.innerText = '编辑';
					$http({
						url: 'http://169.254.206.26:3000/editHistoryPaper',
						method: 'POST',
						data: $scope.data
					}).then(function (result) {
						if (result.data.state == 1) {
							console.log('编辑成功');
						}
					}, function (error) {
						console.log(error);
						console.log('编辑失败');
						window.location.reload();
					});
				}
			};
			$scope.changeTime = function (item) {
				item.examTime = new Date(item.showTime).getTime();
			};
		}],
		resolve: {
			historyData: ['$http', function ($http) {
				return $http({
					url: 'http://169.254.206.26:3000/historypaper'
				}).then(function (result) {
					return result.data;
				}, function (error) {
					throw new Error(error);
				});
			}]
		}
	}).state('toolDownload', {
		url: '/tooldownload',
		templateUrl: '../../component/routertemplate/tooldownload.html',
		controller: ['$scope', function ($scope) {}]
	}).state('uploadQusetion', {
		url: '/uploadqusetion',
		templateUrl: '../../component/routertemplate/uploadqusetion.html',
		controller: ['$scope', function ($scope) {}]
	}).state('addAlbum', {
		url: '/addalbum',
		templateUrl: '../../component/routertemplate/addalbum.html',
		controller: ['$scope', function ($scope) {}]
	}).state('photoList', {
		url: '/photolist',
		templateUrl: '../../component/routertemplate/photolist.html',
		controller: ['$scope', function ($scope) {}]
	}).state('addPhoto', {
		url: '/addphoto',
		templateUrl: '../../component/routertemplate/addphoto.html',
		controller: ['$scope', function ($scope) {}]
	});
}]).run([function () {}]);

},{"./controller/mainController":3,"./directive/body":6,"./directive/body-left":4,"./directive/body-right":5,"./directive/header":7,"./directive/pagecontrol":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angular.module('mainController', []).controller('main', ['$scope', function ($scope) {}]);

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angular.module('bodyLeft', []).directive('contentLeft', function () {
    return {
        restrict: 'ECMA',
        templateUrl: '../../../component/template/bodyleft.html',
        controller: ['$scope', '$state', function ($scope, $state) {
            $scope.oneAtATime = true;
            $scope.listData = [{
                title: '考试管理',
                value: [{
                    title: '开始考试',
                    routerName: 'startExam'
                }, {
                    title: '历史试卷',
                    routerName: 'historyPaper'
                }]
            }, {
                title: '工具下载',
                value: [{
                    title: '学习工具下载',
                    routerName: 'toolDownload'
                }]
            }, {
                title: '错题管理',
                value: [{
                    title: '上传错题图片',
                    routerName: 'uploadQusetion'
                }]
            }, {
                title: '图片管理',
                value: [{
                    title: '添加相册',
                    routerName: 'addAlbum'
                }, {
                    title: '相册列表',
                    routerName: 'photoList'
                }, {
                    title: '添加图片',
                    routerName: 'addPhoto'
                }]
            }];

            $scope.go = function (content) {
                $state.go(content.routerName);
            };
        }]
    };
});

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angular.module('bodyRight', []).directive('contentRight', function () {
    return {
        restrict: 'ECMA',
        templateUrl: '../../../component/template/bodyright.html',
        controller: [function () {}]
    };
});

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angular.module('body', []).directive('content', function () {
    return {
        restrict: 'ECMA',
        templateUrl: '../../../component/template/body.html',
        controller: [function () {}]
    };
});

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angular.module('header', []).directive('top', function () {
    return {
        restrict: 'ECMA',
        templateUrl: '../../../component/template/top.html',
        controller: ['$scope', function ($scope) {
            $scope.user = {
                name: 'admin'
            };
        }]
    };
});

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _timers = require('core-js/library/web/timers');

exports.default = angular.module('pagecontrol', []).directive('pageControl', function () {
    return {
        restrict: 'ECMA',
        replace: true,
        templateUrl: '../../../component/template/pagecontrol.html',
        controller: ['$scope', 'pagecontrolService', function ($scope, pagecontrolService) {
            $scope.maxPage = pagecontrolService.maxPage;
            $scope.go = function (nextPage) {
                console.log(nextPage);
            };
        }],
        scope: {
            data: '='
        }
    };
}).service('pagecontrolService', [function () {
    var _this = undefined;
    undefined.maxPage = 10;
    undefined.initBtnArray = function () {
        var array = void 0;
        if (_this.maxPage > 6) {
            array = new _timers.Array(4);
        } else {
            array = new _timers.Array(_this.maxPage - 2);
        }
        array.forEach(function (val, ind, arr) {
            arr[ind] = ind + 2;
        });
        return array;
    };
}]);

},{"core-js/library/web/timers":26}],9:[function(require,module,exports){
'use strict';

require('./app');

var _rem = require('../base/rem');

var _rem2 = _interopRequireDefault(_rem);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _rem2.default)(13.66);
angular.bootstrap(document.documentElement, ['bootstrapApp']);

},{"../base/rem":1,"./app":2}],10:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],11:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":21}],12:[function(require,module,exports){
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],13:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":10}],14:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":17}],15:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":18,"./_is-object":21}],16:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":12,"./_ctx":13,"./_global":18,"./_hide":19}],17:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],18:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],19:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":14,"./_object-dp":22,"./_property-desc":23}],20:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":14,"./_dom-create":15,"./_fails":17}],21:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],22:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":11,"./_descriptors":14,"./_ie8-dom-define":20,"./_to-primitive":24}],23:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],24:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":21}],25:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global = require('./_global');
var $export = require('./_export');
var navigator = global.navigator;
var slice = [].slice;
var MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"./_export":16,"./_global":18}],26:[function(require,module,exports){
require('../modules/web.timers');
module.exports = require('../modules/_core');

},{"../modules/_core":12,"../modules/web.timers":25}]},{},[9]);
