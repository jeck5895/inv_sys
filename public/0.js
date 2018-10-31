webpackJsonp([0],{

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(252)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(254)
/* template */
var __vue_template__ = __webpack_require__(265)
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
Component.options.__file = "resources/js/pages/admin/issueance.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2421c48f", Component.options)
  } else {
    hotAPI.reload("data-v-2421c48f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(230)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(232)
/* template */
var __vue_template__ = __webpack_require__(233)
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

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("161980ba", content, false, {});
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

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(283);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        items: {
            required: true
        }
    },
    methods: {
        handleEdit: function handleEdit(item) {
            var payload = {
                id: item.id,
                item_code: item.item_code,
                item_name: item.item_name,
                price: item.price,
                quantity: item.quantity,
                unit: item.unit.id,
                site: item.site.id,
                dr_number: item.dr_number
            };
            this.$root.setFormType('EDIT_ITEM');
            this.$store.commit('ITEMS_MODULE/SET_ITEM', payload);
        },
        handleRemove: function handleRemove(item) {
            var bool = confirm('Delete ' + item.item_name + ' ?');

            if (bool) {
                this.$store.dispatch('ITEMS_MODULE/DELETE_ITEM', item.id);
            }
        }
    },
    components: {
        Pagination: _index2.default
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

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12 mb-3" }, [
      _c(
        "table",
        { staticClass: "table table-bordered", attrs: { id: "example" } },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.items.data, function(item, i) {
              return _vm.items.data.length != 0
                ? _c("tr", { key: i }, [
                    _c("td", [_vm._v(_vm._s(item.item_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.item_code))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.unit.unit_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.quantity))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.price))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.site.site_name))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm._f("humanReadableFormat")(item.create_at))
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.dr_number))]),
                    _vm._v(" "),
                    _c("td", { attrs: { align: "center" } }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-primary waves-effect waves-light m-1",
                          attrs: {
                            type: "button",
                            "data-toggle": "modal",
                            "data-target": "#addmodal"
                          },
                          on: {
                            click: function($event) {
                              _vm.handleEdit(item)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-plus-circle" }),
                          _vm._v(" "),
                          _c("span", [_vm._v("UPDATE")])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-primary waves-effect waves-light",
                          attrs: { type: "button", id: "confirm-btn-alert4" },
                          on: {
                            click: function($event) {
                              _vm.handleRemove(item)
                            }
                          }
                        },
                        [_vm._v("REMOVE\n                        ")]
                      )
                    ])
                  ])
                : _c("tr", [_vm._m(1)])
            })
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-12 justify-content-right" },
      [_c("Pagination", { attrs: { object: _vm.items } })],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-primary shadow-primary" }, [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "9" } }, [
      _c("span", [_vm._v("Loading....")])
    ])
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

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(253);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("793a098b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2421c48f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./issueance.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2421c48f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./issueance.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _issuance = __webpack_require__(255);

var _issuance2 = _interopRequireDefault(_issuance);

var _items = __webpack_require__(229);

var _items2 = _interopRequireDefault(_items);

var _index = __webpack_require__(260);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        next(function (vm) {
            vm.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS_LIST'); //items for select box
            vm.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS'); //items data table
        });
    },

    components: {
        IssuanceForm: _issuance2.default,
        IssuanceTable: _items2.default,
        IssuanceCart: _index2.default
    },
    computed: {
        stocks: function stocks() {
            return this.$store.getters['ITEMS_MODULE/GET_ITEMS'];
        }
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

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(256)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(258)
/* template */
var __vue_template__ = __webpack_require__(259)
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
Component.options.__file = "resources/js/components/form-modal/issuance.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c9930ab", Component.options)
  } else {
    hotAPI.reload("data-v-1c9930ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5f7e7a68", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c9930ab\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./issuance.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c9930ab\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./issuance.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 258:
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

exports.default = {
    data: function data() {
        return {
            isLoading: false,
            response: [],
            customer_types: [{ value: 'faculty', label: 'Faculty' }, { value: 'student', label: 'Student' }, { value: 'others', label: 'Others' }]
        };
    },
    computed: {
        customer: function customer() {
            return this.$store.getters['SALES_MODULE/GET_CUSTOMER'];
        },
        cart: function cart() {
            return this.$store.getters['CART_MODULE/GET_CART_ITEMS'];
        }
    },
    methods: {
        handleSubmit: function handleSubmit(form) {
            var _this = this;

            this.$validator.validateAll(form).then(function (response) {
                if (response) {
                    if (_this.cart.length > 0) {
                        _this.isLoading = true;
                        var payload = {
                            customer_type: _this.customer.customer_type,
                            customer_id: _this.customer.customer_id,
                            fullname: _this.customer.fullname,
                            fund: _this.customer.fund,
                            department: _this.customer.department,
                            items: _this.cart,
                            // item_id: this.customer.item_id,
                            // quantity: this.customer.quantity,
                            remarks: _this.customer.remarks
                        };

                        _this.$store.dispatch('SALES_MODULE/STORE_SALE', payload).then(function (response) {
                            var baseURL = window.location.protocol + "//" + window.location.host;
                            window.open(baseURL + '/receipt?transaction_no=' + response.data.transaction_no, 'Receipt for ' + response.data.transaction_no, 'width=700,heigth=300');
                            _this.isLoading = false;
                            _this.response = [];
                            _this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS');
                            _this.$store.commit('CART_MODULE/CLEAR_ITEMS');
                            _this.$store.commit('SALES_MODULE/CLEAR_CUSTOMER');
                            toastr.success('Success', 'Sales has been saved');
                        }).catch(function (error) {
                            // toastr.error('Error', error.response.data);
                            _this.response = [];
                            _this.response = error.response;
                            _this.isLoading = false;
                        });
                    } else {
                        toastr.warning('Your cart is empty');
                    }
                }
            });
        }
    }
};

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "color-form",
      attrs: { "data-vv-scope": "SALES_FORM" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.handleSubmit("SALES_FORM")
        }
      }
    },
    [
      _c("div", { staticClass: "form-group row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _vm.response != null && _vm.response.status == 422
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
                    [_vm._v("×")]
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "alert-message" }, [
                    _c("p", [
                      _c("strong", [_vm._v(_vm._s(_vm.response.data.message))])
                    ]),
                    _vm._v(" "),
                    _vm.response.data.errors
                      ? _c(
                          "ul",
                          [
                            _vm.response.data.errors.customer_type
                              ? _vm._l(
                                  _vm.response.data.errors.customer_type,
                                  function(e) {
                                    return _c("li", { key: e }, [
                                      _vm._v(_vm._s(e))
                                    ])
                                  }
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.response.data.errors.quantity
                              ? _vm._l(
                                  _vm.response.data.errors.quantity,
                                  function(e) {
                                    return _c("li", { key: e }, [
                                      _vm._v(_vm._s(e))
                                    ])
                                  }
                                )
                              : _vm._e()
                          ],
                          2
                        )
                      : _vm._e()
                  ])
                ]
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-38" }
          },
          [_vm._v("Customer Type")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
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
                  value: _vm.errors.has("SALES_FORM.customer_type"),
                  expression: "errors.has('SALES_FORM.customer_type')"
                }
              ],
              staticClass: "form-text text-danger"
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.errors.first("SALES_FORM.customer_type")) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-36" }
          },
          [
            _vm.customer.customer_type == "student"
              ? _c("span", [
                  _vm._v("\n                Student ID\n            ")
                ])
              : _vm.customer.customer_type == "faculty"
                ? _c("span", [_vm._v(" Faculty ID")])
                : _c("span", [_vm._v("Customer ID")])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.customer.customer_id,
                expression: "customer.customer_id"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "customer_id",
              type: "text",
              id: "input-36",
              placeholder: "Enter Student Number"
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
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-33" }
          },
          [_vm._v("Full Name")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
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
                value: _vm.customer.fullname,
                expression: "customer.fullname"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "fullname",
              type: "text",
              id: "input-33",
              placeholder: "Enter customer full name"
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
                  value: _vm.errors.has("SALES_FORM.fullname"),
                  expression: "errors.has('SALES_FORM.fullname')"
                }
              ],
              staticClass: "form-text text-danger"
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.errors.first("SALES_FORM.fullname")) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-33" }
          },
          [_vm._v("Fund")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
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
                value: _vm.customer.fund,
                expression: "customer.fund"
              }
            ],
            staticClass: "form-control",
            attrs: {
              name: "fund",
              type: "number",
              id: "input-34",
              placeholder: "Enter fund"
            },
            domProps: { value: _vm.customer.fund },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.customer, "fund", $event.target.value)
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
                  value: _vm.errors.has("SALES_FORM.fund"),
                  expression: "errors.has('SALES_FORM.fund')"
                }
              ],
              staticClass: "form-text text-danger"
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.errors.first("SALES_FORM.fund")) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-35" }
          },
          [_vm._v("Department")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
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
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-12 col-form-label",
            attrs: { for: "input-38" }
          },
          [_vm._v("Remarks\n            (Optional)")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.customer.remarks,
                expression: "customer.remarks"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              id: "input-38",
              placeholder: "Enter Remarks"
            },
            domProps: { value: _vm.customer.remarks },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.customer, "remarks", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-link bg-white text-info shadow px-5",
              attrs: { disabled: _vm.isLoading, type: "submit" }
            },
            [
              _c("i", { staticClass: "icon-check" }),
              _vm._v(" "),
              !_vm.isLoading
                ? _c("span", [_vm._v("Submit")])
                : _c("span", [_vm._v("Submitting ...")])
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
    require("vue-hot-reload-api")      .rerender("data-v-1c9930ab", module.exports)
  }
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(261)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(263)
/* template */
var __vue_template__ = __webpack_require__(264)
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
Component.options.__file = "resources/js/components/admin/cart/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b1f86a4", Component.options)
  } else {
    hotAPI.reload("data-v-6b1f86a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("37e6a6ae", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b1f86a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b1f86a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // props: {
    //     cart_item: {
    //         type: Object,
    //         required: true
    //     },
    //     cart: {
    //         type: Array,
    //         required: true
    //     },
    //     items: {
    //         type: Array,
    //         required: true
    //     }
    // },  
    data: function data() {
        return {
            total_amount: 0.00
        };
    },
    computed: {
        cart: function cart() {
            return this.$store.getters['CART_MODULE/GET_CART_ITEMS'];
        },
        cart_item: function cart_item() {
            return this.$store.getters['CART_MODULE/GET_CART_ITEM'];
        },
        items: function items() {
            return this.$store.getters['ITEMS_MODULE/GET_ITEMS_LIST'];
        }
    },
    methods: {
        addToCart: function addToCart(form) {
            var _this = this;

            this.$validator.validateAll(form).then(function (result) {
                if (result) {
                    var x = false;
                    var selected_item = _this.cart_item.item;
                    var total_price = parseInt(selected_item.price) * parseInt(_this.cart_item.quantity);
                    var payload = _extends({}, selected_item, {
                        request_quantity: _this.cart_item.quantity,
                        total_price: total_price
                    });

                    for (var index = 0; index < _this.cart.length; index++) {
                        if (selected_item.id == _this.cart[index].id) {
                            x = index;
                        }
                    }

                    if (_this.cart_item.quantity > selected_item.quantity) {
                        toastr.warning('Stock quantity for ' + selected_item.item_name + ' is insufficient.');
                    } else {
                        if (x === false) {
                            _this.$store.commit('CART_MODULE/SET_CART_ITEMS', payload);
                        } else {
                            _this.cart[x].request_quantity = parseInt(_this.cart[x].request_quantity) + 1;
                            _this.cart[x].total_price = parseInt(_this.cart[x].total_price) + parseInt(_this.cart[x].price) * 1;
                            var _payload = {
                                item: _this.cart[x],
                                index: x
                            };
                            _this.$store.commit('CART_MODULE/UPDATE_CART', _payload);
                        }
                        _this.$store.commit('CART_MODULE/CLEAR_ITEM');
                    }
                }
            });
        },
        removeItem: function removeItem(i) {
            this.$store.commit('CART_MODULE/REMOVE_CART_ITEM', i);
        },
        computeTotalAmount: function computeTotalAmount() {
            var _this2 = this;

            if (this.cart.length > 0) {
                this.total_amount = 0;
                this.cart.forEach(function (item) {
                    _this2.total_amount = parseInt(_this2.total_amount) + parseInt(item.total_price);
                });
            } else {
                this.total_amount = 0.00;
            }
        }
    },
    watch: {
        cart: {
            handler: function handler(val, oldVal) {
                console.log('change');
                this.computeTotalAmount();
            },
            deep: true
        }
    }
};

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c(
        "form",
        {
          attrs: { "data-vv-scope": "CART_FORM" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.addToCart("CART_FORM")
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-md-5" }, [
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
                      value: _vm.cart_item.item,
                      expression: "cart_item.item"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "item", id: "basic-select" },
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
                        _vm.cart_item,
                        "item",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
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
                  _vm._l(_vm.items, function(item) {
                    return _c(
                      "option",
                      { key: item.item_name, domProps: { value: item } },
                      [
                        _vm._v(
                          " \n                                " +
                            _vm._s(item.item_name) +
                            " (₱ " +
                            _vm._s(item.price) +
                            ")\n                            "
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
                      value: _vm.errors.has("CART_FORM.item"),
                      expression: "errors.has('CART_FORM.item')"
                    }
                  ],
                  staticClass: "form-text text-danger"
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.errors.first("CART_FORM.item")) +
                      "\n                    "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cart_item.quantity,
                    expression: "cart_item.quantity"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|min_value:1|numeric",
                    expression: "'required|min_value:1|numeric'"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "quantity",
                  type: "number",
                  id: "input-37",
                  placeholder: "Enter Quantity"
                },
                domProps: { value: _vm.cart_item.quantity },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.cart_item, "quantity", $event.target.value)
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
                      value: _vm.errors.has("CART_FORM.quantity"),
                      expression: "errors.has('CART_FORM.quantity')"
                    }
                  ],
                  staticClass: "form-text text-danger"
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.errors.first("CART_FORM.quantity")) +
                      "\n                    "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12 mt-3 table-responsive" }, [
      _c(
        "table",
        {
          staticClass: "table table-sm",
          staticStyle: { "background-color": "white" }
        },
        [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "tbody",
            [
              _vm.cart.length === 0
                ? _c("tr", [_vm._m(3)])
                : _vm._l(_vm.cart, function(item, i) {
                    return _c("tr", { key: i }, [
                      _c("td", [_vm._v(_vm._s(item.item_code))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.item_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.request_quantity))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.total_price))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass: "pa-2 text-danger",
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function($event) {
                                _vm.removeItem(i)
                              }
                            }
                          },
                          [_vm._v("Remove")]
                        )
                      ])
                    ])
                  }),
              _vm._v(" "),
              _c("tr", [
                _c("td"),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td"),
                _vm._v(" "),
                _c("td", [_vm._v("TOTAL")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.total_amount.toFixed(2)))])
              ])
            ],
            2
          )
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
    return _c("div", { staticClass: "form-group col-md-3" }, [
      _c(
        "button",
        { staticClass: "btn btn-success btn-sm", attrs: { type: "submit" } },
        [_vm._v("Add to Cart")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("h3", { staticClass: "text-white" }, [_vm._v("Cart Items")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ITEM CODE")]),
        _vm._v(" "),
        _c("th", [_vm._v("ITEM")]),
        _vm._v(" "),
        _c("th", [_vm._v("QTY")]),
        _vm._v(" "),
        _c("th", [_vm._v("PRICE")]),
        _vm._v(" "),
        _c("th", [_vm._v("OPTIONS")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "5" } }, [
      _c("em", [
        _c("p", { staticClass: "text-muted text-center" }, [
          _vm._v("No items in cart")
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
    require("vue-hot-reload-api")      .rerender("data-v-6b1f86a4", module.exports)
  }
}

/***/ }),

/***/ 265:
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
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12 mx-auto" }, [
                  _c("div", { staticClass: "card bg-primary shadow-primary" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-5" },
                          [_c("IssuanceForm")],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-7" },
                          [_c("IssuanceCart")],
                          1
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("IssuanceTable", { attrs: { items: _vm.stocks } })
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
      _vm._v(" My Inventory")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-title text-uppercase text-white" }, [
      _c("i", { staticClass: "\tfa fa-share-square-o" }),
      _vm._v("\n                                        Supplies Issuance")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2421c48f", module.exports)
  }
}

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(284)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(286)
/* template */
var __vue_template__ = __webpack_require__(287)
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
Component.options.__file = "resources/js/components/pagination/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7684dc30", Component.options)
  } else {
    hotAPI.reload("data-v-7684dc30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1b07c9ea", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7684dc30\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7684dc30\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 286:
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

exports.default = {
    props: {
        object: {
            required: true
        }
    },
    created: function created() {
        // console.log(this.$route)
    },

    data: function data() {
        return {
            max_visible: 5
        };
    },
    computed: {
        startPage: function startPage() {
            // When on the first page
            if (this.object.current_page === 1) {
                return 1;
            }
            // When on the last page
            if (this.object.current_page === this.object.last_page) {
                return this.object.last_page - 1;
            }
            // When in between
            return this.object.current_page - 1;
        },
        links: function links() {
            var range = [];

            for (var i = this.startPage; i <= Math.min(this.startPage + this.max_visible - 1, this.object.last_page); i++) {
                range.push(i);
            }

            return range;
        }
    },
    methods: {
        toPage: function toPage(page, obj) {
            var path = obj.path + '?page=' + page;
            this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS', path);
        },
        nextPage: function nextPage(url) {
            this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS', url);
        },
        prevPage: function prevPage(url) {
            this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS', url);
        },
        firstPage: function firstPage(url) {
            this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS', url);
        },
        lastPage: function lastPage(url) {
            this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS', url);
        }
    }
};

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row clearfix" }, [
    _c("div", { staticClass: "col-md-4 float-left" }, [
      _vm._v(
        "\n       Displaying from " +
          _vm._s(_vm.object.from) +
          " to " +
          _vm._s(_vm.object.to) +
          " total of " +
          _vm._s(_vm.object.total) +
          "\n    "
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-8 float-right" }, [
      _c("nav", { attrs: { "aria-label": "..." } }, [
        _c(
          "ul",
          { class: "pagination " + " justify-content-end" },
          [
            _c(
              "li",
              {
                class:
                  _vm.object.from == _vm.object.current_page
                    ? "page-item disabled"
                    : ""
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "#", tabindex: "-1" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.firstPage(_vm.object.first_page_url)
                      }
                    }
                  },
                  [_c("span", { staticClass: "fa fa-long-arrow-left" })]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                class:
                  _vm.object.prev_page_url == null
                    ? "page-item disabled"
                    : "page-item"
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "#", tabindex: "-1" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.prevPage(_vm.object.prev_page_url)
                      }
                    }
                  },
                  [_vm._v("Previous")]
                )
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.links, function(i) {
              return [
                _c(
                  "li",
                  {
                    key: i,
                    class:
                      _vm.object.current_page == i
                        ? "page-item active"
                        : "active"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.toPage(i, _vm.object)
                          }
                        }
                      },
                      [_vm._v(_vm._s(i))]
                    )
                  ]
                )
              ]
            }),
            _vm._v(" "),
            _c(
              "li",
              {
                class:
                  _vm.object.next_page_url == null
                    ? "page-item disabled"
                    : "page-item"
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.nextPage(_vm.object.next_page_url)
                      }
                    }
                  },
                  [_vm._v("Next")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                class:
                  _vm.object.last_page == _vm.object.current_page
                    ? "page-item disabled"
                    : ""
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.lastPage(_vm.object.last_page_url)
                      }
                    }
                  },
                  [_c("span", { staticClass: "fa fa-long-arrow-right" })]
                )
              ]
            )
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7684dc30", module.exports)
  }
}

/***/ })

});