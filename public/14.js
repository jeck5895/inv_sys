webpackJsonp([14],{

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(500)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(502)
/* template */
var __vue_template__ = __webpack_require__(508)
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
Component.options.__file = "resources/js/pages/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-780e8960", Component.options)
  } else {
    hotAPI.reload("data-v-780e8960", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(501);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("19d03ca6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-780e8960\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-780e8960\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _login = __webpack_require__(503);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        LoginForm: _login2.default
    }
}; //
//
//
//

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(504)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(506)
/* template */
var __vue_template__ = __webpack_require__(507)
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
Component.options.__file = "resources/js/components/auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6aa0b866", Component.options)
  } else {
    hotAPI.reload("data-v-6aa0b866", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(505);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("29cd2f5c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6aa0b866\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6aa0b866\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 506:
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

exports.default = {
    data: function data() {
        return {
            email: "",
            password: "",
            isLoading: false,
            response: null
        };
    },
    methods: {
        handleLogin: function handleLogin(scope) {
            var _this = this;

            this.$validator.validateAll(scope).then(function (result) {
                if (result) {
                    var payload = {
                        grant_type: "password",
                        client_id: "2",
                        client_secret: "GiBJAhYpCiVPV3pxsRlCbAm70Vn7YMtz4meA1z8H",
                        username: _this.email,
                        password: _this.password,
                        scope: ""
                    };
                    _this.isLoading = true;
                    _this.$store.dispatch("AuthModule/LOGIN", payload).then(function (response) {
                        _this.fetchUser();
                        _this.response = null;
                    }).catch(function (error) {
                        console.log(error.response);
                        _this.isLoading = false;
                        _this.response = error.response;
                    });
                }
            });
        },
        fetchUser: function fetchUser() {
            var _this2 = this;

            this.$store.dispatch("AuthModule/FETCH_USER").then(function (response) {
                setTimeout(function () {
                    _this2.isLoading = false;
                    // this.$router.push('/administrator/stocks');
                    window.location = window.location.protocol + "//" + window.location.host + "/administrator/stocks";
                }, 1000);
            });
        }
    },
    mounted: function mounted() {
        console.log(this.fields.$loginForm);
    }
};

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "container",
      staticStyle: { height: "100vh", display: "table", width: "100%" }
    },
    [
      _c(
        "div",
        {
          staticStyle: {
            display: "table-cell",
            width: "100%",
            "vertical-align": "middle"
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "card card-authentication1 mx-auto my-5 bg-dark animated zoomIn"
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "card-content p-2" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "card-title text-uppercase text-center py-2 text-white"
                    },
                    [
                      _vm._v(
                        "\n                        Sign In\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.response != null && _vm.response.status == 401
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-danger alert-dismissible",
                          attrs: { role: "alert" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "close",
                              attrs: { type: "button", "data-dismiss": "alert" }
                            },
                            [
                              _vm._v(
                                "\n                            ×\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._m(1),
                          _vm._v(" "),
                          _c("div", { staticClass: "alert-message" }, [
                            _c("span", [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.response.data.message))
                              ])
                            ])
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticClass: "color-form",
                      attrs: { "data-vv-scope": "loginForm" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.handleLogin("loginForm")
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "div",
                          { staticClass: "position-relative has-icon-left" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "sr-only",
                                attrs: { for: "exampleInputUsername" }
                              },
                              [_vm._v("Username")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|email",
                                  expression: "'required|email'"
                                },
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.email,
                                  expression: "email"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "Email",
                                name: "email",
                                type: "email",
                                id: "email",
                                placeholder: "Username"
                              },
                              domProps: { value: _vm.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.email = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(2)
                          ]
                        ),
                        _vm._v(" "),
                        _vm.fields.$loginForm &&
                        _vm.fields.$loginForm.email.touched &&
                        _vm.errors.has("loginForm.email")
                          ? _c(
                              "small",
                              { staticClass: "form-text text-danger" },
                              [
                                _vm._v(
                                  _vm._s(_vm.errors.first("loginForm.email"))
                                )
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "div",
                          { staticClass: "position-relative has-icon-left" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "sr-only",
                                attrs: { for: "exampleInputPassword" }
                              },
                              [_vm._v("Password")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                },
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.password,
                                  expression: "password"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                "data-vv-as": "Password",
                                name: "password",
                                type: "password",
                                id: "exampleInputPassword",
                                placeholder: "Password"
                              },
                              domProps: { value: _vm.password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.password = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(3)
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("loginForm.password"),
                                expression: "errors.has('loginForm.password')"
                              }
                            ],
                            staticClass: "form-text text-danger"
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.errors.first("loginForm.password"))
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-danger btn-block waves-effect waves-light",
                            attrs: { disabled: _vm.isLoading, type: "submit" }
                          },
                          [
                            !_vm.isLoading
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                    Sign In\n                                "
                                  )
                                ])
                              : _c("span", [
                                  _vm._v(
                                    "\n                                    Signing in...\n                                "
                                  )
                                ])
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-center",
        staticStyle: { width: "50px", margin: "auto" }
      },
      [
        _c("img", {
          staticClass: "img-fluid",
          attrs: { src: "/images/logo.png" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert-icon" }, [
      _c("i", { staticClass: "icon-close" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-control-position" }, [
      _c("i", { staticClass: "icon-user" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-control-position" }, [
      _c("i", { staticClass: "icon-lock" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-row mr-0 ml-0" }, [
      _c("div", { staticClass: "form-group col-6" }),
      _vm._v(" "),
      _c("div", { staticClass: "form-group col-6 text-right" }, [
        _c(
          "a",
          { attrs: { href: "authentication-dark-reset-password.html" } },
          [_vm._v("Reset Password")]
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
    require("vue-hot-reload-api")      .rerender("data-v-6aa0b866", module.exports)
  }
}

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("LoginForm")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-780e8960", module.exports)
  }
}

/***/ })

});