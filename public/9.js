webpackJsonp([9],{

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(307)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(309)
/* template */
var __vue_template__ = __webpack_require__(310)
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
Component.options.__file = "resources/js/components/admin/tables/users.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-902f11ae", Component.options)
  } else {
    hotAPI.reload("data-v-902f11ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5a2d58b6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-902f11ae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./users.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-902f11ae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./users.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 309:
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

exports.default = {};

/***/ }),

/***/ 310:
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
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("i", { staticClass: "fa fa-user" }),
          _vm._v(" Account List")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              { staticClass: "table table-bordered", attrs: { id: "example" } },
              [
                _c("thead", { staticClass: "thead-primary shadow-primary" }, [
                  _c("tr", [
                    _c("th", [_vm._v("Full Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Student ID")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Role")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Password")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Action")])
                  ])
                ]),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", [_vm._v("Joe Irinco")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("JEKCIT-002")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Student")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("admin1234")]),
                    _vm._v(" "),
                    _c("td", { attrs: { align: "center" } }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-primary waves-effect waves-light",
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
                          staticClass:
                            "btn btn-primary waves-effect waves-light",
                          attrs: { type: "button", id: "confirm-btn-alert1" }
                        },
                        [_vm._v("REMOVE\n                                ")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Jesser Galapon")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("JEKCIT-001")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Admin")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("admin1234")]),
                    _vm._v(" "),
                    _c("td", { attrs: { align: "center" } }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-primary waves-effect waves-light",
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
                          staticClass:
                            "btn btn-primary waves-effect waves-light",
                          attrs: { type: "button", id: "confirm-btn-alert2" }
                        },
                        [_vm._v("REMOVE\n                                ")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Rommel Lacap")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("JEKCIT-003")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Admin")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("admin1234")]),
                    _vm._v(" "),
                    _c("td", { attrs: { align: "center" } }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-primary waves-effect waves-light",
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
                          staticClass:
                            "btn btn-primary waves-effect waves-light",
                          attrs: { type: "button", id: "confirm-btn-alert3" }
                        },
                        [_vm._v("REMOVE\n                                ")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("tfoot", [
                  _c("tr", [
                    _c("th", [_vm._v("Full Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Student ID")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Role")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Password")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Action")])
                  ])
                ])
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
    require("vue-hot-reload-api")      .rerender("data-v-902f11ae", module.exports)
  }
}

/***/ })

});