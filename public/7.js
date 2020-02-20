webpackJsonp([7],{

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(465)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(467)
/* template */
var __vue_template__ = __webpack_require__(468)
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
Component.options.__file = "resources/js/pages/users/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9844ac9c", Component.options)
  } else {
    hotAPI.reload("data-v-9844ac9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(323)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(325)
/* template */
var __vue_template__ = __webpack_require__(326)
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
Component.options.__file = "resources/js/components/sidebar/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ce898a4", Component.options)
  } else {
    hotAPI.reload("data-v-2ce898a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6f42c222", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ce898a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ce898a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 325:
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
//

exports.default = {
    props: {
        user: {
            type: Object,
            default: {
                name: "User"
            }
        }
    },
    methods: {
        toggleReportClass: function toggleReportClass(e) {
            !$("#report-dropdown").hasClass("show") ? $("#report-dropdown").prev().addClass("active") : $("#report-dropdown").prev().removeClass("active");
        },
        toggleUserClass: function toggleUserClass(e) {
            !$("#account-dropdown").hasClass("show") ? console.log($("#account-dropdown").prev().addClass("active")) : $("#account-dropdown").prev().removeClass("active");
        },
        handleLogout: function handleLogout() {
            this.$store.dispatch("AuthModule/LOGOUT");
            this.$router.push("/login");
        }
    }
};

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      attrs: {
        id: "sidebar-wrapper",
        "data-simplebar": "",
        "data-simplebar-auto-hide": "true"
      }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "user-details" }, [
        _c(
          "div",
          {
            staticClass: "media align-items-center user-pointer collapsed",
            attrs: {
              "data-toggle": "collapse",
              "data-target": "#user-dropdown"
            }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "media-body" }, [
              _c("h6", { staticClass: "side-user-name" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.user.name) +
                    "\n                "
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _vm._m(2)
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "sidebar-menu do-nicescrol" }, [
        _c("li", { staticClass: "sidebar-header" }, [
          _vm._v("ADMINISTRATIVE PANEL")
        ]),
        _vm._v(" "),
        _c(
          "li",
          [
            _c(
              "router-link",
              {
                staticClass: "waves-effect",
                attrs: { to: "/administrator/dashboard" }
              },
              [
                _c("i", { staticClass: "icon-home" }),
                _c("span", [_vm._v("Dashboard")]),
                _c("i", { staticClass: "fa fa-angle-left pull-right" })
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c(
              "router-link",
              {
                staticClass: "waves-effect",
                attrs: { to: "/administrator/inventory" }
              },
              [
                _c("i", { staticClass: "fa fa-cubes" }),
                _c("span", [_vm._v("Inventory")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c(
              "router-link",
              {
                staticClass: "waves-effect",
                attrs: { to: "/administrator/sales" }
              },
              [
                _c("i", { staticClass: "fa fa-money" }),
                _c("span", [_vm._v("Sales")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c(
              "router-link",
              {
                staticClass: "waves-effect",
                attrs: { to: "/administrator/customers" }
              },
              [
                _c("i", { staticClass: "icon-people" }),
                _c("span", [_vm._v("Customers")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c(
              "router-link",
              {
                staticClass: "waves-effect",
                attrs: { to: "/administrator/suppliers" }
              },
              [
                _c("i", { staticClass: "fa fa-truck" }),
                _c("span", [_vm._v("Suppliers")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              staticClass: "media align-items-center user-pointer collapsed",
              attrs: {
                href: "#",
                "data-toggle": "collapse",
                "data-target": "#report-dropdown"
              },
              on: { click: _vm.toggleReportClass }
            },
            [
              _c("i", { staticClass: "fa fa-gears" }),
              _vm._v(" "),
              _c("span", [_vm._v("Settings")]),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-angle-left pull-right" })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse", attrs: { id: "report-dropdown" } },
            [
              _c("ul", { staticClass: "user-setting-menu" }, [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "waves-effect",
                        attrs: { to: "/administrator/brands" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-long-arrow-right" }),
                        _vm._v(" Brands\n                        ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "waves-effect",
                        attrs: { to: "/administrator/categories" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-long-arrow-right" }),
                        _vm._v(
                          "\n                            Categories\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "waves-effect",
                        attrs: { to: "/administrator/colors" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-long-arrow-right" }),
                        _vm._v(" Colors\n                        ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "waves-effect",
                        attrs: { to: "/administrator/freebies" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-long-arrow-right" }),
                        _vm._v(" Freebies\n                        ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "waves-effect",
                        attrs: { to: "/administrator/models" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-long-arrow-right" }),
                        _vm._v(" Models\n                        ")
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              staticClass: "media align-items-center user-pointer collapsed",
              attrs: {
                href: "#",
                "data-toggle": "collapse",
                "data-target": "#account-dropdown"
              },
              on: { click: _vm.toggleUserClass }
            },
            [_vm._m(3)]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse", attrs: { id: "account-dropdown" } },
            [
              _c("ul", { staticClass: "user-setting-menu" }, [
                _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: "/users/register" } }, [
                      _c("i", { staticClass: "fa fa-long-arrow-right" }),
                      _vm._v(" Register\n                        ")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: "/users" } }, [
                      _c("i", { staticClass: "fa fa-long-arrow-right" }),
                      _vm._v(" Account\n                            List")
                    ])
                  ],
                  1
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              staticClass: "waves-effect",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.handleLogout($event)
                }
              }
            },
            [
              _c("i", { staticClass: "icon-logout" }),
              _c("span", [_vm._v("Logout")])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "brand-logo" }, [
      _c("a", { attrs: { href: "index.html" } }, [
        _c("img", {
          staticClass: "logo-icon",
          attrs: { src: "/images/logo.png", alt: "logo icon" }
        }),
        _vm._v(" "),
        _c("h5", { staticClass: "logo-text" }, [_vm._v("Inventory")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "avatar" }, [
      _c("img", {
        staticClass: "mr-3 side-user-img",
        attrs: { src: "/images/avatars/user-avatar.png", alt: "user avatar" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "collapse", attrs: { id: "user-dropdown" } },
      [
        _c("ul", { staticClass: "user-setting-menu" }, [
          _c("li", [
            _c("a", { attrs: { href: "javaScript:void();" } }, [
              _c("i", { staticClass: "icon-user" }),
              _vm._v(" My Profile")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "javaScript:void();" } }, [
              _c("i", { staticClass: "icon-settings" }),
              _vm._v(" Setting")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "javaScript:void();" } }, [
              _c("i", { staticClass: "icon-power" }),
              _vm._v(" Logout")
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-body" }, [
      _c("i", { staticClass: "icon-user" }),
      _vm._v(" "),
      _c("span", [_vm._v("User Accounts")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        { staticClass: "waves-effect", attrs: { href: "widgets.html" } },
        [
          _c("i", { staticClass: "icon-hourglass" }),
          _c("span", [_vm._v("Audit Trail")])
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
    require("vue-hot-reload-api")      .rerender("data-v-2ce898a4", module.exports)
  }
}

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(328)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(330)
/* template */
var __vue_template__ = __webpack_require__(331)
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
Component.options.__file = "resources/js/components/navbar/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c86a744", Component.options)
  } else {
    hotAPI.reload("data-v-3c86a744", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2f77f6ae", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c86a744\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c86a744\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 330:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        user: {
            type: Object,
            default: {
                name: "User",
                email: "user@gmail.com"
            }
        }
    },
    methods: {
        handleToggle: function handleToggle() {
            if ($("#wrapper").hasClass("toggled")) {
                $("#wrapper").removeClass("toggled");
            } else {
                $("#wrapper").addClass("toggled");
            }
        },
        handleLogout: function handleLogout() {
            this.$store.dispatch("AuthModule/LOGOUT");
            this.$router.push("/login");
        }
    }
};

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "topbar-nav" }, [
    _c(
      "nav",
      { staticClass: "navbar navbar-expand fixed-top gradient-meridian" },
      [
        _c("ul", { staticClass: "navbar-nav mr-auto align-items-center" }, [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link toggle-menu",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.handleToggle($event)
                  }
                }
              },
              [_c("i", { staticClass: "icon-menu menu-icon" })]
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "navbar-nav align-items-center right-nav-link" },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass:
                    "dropdown-menu dropdown-menu-right animated fadeIn"
                },
                [
                  _c("li", { staticClass: "dropdown-item user-details" }, [
                    _c("a", { attrs: { href: "javaScript:void();" } }, [
                      _c("div", { staticClass: "media" }, [
                        _vm._m(5),
                        _vm._v(" "),
                        _c("div", { staticClass: "media-body" }, [
                          _c("h6", { staticClass: "mt-2 user-title" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.user.name) +
                                "\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "user-subtitle" }, [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.user.email) +
                                "\n                                    "
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("li", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _vm._m(7),
                  _vm._v(" "),
                  _c("li", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _vm._m(8),
                  _vm._v(" "),
                  _c("li", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _c("li", { staticClass: "dropdown-item" }, [
                    _c("i", { staticClass: "icon-power mr-2" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.handleLogout($event)
                          }
                        }
                      },
                      [_vm._v("Logout")]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("form", { staticClass: "search-bar" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Enter keywords" }
        }),
        _vm._v(" "),
        _c("a", { attrs: { href: "javascript:void();" } }, [
          _c("i", { staticClass: "icon-magnifier" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown-lg" }, [
      _c(
        "a",
        {
          staticClass:
            "nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect",
          attrs: { "data-toggle": "dropdown", href: "javascript:void();" }
        },
        [_c("i", { staticClass: "icon-envelope-open" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown-menu dropdown-menu-right animated fadeIn" },
        [
          _c("ul", { staticClass: "list-group list-group-flush" }, [
            _c(
              "li",
              {
                staticClass:
                  "list-group-item d-flex justify-content-between align-items-center"
              },
              [
                _vm._v(
                  "\n                            You have 4 new messages\n                            "
                ),
                _c("span", { staticClass: "badge badge-danger" }, [_vm._v("4")])
              ]
            ),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("a", { attrs: { href: "javaScript:void();" } }, [
                _c("div", { staticClass: "media" }, [
                  _c("div", { staticClass: "avatar" }, [
                    _c("img", {
                      staticClass: "align-self-start mr-3",
                      attrs: {
                        src: "/images/avatars/avatar-1.png",
                        alt: "user avatar"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("h6", { staticClass: "mt-0 msg-title" }, [
                      _vm._v(
                        "\n                                            Jhon Deo\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v(
                        "\n                                            Lorem ipsum dolor sit amet...\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("small", [_vm._v("Today, 4:10 PM")])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("a", { attrs: { href: "javaScript:void();" } }, [
                _c("div", { staticClass: "media" }, [
                  _c("div", { staticClass: "avatar" }, [
                    _c("img", {
                      staticClass: "align-self-start mr-3",
                      attrs: {
                        src: "/images/avatars/avatar-2.png",
                        alt: "user avatar"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("h6", { staticClass: "mt-0 msg-title" }, [
                      _vm._v(
                        "\n                                            Sara Jen\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v(
                        "\n                                            Lorem ipsum dolor sit amet...\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("small", [_vm._v("Yesterday, 8:30 AM")])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("a", { attrs: { href: "javaScript:void();" } }, [
                _c("div", { staticClass: "media" }, [
                  _c("div", { staticClass: "avatar" }, [
                    _c("img", {
                      staticClass: "align-self-start mr-3",
                      attrs: {
                        src: "/images/avatars/avatar-3.png",
                        alt: "user avatar"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("h6", { staticClass: "mt-0 msg-title" }, [
                      _vm._v(
                        "\n                                            Dannish Josh\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v(
                        "\n                                            Lorem ipsum dolor sit amet...\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("small", [_vm._v("5/11/2018, 2:50 PM")])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("a", { attrs: { href: "javaScript:void();" } }, [
                _c("div", { staticClass: "media" }, [
                  _c("div", { staticClass: "avatar" }, [
                    _c("img", {
                      staticClass: "align-self-start mr-3",
                      attrs: {
                        src: "/images/avatars/avatar-4.png",
                        alt: "user avatar"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("h6", { staticClass: "mt-0 msg-title" }, [
                      _vm._v(
                        "\n                                            Katrina Mccoy\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v(
                        "\n                                            Lorem ipsum dolor sit amet.\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("small", [_vm._v("1/11/2018, 2:50 PM")])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("a", { attrs: { href: "javaScript:void();" } }, [
                _vm._v("See All Messages")
              ])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown-lg" }, [
      _c(
        "a",
        {
          staticClass:
            "nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect",
          attrs: { "data-toggle": "dropdown", href: "javascript:void();" }
        },
        [
          _c("i", { staticClass: "icon-bell" }),
          _c("span", { staticClass: "badge badge-primary badge-up" }, [
            _vm._v("10")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown-menu dropdown-menu-right animated fadeIn" },
        [
          _c("ul", { staticClass: "list-group list-group-flush" }, [
            _c(
              "li",
              {
                staticClass:
                  "list-group-item d-flex justify-content-between align-items-center"
              },
              [
                _vm._v(
                  "\n                            You have 10 Notifications\n                            "
                ),
                _c("span", { staticClass: "badge badge-primary" }, [
                  _vm._v("10")
                ])
              ]
            ),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("a", { attrs: { href: "javaScript:void();" } }, [
                _c("div", { staticClass: "media" }, [
                  _c("i", { staticClass: "icon-people fa-2x mr-3 text-info" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("h6", { staticClass: "mt-0 msg-title" }, [
                      _vm._v(
                        "\n                                            New Registered Users\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v(
                        "\n                                            Lorem ipsum dolor sit amet...\n                                        "
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("a", { attrs: { href: "javaScript:void();" } }, [
                _c("div", { staticClass: "media" }, [
                  _c("i", { staticClass: "icon-cup fa-2x mr-3 text-warning" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("h6", { staticClass: "mt-0 msg-title" }, [
                      _vm._v(
                        "\n                                            New Received Orders\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v(
                        "\n                                            Lorem ipsum dolor sit amet...\n                                        "
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("a", { attrs: { href: "javaScript:void();" } }, [
                _c("div", { staticClass: "media" }, [
                  _c("i", { staticClass: "icon-bell fa-2x mr-3 text-danger" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body" }, [
                    _c("h6", { staticClass: "mt-0 msg-title" }, [
                      _vm._v(
                        "\n                                            New Updates\n                                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v(
                        "\n                                            Lorem ipsum dolor sit amet...\n                                        "
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("a", { attrs: { href: "javaScript:void();" } }, [
                _vm._v("See All Notifications")
              ])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item language" }, [
      _c(
        "a",
        {
          staticClass:
            "nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect",
          attrs: { "data-toggle": "dropdown", href: "#" }
        },
        [_c("i", { staticClass: "flag-icon flag-icon-gb" })]
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "dropdown-menu dropdown-menu-right animated fadeIn" },
        [
          _c("li", { staticClass: "dropdown-item" }, [
            _c("i", { staticClass: "flag-icon flag-icon-gb mr-2" }),
            _vm._v(" English\n                    ")
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "dropdown-item" }, [
            _c("i", { staticClass: "flag-icon flag-icon-fr mr-2" }),
            _vm._v(" French\n                    ")
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "dropdown-item" }, [
            _c("i", { staticClass: "flag-icon flag-icon-cn mr-2" }),
            _vm._v(" Chinese\n                    ")
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "dropdown-item" }, [
            _c("i", { staticClass: "flag-icon flag-icon-de mr-2" }),
            _vm._v(" German\n                    ")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link dropdown-toggle dropdown-toggle-nocaret",
        attrs: { "data-toggle": "dropdown", href: "#" }
      },
      [
        _c("span", { staticClass: "user-profile" }, [
          _c("img", {
            staticClass: "img-circle",
            attrs: {
              src: "/images/avatars/user-avatar.png",
              alt: "user avatar"
            }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "avatar" }, [
      _c("img", {
        staticClass: "align-self-start mr-3",
        attrs: { src: "/images/avatars/user-avatar.png", alt: "user avatar" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "dropdown-item" }, [
      _c("i", { staticClass: "icon-envelope mr-2" }),
      _vm._v(" Inbox\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "dropdown-item" }, [
      _c("i", { staticClass: "icon-wallet mr-2" }),
      _vm._v(" Account\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "dropdown-item" }, [
      _c("i", { staticClass: "icon-settings mr-2" }),
      _vm._v(" Setting\n                    ")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c86a744", module.exports)
  }
}

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(466);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("39c6f5ee", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9844ac9c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9844ac9c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n#wrapper {\n    width: 100%;\n    position: relative;\n}\n", ""]);

// exports


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(322);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(327);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    computed: {
        user: function user() {
            return this.$store.getters['AuthModule/GET_USER'];
        }
    },
    components: {
        Sidebar: _index2.default,
        Navbar: _index4.default
    }
};

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "wrapper" } },
    [
      _c("Sidebar", { attrs: { user: _vm.user } }),
      _vm._v(" "),
      _c("Navbar", { attrs: { user: _vm.user } }),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" }),
      _vm._v(" "),
      _c("div", { staticClass: "content-wrapper" }, [_c("router-view")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9844ac9c", module.exports)
  }
}

/***/ })

});