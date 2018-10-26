webpackJsonp([3],{

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(173)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(175)
/* template */
var __vue_template__ = __webpack_require__(176)
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
Component.options.__file = "resources/js/components/admin/issueance.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2231176d", Component.options)
  } else {
    hotAPI.reload("data-v-2231176d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(174);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("698f68ab", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2231176d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./issueance.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2231176d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./issueance.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 175:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 176:
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
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row pt-2 pb-2" }, [
        _c("div", { staticClass: "col-sm-9" }, [
          _c("ol", { staticClass: "breadcrumb" }, [
            _c("li", { staticClass: "breadcrumb-item" }, [
              _c("a", { attrs: { href: "javaScript:void();" } }, [
                _vm._v("Home")
              ])
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("i", { staticClass: "fa fa-clone" }),
              _vm._v(" My Inventory")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body table-responsive" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12 mx-auto" }, [
                  _c("div", { staticClass: "card bg-primary shadow-primary" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "div",
                        { staticClass: "card-title text-uppercase text-white" },
                        [
                          _c("i", { staticClass: "\tfa fa-share-square-o" }),
                          _vm._v(
                            "\n                                        Supplies Issuance"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("form", { staticClass: "color-form" }, [
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-2 col-form-label",
                              attrs: { for: "input-33" }
                            },
                            [_vm._v("Full Name")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-10" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "input-33",
                                placeholder: "Enter First Name"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-2 col-form-label",
                              attrs: { for: "input-35" }
                            },
                            [_vm._v("Department")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "input-35",
                                placeholder: "Enter Department"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-2 col-form-label",
                              attrs: { for: "input-36" }
                            },
                            [_vm._v("Student ID")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "input-36",
                                placeholder: "Enter Student Number"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-2 col-form-label",
                              attrs: { for: "input-38" }
                            },
                            [_vm._v("Item Name")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-10" }, [
                            _c(
                              "select",
                              {
                                staticClass: "form-control",
                                attrs: { id: "basic-select" }
                              },
                              [
                                _c(
                                  "option",
                                  { staticStyle: { color: "gray" } },
                                  [_vm._v("Please Select Item")]
                                ),
                                _vm._v(" "),
                                _c("option", [_vm._v("Bag")]),
                                _vm._v(" "),
                                _c("option", [_vm._v("Ballpen")]),
                                _vm._v(" "),
                                _c("option", [_vm._v("Book")]),
                                _vm._v(" "),
                                _c("option", [_vm._v("Lanyard")]),
                                _vm._v(" "),
                                _c("option", [_vm._v("Pants")]),
                                _vm._v(" "),
                                _c("option", [_vm._v("Pencil")]),
                                _vm._v(" "),
                                _c("option", [_vm._v("Shirt")])
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-2 col-form-label",
                              attrs: { for: "input-37" }
                            },
                            [_vm._v("Quanity")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-10" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                id: "input-37",
                                placeholder: "Enter Quantity"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-sm-2 col-form-label",
                              attrs: { for: "input-38" }
                            },
                            [
                              _vm._v(
                                "Remarks\n                                                (Optional)"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-10" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "input-38",
                                placeholder: "Enter Remarks"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row" }, [
                          _c("label", {
                            staticClass: "col-sm-2 col-form-label"
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-10" }, [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-link bg-white text-info shadow px-5",
                                attrs: { type: "submit" }
                              },
                              [
                                _c("i", { staticClass: "icon-check" }),
                                _vm._v(" Submit")
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass: "table table-bordered",
                  attrs: { id: "default-datatable" }
                },
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
                      _c("th", [_vm._v("Date Added")])
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
                      _c("td", [_vm._v("14 July 2018")])
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
                      _c("td", [_vm._v("14 July 2018")])
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
                      _c("td", [_vm._v("14 July 2018")])
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
                      _c("td", [_vm._v("14 July 2018")])
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
                      _c("td", [_vm._v("14 July 2018")])
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
                      _c("td", [_vm._v("14 July 2018")])
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
                      _c("td", [_vm._v("14 July 2018")])
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
                      _c("th", [_vm._v("Date Added")])
                    ])
                  ])
                ]
              )
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-2231176d", module.exports)
  }
}

/***/ })

});