webpackJsonp([1],{

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(454)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(456)
/* template */
var __vue_template__ = __webpack_require__(467)
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
Component.options.__file = "resources/js/pages/users/lists.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c7d66a16", Component.options)
  } else {
    hotAPI.reload("data-v-c7d66a16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(324)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(326)
/* template */
var __vue_template__ = __webpack_require__(327)
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
Component.options.__file = "resources/js/components/alerts/error.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5dbd74a", Component.options)
  } else {
    hotAPI.reload("data-v-c5dbd74a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5eb544a1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5dbd74a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./error.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5dbd74a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./error.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 326:
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

exports.default = {
    props: {
        response: {
            required: true,
            type: Array
        }
    }
};

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.response.length
    ? _c(
        "div",
        {
          staticClass: "alert alert-danger alert-dismissible",
          attrs: { role: "alert" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "alert-message" }, [
            _c(
              "ul",
              _vm._l(_vm.response, function(e, i) {
                return _c("li", { key: i }, [
                  _vm._v("\n                " + _vm._s(e) + "\n            ")
                ])
              }),
              0
            )
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert-icon" }, [
      _c("i", { staticClass: "icon-close" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c5dbd74a", module.exports)
  }
}

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(329)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(331)
/* template */
var __vue_template__ = __webpack_require__(332)
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
Component.options.__file = "resources/js/components/users/form/register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-116c4e4c", Component.options)
  } else {
    hotAPI.reload("data-v-116c4e4c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(330);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1cf25b71", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-116c4e4c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-116c4e4c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _error = __webpack_require__(323);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            isLoading: false,
            response: []
        };
    },
    computed: {
        user: function user() {
            return this.$store.getters['USERS_MODULE/GET_USER'];
        },
        form_type: function form_type() {
            return this.$store.getters['FORM_MODULE/GET_FORM_TYPE'];
        }
    },
    methods: {
        handleSubmit: function handleSubmit(form) {
            var _this = this;

            this.$validator.validateAll(form).then(function (result) {
                if (result) {
                    var FORM_TYPE = localStorage.getItem('f_type');
                    var user = {
                        id: _this.user.id,
                        name: _this.user.name,
                        user_id: _this.user.user_id,
                        account_type: _this.user.account_type,
                        email: _this.user.email
                    };

                    _this.isLoading = true;

                    if (_this.form_type == 'NEW_USER') {
                        user.password = _this.user.password;
                        user.password_confirmation = _this.user.confirm_password;

                        _this.$store.dispatch('USERS_MODULE/STORE_USER', user).then(function () {
                            _this.isLoading = false;
                            _this.$store.dispatch('USERS_MODULE/FETCH_USERS');
                        }).catch(function (errs) {
                            _this.isLoading = false;
                            _this.response = _this.$root.convertError(errs);
                        });
                    } else if (_this.form_type == 'EDIT_USER') {
                        _this.$store.dispatch('USERS_MODULE/UPDATE_USER', user).then(function () {
                            _this.isLoading = false;
                            _this.response = [];
                            $("#usermodal").modal('hide');
                            _this.$store.dispatch('USERS_MODULE/FETCH_USERS');
                        }).catch(function (errs) {
                            _this.isLoading = false;
                            _this.response = _this.$root.convertError(errs);
                        });
                    }
                }
            });
        }
    },
    components: {
        AlertError: _error2.default
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card bg-primary shadow-primary" }, [
    _c("div", { staticClass: "card-body" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "color-form",
          attrs: { "data-vv-scope": "userRegistrationForm" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.handleSubmit("userRegistrationForm")
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "form-group" },
            [_c("AlertError", { attrs: { response: _vm.response } })],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "form-group col-md-6" }, [
              _c("label", { attrs: { for: "input-1" } }, [_vm._v("Full Name")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.name,
                    expression: "user.name"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "name",
                  type: "text",
                  id: "input-1",
                  placeholder: "Enter Full Name"
                },
                domProps: { value: _vm.user.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "small",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("userRegistrationForm.name"),
                      expression: "errors.has('userRegistrationForm.name')"
                    }
                  ],
                  staticClass: "form-text text-danger"
                },
                [_vm._v(_vm._s(_vm.errors.first("userRegistrationForm.name")))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-6" }, [
              _c("label", { attrs: { for: "input-4" } }, [
                _vm._v("Student ID")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.user_id,
                    expression: "user.user_id"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "student_id",
                  type: "text",
                  i: "",
                  d: "input-4",
                  placeholder: "Student ID"
                },
                domProps: { value: _vm.user.user_id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "user_id", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "small",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("userRegistrationForm.student_id"),
                      expression:
                        "errors.has('userRegistrationForm.student_id')"
                    }
                  ],
                  staticClass: "form-text text-danger"
                },
                [
                  _vm._v(
                    _vm._s(_vm.errors.first("userRegistrationForm.student_id"))
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "basic-select" } }, [
              _vm._v("Account Type")
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.account_type,
                    expression: "user.account_type"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "account_type", id: "basic-select" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.user,
                      "account_type",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { staticStyle: { color: "gray" } }, [
                  _vm._v("Please Select")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("Admin")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "2" } }, [_vm._v("Student")])
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
                    value: _vm.errors.has("userRegistrationForm.account_type"),
                    expression:
                      "errors.has('userRegistrationForm.account_type')"
                  }
                ],
                staticClass: "form-text text-danger"
              },
              [
                _vm._v(
                  _vm._s(_vm.errors.first("userRegistrationForm.account_type"))
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "input-6" } }, [_vm._v("Username")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.email,
                  expression: "user.email"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|email",
                  expression: "'required|email'"
                }
              ],
              staticClass: "form-control",
              attrs: {
                "data-vv-as": "username",
                name: "email",
                type: "email",
                id: "input-6",
                placeholder: "Enter Email Address"
              },
              domProps: { value: _vm.user.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "email", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "small",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("userRegistrationForm.email"),
                    expression: "errors.has('userRegistrationForm.email')"
                  }
                ],
                staticClass: "form-text text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("userRegistrationForm.email")))]
            )
          ]),
          _vm._v(" "),
          _vm.form_type == "NEW_USER"
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "input-7" } }, [
                  _vm._v("Password")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.password,
                      expression: "user.password"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|min:8",
                      expression: "'required|min:8'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "password",
                    type: "password",
                    id: "input-7",
                    placeholder: "Enter Password"
                  },
                  domProps: { value: _vm.user.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "password", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "small",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("userRegistrationForm.password"),
                        expression:
                          "errors.has('userRegistrationForm.password')"
                      }
                    ],
                    staticClass: "form-text text-danger"
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.errors.first("userRegistrationForm.password"))
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.form_type == "NEW_USER"
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "input-8" } }, [
                  _vm._v("Confirm Password")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.confirm_password,
                      expression: "user.confirm_password"
                    },
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|confirmed:password",
                      expression: "'required|confirmed:password'"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "confirm_password",
                    type: "password",
                    id: "input-8",
                    placeholder: "Confirm Password"
                  },
                  domProps: { value: _vm.user.confirm_password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.user,
                        "confirm_password",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "small",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has(
                          "userRegistrationForm.confirm_password"
                        ),
                        expression:
                          "errors.has('userRegistrationForm.confirm_password')"
                      }
                    ],
                    staticClass: "form-text text-danger"
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.errors.first(
                          "userRegistrationForm.confirm_password"
                        )
                      )
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-block bg-white text-primary shadow px-5",
                attrs: { disabled: _vm.isLoading, type: "submit" }
              },
              [
                _c("i", { staticClass: "fa fa-floppy-o" }),
                _vm._v(" "),
                !_vm.isLoading
                  ? _c("span", [_vm._v("Save")])
                  : _c("span", [
                      _c("i", { staticClass: "fa fa-spinner fa-spin" }),
                      _vm._v(" Saving...\n                        ")
                    ])
              ]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-title text-uppercase text-white" }, [
      _c("i", { staticClass: "fa fa-address-book-o" }),
      _vm._v(" User\n            Registration")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-116c4e4c", module.exports)
  }
}

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(455);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("490f1834", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c7d66a16\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lists.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c7d66a16\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./lists.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(457);

var _index2 = _interopRequireDefault(_index);

var _user = __webpack_require__(462);

var _user2 = _interopRequireDefault(_user);

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

exports.default = {
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        next(function (vm) {
            vm.$store.dispatch('USERS_MODULE/FETCH_USERS');
        });
    },

    components: {
        UsersTable: _index2.default, UserFormModal: _user2.default
    }
};

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(458)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(460)
/* template */
var __vue_template__ = __webpack_require__(461)
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
Component.options.__file = "resources/js/components/users/tables/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f2a0894c", Component.options)
  } else {
    hotAPI.reload("data-v-f2a0894c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(459);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5fd042f4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f2a0894c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f2a0894c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 460:
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

// import Pagination from '../../../components/pagination/index';

exports.default = {
    computed: {
        isLoading: function isLoading() {
            return this.$store.getters["USERS_MODULE/GET_LOADING_STATE"];
        },
        users: function users() {
            return this.$store.getters["USERS_MODULE/GET_USERS"];
        },

        keyword: {
            get: function get() {
                return this.$store.getters["FILTER_MODULE/GET_KEYWORD"];
            },
            set: function set(newVal, oldVal) {
                this.$store.commit("FILTER_MODULE/SET_KEYWORD", newVal);
            }
        },
        date_from: function date_from() {
            return this.$store.getters["FILTER_MODULE/GET_DATE_FROM"];
        },
        date_to: function date_to() {
            return this.$store.getters["FILTER_MODULE/GET_DATE_TO"];
        }
    },
    methods: {
        edit: function edit(user) {
            this.$store.commit("FORM_MODULE/SET_FORM_TYPE", "EDIT_USER");
            this.$store.commit("USERS_MODULE/SET_USER", user);
            $("#usermodal").modal("show");
        },
        destroy: function destroy(user) {
            var _this = this;

            console.log(user);
            var options = { html: true, loader: true };
            //https://github.com/Godofbrowser/vuejs-dialog
            this.$dialog.confirm("Delete <strong>" + user.name + "</strong> record ?", options).then(function (dialog) {
                _this.$store.dispatch("USERS_MODULE/DELETE_USER", user).then(function () {
                    dialog.close();
                    _this.$store.dispatch("USERS_MODULE/FETCH_USERS", "api/users?keyword=" + _this.keyword + "&date_from=" + _this.date_from + "&date_to=" + _this.date_to);
                });
            }).catch(function () {});
        },
        handleSearch: function handleSearch() {
            var url = "/api/users?keyword=" + this.keyword + "&date_from=" + this.date_from + "&date_to=" + this.date_to;
            this.$store.dispatch("USERS_MODULE/FETCH_USERS", url);
        }
    },
    components: {
        Pagination: Pagination
    }
};

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-success",
              attrs: { "data-toggle": "modal", "data-target": "#usermodal" },
              on: {
                click: function($event) {
                  return _vm.$store.commit(
                    "FORM_MODULE/SET_FORM_TYPE",
                    "NEW_USER"
                  )
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-user-plus" }),
              _vm._v("\n                    ADD USER\n                ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c(
            "form",
            {
              staticClass: "form-inline float-right",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.handleSearch($event)
                }
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.keyword,
                    expression: "keyword"
                  }
                ],
                staticClass: "form-control mb-2 mr-sm-2",
                attrs: {
                  type: "text",
                  id: "inlineFormInputName2",
                  placeholder: "Search users"
                },
                domProps: { value: _vm.keyword },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.keyword = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(0)
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12 table-responsive" }, [
      _c("table", { staticClass: "table table-bordered" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm.isLoading ? _c("tr", [_vm._m(2)]) : _vm._e(),
            _vm._v(" "),
            !_vm.users.data && !_vm.isLoading
              ? _c("tr", [_vm._m(3)])
              : !_vm.isLoading
              ? _vm._l(_vm.users.data, function(user, i) {
                  return _c("tr", { key: i }, [
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(user.user_id) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(user.name) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(user.account_type == 1 ? "Admin" : "Student") +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(user.email) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm._f("humanReadableFormat")(user.created_at)
                          ) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _c(
                        "div",
                        {
                          staticClass: "btn-group btn-group-sm",
                          attrs: { role: "group" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-success",
                              attrs: { type: "button", title: "Edit" },
                              on: {
                                click: function($event) {
                                  return _vm.edit(user)
                                }
                              }
                            },
                            [_c("span", { staticClass: "fa fa-edit" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-danger",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.destroy(user)
                                }
                              }
                            },
                            [_c("span", { staticClass: "fa fa-trash" })]
                          )
                        ]
                      )
                    ])
                  ])
                })
              : _vm._e()
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12 justify-content-right" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-success mb-2", attrs: { type: "submit" } },
      [
        _c("i", { staticClass: "fa fa-search" }),
        _vm._v("SEARCH\n                    ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-primary shadow-primary" }, [
      _c("tr", [
        _c("th", [_vm._v("STUDENT ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("ACCOUNT TYPE")]),
        _vm._v(" "),
        _c("th", [_vm._v("USERNAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("DATE CREATED")]),
        _vm._v(" "),
        _c("th", [_vm._v("OPTIONS")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "6" } }, [
      _vm._v("\n                        Loading\n                        "),
      _c("img", {
        attrs: { src: "/images/ajax-loader.gif", alt: "Loading...." }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "6" } }, [
      _c("p", { staticClass: "mb-0 text-center" }, [
        _c("i", [_vm._v("No user has been found")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f2a0894c", module.exports)
  }
}

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(463)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(465)
/* template */
var __vue_template__ = __webpack_require__(466)
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
Component.options.__file = "resources/js/components/form-modal/user.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3a927ca", Component.options)
  } else {
    hotAPI.reload("data-v-e3a927ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(464);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("327bddb6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3a927ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3a927ca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _register = __webpack_require__(328);

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        RegistrationForm: _register2.default
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

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal fade", attrs: { id: "usermodal" } }, [
    _c("div", { staticClass: "modal-dialog" }, [
      _c("div", { staticClass: "modal-content border-primary" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "modal-body" }, [_c("RegistrationForm")], 1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header bg-primary" }, [
      _c("h5", { staticClass: "modal-title text-white" }, [
        _c("i", { staticClass: "fa fa-plus-square" }),
        _vm._v("User Details")
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
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e3a927ca", module.exports)
  }
}

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-md-12" },
      [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("\n                User Account List\n            ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [_c("UsersTable")], 1)
        ]),
        _vm._v(" "),
        _c("UserFormModal")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c7d66a16", module.exports)
  }
}

/***/ })

});