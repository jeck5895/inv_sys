webpackJsonp([20],{

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(342)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(344)
/* template */
var __vue_template__ = __webpack_require__(355)
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

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(343);
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

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(11);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__(8);

var _table = __webpack_require__(345);

var _table2 = _interopRequireDefault(_table);

var _form = __webpack_require__(350);

var _form2 = _interopRequireDefault(_form);

var _error = __webpack_require__(156);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  components: {
    UserForm: _form2.default,
    UsersTable: _table2.default,
    Alert: _error2.default
  },
  data: function data() {
    return {
      showForm: false,
      formAction: null,
      errs: null,
      columns: [{
        name: "options",
        label: "Options",
        sortable: false
      }, {
        name: "name",
        required: true,
        label: "NAME",
        align: "left",
        field: function field(row) {
          return row.name;
        },
        sortable: true
      }, {
        name: "email",
        required: true,
        label: "EMAIL",
        align: "left",
        field: function field(row) {
          return row.email;
        },
        sortable: true
      }, {
        name: "created_at",
        required: true,
        label: "DATE CREATED",
        align: "left",
        field: function field(row) {
          return row.created_at;
        },
        sortable: true
      }, {
        name: "updated_at",
        required: true,
        label: "LAST UPDATED",
        align: "left",
        field: function field(row) {
          return row.updated_at;
        },
        sortable: true
      }]
    };
  },

  computed: _extends({}, (0, _vuex.mapGetters)("USERS", {
    users: "GET_USERS",
    pagination: "GET_PAGINATION",
    loading: "GET_LOADING_STATE",
    is_saving: "GET_SUBMIT_STATE"
  }), {
    user: function user() {
      var user = this.$store.getters["USERS/GET_USER"];

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        account_type: user.account_type
      };
    }
  }),
  methods: _extends({}, (0, _vuex.mapActions)("USERS", {
    fetchUsers: "FETCH_USERS",
    save: "STORE_USER",
    update: "UPDATE_USER",
    delete: "DELETE_USER"
  }), (0, _vuex.mapMutations)("USERS", {
    setUser: "SET_USER"
  }), {
    handleSubmit: function handleSubmit(props) {
      var _this = this;

      var formAction = this.formAction;
      var model = props.model,
          form = props.form,
          errors = props.errors;


      var payload = {
        id: model.id,
        name: model.name,
        email: model.email,
        account_type: model.account_type
      };

      switch (formAction) {
        case "ADD":
          payload = _extends({}, payload, {
            password: model.password,
            password_confirmation: model.confirm_password
          });
          this.save(payload).then(function () {
            _this.fetchUsers();
            _this.resetForm(model, form, errors);
            _this.errs = null;
          }).catch(function (error) {
            _this.errs = error.response;
          });
          break;

        case "EDIT":
          this.update(payload).then(function () {
            _this.fetchUsers();
            _this.errs = null;
            _this.resetForm(model, form, errors);
          }).catch(function (error) {
            _this.errs = error.response;
          });
          break;

        default:
          break;
      }
    },
    onAddUser: function onAddUser() {
      this.formAction = "ADD";
      this.showForm = true;
    },
    onEdit: function onEdit(_ref) {
      var item = _ref.item;

      this.formAction = "EDIT";
      this.showForm = true;

      this.setUser(item);
    },
    onDelete: function onDelete(_ref2) {
      var _this2 = this;

      var item = _ref2.item;

      var options = { html: true, loader: true };
      this.$dialog.confirm("Delete <strong>" + item.name + "</strong> record ?", options).then(function (dialog) {
        _this2.delete(item).then(function () {
          dialog.close();
          _this2.fetchUsers();
        });
      }).catch(function () {});
    },
    onClose: function onClose() {
      this.showForm = false;
    },
    resetForm: function resetForm(model, form, errors) {
      var _this3 = this;

      var keys = Object.keys(model);

      keys.map(function (key) {
        _this3.$set(model, key, "");
      });
      //   this.$set(this.item, "model_id", "");
      //   this.$set(this.item, "imei", "");
      //   this.$set(this.item, "color_id", "");
      //   this.$set(this.item, "selling_price", "");
      //   this.$set(this.item, "payment_mode", "");
      //   this.$set(this.item, "freebies", "");
      //   this.$set(this.item, "credit_term", null);

      form.reset();
      errors.clear();
    }
  }),
  mounted: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.fetchUsers();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _ref3.apply(this, arguments);
    }

    return mounted;
  }()
};

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(346)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(348)
/* template */
var __vue_template__ = __webpack_require__(349)
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
Component.options.__file = "resources/js/components/users/table/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aad83e2", Component.options)
  } else {
    hotAPI.reload("data-v-4aad83e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(347);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("e312d9fc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4aad83e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4aad83e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 348:
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

exports.default = {
  props: {
    loading: {
      required: true,
      type: Boolean
    },
    columns: {
      required: true,
      type: Array
    },
    items: {
      required: true,
      type: Array
    }
  }
};

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("table", { staticClass: "table table-bordered" }, [
    _c("thead", { staticClass: "thead-primary shadow-primary" }, [
      _vm.columns.length > 0
        ? _c(
            "tr",
            _vm._l(_vm.columns, function(column) {
              return _c("th", { key: column.name }, [
                _vm._v("\n        " + _vm._s(column.label) + "\n      ")
              ])
            }),
            0
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "tbody",
      [
        _vm.loading ? _c("tr", [_vm._m(0)]) : _vm._e(),
        _vm._v(" "),
        !_vm.items && !_vm.loading
          ? _c("tr", [_vm._m(1)])
          : !_vm.loading
          ? _vm._l(_vm.items, function(item, i) {
              return _c(
                "tr",
                { key: i },
                _vm._l(_vm.columns, function(column, j) {
                  return _c(
                    "td",
                    {
                      key: column.name + "-" + j,
                      staticStyle: { "vertical-align": "middle" }
                    },
                    [
                      _vm._t(
                        "table-td-" + column.name,
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(item[column.name]) +
                              "\n        "
                          )
                        ],
                        { item: item }
                      )
                    ],
                    2
                  )
                }),
                0
              )
            })
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "6" } }, [
      _vm._v("\n        Loading\n        "),
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
        _c("i", [_vm._v("No data has been found")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4aad83e2", module.exports)
  }
}

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(351)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(353)
/* template */
var __vue_template__ = __webpack_require__(354)
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
Component.options.__file = "resources/js/components/users/form/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b052c50e", Component.options)
  } else {
    hotAPI.reload("data-v-b052c50e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(352);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6e1364e8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b052c50e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b052c50e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 353:
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

exports.default = {
  name: "user-form",
  props: {
    model: {
      required: true,
      type: Object
    },
    action: {
      required: true,
      type: String,
      validator: function validator(value) {
        return ["ADD", "EDIT"].indexOf(value) !== -1;
      }
    },
    loading: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    onSubmit: function onSubmit(form) {
      var _this = this;

      this.$validator.validateAll(form).then(function (result) {
        if (result) {
          var formData = {
            model: _this.model,
            form: _this.$validator,
            errors: _this.errors
          };
          _this.$emit("on-submit", formData);
        }
      });
    }
  }
};

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      attrs: { "data-vv-scope": "userForm" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.onSubmit("userForm")
        }
      }
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.model.name,
              expression: "model.name"
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required",
              expression: "'required'"
            }
          ],
          staticClass: "form-control",
          attrs: { name: "name", type: "text" },
          domProps: { value: _vm.model.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.model, "name", $event.target.value)
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
                value: _vm.errors.has("userForm.name"),
                expression: "errors.has('userForm.name')"
              }
            ],
            staticClass: "form-text text-danger"
          },
          [_vm._v(_vm._s(_vm.errors.first("userForm.name")))]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.model.email,
              expression: "model.email"
            },
            {
              name: "validate",
              rawName: "v-validate",
              value: "required|email",
              expression: "'required|email'"
            }
          ],
          staticClass: "form-control",
          attrs: { name: "email", type: "email" },
          domProps: { value: _vm.model.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.model, "email", $event.target.value)
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
                value: _vm.errors.has("userForm.email"),
                expression: "errors.has('userForm.email')"
              }
            ],
            staticClass: "form-text text-danger"
          },
          [_vm._v(_vm._s(_vm.errors.first("userForm.email")))]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Account Type")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.model.account_type,
                expression: "model.account_type"
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            staticClass: "form-control",
            attrs: { name: "account_type", id: "" },
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
                  _vm.model,
                  "account_type",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          [
            _c("option", { attrs: { value: "1" } }, [
              _vm._v("Super Administrator")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "2" } }, [_vm._v("Administrator")])
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
                value: _vm.errors.has("userForm.account_type"),
                expression: "errors.has('userForm.account_type')"
              }
            ],
            staticClass: "form-text text-danger"
          },
          [_vm._v(_vm._s(_vm.errors.first("userForm.account_type")))]
        )
      ]),
      _vm._v(" "),
      _vm.action == "ADD"
        ? _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "input-7" } }, [_vm._v("Password")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.model.password,
                  expression: "model.password"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "required|min:8",
                  expression: "'required|min:8'"
                }
              ],
              ref: "password",
              staticClass: "form-control",
              attrs: {
                name: "password",
                type: "password",
                id: "input-7",
                placeholder: "Enter Password"
              },
              domProps: { value: _vm.model.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.model, "password", $event.target.value)
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
                    value: _vm.errors.has("userForm.password"),
                    expression: "errors.has('userForm.password')"
                  }
                ],
                staticClass: "form-text text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("userForm.password")))]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.action == "ADD"
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
                  value: _vm.model.confirm_password,
                  expression: "model.confirm_password"
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
              domProps: { value: _vm.model.confirm_password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.model, "confirm_password", $event.target.value)
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
                    value: _vm.errors.has("userForm.confirm_password"),
                    expression: "errors.has('userForm.confirm_password')"
                  }
                ],
                staticClass: "form-text text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("userForm.confirm_password")))]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success btn-block",
            attrs: { disabled: _vm.loading, type: "submit" }
          },
          [
            _vm.loading
              ? _c("span", [_vm._v(" Saving ...")])
              : _c("span", [_vm._v("Save")])
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b052c50e", module.exports)
  }
}

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { class: { "col-md-9": _vm.showForm, "col-lg-12": !_vm.showForm } },
      [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("\n        User Account List\n\n        "),
            _c("div", { staticClass: "card-action" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary",
                  on: { click: _vm.onAddUser }
                },
                [
                  _c("i", { staticClass: "fa fa-user-plus" }),
                  _vm._v(" Add User\n          ")
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body table-responsive" },
            [
              _c("users-table", {
                attrs: {
                  loading: _vm.loading,
                  items: _vm.users,
                  columns: _vm.columns
                },
                scopedSlots: _vm._u([
                  {
                    key: "table-td-options",
                    fn: function(props) {
                      return [
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
                                    return _vm.onEdit(props)
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
                                    return _vm.onDelete(props)
                                  }
                                }
                              },
                              [_c("span", { staticClass: "fa fa-trash" })]
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _vm.showForm
      ? _c("div", { staticClass: "col-lg-3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("\n        User Details\n\n        "),
              _c("div", { staticClass: "card-action" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-danger",
                    on: { click: _vm.onClose }
                  },
                  [_c("i", { staticClass: "fa fa-times-circle" })]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _vm.errs !== null
                  ? _c(
                      "div",
                      { staticClass: "form-group" },
                      [_c("alert", { attrs: { response: _vm.errs } })],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("user-form", {
                  attrs: {
                    action: _vm.formAction,
                    model: _vm.user,
                    loading: _vm.is_saving
                  },
                  on: { "on-submit": _vm.handleSubmit }
                })
              ],
              1
            )
          ])
        ])
      : _vm._e()
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