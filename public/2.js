webpackJsonp([2],{

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(266)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(268)
/* template */
var __vue_template__ = __webpack_require__(279)
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

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(267);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3354b4c9", content, false, {});
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

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n#wrapper {\n    width: 100%;\n    position: relative;\n}\n", ""]);

// exports


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(269);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(274);

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

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(270)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(272)
/* template */
var __vue_template__ = __webpack_require__(273)
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

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(271);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("c7395ff0", content, false, {});
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

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 272:
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

exports.default = {
    data: function data() {
        return {
            active: ''
        };
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleReportClass: function toggleReportClass(e) {
            !$('#report-dropdown').hasClass('show') ? $('#report-dropdown').prev().addClass('active') : $('#report-dropdown').prev().removeClass('active');
        },
        toggleUserClass: function toggleUserClass(e) {

            !$('#account-dropdown').hasClass('show') ? console.log($('#account-dropdown').prev().addClass('active')) : $('#account-dropdown').prev().removeClass('active');
        }
    }
};

/***/ }),

/***/ 273:
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
                attrs: { to: "/administrator/stocks" }
              },
              [
                _c("i", { staticClass: "icon-home" }),
                _c("span", [_vm._v("Stocks")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _c("router-link", { attrs: { to: "/administrator/issueance" } }, [
              _c("i", { staticClass: "icon-note" }),
              _c("span", [_vm._v("Issue")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
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
            [_vm._m(5)]
          ),
          _vm._v(" "),
          _vm._m(6)
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
            [_vm._m(7)]
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
                      _vm._v(" Register ")
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
                      _vm._v(" Account List")
                    ])
                  ],
                  1
                )
              ])
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
          attrs: { src: "/images/logo-icon.png", alt: "logo icon" }
        }),
        _vm._v(" "),
        _c("h5", { staticClass: "logo-text" }, [_vm._v(" Inventory")])
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
        attrs: { src: "/images/avatars/avatar-4.png", alt: "user avatar" }
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
    return _c("li", [
      _c(
        "a",
        { staticClass: "waves-effect", attrs: { href: "widgets.html" } },
        [
          _c("i", { staticClass: "icon-check" }),
          _c("span", [_vm._v("Cross Checking")])
        ]
      )
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "media-body" }, [
      _c("i", { staticClass: "icon-home" }),
      _vm._v(" "),
      _c("span", [_vm._v("Reports")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "collapse", attrs: { id: "report-dropdown" } },
      [
        _c("ul", { staticClass: "user-setting-menu" }, [
          _c("li", [
            _c("a", { attrs: { href: "register.html" } }, [
              _c("i", { staticClass: "fa fa-long-arrow-right" }),
              _vm._v(" Generate Report")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "account.html" } }, [
              _c("i", { staticClass: "fa fa-long-arrow-right" }),
              _vm._v(" Sales Table")
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

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(275)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(277)
/* template */
var __vue_template__ = __webpack_require__(278)
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

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("4b9c734e", content, false, {});
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

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 277:
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

exports.default = {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleToggle: function handleToggle() {
            if ($("#wrapper").hasClass('toggled')) {
                $("#wrapper").removeClass("toggled");
            } else {
                $("#wrapper").addClass("toggled");
            }
        },
        handleLogout: function handleLogout() {
            this.$store.dispatch('AuthModule/LOGOUT');
            this.$router.push('/login');
        }
    }
};

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "topbar-nav" }, [
    _c(
      "nav",
      { staticClass: "navbar navbar-expand fixed-top gradient-ibiza" },
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
                            _vm._v(_vm._s(_vm.user.name))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "user-subtitle" }, [
                            _vm._v(_vm._s(_vm.user.email))
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
                      _vm._v("Jhon Deo")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v("Lorem ipsum dolor sit amet...")
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
                      _vm._v("Sara Jen")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v("Lorem ipsum dolor sit amet...")
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
                      _vm._v("Dannish Josh")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v("Lorem ipsum dolor sit amet...")
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
                      _vm._v("Katrina Mccoy")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v("Lorem ipsum dolor sit amet.")
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
                      _vm._v("New Registered Users")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v("Lorem ipsum dolor sit amet...")
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
                      _vm._v("New Received Orders")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v("Lorem ipsum dolor sit amet...")
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
                      _vm._v("New Updates")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "msg-info" }, [
                      _vm._v("Lorem ipsum dolor sit amet...")
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
            _vm._v(" English")
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "dropdown-item" }, [
            _c("i", { staticClass: "flag-icon flag-icon-fr mr-2" }),
            _vm._v(" French")
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "dropdown-item" }, [
            _c("i", { staticClass: "flag-icon flag-icon-cn mr-2" }),
            _vm._v(" Chinese")
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "dropdown-item" }, [
            _c("i", { staticClass: "flag-icon flag-icon-de mr-2" }),
            _vm._v(" German")
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
            attrs: { src: "/images/avatars/avatar-17.png", alt: "user avatar" }
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
        attrs: { src: "/images/avatars/avatar-17.png", alt: "user avatar" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "dropdown-item" }, [
      _c("i", { staticClass: "icon-envelope mr-2" }),
      _vm._v(" Inbox")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "dropdown-item" }, [
      _c("i", { staticClass: "icon-wallet mr-2" }),
      _vm._v(" Account")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "dropdown-item" }, [
      _c("i", { staticClass: "icon-settings mr-2" }),
      _vm._v(" Setting")
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

/***/ 279:
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
    require("vue-hot-reload-api")      .rerender("data-v-8dc71b8e", module.exports)
  }
}

/***/ })

});