webpackJsonp([2],{

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(362)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(364)
/* template */
var __vue_template__ = __webpack_require__(380)
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
Component.options.__file = "resources/js/pages/admin/customers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e0ac6688", Component.options)
  } else {
    hotAPI.reload("data-v-e0ac6688", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(296)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(298)
/* template */
var __vue_template__ = __webpack_require__(299)
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

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
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

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 298:
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

/***/ 299:
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

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(363);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("3bc58832", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e0ac6688\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./customers.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e0ac6688\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./customers.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _customer = __webpack_require__(365);

var _customer2 = _interopRequireDefault(_customer);

var _index = __webpack_require__(375);

var _index2 = _interopRequireDefault(_index);

var _pagination = __webpack_require__(148);

var _pagination2 = _interopRequireDefault(_pagination);

var _index3 = __webpack_require__(149);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        // next(vm => {
        //    vm.$store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS');
        // })
        _index3.store.dispatch("CUSTOMERS_MODULE/FETCH_CUSTOMERS").then(function () {
            next();
        });
    },

    components: {
        CustomerFormModal: _customer2.default,
        CustomersTable: _index2.default,
        Pagination: _pagination2.default
    },
    computed: {
        customers: function customers() {
            return this.$store.getters["CUSTOMERS_MODULE/GET_CUSTOMERS"];
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
        handleSearch: function handleSearch() {
            var url = "/api/customers?keyword=" + this.keyword + "&date_from=" + this.date_from + "&date_to=" + this.date_to;
            this.$store.dispatch("CUSTOMERS_MODULE/FETCH_CUSTOMERS", url);
        }
    }
};

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(366)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(368)
/* template */
var __vue_template__ = __webpack_require__(374)
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
Component.options.__file = "resources/js/components/form-modal/customer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-017f62ae", Component.options)
  } else {
    hotAPI.reload("data-v-017f62ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(367);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("0a03ae32", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-017f62ae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./customer.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-017f62ae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./customer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(369);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        CustomerForm: _index2.default
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

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(370)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(372)
/* template */
var __vue_template__ = __webpack_require__(373)
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
Component.options.__file = "resources/js/components/customers/forms/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fba4206", Component.options)
  } else {
    hotAPI.reload("data-v-2fba4206", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(371);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2a9c1222", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2fba4206\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2fba4206\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _error = __webpack_require__(295);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            isLoading: false,
            response: [],
            customer_types: [{ value: "faculty", label: "Faculty" }, { value: "student", label: "Student" }, { value: "others", label: "Others" }]
        };
    },
    computed: {
        customer: function customer() {
            return this.$store.getters["CUSTOMERS_MODULE/GET_CUSTOMER"];
        },
        form_type: function form_type() {
            return this.$store.getters["FORM_MODULE/GET_FORM_TYPE"];
        }
    },
    methods: {
        handleSubmit: function handleSubmit(form) {
            var _this = this;

            this.$validator.validateAll(form).then(function (result) {
                if (result) {
                    var FORM_TYPE = localStorage.getItem("f_type");
                    var customer = {
                        id: _this.customer.id,
                        customer_type: _this.customer.customer_type,
                        fullname: _this.customer.fullname,
                        customer_id: _this.customer.customer_id,
                        course: _this.customer.course,
                        year: _this.customer.year,
                        department: _this.customer.department
                    };

                    _this.isLoading = true;

                    if (_this.form_type == "NEW_CUSTOMER") {
                        _this.$store.dispatch("CUSTOMERS_MODULE/STORE_CUSTOMER", customer).then(function () {
                            _this.isLoading = false;
                            _this.$store.dispatch("CUSTOMERS_MODULE/FETCH_CUSTOMERS");
                        }).catch(function (errs) {
                            _this.isLoading = false;
                            _this.response = _this.$root.convertError(errs);
                        });
                    } else if (_this.form_type == "EDIT_CUSTOMER") {
                        _this.$store.dispatch("CUSTOMERS_MODULE/UPDATE_CUSTOMER", customer).then(function () {
                            _this.isLoading = false;
                            _this.response = [];
                            $("#customermodal").modal("hide");
                            _this.$store.dispatch("CUSTOMERS_MODULE/FETCH_CUSTOMERS");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card bg-primary" }, [
    _c("div", { staticClass: "card-body" }, [
      _c(
        "form",
        {
          staticClass: "color-form",
          attrs: { "data-vv-scope": "customerForm" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.handleSubmit("customerForm")
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
          _c("div", { staticClass: "form-group" }, [
            _c(
              "select",
              {
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
                    value: _vm.customer.customer_type,
                    expression: "customer.customer_type"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "customer_type",
                  "data-vv-as": "customer type",
                  id: "basic-select"
                },
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
                      _vm.customer,
                      "customer_type",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c(
                  "option",
                  { staticStyle: { color: "gray" }, attrs: { value: "" } },
                  [_vm._v("Please Select Item")]
                ),
                _vm._v(" "),
                _vm._l(_vm.customer_types, function(item) {
                  return _c(
                    "option",
                    { key: item.value, domProps: { value: item.value } },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(item.label) +
                          "\n                    "
                      )
                    ]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "small",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("customerForm.customer_type"),
                    expression: "errors.has('customerForm.customer_type')"
                  }
                ],
                staticClass: "form-text text-danger"
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.errors.first("customerForm.customer_type")) +
                    "\n                "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group " }, [
            _c("label", { attrs: { for: "input-1" } }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.fullname,
                  expression: "customer.fullname"
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
                placeholder: "Enter Customer Name"
              },
              domProps: { value: _vm.customer.fullname },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "fullname", $event.target.value)
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
                    value: _vm.errors.has("customerForm.name"),
                    expression: "errors.has('customerForm.name')"
                  }
                ],
                staticClass: "form-text text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("customerForm.name")))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group " }, [
            _c("label", { attrs: { for: "input-1" } }, [_vm._v("ID")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.customer_id,
                  expression: "customer.customer_id"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "",
                  expression: "''"
                }
              ],
              staticClass: "form-control",
              attrs: {
                name: "customer_id",
                type: "text",
                id: "input-1",
                placeholder: "Enter ID"
              },
              domProps: { value: _vm.customer.customer_id },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "customer_id", $event.target.value)
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
                    value: _vm.errors.has("customerForm.customer_id"),
                    expression: "errors.has('customerForm.customer_id')"
                  }
                ],
                staticClass: "form-text text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("customerForm.customer_id")))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group " }, [
            _c("label", { attrs: { for: "input-1" } }, [_vm._v("Course")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.course,
                  expression: "customer.course"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "",
                  expression: "''"
                }
              ],
              staticClass: "form-control",
              attrs: {
                name: "course",
                type: "text",
                id: "input-1",
                placeholder: "Enter course"
              },
              domProps: { value: _vm.customer.course },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "course", $event.target.value)
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
                    value: _vm.errors.has("customerForm.course"),
                    expression: "errors.has('customerForm.course')"
                  }
                ],
                staticClass: "form-text text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("customerForm.course")))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group " }, [
            _c("label", { attrs: { for: "input-1" } }, [_vm._v("Year")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.year,
                  expression: "customer.year"
                },
                {
                  name: "validate",
                  rawName: "v-validate",
                  value: "",
                  expression: "''"
                }
              ],
              staticClass: "form-control",
              attrs: {
                name: "year",
                type: "text",
                id: "input-1",
                placeholder: "Enter year"
              },
              domProps: { value: _vm.customer.year },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "year", $event.target.value)
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
                    value: _vm.errors.has("customerForm.year"),
                    expression: "errors.has('customerForm.year')"
                  }
                ],
                staticClass: "form-text text-danger"
              },
              [_vm._v(_vm._s(_vm.errors.first("customerForm.year")))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "input-35" } }, [_vm._v("Department")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customer.department,
                  expression: "customer.department"
                }
              ],
              staticClass: "form-control",
              attrs: {
                name: "department",
                type: "text",
                id: "input-35",
                placeholder: "Enter Department"
              },
              domProps: { value: _vm.customer.department },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customer, "department", $event.target.value)
                }
              }
            })
          ]),
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
                      _vm._v(" Saving...\n                    ")
                    ])
              ]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2fba4206", module.exports)
  }
}

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "modal fade", attrs: { id: "customermodal" } },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content border-primary" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [_c("CustomerForm")], 1)
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
    return _c("div", { staticClass: "modal-header bg-primary" }, [
      _c("h5", { staticClass: "modal-title text-white" }, [
        _c("i", { staticClass: "fa fa-plus-square" }),
        _vm._v("Customer Details")
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
    require("vue-hot-reload-api")      .rerender("data-v-017f62ae", module.exports)
  }
}

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(376)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(378)
/* template */
var __vue_template__ = __webpack_require__(379)
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
Component.options.__file = "resources/js/components/customers/tables/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c4ddf2d", Component.options)
  } else {
    hotAPI.reload("data-v-1c4ddf2d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(377);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("6167ed1c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c4ddf2d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c4ddf2d\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 378:
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

exports.default = {
    props: ["items"],
    computed: {
        isLoading: function isLoading() {
            return this.$store.getters["CUSTOMERS_MODULE/GET_LOADING_STATE"];
        }
    },
    methods: {
        edit: function edit(customer) {
            this.$store.commit("FORM_MODULE/SET_FORM_TYPE", "EDIT_CUSTOMER");
            this.$store.commit("CUSTOMERS_MODULE/SET_CUSTOMER", customer);
            $("#customermodal").modal("show");
        },
        destroy: function destroy(customer) {
            var _this = this;

            console.log(customer);
            var options = { html: true, loader: true };
            //https://github.com/Godofbrowser/vuejs-dialog
            this.$dialog.confirm("Delete <strong>" + customer.fullname + "</strong> record ?", options).then(function (dialog) {
                _this.$store.dispatch("CUSTOMERS_MODULE/DELETE_CUSTOMER", customer).then(function () {
                    dialog.close();
                    _this.$store.dispatch("CUSTOMERS_MODULE/FETCH_CUSTOMERS", "api/customers?keyword=" + _this.keyword + "&date_from=" + _this.date_from + "&date_to=" + _this.date_to);
                });
            }).catch(function () {});
        }
    }
};

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12 table-responsive" }, [
      _c("table", { staticClass: "table table-bordered" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm.isLoading ? _c("tr", [_vm._m(1)]) : _vm._e(),
            _vm._v(" "),
            _vm.items.data.length < 1 && !_vm.isLoading
              ? _c("tr", [_vm._m(2)])
              : !_vm.isLoading
              ? _vm._l(_vm.items.data, function(customer, i) {
                  return _c("tr", { key: i }, [
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(customer.customer_id) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(customer.customer_type.toUpperCase()) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(customer.fullname) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            customer.customer_type == "student"
                              ? customer.course
                              : "N/A"
                          ) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            customer.customer_type == "student"
                              ? customer.year
                              : "N/A"
                          ) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(customer.department) +
                          "\n                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm._f("humanReadableFormat")(customer.created_at)
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
                                  return _vm.edit(customer)
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
                                  return _vm.destroy(customer)
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
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-primary" }, [
      _c("tr", [
        _c("th", [_vm._v("CUSTOMER ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("TYPE")]),
        _vm._v(" "),
        _c("th", [_vm._v("NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("COURSE")]),
        _vm._v(" "),
        _c("th", [_vm._v("YEAR")]),
        _vm._v(" "),
        _c("th", [_vm._v("DEPARTMENT")]),
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
    return _c("td", { staticClass: "text-center", attrs: { colspan: "8" } }, [
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
    return _c("td", { attrs: { colspan: "8" } }, [
      _c("p", { staticClass: "mb-0 text-center" }, [
        _c("i", [_vm._v("No customers has been found")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1c4ddf2d", module.exports)
  }
}

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#customermodal"
                        },
                        on: {
                          click: function($event) {
                            return _vm.$store.commit(
                              "FORM_MODULE/SET_FORM_TYPE",
                              "NEW_CUSTOMER"
                            )
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-user-plus" }),
                        _vm._v(
                          "\n                                    ADD CUSTOMER\n                                "
                        )
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
                            placeholder: "Search students"
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
                        _vm._m(1)
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-12" },
                [_c("CustomersTable", { attrs: { items: _vm.customers } })],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-12 justify-content-right" },
                [
                  _c("Pagination", {
                    attrs: {
                      object: _vm.customers,
                      module: "CUSTOMERS_MODULE/FETCH_CUSTOMERS",
                      query:
                        "keyword=" +
                        _vm.keyword +
                        "&date_from=" +
                        _vm.date_from +
                        "&date_to=" +
                        _vm.date_to
                    }
                  })
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("CustomerFormModal")
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("i", { staticClass: "fa fa-users" }),
      _vm._v(" Customers\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-success mb-2", attrs: { type: "submit" } },
      [
        _c("i", { staticClass: "fa fa-search" }),
        _vm._v("SEARCH\n                                    ")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e0ac6688", module.exports)
  }
}

/***/ })

});