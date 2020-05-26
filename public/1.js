webpackJsonp([1],{

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(477)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(479)
/* template */
var __vue_template__ = __webpack_require__(498)
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
Component.options.__file = "resources/js/pages/admin/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8dc71b8e", Component.options)
  } else {
    hotAPI.reload("data-v-8dc71b8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(478);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ebad83ba", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8dc71b8e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8dc71b8e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n#wrapper {\n  width: 100%;\n  position: relative;\n}\n", ""]);

// exports


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(480);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(483);

var _index4 = _interopRequireDefault(_index3);

var _breadcrumb = __webpack_require__(488);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _headerTools = __webpack_require__(493);

var _headerTools2 = _interopRequireDefault(_headerTools);

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
//
//
//
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
      return this.$store.getters["AuthModule/GET_USER"];
    },
    breadcrumbs: function breadcrumbs() {
      return this.$store.state.breadcrumbs;
    }
  },
  components: {
    Sidebar: _index2.default,
    Navbar: _index4.default,
    Breadcrumb: _breadcrumb2.default,
    HeaderTools: _headerTools2.default
  }
};

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(481)
/* template */
var __vue_template__ = __webpack_require__(482)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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

/***/ 481:
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
        handleLogout: function handleLogout() {
            this.$store.dispatch("AuthModule/LOGOUT");
            this.$router.push("/login");
        }
    }
};

/***/ }),

/***/ 482:
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
        _c("div", { staticClass: "media align-items-center collapsed" }, [
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
        ])
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
        _c("li", [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse", attrs: { id: "sales-dropdown" } },
            [
              _c("ul", { staticClass: "user-setting-menu" }, [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/administrator/sales/create" } },
                      [
                        _c("i", { staticClass: "fa fa-long-arrow-right" }),
                        _vm._v(
                          " Add\n                            Sales\n                        "
                        )
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
                      { attrs: { to: "/administrator/sales/" } },
                      [
                        _c("i", { staticClass: "fa fa-long-arrow-right" }),
                        _vm._v(" Sales\n                            Report")
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
                        attrs: { to: "/administrator/branches" }
                      },
                      [
                        _c("i", { staticClass: "fa fa-long-arrow-right" }),
                        _vm._v(" Branches\n                        ")
                      ]
                    ),
                    _vm._v(" "),
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
          _vm._m(3),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse", attrs: { id: "users-dropdown" } },
            [
              _c("ul", { staticClass: "user-setting-menu" }, [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/administrator/users" } },
                      [
                        _c("i", { staticClass: "fa fa-long-arrow-right" }),
                        _vm._v(" Account\n                            List")
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
          _vm._m(4),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse", attrs: { id: "audits-dropdown" } },
            [
              _c("ul", { staticClass: "user-setting-menu" }, [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "audit-logs" } } },
                      [
                        _c("i", { staticClass: "fa fa-long-arrow-right" }),
                        _vm._v("\n                            Main")
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
          attrs: { src: "/images/inv_logo.jpg", alt: "logo icon" }
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
      "a",
      {
        staticClass: "media align-items-center user-pointer collapsed",
        attrs: {
          href: "#",
          "data-toggle": "collapse",
          "data-target": "#sales-dropdown"
        }
      },
      [
        _c("i", { staticClass: "fa fa-money" }),
        _c("span", [_vm._v("Sales")]),
        _c("i", { staticClass: "fa fa-angle-left pull-right" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "media align-items-center user-pointer collapsed",
        attrs: {
          href: "#",
          "data-toggle": "collapse",
          "data-target": "#users-dropdown"
        }
      },
      [
        _c("i", { staticClass: "fa fa-users" }),
        _c("span", [_vm._v("User Accounts")]),
        _c("i", { staticClass: "fa fa-angle-left pull-right" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "media align-items-center user-pointer collapsed",
        attrs: {
          href: "#",
          "data-toggle": "collapse",
          "data-target": "#audits-dropdown"
        }
      },
      [
        _c("i", { staticClass: "icon-hourglass" }),
        _c("span", [_vm._v("Audits")]),
        _c("i", { staticClass: "fa fa-angle-left pull-right" })
      ]
    )
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

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(484)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(486)
/* template */
var __vue_template__ = __webpack_require__(487)
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

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(485);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2f77f6ae", content, false, {});
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

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 486:
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

/***/ 487:
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
          ])
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "navbar-nav align-items-center right-nav-link" },
          [
            _c("li", { staticClass: "nav-item" }, [
              _vm._m(0),
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
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", { staticClass: "media-body" }, [
                          _c("h6", { staticClass: "mt-2 user-title" }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.user.name) +
                                "\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "user-subtitle" }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.user.email) +
                                "\n                  "
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
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

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(489)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(491)
/* template */
var __vue_template__ = __webpack_require__(492)
/* template functional */
var __vue_template_functional__ = true
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
Component.options.__file = "resources/js/components/breadcrumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ae751e4", Component.options)
  } else {
    hotAPI.rerender("data-v-4ae751e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(490);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("61e1b8c6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ae751e4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./breadcrumb.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ae751e4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./breadcrumb.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 491:
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

exports.default = {
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var render = function(_h, _vm) {
  var _c = _vm._c
  return _c(
    "ol",
    { staticClass: "breadcrumb" },
    _vm._l(_vm.props.items, function(item, i) {
      return _c(
        "li",
        { key: i, staticClass: "breadcrumb-item" },
        [
          _c("router-link", { attrs: { to: item.link } }, [
            _vm._v(_vm._s(item.text))
          ])
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4ae751e4", module.exports)
  }
}

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(494)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(496)
/* template */
var __vue_template__ = __webpack_require__(497)
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
Component.options.__file = "resources/js/components/header-tools.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7ad6634", Component.options)
  } else {
    hotAPI.reload("data-v-b7ad6634", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(495);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("90b91116", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b7ad6634\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header-tools.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b7ad6634\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header-tools.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 496:
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

exports.default = {};

/***/ }),

/***/ 497:
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
    return _c("div", { staticClass: "btn-group float-sm-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-primary waves-effect waves-light",
          attrs: { type: "button" }
        },
        [_c("i", { staticClass: "fa fa-cog mr-1" }), _vm._v(" Setting\n    ")]
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
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b7ad6634", module.exports)
  }
}

/***/ }),

/***/ 498:
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
      _c("div", { staticClass: "content-wrapper" }, [
        _c(
          "div",
          { staticClass: "container-fluid" },
          [
            _c("div", { staticClass: "row pt-2 pb-2" }, [
              _c(
                "div",
                { staticClass: "col-sm-9" },
                [_c("Breadcrumb", { attrs: { items: _vm.breadcrumbs } })],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" })
            ]),
            _vm._v(" "),
            _c("router-view")
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-8dc71b8e", module.exports)
  }
}

/***/ })

});