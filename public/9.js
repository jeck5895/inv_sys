webpackJsonp([9],{

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(297)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(299)
/* template */
var __vue_template__ = __webpack_require__(320)
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

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(250)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(252)
/* template */
var __vue_template__ = __webpack_require__(253)
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

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1b07c9ea", content, false, {});
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

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 252:
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
        },
        module: {
            required: true
        },
        query: {
            required: false
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
            var path = this.query ? obj.path + '?page=' + page + '&' + this.query : obj.path + '?page=' + page;
            this.$store.dispatch(this.module, path);
        },
        nextPage: function nextPage(url) {
            url = this.query ? url + '&' + this.query : url;
            this.$store.dispatch(this.module, url);
        },
        prevPage: function prevPage(url) {
            url = this.query ? url + '&' + this.query : url;
            this.$store.dispatch(this.module, url);
        },
        firstPage: function firstPage(url) {
            url = this.query ? url + '&' + this.query : url;
            this.$store.dispatch(this.module, url);
        },
        lastPage: function lastPage(url) {
            url = this.query ? url + '&' + this.query : url;
            this.$store.dispatch(this.module, url);
        }
    }
};

/***/ }),

/***/ 253:
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

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(298);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("793a098b", content, false, {});
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

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _issuance = __webpack_require__(300);

var _issuance2 = _interopRequireDefault(_issuance);

var _sales = __webpack_require__(305);

var _sales2 = _interopRequireDefault(_sales);

var _index = __webpack_require__(315);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        next(function (vm) {
            vm.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS_LIST'); //items for select box
            vm.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS'); //items data table
            vm.$store.dispatch('SALES_MODULE/FETCH_SALES');
        });
    },

    components: {
        IssuanceForm: _issuance2.default,
        SalesTable: _sales2.default,
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
//

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(301)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(303)
/* template */
var __vue_template__ = __webpack_require__(304)
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

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("5f7e7a68", content, false, {});
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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 303:
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
        },
        total_amount: function total_amount() {
            return this.$store.getters['CART_MODULE/GET_TOTAL_AMOUNT'];
        }
    },
    methods: {
        handleSubmit: function handleSubmit(form) {
            var _this = this;

            this.$validator.validateAll(form).then(function (response) {
                if (response) {
                    if (_this.cart.length > 0) {
                        if (_this.customer.fund >= _this.total_amount) {
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
                                window.open(baseURL + '/sales/receipt?transaction_no=' + response.data.transaction_no, 'Receipt for ' + response.data.transaction_no, 'width=700,heigth=300');
                                _this.isLoading = false;
                                _this.response = [];
                                _this.$store.dispatch('SALES_MODULE/FETCH_SALES');
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
                            toastr.warning('Insufficient Payment');
                        }
                    } else {
                        toastr.warning('Your cart is empty');
                    }
                }
            });
        }
    }
};

/***/ }),

