// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"react/UseDropDown.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var UseDropDown = (label, defaultState, options) => {
  var [getState, setState] = (0, _react.useState)(defaultState);
  var id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  var DropDown = () => {
    return /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: id
    }, label, /*#__PURE__*/_react.default.createElement("select", {
      id: id,
      value: getState,
      onChange: event => setState(event.target.value),
      onBlur: event => setState(event.target.value),
      disabled: options.length == 0
    }, /*#__PURE__*/_react.default.createElement("option", null, "All"), options.map((item, index) => /*#__PURE__*/_react.default.createElement("option", {
      value: item,
      key: index
    }, item))));
  };

  return [getState, DropDown, setState];
};

var _default = UseDropDown;
exports.default = _default;
},{"react":"../node_modules/react/index.js"}],"react/Pet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pet = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pet = ({
  name,
  animal,
  breed,
  id,
  media,
  location
} = {}) => {
  var imageAdress = "https://placecorgi.com/300/300";

  if (media.length > 0) {
    imageAdress = media[0].small;
  }

  console.log('Hello');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pet",
    id: id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imageAdress,
    alt: name
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement("h1", null, name), /*#__PURE__*/_react.default.createElement("h2", null, `${animal} - ${breed} - ${location}`)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_router.Link, {
    to: `details/${id}`
  }, "Details")));
};

exports.Pet = Pet;
},{"react":"../node_modules/react/index.js","@reach/router":"../node_modules/@reach/router/es/index.js"}],"react/PetResults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pet = require("./Pet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ShowPet = ({
  pets
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search"
  }, pets.length == 0 ? /*#__PURE__*/_react.default.createElement("h1", null, "No pets found\uD83D\uDE22! Try again...") : // name, animal, breed, description
  pets.map(pet => /*#__PURE__*/_react.default.createElement(_Pet.Pet, {
    animal: pet.type,
    name: pet.name,
    key: pet.id,
    breed: pet.breeds.primary,
    media: pet.photos,
    location: `${pet.contact.address.city}, ${pet.contact.address.state}`,
    id: pet.id
  })));
};

var _default = ShowPet;
exports.default = _default;
},{"react":"../node_modules/react/index.js","./Pet":"react/Pet.js"}],"react/SearchParam.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _pet = _interopRequireWildcard(require("@frontendmasters/pet"));

var _UseDropDown = _interopRequireDefault(require("./UseDropDown"));

var _PetResults = _interopRequireDefault(require("./PetResults"));

var _ThemeContext = _interopRequireDefault(require("./ThemeContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SearchParam() {
  var [getLocation, setLocation] = (0, _react.useState)("Seattle, Wa");
  var [listOfBreeds, setListOfBreeds] = (0, _react.useState)([]);
  var [animalName, AnimalsDropDown] = (0, _UseDropDown.default)("Animals", "All", _pet.ANIMALS);
  var [animalBreed, AnimalsBreedDropDown, selectBreed] = (0, _UseDropDown.default)("Breeds", "", listOfBreeds);
  var [getPetsList, setPets] = (0, _react.useState)("");
  var [{
    buttonColor
  }, setTheme] = (0, _react.useContext)(_ThemeContext.default); // ********************************************

  async function submitAnimal() {
    var {
      animals
    } = await _pet.default.animals({
      location: getLocation,
      breed: animalBreed,
      type: animalName
    });

    if (animals) {
      setPets(animals);
    } else {
      setPets([]);
    }
  }

  (0, _react.useEffect)(() => {
    setListOfBreeds([]);
    selectBreed("");

    _pet.default.breeds(animalName).then(({
      breeds
    }) => {
      if (Array.isArray(breeds)) {
        const breedsNames = breeds.map(({
          name
        }) => name);
        setListOfBreeds(breedsNames);
      }
    }, console.error);
  }, [animalName, selectBreed, setListOfBreeds]); // ********************************************

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-params"
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: event => {
      event.preventDefault();
      submitAnimal();
    }
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "lovation"
  }, "Location", /*#__PURE__*/_react.default.createElement("input", {
    id: "location",
    value: getLocation,
    placeholder: "Location",
    onChange: event => setLocation(event.target.value)
  })), /*#__PURE__*/_react.default.createElement(AnimalsDropDown, null), /*#__PURE__*/_react.default.createElement(AnimalsBreedDropDown, null), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "theme"
  }, "Theme", /*#__PURE__*/_react.default.createElement("select", {
    value: buttonColor,
    onChange: event => setTheme({
      buttonColor: event.target.value
    }),
    onBlur: event => setTheme({
      buttonColor: event.target.value
    })
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "peru"
  }, "Peru"), /*#__PURE__*/_react.default.createElement("option", {
    value: "darkblue"
  }, "Darkblue"), /*#__PURE__*/_react.default.createElement("option", {
    value: "mediumorchid"
  }, "Mediun Orchid"), /*#__PURE__*/_react.default.createElement("option", {
    value: "chartreuse"
  }, "Chart Reuse"))), /*#__PURE__*/_react.default.createElement("button", {
    style: {
      backgroundColor: buttonColor
    }
  }, "Submit")), Array.isArray(getPetsList) ? /*#__PURE__*/_react.default.createElement(_PetResults.default, {
    pets: getPetsList
  }) : null);
}

var _default = SearchParam;
exports.default = _default;
},{"react":"../node_modules/react/index.js","@frontendmasters/pet":"../node_modules/@frontendmasters/pet/index.js","./UseDropDown":"react/UseDropDown.js","./PetResults":"react/PetResults.js","./ThemeContext":"react/ThemeContext.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49687" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/SearchParam.620dd375.js.map