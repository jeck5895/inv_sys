webpackJsonp([0],{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(222)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(224)
/* template */
var __vue_template__ = __webpack_require__(240)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/pages/admin/stocks.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6947f246", Component.options)
  } else {
    hotAPI.reload("data-v-6947f246", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6682f947", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6947f246\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./stocks.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6947f246\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./stocks.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _itemButtons = __webpack_require__(225);

var _itemButtons2 = _interopRequireDefault(_itemButtons);

var _items = __webpack_require__(230);

var _items2 = _interopRequireDefault(_items);

var _item = __webpack_require__(235);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        NavButtons: _itemButtons2.default,
        ItemsTable: _items2.default,
        ItemForm: _item2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(226)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(228)
/* template */
var __vue_template__ = __webpack_require__(229)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/admin/buttons/item-buttons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bf83560", Component.options)
  } else {
    hotAPI.reload("data-v-2bf83560", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(227);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("42a34caf", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2bf83560\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item-buttons.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2bf83560\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item-buttons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary waves-effect waves-light m-1",
          attrs: { "data-toggle": "modal", "data-target": "#dangermodal" }
        },
        [
          _c("i", { staticClass: "fa fa-cloud-upload" }),
          _vm._v(" "),
          _c("span", [_vm._v("Upload")])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "modal fade", attrs: { id: "dangermodal" } }, [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content border-primary" }, [
            _c("div", { staticClass: "modal-header bg-primary" }, [
              _c("h5", { staticClass: "modal-title text-white" }, [
                _c("i", { staticClass: "fa fa-file-excel-o" }),
                _vm._v(" Import\n                        File")
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close text-white",
                  attrs: {
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close"
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "form",
                {
                  staticClass: "dropzone",
                  attrs: { action: "#", id: "dropzone" }
                },
                [
                  _c("div", { staticClass: "fallback" }, [
                    _c("input", {
                      attrs: {
                        name: "file",
                        type: "file",
                        multiple: "multiple"
                      }
                    })
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-inverse-primary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [
                  _c("i", { staticClass: "fa fa-times" }),
                  _vm._v("\n                        Close")
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "button" } },
                [
                  _c("i", { staticClass: "fa fa-check-square-o" }),
                  _vm._v("\n                        Upload")
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary waves-effect waves-light m-1",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": "#addmodal"
          }
        },
        [
          _c("i", { staticClass: "fa fa-plus-circle" }),
          _vm._v(" "),
          _c("span", [_vm._v("New Item")])
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2bf83560", module.exports)
  }
}

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(231)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(233)
/* template */
var __vue_template__ = __webpack_require__(234)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/admin/tables/items.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-240c34e1", Component.options)
  } else {
    hotAPI.reload("data-v-240c34e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(232);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("161980ba", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-240c34e1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./items.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-240c34e1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./items.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "table",
      { staticClass: "table table-bordered", attrs: { id: "example" } },
      [
        _c("thead", { staticClass: "thead-primary shadow-primary" }, [
          _c("tr", [
            _c("th", [_vm._v("Item Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Item Code")]),
            _vm._v(" "),
            _c("th", [_vm._v("Unit")]),
            _vm._v(" "),
            _c("th", [_vm._v("Quantity")]),
            _vm._v(" "),
            _c("th", [_vm._v("Price")]),
            _vm._v(" "),
            _c("th", [_vm._v("Site")]),
            _vm._v(" "),
            _c("th", [_vm._v("Date Added")]),
            _vm._v(" "),
            _c("th", [_vm._v("DR Number")]),
            _vm._v(" "),
            _c("th", [_vm._v("Action")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("Pencil")]),
            _vm._v(" "),
            _c("td", [_vm._v("CODE")]),
            _vm._v(" "),
            _c("td", [_vm._v("PCS")]),
            _vm._v(" "),
            _c("td", [_vm._v("50")]),
            _vm._v(" "),
            _c("td", [_vm._v("100")]),
            _vm._v(" "),
            _c("td", [_vm._v("Sumacab")]),
            _vm._v(" "),
            _c("td", [_vm._v("14 July 2018")]),
            _vm._v(" "),
            _c("td", [_vm._v("12345")]),
            _vm._v(" "),
            _c("td", { attrs: { align: "center" } }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#primarymodal"
                  }
                },
                [_vm._v("UPDATE")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: { type: "button", id: "confirm-btn-alert4" }
                },
                [_vm._v("REMOVE\n                ")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Ballpen")]),
            _vm._v(" "),
            _c("td", [_vm._v("CODE")]),
            _vm._v(" "),
            _c("td", [_vm._v("PCS")]),
            _vm._v(" "),
            _c("td", [_vm._v("50")]),
            _vm._v(" "),
            _c("td", [_vm._v("100")]),
            _vm._v(" "),
            _c("td", [_vm._v("Sumacab")]),
            _vm._v(" "),
            _c("td", [_vm._v("14 July 2018")]),
            _vm._v(" "),
            _c("td", [_vm._v("12345")]),
            _vm._v(" "),
            _c("td", { attrs: { align: "center" } }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#primarymodal"
                  }
                },
                [_vm._v("UPDATE")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: { type: "button", id: "confirm-btn-alert5" }
                },
                [_vm._v("REMOVE\n                ")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Lanyard")]),
            _vm._v(" "),
            _c("td", [_vm._v("CODE")]),
            _vm._v(" "),
            _c("td", [_vm._v("PCS")]),
            _vm._v(" "),
            _c("td", [_vm._v("50")]),
            _vm._v(" "),
            _c("td", [_vm._v("100")]),
            _vm._v(" "),
            _c("td", [_vm._v("Sumacab")]),
            _vm._v(" "),
            _c("td", [_vm._v("14 July 2018")]),
            _vm._v(" "),
            _c("td", [_vm._v("12345")]),
            _vm._v(" "),
            _c("td", { attrs: { align: "center" } }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#primarymodal"
                  }
                },
                [_vm._v("UPDATE")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: { type: "button", id: "confirm-btn-alert6" }
                },
                [_vm._v("REMOVE\n                ")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Book")]),
            _vm._v(" "),
            _c("td", [_vm._v("CODE")]),
            _vm._v(" "),
            _c("td", [_vm._v("PCS")]),
            _vm._v(" "),
            _c("td", [_vm._v("50")]),
            _vm._v(" "),
            _c("td", [_vm._v("100")]),
            _vm._v(" "),
            _c("td", [_vm._v("Sumacab")]),
            _vm._v(" "),
            _c("td", [_vm._v("14 July 2018")]),
            _vm._v(" "),
            _c("td", [_vm._v("12345")]),
            _vm._v(" "),
            _c("td", { attrs: { align: "center" } }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#primarymodal"
                  }
                },
                [_vm._v("UPDATE")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: { type: "button", id: "confirm-btn-alert7" }
                },
                [_vm._v("REMOVE\n                ")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Pants")]),
            _vm._v(" "),
            _c("td", [_vm._v("CODE")]),
            _vm._v(" "),
            _c("td", [_vm._v("PCS")]),
            _vm._v(" "),
            _c("td", [_vm._v("50")]),
            _vm._v(" "),
            _c("td", [_vm._v("100")]),
            _vm._v(" "),
            _c("td", [_vm._v("Sumacab")]),
            _vm._v(" "),
            _c("td", [_vm._v("14 July 2018")]),
            _vm._v(" "),
            _c("td", [_vm._v("12345")]),
            _vm._v(" "),
            _c("td", { attrs: { align: "center" } }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#primarymodal"
                  }
                },
                [_vm._v("UPDATE")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: { type: "button", id: "confirm-btn-alert8" }
                },
                [_vm._v("REMOVE\n                ")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Shirt")]),
            _vm._v(" "),
            _c("td", [_vm._v("CODE")]),
            _vm._v(" "),
            _c("td", [_vm._v("PCS")]),
            _vm._v(" "),
            _c("td", [_vm._v("50")]),
            _vm._v(" "),
            _c("td", [_vm._v("100")]),
            _vm._v(" "),
            _c("td", [_vm._v("Sumacab")]),
            _vm._v(" "),
            _c("td", [_vm._v("14 July 2018")]),
            _vm._v(" "),
            _c("td", [_vm._v("12345")]),
            _vm._v(" "),
            _c("td", { attrs: { align: "center" } }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#primarymodal"
                  }
                },
                [_vm._v("UPDATE")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: { type: "button", id: "confirm-btn-alert9" }
                },
                [_vm._v("REMOVE\n                ")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Bag")]),
            _vm._v(" "),
            _c("td", [_vm._v("CODE")]),
            _vm._v(" "),
            _c("td", [_vm._v("PCS")]),
            _vm._v(" "),
            _c("td", [_vm._v("50")]),
            _vm._v(" "),
            _c("td", [_vm._v("100")]),
            _vm._v(" "),
            _c("td", [_vm._v("Sumacab")]),
            _vm._v(" "),
            _c("td", [_vm._v("14 July 2018")]),
            _vm._v(" "),
            _c("td", [_vm._v("12345")]),
            _vm._v(" "),
            _c("td", { attrs: { align: "center" } }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#primarymodal"
                  }
                },
                [_vm._v("UPDATE")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary waves-effect waves-light",
                  attrs: { type: "button", id: "confirm-btn-alert10" }
                },
                [_vm._v("REMOVE\n                ")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("tfoot", [
          _c("tr", [
            _c("th", [_vm._v("Item Name")]),
            _vm._v(" "),
            _c("th", [_vm._v("Item Code")]),
            _vm._v(" "),
            _c("th", [_vm._v("Unit")]),
            _vm._v(" "),
            _c("th", [_vm._v("Quantity")]),
            _vm._v(" "),
            _c("th", [_vm._v("Price")]),
            _vm._v(" "),
            _c("th", [_vm._v("Site")]),
            _vm._v(" "),
            _c("th", [_vm._v("Date Added")]),
            _vm._v(" "),
            _c("th", [_vm._v("DR Number")]),
            _vm._v(" "),
            _c("th", [_vm._v("Action")])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-240c34e1", module.exports)
  }
}

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(236)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(238)
/* template */
var __vue_template__ = __webpack_require__(239)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/form-modal/item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3785d13a", Component.options)
  } else {
    hotAPI.reload("data-v-3785d13a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0108cdf0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3785d13a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3785d13a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal fade", attrs: { id: "addmodal" } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content border-primary" }, [
          _c("div", { staticClass: "modal-header bg-primary" }, [
            _c("h5", { staticClass: "modal-title text-white" }, [
              _c("i", { staticClass: "fa fa-plus-square" }),
              _vm._v(" Add New Item")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "close text-white",
                attrs: {
                  type: "button",
                  "data-dismiss": "modal",
                  "aria-label": "Close"
                }
              },
              [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "card bg-primary shadow-primary" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("hr"),
                _vm._v(" "),
                _c("form", { staticClass: "color-form" }, [
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { attrs: { for: "input-1" } }, [
                        _vm._v("Item Name")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "input-1",
                          placeholder: "Enter Item Name"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { attrs: { for: "input-4" } }, [
                        _vm._v("Item Code")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "input-4",
                          placeholder: "Enter Item Code"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "basic-select" } }, [
                      _vm._v("Unit")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        staticClass: "form-control",
                        attrs: { id: "basic-select" }
                      },
                      [
                        _c("option", { staticStyle: { color: "gray" } }, [
                          _vm._v("Please Select Unit")
                        ]),
                        _vm._v(" "),
                        _c("option", [_vm._v("PC")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("PCS")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("BOX")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("PACK")])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "input-6" } }, [
                      _vm._v("Quantity")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        id: "input-6",
                        placeholder: "Enter Quantity"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "input-7" } }, [
                      _vm._v("Price")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "input-7",
                        placeholder: "Enter Price"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "basic-select" } }, [
                      _vm._v("Site")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        staticClass: "form-control",
                        attrs: { id: "basic-select" }
                      },
                      [
                        _c("option", { staticStyle: { color: "gray" } }, [
                          _vm._v("Please Select Site")
                        ]),
                        _vm._v(" "),
                        _c("option", [_vm._v("Sumacab")]),
                        _vm._v(" "),
                        _c("option", [_vm._v("General Tinio")])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "input-7" } }, [
                      _vm._v("DR Number")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "input-7",
                        placeholder: "Enter DR Number"
                      }
                    })
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-inverse-primary",
                attrs: { type: "button", "data-dismiss": "modal" }
              },
              [
                _c("i", { staticClass: "fa fa-times" }),
                _vm._v("\n                    Close")
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "button" } },
              [
                _c("i", { staticClass: "fa fa-check-square-o" }),
                _vm._v(" Add Item")
              ]
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3785d13a", module.exports)
  }
}

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body table-responsive" },
            [
              _c("NavButtons"),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("ItemsTable"),
              _vm._v(" "),
              _c("ItemForm")
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row pt-2 pb-2" }, [
      _c("div", { staticClass: "col-sm-9" }, [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javaScript:void();" } }, [_vm._v("Home")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javaScript:void();" } }, [
              _vm._v("User Account")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "javaScript:void();" } }, [
              _vm._v("Register")
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" }, [
        _c("div", { staticClass: "btn-group float-sm-right" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-outline-primary waves-effect waves-light",
              attrs: { type: "button" }
            },
            [
              _c("i", { staticClass: "fa fa-cog mr-1" }),
              _vm._v("\n                    Setting")
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "btn btn-outline-primary dropdown-toggle dropdown-toggle-split waves-effect waves-light",
              attrs: { type: "button", "data-toggle": "dropdown" }
            },
            [_c("span", { staticClass: "caret" })]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-menu" }, [
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javaScript:void();" }
              },
              [_vm._v("Action")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javaScript:void();" }
              },
              [_vm._v("Another action")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javaScript:void();" }
              },
              [_vm._v("Something else here")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javaScript:void();" }
              },
              [_vm._v("Separated link")]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("i", { staticClass: "fa fa-clone" }),
      _vm._v(" My Stocks")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6947f246", module.exports)
  }
}

/***/ })

});