/***/ 304:
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
          [_vm._v("Payment")]
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

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(306)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(308)
/* template */
var __vue_template__ = __webpack_require__(314)
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
Component.options.__file = "resources/js/components/admin/tables/sales.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c4b1dfa6", Component.options)
  } else {
    hotAPI.reload("data-v-c4b1dfa6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("d49c8e64", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c4b1dfa6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sales.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c4b1dfa6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sales.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(249);

var _index2 = _interopRequireDefault(_index);

var _dateFilter = __webpack_require__(309);

var _dateFilter2 = _interopRequireDefault(_dateFilter);

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
    computed: {
        sales: function sales() {
            return this.$store.getters['SALES_MODULE/GET_SALES'];
        },

        keyword: {
            get: function get() {
                return this.$store.getters['SALES_MODULE/GET_FILTER_KEYWORD'];
            },
            set: function set(newVal) {
                this.$store.commit('SALES_MODULE/SET_FILTER_KEYWORD', newVal);
            }
        },
        date_from: function date_from() {
            return this.$store.getters['SALES_MODULE/GET_FILTER_FROM'];
        },
        date_to: function date_to() {
            return this.$store.getters['SALES_MODULE/GET_FILTER_TO'];
        }
    },
    methods: {
        handleFilter: function handleFilter() {
            var url = '/api/sales?keyword=' + this.keyword + '&date_from=' + this.date_from + '&date_to=' + this.date_to;

            this.$store.dispatch('SALES_MODULE/FETCH_SALES', url);
        },
        handlePrint: function handlePrint(transaction_no) {
            var baseURL = window.location.protocol + "//" + window.location.host;
            window.open(baseURL + '/sales/receipt?transaction_no=' + transaction_no, 'Receipt for ' + transaction_no, 'width=700,heigth=300');
        }
    },
    components: {
        Pagination: _index2.default,
        DateFilter: _dateFilter2.default
    }
};

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(310)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(312)
/* template */
var __vue_template__ = __webpack_require__(313)
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
Component.options.__file = "resources/js/components/filters/date-filter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e59f3a30", Component.options)
  } else {
    hotAPI.reload("data-v-e59f3a30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("43d33182", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e59f3a30\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./date-filter.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e59f3a30\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./date-filter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 312:
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

exports.default = {
    computed: {
        date_from: {
            get: function get() {
                return this.$store.getters['SALES_MODULE/GET_FILTER_FROM'];
            },
            set: function set(newVal) {
                this.$store.commit('SALES_MODULE/SET_FILTER_FROM', newVal);
            }
        },
        date_to: {
            get: function get() {
                return this.$store.getters['SALES_MODULE/GET_FILTER_TO'];
            },
            set: function set(newVal) {
                this.$store.commit('SALES_MODULE/SET_FILTER_TO', newVal);
            }
        },
        keyword: function keyword() {
            return this.$store.getters['SALES_MODULE/GET_FILTER_KEYWORD'];
        }
    },
    methods: {
        handleFilter: function handleFilter() {
            var url = '/api/sales?keyword=' + this.keyword + '&date_from=' + this.date_from + '&date_to=' + this.date_to;

            this.$store.dispatch('SALES_MODULE/FETCH_SALES', url);
        }
    }
};

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "py-2 form-inline float-right" }, [
    _c("div", { staticClass: "form-group" }, [
      _c(
        "label",
        { staticClass: "mr-1", attrs: { for: "exampleDropdownFormEmail1" } },
        [_vm._v("Date From")]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.date_from,
            expression: "date_from"
          }
        ],
        staticClass: "form-control form-control-sm mr-sm-2",
        attrs: { type: "date", id: "exampleDropdownFormEmail1" },
        domProps: { value: _vm.date_from },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.date_from = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "label",
        { staticClass: "mr-1", attrs: { for: "exampleDropdownFormPassword1" } },
        [_vm._v("To")]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.date_to,
            expression: "date_to"
          }
        ],
        staticClass: "form-control form-control-sm mr-sm-2",
        attrs: { type: "date", id: "exampleDropdownFormPassword1" },
        domProps: { value: _vm.date_to },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.date_to = $event.target.value
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-success",
          on: { click: _vm.handleFilter }
        },
        [_vm._v("\n            Submit\n        ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-e59f3a30", module.exports)
  }
}

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row justify-content-end" }, [
    _c(
      "div",
      { staticClass: "col-md-12" },
      [
        _c("DateFilter"),
        _vm._v(" "),
        _c("div", { staticClass: "py-2 form-inline" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.keyword,
                expression: "keyword"
              }
            ],
            staticClass: "form-control form-control-sm mr-2",
            staticStyle: { width: "250px" },
            attrs: {
              type: "text",
              placeholder: "Search",
              "aria-label": "Search"
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
          _c(
            "button",
            {
              staticClass: "btn btn-success btn-sm my-2 my-sm-0",
              attrs: { type: "submit" },
              on: { click: _vm.handleFilter }
            },
            [
              _c("span", { staticClass: "fa fa-search" }),
              _vm._v("  Search\n            ")
            ]
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12 mb-3" }, [
      _c(
        "table",
        {
          staticClass: "table table-bordered",
          attrs: { id: "default-datatable" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            [
              !_vm.sales.data
                ? _c("tr", [_vm._m(1)])
                : _vm.sales.data.length === 0
                  ? _c("tr", [_vm._m(2)])
                  : _vm._l(_vm.sales.data, function(item, i) {
                      return _c("tr", { key: i }, [
                        _c(
                          "td",
                          { staticStyle: { "vertical-align": "middle" } },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(item.transaction_no) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticStyle: { "vertical-align": "middle" } },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(item.fullname) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticStyle: { "vertical-align": "middle" } },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(item.customer_type) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticStyle: { "vertical-align": "middle" } },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm._f("humanReadableFormat")(item.created_at)
                                ) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-sm",
                              on: {
                                click: function($event) {
                                  _vm.handlePrint(item.transaction_no)
                                }
                              }
                            },
                            [
                              _vm._v("\n                            PRINT "),
                              _c("i", { staticClass: "fa fa-print fa-2x" })
                            ]
                          )
                        ])
                      ])
                    })
            ],
            2
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-12" },
      [
        _c("Pagination", {
          attrs: {
            object: _vm.sales,
            module: "SALES_MODULE/FETCH_SALES",
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-primary shadow-primary" }, [
      _c("tr", [
        _c("th", [_vm._v("TRANSACTION NO")]),
        _vm._v(" "),
        _c("th", [_vm._v("CUSTOMER")]),
        _vm._v(" "),
        _c("th", [_vm._v("TYPE")]),
        _vm._v(" "),
        _c("th", [_vm._v("DATE OF TRANSACTION")]),
        _vm._v(" "),
        _c("th", [_vm._v("OPTIONS")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("small", { staticClass: "text-muted" }, [
        _c("i", [_vm._v("No transactions")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "5" } }, [
      _c("small", { staticClass: "text-muted" }, [
        _c("i", [_vm._v("No transactions found")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c4b1dfa6", module.exports)
  }
}

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(316)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(318)
/* template */
var __vue_template__ = __webpack_require__(319)
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

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("37e6a6ae", content, false, {});
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

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 318:
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
            total_amount_temp: 0.00
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
        },
        total_amount: function total_amount() {
            return this.$store.getters['CART_MODULE/GET_TOTAL_AMOUNT'];
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
                            _this.cart[x].request_quantity = parseInt(_this.cart[x].request_quantity) + parseInt(_this.cart_item.quantity);
                            _this.cart[x].total_price = parseInt(_this.cart[x].total_price) + parseInt(_this.cart[x].price) * parseInt(_this.cart_item.quantity);
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
                this.total_amount_temp = 0;
                this.cart.forEach(function (item) {
                    _this2.total_amount_temp = parseInt(_this2.total_amount_temp) + parseInt(item.total_price);
                });
                this.$store.commit('CART_MODULE/SET_TOTAL_AMOUNT', this.total_amount_temp);
            } else {
                this.total_amount_temp = 0.00;
                this.$store.commit('CART_MODULE/SET_TOTAL_AMOUNT', 0.00);
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

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row mt-3" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c(
        "form",
        {
          staticClass: "color-form",
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
                "label",
                {
                  staticClass: "col-sm-12 col-form-label",
                  attrs: { for: "input-38" }
                },
                [_vm._v("Item")]
              ),
              _vm._v(" "),
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
              _c(
                "label",
                { staticClass: "col-form-label", attrs: { for: "" } },
                [_vm._v("Quantity")]
              ),
              _vm._v(" "),
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
        {
          staticClass: "btn btn-success btn-sm",
          staticStyle: { "margin-top": "2.2rem" },
          attrs: { type: "submit" }
        },
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

/***/ 320:
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
              _c("hr"),
              _vm._v(" "),
              _c("SalesTable")
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

/***/ })

});