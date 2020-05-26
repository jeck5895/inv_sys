webpackJsonp([14],{

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(391)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(393)
/* template */
var __vue_template__ = __webpack_require__(394)
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
Component.options.__file = "resources/js/pages/admin/sales/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bff37c8", Component.options)
  } else {
    hotAPI.reload("data-v-2bff37c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(392);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5e12de6a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2bff37c8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2bff37c8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(9);

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

var _card = __webpack_require__(14);

var _card2 = _interopRequireDefault(_card);

var _checkoutForm = __webpack_require__(158);

var _checkoutForm2 = _interopRequireDefault(_checkoutForm);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _vuex = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    components: {
        Card: _card2.default,
        CheckoutForm: _checkoutForm2.default
    },
    watch: {
        $route: function $route(to, from) {
            this.resetForm = true;
        }
    },
    data: function data() {
        return {
            resetForm: false
        };
    },

    computed: _extends({}, (0, _vuex.mapGetters)({
        is_saving: "SALES/GET_SUBMIT_STATE",
        branches: "BRANCHES/branches",
        brands: "BRANDS/GET_BRANDS",
        categories: "CATEGORIES/GET_CATEGORIES",
        colors: "COLORS/GET_COLORS",
        suppliers: "SUPPLIERS/GET_SUPPLIERS",
        models: "UNITS/GET_UNITS",
        sales_item: "SALES/GET_SALES_ITEM"
    }), {
        freebies: function freebies() {
            var freebies = [];
            var list = this.$store.getters["FREEBIES/GET_FREEBIES"];

            list.map(function (item) {
                freebies.push({ id: item.id, text: item.name });
            });

            return freebies;
        }
    }),
    methods: _extends({}, (0, _vuex.mapActions)({
        fetchBranches: "BRANCHES/fetchOptionList",
        fetchBrands: "BRANDS/fetchBrands",
        fetchCategories: "CATEGORIES/fetchCategories",
        fetchColors: "COLORS/fetchColors",
        fetchSuppliers: "SUPPLIERS/fetchSuppliers",
        fetchModels: "UNITS/fetchUnits",
        fetchFreebies: "FREEBIES/fetchFreebies",
        save: "SALES/STORE",
        update: "SALES/UPDATE",
        findBy: "SALES/FIND_BY"
    }), (0, _vuex.mapMutations)("SALES", {
        clear: "CLEAR_SALES_ITEM"
    }), {
        handleCheckout: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(payload) {
                var _this = this;

                var id, action, branch, items, payment_mode, total_amount, receipt_no, checkout_date, payment_terms, form, errors, formData;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                id = payload.id, action = payload.action, branch = payload.branch, items = payload.items, payment_mode = payload.payment_mode, total_amount = payload.total_amount, receipt_no = payload.receipt_no, checkout_date = payload.checkout_date, payment_terms = payload.payment_terms, form = payload.form, errors = payload.errors;
                                formData = {
                                    branch: branch,
                                    items: items,
                                    payment_mode: payment_mode,
                                    receipt_no: receipt_no,
                                    checkout_date: checkout_date,
                                    total_amount: total_amount
                                };


                                if (payment_terms != undefined) {
                                    formData = _extends({}, formData, { payment_terms: payment_terms });
                                }

                                if (!(id === undefined)) {
                                    _context.next = 8;
                                    break;
                                }

                                _context.next = 6;
                                return this.save(formData).then(function (response) {
                                    _this.resetForm = true;
                                }).catch(function (error) {
                                    console.log(error.response);
                                });

                            case 6:
                                _context.next = 11;
                                break;

                            case 8:
                                formData = _extends({}, formData, { id: id });
                                _context.next = 11;
                                return this.update(formData);

                            case 11:

                                console.log(payload);

                            case 12:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function handleCheckout(_x) {
                return _ref.apply(this, arguments);
            }

            return handleCheckout;
        }(),
        handleQuantity: function handleQuantity() {
            this.submitted = true;
            this.total_quantity = parseInt(this.quantity);
        },
        handleFormReset: function handleFormReset(val) {
            if (val) {
                this.resetForm = false;
            }
        }
    }),
    created: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.fetchBrands("api/brands");

                        case 2:
                            _context2.next = 4;
                            return this.fetchCategories("api/categories");

                        case 4:
                            _context2.next = 6;
                            return this.fetchColors("api/colors");

                        case 6:
                            _context2.next = 8;
                            return this.fetchSuppliers("api/suppliers");

                        case 8:
                            _context2.next = 10;
                            return this.fetchModels("api/models");

                        case 10:
                            _context2.next = 12;
                            return this.fetchFreebies("api/freebies");

                        case 12:
                            _context2.next = 14;
                            return this.fetchBranches();

                        case 14:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function created() {
            return _ref2.apply(this, arguments);
        }

        return created;
    }(),
    beforeRouteEnter: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(to, from, next) {
            var name, params, receipt;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            name = to.name, params = to.params;
                            receipt = params.receipt;

                            if (!(name === "edit-sales")) {
                                _context3.next = 5;
                                break;
                            }

                            _context3.next = 5;
                            return store.dispatch("SALES/FIND_BY", {
                                field: "receipt_no",
                                value: receipt
                            }).catch(function (error) {
                                if (error.status === 404) {
                                    toastr.error("No matching item found.", "404");
                                    next({ name: "sales" });
                                }
                            });

                        case 5:
                            if (name === "create-sales") {
                                store.commit("SALES/CLEAR_SALES_ITEM");
                            }
                            next();

                        case 7:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function beforeRouteEnter(_x2, _x3, _x4) {
            return _ref3.apply(this, arguments);
        }

        return beforeRouteEnter;
    }()
};

/***/ }),

/***/ 394:
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
        _c("card", {
          scopedSlots: _vm._u([
            {
              key: "card-header",
              fn: function() {
                return [
                  _c("h4", { staticClass: "mb-0" }, [
                    _vm.$route.name === "create-sales"
                      ? _c("span", [_vm._v("Checkout")])
                      : _c("span", [
                          _vm._v("Edit " + _vm._s(_vm.sales_item.receipt_no))
                        ])
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "card-body",
              fn: function() {
                return [
                  _c("checkout-form", {
                    attrs: {
                      "sales-item": _vm.sales_item,
                      "is-loading": _vm.is_saving,
                      "reset-form": _vm.resetForm,
                      models: _vm.models,
                      colors: _vm.colors,
                      brands: _vm.brands,
                      branches: _vm.branches,
                      freebies: _vm.freebies
                    },
                    on: {
                      "on-submit": _vm.handleCheckout,
                      "on-reset": _vm.handleFormReset
                    }
                  })
                ]
              },
              proxy: true
            }
          ])
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-2bff37c8", module.exports)
  }
}

/***/ })

});