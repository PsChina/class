/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

__webpack_require__(6);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 这个需要别名 才能成功
var a = 10; // var a = 10;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.Vue = factory();
})(undefined, function () {
  'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // these helpers produces better vm code in JS engines due to their
  // explicitness and function inlining
  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }

  /**
   * Check if value is primitive
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' ||
    // $flow-disable-line
    (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol' || typeof value === 'boolean';
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  }

  /**
   * Get the raw type string of a value e.g. [object Object]
   */
  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString(val) {
    return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
  }

  /**
   * Convert a input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if a attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array
   */
  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  /**
   * Check whether the object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });

  /**
   * Simple bind, faster than native
   */
  function bind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }
    // record original fn length
    boundFn._length = fn.length;
    return boundFn;
  }

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to;
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  }

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
   */
  function noop(a, b, c) {}

  /**
   * Always return false.
   */
  var no = function no(a, b, c) {
    return false;
  };

  /**
   * Return same value
   */
  var identity = function identity(_) {
    return _;
  };

  /**
   * Generate a static keys string from compiler modules.
   */
  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Ensure a function is called only once.
   */
  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = ['component', 'directive', 'filter'];

  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];

  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };

  /*  */

  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = /[^\w.$]/;
  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = {}.watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function isServerRendering() {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer;
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = function () {
      function Set() {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };
      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check
  var formatComponentName = noop;

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function classify(str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function warn(msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function tip(msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function formatComponentName(vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }
      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function repeat(str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) {
          res += str;
        }
        if (n > 1) {
          str += str;
        }
        n >>= 1;
      }
      return res;
    };

    generateComponentTrace = function generateComponentTrace(vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget(_target) {
    if (Dep.target) {
      targetStack.push(Dep.target);
    }
    Dep.target = _target;
  }

  function popTarget() {
    Dep.target = targetStack.pop();
  }

  /*  */

  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function createEmptyVNode(text) {
    if (text === void 0) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode, deep) {
    var componentOptions = vnode.componentOptions;
    var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.isCloned = true;
    if (deep) {
      if (vnode.children) {
        cloned.children = cloneVNodes(vnode.children, true);
      }
      if (componentOptions && componentOptions.children) {
        componentOptions.children = cloneVNodes(componentOptions.children, true);
      }
    }
    return cloned;
  }

  function cloneVNodes(vnodes, deep) {
    var len = vnodes.length;
    var res = new Array(len);
    for (var i = 0; i < len; i++) {
      res[i] = cloneVNode(vnodes[i], deep);
    }
    return res;
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * By default, when a reactive property is set, the new value is
   * also converted to become reactive. However when passing down props,
   * we don't want to force conversion because the value may be a nested value
   * under a frozen data structure. Converting it would defeat the optimization.
   */
  var observerState = {
    shouldConvert: true
  };

  /**
   * Observer class that are attached to each observed
   * object. Once attached, the observer converts target
   * object's property keys into getter/setters that
   * collect dependencies and dispatches updates.
   */
  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment an target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment(target, src, keys) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment an target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe(value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive(obj, key, val, customSetter, shallow) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return;
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */
        if ("development" !== 'production' && customSetter) {
          customSetter();
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set(target, key, val) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }
    if (!ob) {
      target[key] = val;
      return val;
    }
    defineReactive(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del(target, key) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }
    if (!hasOwn(target, key)) {
      return;
    }
    delete target[key];
    if (!ob) {
      return;
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }
      return defaultStrat(parent, child);
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from) {
    if (!from) {
      return to;
    }
    var key, toVal, fromVal;
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */
  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

        return parentVal;
      }
      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook(parentVal, childVal) {
    return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      "development" !== 'production' && assertObjectType(key, childVal, vm);
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }
    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */
    if (!childVal) {
      return Object.create(parentVal || null);
    }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */
  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) {
      extend(ret, childVal);
    }
    return ret;
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function defaultStrat(parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Validate component names
   */
  function checkComponents(options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName(name) {
    if (!/^[a-zA-Z][\w-]*$/.test(name)) {
      warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options, vm) {
    var props = options.props;
    if (!props) {
      return;
    }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : { type: val };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject(options, vm) {
    var inject = options.inject;
    if (!inject) {
      return;
    }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
      }
    } else {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives(options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = { bind: def, update: def };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);
    var extendsFrom = child.extends;
    if (extendsFrom) {
      parent = mergeOptions(parent, extendsFrom, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) {
      return assets[id];
    }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ("development" !== 'production' && warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }
    return res;
  }

  /*  */

  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // handle boolean props
    if (isType(Boolean, prop.type)) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
        value = true;
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldConvert = observerState.shouldConvert;
      observerState.shouldConvert = true;
      observe(value);
      observerState.shouldConvert = prevShouldConvert;
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if ("development" !== 'production' && isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }
    if (!valid) {
      warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".", vm);
      return;
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value === 'undefined' ? 'undefined' : _typeof(value);
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isType(type, fn) {
    if (!Array.isArray(fn)) {
      return getType(fn) === getType(type);
    }
    for (var i = 0, len = fn.length; i < len; i++) {
      if (getType(fn[i]) === getType(type)) {
        return true;
      }
    }
    /* istanbul ignore next */
    return false;
  }

  /*  */

  function handleError(err, vm, info) {
    if (vm) {
      var cur = vm;
      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        logError(e, null, 'config.errorHandler');
      }
    }
    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }

  /*  */
  /* globals MessageChannel */

  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using both micro and macro tasks.
  // In < 2.4 we used micro tasks everywhere, but there are some scenarios where
  // micro tasks have too high a priority and fires in between supposedly
  // sequential events (e.g. #4521, #6690) or even between bubbling of the same
  // event (#6566). However, using macro tasks everywhere also has subtle problems
  // when state is changed right before repaint (e.g. #6813, out-in transitions).
  // Here we use micro task by default, but expose a way to force macro task when
  // needed (e.g. in event handlers attached by v-on).
  var microTimerFunc;
  var macroTimerFunc;
  var useMacroTask = false;

  // Determine (macro) Task defer implementation.
  // Technically setImmediate should be the ideal choice, but it's only available
  // in IE. The only polyfill that consistently queues the callback after all DOM
  // events triggered in the same loop is by using MessageChannel.
  /* istanbul ignore if */
  if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    macroTimerFunc = function macroTimerFunc() {
      setImmediate(flushCallbacks);
    };
  } else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]')) {
    var channel = new MessageChannel();
    var port = channel.port2;
    channel.port1.onmessage = flushCallbacks;
    macroTimerFunc = function macroTimerFunc() {
      port.postMessage(1);
    };
  } else {
    /* istanbul ignore next */
    macroTimerFunc = function macroTimerFunc() {
      setTimeout(flushCallbacks, 0);
    };
  }

  // Determine MicroTask defer implementation.
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    microTimerFunc = function microTimerFunc() {
      p.then(flushCallbacks);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) {
        setTimeout(noop);
      }
    };
  } else {
    // fallback to macro
    microTimerFunc = macroTimerFunc;
  }

  /**
   * Wrap a function so that if any code inside triggers state change,
   * the changes are queued using a Task instead of a MicroTask.
   */
  function withMacroTask(fn) {
    return fn._withTask || (fn._withTask = function () {
      useMacroTask = true;
      var res = fn.apply(null, arguments);
      useMacroTask = false;
      return res;
    });
  }

  function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      if (useMacroTask) {
        macroTimerFunc();
      } else {
        microTimerFunc();
      }
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function mark(tag) {
        return perf.mark(tag);
      };
      measure = function measure(name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        perf.clearMeasures(name);
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function warnNonPresent(target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
        if (!has && !isAllowed) {
          warnNonPresent(target, key);
        }
        return has || !isAllowed;
      }
    };

    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          warnNonPresent(target, key);
        }
        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if (!isA && !isObject(val) || Object.isFrozen(val)) {
      return;
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns) {
    function invoker() {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          cloned[i].apply(null, arguments$1);
        }
      } else {
        // return handler return value for single handlers
        return fns.apply(null, arguments);
      }
    }
    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, vm) {
    var name, def, cur, old, event;
    for (name in on) {
      def = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      /* istanbul ignore if */
      if (isUndef(cur)) {
        "development" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }
        add(event.name, cur, event.once, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return;
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }
    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true;
      }
    }
    return false;
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }
    return children;
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res;
  }

  /*  */

  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
      comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor, context) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (isDef(factory.contexts)) {
      // already pending
      factory.contexts.push(context);
    } else {
      var contexts = factory.contexts = [context];
      var sync = true;

      var forceRender = function forceRender() {
        for (var i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender();
        }
      });

      var reject = once(function (reason) {
        "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender();
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === 'function') {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isDef(res.component) && typeof res.component.then === 'function') {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function () {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender();
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function () {
              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }

  /*  */

  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }

  /*  */

  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn, once) {
    if (once) {
      target.$once(event, fn);
    } else {
      target.$on(event, fn);
    }
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var this$1 = this;

      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var this$1 = this;

      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$off(event[i], fn);
        }
        return vm;
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm;
      }
      if (!fn) {
        vm._events[event] = null;
        return vm;
      }
      if (fn) {
        // specific handler
        var cb;
        var i$1 = cbs.length;
        while (i$1--) {
          cb = cbs[i$1];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i$1, 1);
            break;
          }
        }
      }
      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          try {
            cbs[i].apply(vm, args);
          } catch (e) {
            handleError(e, vm, "event handler for \"" + event + "\"");
          }
        }
      }
      return vm;
    };
  }

  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots(children, context) {
    var slots = {};
    if (!children) {
      return slots;
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = data.slot;
        var slot = slots[name] || (slots[name] = []);
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots;
  }

  function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === ' ';
  }

  function resolveScopedSlots(fns, // see flow/vnode
  res) {
    res = res || {};
    for (var i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }
    return res;
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function initLifecycle(vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate');
      }
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
        , vm.$options._parentElm, vm.$options._refElm);
        // no need for the ref nodes after initial patch
        // this prevents keeping a detached DOM tree in memory (#5851)
        vm.$options._parentElm = vm.$options._refElm = null;
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      activeInstance = prevActiveInstance;
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return;
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      updateComponent = function updateComponent() {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function updateComponent() {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren
    var hasChildren = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data && parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        props[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }
    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return;
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    var handlers = vm.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, hook + " hook");
        }
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) {
      return a.id - b.id;
    });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if ("development" !== 'production' && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */

  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      var dep = this$1.deps[i];
      if (!this$1.newDepIds.has(dep.id)) {
        dep.removeSub(this$1);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown() {
    var this$1 = this;

    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this$1.deps[i].removeSub(this$1);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function loop(key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }
        defineReactive(props, key, value, function () {
          if (vm.$parent && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) {
      loop(key);
    }observerState.shouldConvert = true;
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
      data = {};
      "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }
      if (props && hasOwn(props, key)) {
        "development" !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData(data, vm) {
    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed(vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if ("development" !== 'production' && getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
      sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
    }
    if ("development" !== 'production' && sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      }
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (methods[key] == null) {
          warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
        }
        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }
        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }
      vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, keyOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(keyOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
      return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
      return this._props;
    };
    {
      dataDef.set = function (newData) {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        cb.call(vm, watcher.value);
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

  /*  */

  function initProvide(vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      observerState.shouldConvert = false;
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      observerState.shouldConvert = true;
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable;
      }) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && provideKey in source._provided) {
            result[key] = source._provided[provideKey];
            break;
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }
      return result;
    }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList(val, render) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    if (isDef(ret)) {
      ret._isVList = true;
    }
    return ret;
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        if ("development" !== 'production' && !isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes) {
        if ("development" !== 'production' && slotNodes._rendered) {
          warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
        }
        slotNodes._rendered = true;
      }
      nodes = slotNodes || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes);
    } else {
      return nodes;
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }

  /*  */

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes(eventKeyCode, key, builtInAlias, eventKeyName) {
    var keyCodes = config.keyCodes[key] || builtInAlias;
    if (keyCodes) {
      if (Array.isArray(keyCodes)) {
        return keyCodes.indexOf(eventKeyCode) === -1;
      } else {
        return keyCodes !== eventKeyCode;
      }
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) {
        "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function loop(key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }
          if (!(key in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on["update:" + key] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) {
          loop(key);
        }
      }
    }
    return data;
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic(index, isInFor) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
    );
    markStatic(tree, "__static__" + index, false);
    return tree;
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        "development" !== 'production' && warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data;
  }

  /*  */

  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
  }

  /*  */

  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var options = Ctor.options;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      return resolveSlots(children, parent);
    };

    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm = Object.create(parent);
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = data.scopedSlots || emptyObject;
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }
      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      vnode.fnContext = contextVm;
      vnode.fnOptions = options;
      if (data.slot) {
        (vnode.data || (vnode.data = {})).slot = data.slot;
      }
    }

    return vnode;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  // Register the component hook to weex native render engine.
  // The hook will be triggered by native, not javascript.


  // Updates the state of the component to weex native render engine.

  /*  */

  // https://github.com/Hanks10100/weex-native-directive/tree/master/component

  // listening on native callback

  /*  */

  /*  */

  // hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init(vnode, hydrating, parentElm, refElm) {
      if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      } else if (vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      }
    },

    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },

    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // merge component management hooks onto the placeholder node
    mergeHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);

    // Weex specific: invoke recycle-list optimized @render function for
    // extracting cell-slot template.
    // https://github.com/Hanks10100/weex-native-directive/tree/master/component
    /* istanbul ignore if */
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm, refElm) {
    var options = {
      _isComponent: true,
      parent: parent,
      _parentVnode: vnode,
      _parentElm: parentElm || null,
      _refElm: refElm || null
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options);
  }

  function mergeHooks(data) {
    if (!data.hook) {
      data.hook = {};
    }
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var fromParent = data.hook[key];
      var ours = componentVNodeHooks[key];
      data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }
  }

  function mergeHook$1(one, two) {
    return function (a, b, c, d) {
      one(a, b, c, d);
      two(a, b, c, d);
    };
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    if (isDef(on[event])) {
      on[event] = [data.model.callback].concat(on[event]);
    } else {
      on[event] = data.model.callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    }
    // warn against non-primitive key
    if ("development" !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      {
        warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (isDef(vnode)) {
      if (ns) {
        applyNS(vnode, ns);
      }
      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  /*  */

  function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (vm._isMounted) {
        // if the parent didn't update, the slot nodes will be the ones from
        // last render. They need to be cloned to ensure "freshness" for this render.
        for (var key in vm.$slots) {
          var slot = vm.$slots[key];
          // _rendered is a flag added by renderSlot, but may not be present
          // if the slot is passed from manually written render functions
          if (slot._rendered || slot[0] && slot[0].elm) {
            vm.$slots[key] = cloneVNodes(slot, true /* deep */);
          }
        }
      }

      vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        {
          if (vm.$options.renderError) {
            try {
              vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
            } catch (e) {
              handleError(e, vm, "renderError");
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        }
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if ("development" !== 'production' && Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode;
    };
  }

  /*  */

  var uid$1 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$1++;

      var startTag, endTag;
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;
    opts._parentElm = options._parentElm;
    opts._refElm = options._refElm;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var extended = Ctor.extendOptions;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }
        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }
    return modified;
  }

  function dedupe(latest, extended, sealed) {
    // compare latest and sealed to ensure lifecycle hooks won't be duplicated
    // between merges
    if (Array.isArray(latest)) {
      var res = [];
      sealed = Array.isArray(sealed) ? sealed : [sealed];
      extended = Array.isArray(extended) ? extended : [extended];
      for (var i = 0; i < latest.length; i++) {
        // push original options and not sealed options to exclude duplicated options
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }
      return res;
    } else {
      return latest;
    }
  }

  function Vue$3(options) {
    if ("development" !== 'production' && !(this instanceof Vue$3)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue$3);
  stateMixin(Vue$3);
  eventsMixin(Vue$3);
  lifecycleMixin(Vue$3);
  renderMixin(Vue$3);

  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this;
    };
  }

  /*  */

  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }

  /*  */

  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;
      if ("development" !== 'production' && name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          if ("development" !== 'production' && type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }

  /*  */

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created() {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed() {
      var this$1 = this;

      for (var key in this$1.cache) {
        pruneCacheEntry(this$1.cache, key, this$1.keys);
      }
    },

    watch: {
      include: function include(val) {
        pruneCache(this, function (name) {
          return matches(val, name);
        });
      },
      exclude: function exclude(val) {
        pruneCache(this, function (name) {
          return !matches(val, name);
        });
      }
    },

    render: function render() {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
        // not included
        include && (!name || !matches(include, name)) ||
        // excluded
        exclude && name && matches(exclude, name)) {
          return vnode;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || slot && slot[0];
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () {
      return config;
    };
    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue$3);

  Object.defineProperty(Vue$3.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue$3.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  });

  Vue$3.version = '2.5.13';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function mustUseProp(tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function isXlink(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function getXlinkProp(name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function isFalsyAttrValue(val) {
    return val == null || val === false;
  };

  /*  */

  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
  }

  function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }
    if (isObject(value)) {
      return stringifyObject(value);
    }
    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */
    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }
        res += stringified;
      }
    }
    return res;
  }

  function stringifyObject(value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }
        res += key;
      }
    }
    return res;
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function isPreTag(tag) {
    return tag === 'pre';
  };

  var isReservedTag = function isReservedTag(tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }
    if (isReservedTag(tag)) {
      return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        "development" !== 'production' && warn('Cannot find element: ' + el);
        return document.createElement('div');
      }
      return selected;
    } else {
      return el;
    }
  }

  /*  */

  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setAttribute(node, key, val) {
    node.setAttribute(key, val);
  }

  var nodeOps = Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setAttribute: setAttribute
  });

  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!key) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) {
        map[key] = i;
      }
    }
    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove() {
        if (--remove.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove.listeners = listeners;
      return remove;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1(vnode, inVPre) {
      return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
        return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
      })) && config.isUnknownElement(vnode.tag);
    }

    var creatingElmInVPre = 0;
    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }
        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if ("development" !== 'production' && data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */, parentElm, refElm);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break;
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (ref$$1.parentNode === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }
        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setAttribute(vnode.elm, i, '');
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys(children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return;
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true;
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false;
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true /* hydrating */);
        }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false;
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true;
    }

    function assertNodeMatch(node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }
        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm$1 = nodeOps.parentNode(oldElm);

          // create new node
          createElm(vnode, insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm$1)) {
            removeVnodes(parentElm$1, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function callInsert() {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];

  /*  */

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // #7138: IE10 & 11 fires input event when setting placeholder on
        // <textarea>... block the first input event and remove the blocker
        // immediately.
        /* istanbul ignore if */
        if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && !el.__ieph) {
          var blocker = function blocker(e) {
            e.stopImmediatePropagation();
            el.removeEventListener('input', blocker);
          };
          el.addEventListener('input', blocker);
          // $flow-disable-line
          el.__ieph = true; /* IE placeholder patched */
        }
        el.setAttribute(key, value);
      }
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x60:
            inTemplateString = true;break; // `
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0;
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') {
              break;
            }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + "," + args;
    }
  }

  /*  */

  function baseWarn(msg) {
    console.error("[Vue compiler]: " + msg);
  }

  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value) {
    (el.props || (el.props = [])).push({ name: name, value: value });
    el.plain = false;
  }

  function addAttr(el, name, value) {
    (el.attrs || (el.attrs = [])).push({ name: name, value: value });
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr(el, name, value) {
    el.attrsMap[name] = value;
    el.attrsList.push({ name: name, value: value });
  }

  function addDirective(el, name, rawName, value, arg, modifiers) {
    (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
    el.plain = false;
  }

  function addHandler(el, name, value, modifiers, important, warn) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if ("development" !== 'production' && warn && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.');
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = '&' + name; // mark the event as passive
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (name === 'click') {
      if (modifiers.right) {
        name = 'contextmenu';
        delete modifiers.right;
      } else if (modifiers.middle) {
        name = 'mouseup';
      }
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = { value: value };
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue);
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr(el, name, removeFromMap) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val;
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel(el, value, modifiers) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: "(" + value + ")",
      expression: "\"" + value + "\"",
      callback: "function (" + baseValueExpression + ") {" + assignment + "}"
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode(value, assignment) {
    var res = parseModel(value);
    if (res.key === null) {
      return value + "=" + assignment;
    } else {
      return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len;
  var str;
  var chr;
  var index$1;
  var expressionPos;
  var expressionEndPos;

  function parseModel(val) {
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        };
      } else {
        return {
          exp: val,
          key: null
        };
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break;
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');
    }

    // ensure runtime directive metadata
    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      if (value$1) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally');
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler(handler, event, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler() {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    };
  }

  function add$1(event, handler, once$$1, capture, passive) {
    handler = withMacroTask(handler);
    if (once$$1) {
      handler = createOnceHandler(handler, event, capture);
    }
    target$1.addEventListener(event, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
  }

  function remove$2(event, handler, capture, _target) {
    (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue;
        }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
  }

  function isNotInFocusAndDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}
    return notInFocus && elm.value !== checkVal;
  }

  function isDirtyWithModifiers(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.lazy) {
        // inputs with lazy should only be updated when not in focus
        return false;
      }
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal);
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim();
      }
    }
    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }
    return bindingStyle;
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res;
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function setProp(el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
      return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition(def) {
    if (!def) {
      return;
    }
    /* istanbul ignore else */
    if ((typeof def === 'undefined' ? 'undefined' : _typeof(def)) === 'object') {
      var res = {};
      if (def.css !== false) {
        extend(res, autoCssTransition(def.name || 'v'));
      }
      extend(res, def);
      return res;
    } else if (typeof def === 'string') {
      return autoCssTransition(def);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
    return fn();
  };

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) {
      return cb();
    }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function end() {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function onEnd(e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
    var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = styles[animationProp + 'Delay'].split(', ');
    var animationDurations = styles[animationProp + 'Duration'].split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  }

  function toMs(s) {
    return Number(s.slice(0, -1)) * 1000;
  }

  /*  */

  function enter(vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return;
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if ("development" !== 'production' && explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        addTransitionClass(el, toClass);
        removeTransitionClass(el, startClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm();
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      }
      // record leaving element
      if (!vnode.data.show) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          addTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled && !userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [attrs, klass, events, domProps, style, transition];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          if (!isAndroid) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
          }
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) {
          return !looseEqual(o, prevOptions[i]);
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function (v) {
            return hasNoMatchingOption(v, curOptions);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    return options.every(function (o) {
      return !looseEqual(o, value);
    });
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (value === oldValue) {
        return;
      }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  // Provides transition support for a single element/component.
  // supports transition mode (out-in / in-out)

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return;
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(function (c) {
        return c.tag || isAsyncPlaceholder(c);
      });
      /* istanbul ignore if */
      if (!children.length) {
        return;
      }

      // warn multiple elements
      if ("development" !== 'production' && children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode;

      // warn invalid mode
      if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(function (d) {
        return d.name === 'show';
      })) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }
          var delayedLeave;
          var performLeave = function performLeave() {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }
  };

  /*  */

  // Provides transition support for list items.
  // supports move transitions using the FLIP technique.

  // Because the vdom's children update algorithm is "unstable" - i.e.
  // it doesn't guarantee the relative positioning of removed elements,
  // we force transition-group to update its children into two passes:
  // in the first pass, we remove all nodes that need to be removed,
  // triggering their leaving transition; in the second pass, we insert/move
  // into the final desired state. This way in the second pass removed
  // nodes will remain where they should be.

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },

    beforeUpdate: function beforeUpdate() {
      // force removing pass
      this.__patch__(this._vnode, this.kept, false, // hydrating
      true // removeOnly (!important avoids unnecessary moves)
      );
      this._vnode = this.kept;
    },

    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove;
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue$3.config.mustUseProp = mustUseProp;
  Vue$3.config.isReservedTag = isReservedTag;
  Vue$3.config.isReservedAttr = isReservedAttr;
  Vue$3.config.getTagNamespace = getTagNamespace;
  Vue$3.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue$3.options.directives, platformDirectives);
  extend(Vue$3.options.components, platformComponents);

  // install platform patch function
  Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue$3.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  };

  // devtools global hook
  /* istanbul ignore next */
  Vue$3.nextTick(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue$3);
      } else if ("development" !== 'production' && isChrome) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }
    if ("development" !== 'production' && config.productionTip !== false && inBrowser && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);

  /*  */

  var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return;
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while (match = tagRE.exec(text)) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    };
  }

  /*  */

  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if ("development" !== 'production' && staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }
    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }
    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }
    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode(html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent;
    }
  };

  /*  */

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  /*!
   * HTML Parser By John Resig (ejohn.org)
   * Modified by Juriy "kangax" Zaytsev
   * Original code by Erik Arvidsson, Mozilla Public License
   * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp("^<" + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
  var doctype = /^<!DOCTYPE [^>]+>/i;
  var comment = /^<!--/;
  var conditionalComment = /^<!\[/;

  var IS_REGEX_CAPTURING_BROKEN = false;
  'x'.replace(/x(.)?/g, function (m, g) {
    IS_REGEX_CAPTURING_BROKEN = g === '';
  });

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t'
  };
  var encodedAttr = /&(?:lt|gt|quot|amp);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd));
              }
              advance(commentEnd + 3);
              continue;
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(lastTag, html)) {
              advance(1);
            }
            continue;
          }
        }

        var text = void 0,
            rest = void 0,
            next = void 0;
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) {
              break;
            }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return '';
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if ("development" !== 'production' && !stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
        }
        break;
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
        if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
          if (args[3] === '') {
            delete args[3];
          }
          if (args[4] === '') {
            delete args[4];
          }
          if (args[5] === '') {
            delete args[5];
          }
        }
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
      }

      // Find the closest opened tag of the same type
      if (tagName) {
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if ("development" !== 'production' && (i > pos || !tagName) && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^v-bind:/;
  var modifierRE = /\.[^.]+/g;

  var decodeHTMLCached = cached(he.decode);

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;

  function createASTElement(tag, attrs, parent) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      parent: parent,
      children: []
    };
  }

  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg) {
      if (!warned) {
        warned = true;
        warn$2(msg);
      }
    }

    function closeElement(element) {
      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      start: function start(tag, attrs, unary) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          "development" !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
          // element-scope stuff
          processElement(element, options);
        }

        function checkRootConstraints(el) {
          {
            if (el.tag === 'slot' || el.tag === 'template') {
              warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
              warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');
            }
          }
        }

        // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else {
            warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) {
            // scoped slot
            currentParent.plain = false;
            var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end() {
        // remove trailing whitespace
        var element = stack[stack.length - 1];
        var lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
          element.children.pop();
        }
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        closeElement(element);
      },

      chars: function chars(text) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.');
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.");
            }
          }
          return;
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }
        var children = currentParent.children;
        text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          var res;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            });
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            children.push({
              type: 3,
              text: text
            });
          }
        }
      },
      comment: function comment(text) {
        currentParent.children.push({
          type: 3,
          text: text,
          isComment: true
        });
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var l = el.attrsList.length;
    if (l) {
      var attrs = el.attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: JSON.stringify(el.attrsList[i].value)
        };
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement(element, options) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = !element.key && !element.attrsList.length;

    processRef(element);
    processSlot(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      if ("development" !== 'production' && el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;
    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2("Invalid v-for expression: " + exp);
      }
    }
  }

  function parseFor(exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      return;
    }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '');
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res;
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
    }
  }

  function findPrevElement(children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if ("development" !== 'production' && children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
        }
        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  function processSlot(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if ("development" !== 'production' && el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
      }
    } else {
      var slotScope;
      if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if ("development" !== 'production' && slotScope) {
          warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", true);
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
      } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
        /* istanbul ignore if */
        if ("development" !== 'production' && el.attrsMap['v-for']) {
          warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", true);
        }
        el.slotScope = slotScope;
      }
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
          addAttr(el, 'slot', slotTarget);
        }
      }
    }
  }

  function processComponent(el) {
    var binding;
    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              addHandler(el, "update:" + camelize(name), genAssignmentCode(value, "$event"));
            }
          }
          if (isProp || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers, false, warn$2);
        } else {
          // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if ("development" !== 'production' && name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
          }
        }
        addAttr(el, name, JSON.stringify(value));
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true');
        }
      }
    }
  }

  function checkInFor(el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if ("development" !== 'production' && map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
      }
      _el = _el.parent;
    }
  }

  /*  */

  /**
   * Expand input[v-model] with dyanmic type bindings into v-if-else chains
   * Turn this:
   *   <input v-model="data[type]" :type="type">
   * into this:
   *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
   *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
   *   <input v-else :type="type" v-model="data[type]">
   */

  function preTransformNode(el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
        var typeBinding = getBindingAttr(el, 'type');
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0;
      }
    }
  }

  function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
  }

  var model$2 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [klass$1, style$1, model$2];

  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")");
    }
  }

  /*  */

  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")");
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {
    if (!root) {
      return;
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
  }

  function markStatic$1(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }
    if (node.type === 3) {
      // text
      return true;
    }
    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false;
      }
      if (node.for) {
        return true;
      }
    }
    return false;
  }

  /*  */

  var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

  // keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function genGuard(condition) {
    return "if(" + condition + ")return null;";
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative, warn) {
    var res = isNative ? 'nativeOn:{' : 'on:{';
    for (var name in events) {
      res += "\"" + name + "\":" + genHandler(name, events[name]) + ",";
    }
    return res.slice(0, -1) + '}';
  }

  function genHandler(name, handler) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(name, handler);
      }).join(',') + "]";
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value;
      }
      /* istanbul ignore if */
      return "function($event){" + handler.value + "}"; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
            return !modifiers[keyModifier];
          }).map(function (keyModifier) {
            return "$event." + keyModifier + "Key";
          }).join('||'));
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath ? handler.value + '($event)' : isFunctionExpression ? "(" + handler.value + ")($event)" : handler.value;
      /* istanbul ignore if */
      return "function($event){" + code + handlerCode + "}";
    }
  }

  function genKeyFilter(keys) {
    return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }
    var code = keyCodes[key];
    return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(code) + "," + "$event.key)";
  }

  /*  */

  function on(el, dir) {
    if ("development" !== 'production' && dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) {
      return "_g(" + code + "," + dir.value + ")";
    };
  }

  /*  */

  function bind$1(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */

  var CodegenState = function CodegenState(options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) {
      return !isReservedTag(el.tag);
    };
    this.onceId = 0;
    this.staticRenderFns = [];
  };

  function generate(ast, options) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: state.staticRenderFns
    };
  }

  function genElement(el, state) {
    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state);
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget) {
      return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el, state);
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data = el.plain ? undefined : genData$2(el, state);

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code;
    }
  }

  // hoist static sub-trees out
  function genStatic(el, state) {
    el.staticProcessed = true;
    state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
    return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
  }

  // v-once
  function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }
        parent = parent.parent;
      }
      if (!key) {
        "development" !== 'production' && state.warn("v-once can only be used inside v-for that is keyed. ");
        return genElement(el, state);
      }
      return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
    } else {
      return genStatic(el, state);
    }
  }

  function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }

  function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
      return altEmpty || '_e()';
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
    } else {
      return "" + genTernaryExp(condition.block);
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
      return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
    }
  }

  function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if ("development" !== 'production' && state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
  }

  function genData$2(el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) {
      data += dirs + ',';
    }

    // key
    if (el.key) {
      data += "key:" + el.key + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:{" + genProps(el.attrs) + "},";
    }
    // DOM props
    if (el.props) {
      data += "domProps:{" + genProps(el.props) + "},";
    }
    // event handlers
    if (el.events) {
      data += genHandlers(el.events, false, state.warn) + ",";
    }
    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true, state.warn) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + el.slotTarget + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += genScopedSlots(el.scopedSlots, state) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data;
  }

  function genDirectives(el, state) {
    var dirs = el.directives;
    if (!dirs) {
      return;
    }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el, state) {
    var ast = el.children[0];
    if ("development" !== 'production' && (el.children.length !== 1 || ast.type !== 1)) {
      state.warn('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(slots, state) {
    return "scopedSlots:_u([" + Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state);
    }).join(',') + "])";
  }

  function genScopedSlot(key, el, state) {
    if (el.for && !el.forProcessed) {
      return genForScopedSlot(key, el, state);
    }
    var fn = "function(" + String(el.slotScope) + "){" + "return " + (el.tag === 'template' ? el.if ? el.if + "?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}";
    return "{key:" + key + ",fn:" + fn + "}";
  }

  function genForScopedSlot(key, el, state) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genScopedSlot(key, el, state) + '})';
  }

  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        return (altGenElement || genElement)(el$1, state);
      }
      var normalizationType = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
      var gen = altGenNode || genNode;
      return "[" + children.map(function (c) {
        return gen(c, state);
      }).join(',') + "]" + (normalizationType ? "," + normalizationType : '');
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children, maybeComponent) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue;
      }
      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }
      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }
    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function genNode(node, state) {
    if (node.type === 1) {
      return genElement(node, state);
    }if (node.type === 3 && node.isComment) {
      return genComment(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
  }

  function genComment(comment) {
    return "_e(" + JSON.stringify(comment.text) + ")";
  }

  function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs && "{" + el.attrs.map(function (a) {
      return camelize(a.name) + ":" + a.value;
    }).join(',') + "}";
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')';
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var res = '';
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      /* istanbul ignore if */
      {
        res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
      }
    }
    return res.slice(0, -1);
  }

  // #3895, #4268
  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  /*  */

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors(ast) {
    var errors = [];
    if (ast) {
      checkNode(ast, errors);
    }
    return errors;
  }

  function checkNode(node, errors) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", errors);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", errors);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", errors);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }
  }

  function checkEvent(exp, text, errors) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
    }
    checkExpression(exp, text, errors);
  }

  function checkFor(node, text, errors) {
    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
  }

  function checkIdentifier(ident, type, text, errors) {
    if (typeof ident === 'string') {
      try {
        new Function("var " + ident + "=_");
      } catch (e) {
        errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());
      }
    }
  }

  function checkExpression(exp, text, errors) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim());
      } else {
        errors.push("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n");
      }
    }
  }

  /*  */

  function createFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop;
    }
  }

  function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);

    return function compileToFunctions(template, options, vm) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      }

      // check cache
      var key = options.delimiters ? String(options.delimiters) + template : template;
      if (cache[key]) {
        return cache[key];
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
            return "- " + e;
          }).join('\n') + '\n', vm);
        }
        if (compiled.tips && compiled.tips.length) {
          compiled.tips.forEach(function (msg) {
            return tip(msg, vm);
          });
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors);
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return err.toString() + " in\n\n" + code + "\n";
          }).join('\n'), vm);
        }
      }

      return cache[key] = res;
    };
  }

  /*  */

  function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
      function compile(template, options) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];
        finalOptions.warn = function (msg, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          // merge custom modules
          if (options.modules) {
            finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(Object.create(baseOptions.directives || null), options.directives);
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        var compiled = baseCompile(template, finalOptions);
        {
          errors.push.apply(errors, detectErrors(compiled.ast));
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled;
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      };
    };
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });

  var mount = Vue$3.prototype.$mount;
  Vue$3.prototype.$mount = function (el, hydrating) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      "development" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if ("development" !== 'production' && !template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile end');
          measure("vue " + this._name + " compile", 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating);
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue$3.compile = compileToFunctions;

  return Vue$3;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(3).setImmediate))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/_css-loader@0.28.10@css-loader/index.js!./style.css", function() {
		var newContent = require("!!../../node_modules/_css-loader@0.28.10@css-loader/index.js!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".bg{\r\n    background: red;\r\n}", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Document</title>\r\n</head>\r\n<body class=\"bg\">\r\n    <img src=\"" + __webpack_require__(12) + "\" alt=\"\">\r\n</body>\r\n</html>";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })
/******/ ]);