webpackJsonp([4],{

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(331)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(333)
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
Component.options.__file = "resources/js/pages/admin/stocks.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6947f246", Component.options)
  } else {
    hotAPI.reload("data-v-6947f246", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(332);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2b80c9a6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6947f246\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./stocks.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6947f246\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./stocks.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _itemButtons = __webpack_require__(334);

var _itemButtons2 = _interopRequireDefault(_itemButtons);

var _items = __webpack_require__(339);

var _items2 = _interopRequireDefault(_items);

var _item = __webpack_require__(344);

var _item2 = _interopRequireDefault(_item);

var _itemQuantity = __webpack_require__(349);

var _itemQuantity2 = _interopRequireDefault(_itemQuantity);

var _index = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        _index.store.dispatch("ITEMS_MODULE/FETCH_ITEMS").then(function () {
            _index.store.dispatch("UNITS_MODULE/FETCH_UNITS_LIST");
            _index.store.dispatch("SITES_MODULE/FETCH_SITES_LIST");
            next();
        }); //items data table
        _index.store.dispatch("ITEMS_MODULE/FETCH_ITEMS_LIST");
    },

    computed: {
        stocks: function stocks() {
            return this.$store.getters["ITEMS_MODULE/GET_ITEMS"];
        }
    },
    components: {
        NavButtons: _itemButtons2.default,
        ItemsTable: _items2.default,
        ItemForm: _item2.default,
        ItemQuantityForm: _itemQuantity2.default
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

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(335)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(337)
/* template */
var __vue_template__ = __webpack_require__(338)
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
Component.options.__file = "resources/js/components/admin/buttons/item-buttons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bf83560", Component.options)
  } else {
    hotAPI.reload("data-v-2bf83560", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(336);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("b25c1430", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2bf83560\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item-buttons.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2bf83560\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item-buttons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 337:
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

exports.default = {
    data: function data() {
        return {
            date: moment().format('YYYY-MM-DD')
        };
    },
    methods: {
        handleDailyStockReport: function handleDailyStockReport() {
            var baseURL = window.location.protocol + "//" + window.location.host;
            window.open(baseURL + '/report/items/daily?date=' + this.date, 'Daily Items Report', 'width=700,heigth=300');
        }
    }
};

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary waves-effect waves-light mr-1",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": "#addmodal"
          },
          on: {
            click: function($event) {
              return _vm.$store.commit("FORM_MODULE/SET_FORM_TYPE", "NEW_ITEM")
            }
          }
        },
        [
          _c("i", { staticClass: "fa fa-plus-circle" }),
          _vm._v(" "),
          _c("span", [_vm._v("New Item")])
        ]
      ),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "form-inline" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.date,
              expression: "date"
            }
          ],
          staticClass: "form-control",
          staticStyle: { width: "60%" },
          attrs: { type: "date", name: "daily", id: "" },
          domProps: { value: _vm.date },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.date = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-success ml-2",
            on: { click: _vm.handleDailyStockReport }
          },
          [_c("i", { staticClass: "icon-printer" }), _vm._v(" DAILY REPORT")]
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary waves-effect waves-light mr-1",
        attrs: { "data-toggle": "modal", "data-target": "#dangermodal" }
      },
      [
        _c("i", { staticClass: "fa fa-cloud-upload" }),
        _vm._v(" "),
        _c("span", [_vm._v("Upload")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary waves-effect waves-light mr-1",
        attrs: {
          type: "button",
          "data-toggle": "modal",
          "data-target": "#itemquantitymodal"
        }
      },
      [
        _c("i", { staticClass: "fa fa-plus-circle" }),
        _vm._v(" "),
        _c("span", [_vm._v("Add Item Quantity")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "dangermodal" } },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content border-primary" }, [
            _c("div", { staticClass: "modal-header bg-primary" }, [
              _c("h5", { staticClass: "modal-title text-white" }, [
                _c("i", { staticClass: "fa fa-file-excel-o" }),
                _vm._v(" Import\n                        File")
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
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("×")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "form",
                {
                  staticClass: "dropzone",
                  attrs: { action: "#", id: "dropzone" }
                },
                [
                  _c("div", { staticClass: "fallback" }, [
                    _c("input", {
                      attrs: {
                        name: "file",
                        type: "file",
                        multiple: "multiple"
                      }
                    })
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-inverse-primary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [
                  _c("i", { staticClass: "fa fa-times" }),
                  _vm._v("\n                        Close")
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "button" } },
                [
                  _c("i", { staticClass: "fa fa-check-square-o" }),
                  _vm._v("\n                        Upload")
                ]
              )
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2bf83560", module.exports)
  }
}

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(340)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(342)
/* template */
var __vue_template__ = __webpack_require__(343)
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

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(341);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7715d296", content, false, {});
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

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 342:
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

// import Pagination from '../../pagination/index.vue';

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
            this.$store.commit("FORM_MODULE/SET_FORM_TYPE", "EDIT_ITEM");
            this.$store.commit("ITEMS_MODULE/SET_ITEM", payload);
        },
        handleRemove: function handleRemove(item) {
            var bool = confirm("Delete " + item.item_name + " ?");

            if (bool) {
                this.$store.dispatch("ITEMS_MODULE/DELETE_ITEM", item.id);
            }
        }
    },
    components: {
        Pagination: Pagination
    }
};

/***/ }),

/***/ 343:
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
            [
              _vm.items.data.length == 0 ? _c("tr", [_vm._m(1)]) : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.items.data, function(item, i) {
                return _vm.items.data.length != 0
                  ? _c("tr", { key: i }, [
                      _c("td", [_vm._v(_vm._s(item.item_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.item_code))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.unit.unit_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.remaining_quantity))]),
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
                                return _vm.handleEdit(item)
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
                                return _vm.handleRemove(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                            REMOVE\n                        "
                            )
                          ]
                        )
                      ])
                    ])
                  : _vm._e()
              })
            ],
            2
          )
        ]
      )
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
    return _c("td", { attrs: { colspan: "9" } }, [
      _c("p", { staticClass: "text-center" }, [
        _c("em", [_vm._v("No data to show...")])
      ])
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

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(345)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(347)
/* template */
var __vue_template__ = __webpack_require__(348)
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
Component.options.__file = "resources/js/components/form-modal/item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3785d13a", Component.options)
  } else {
    hotAPI.reload("data-v-3785d13a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3b0d09b0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3785d13a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3785d13a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 347:
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

exports.default = {
    data: function data() {
        return {
            isLoading: false,
            response: []
        };
    },
    computed: {
        item: function item() {
            return this.$store.getters['ITEMS_MODULE/GET_ITEM'];
        },
        units: function units() {
            return this.$store.getters['UNITS_MODULE/GET_UNITS_LIST'];
        },
        sites: function sites() {
            return this.$store.getters['SITES_MODULE/GET_SITES_LIST'];
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
                    var payload = {
                        id: _this.item.id,
                        item_name: _this.item.item_name,
                        item_code: _this.item.item_code,
                        unit: _this.item.unit,
                        quantity: _this.item.quantity,
                        price: _this.item.price,
                        site: _this.item.site,
                        dr_number: _this.item.dr_number
                    };

                    _this.isLoading = true;

                    if (FORM_TYPE == "NEW_ITEM") {
                        _this.$store.dispatch('ITEMS_MODULE/STORE_ITEM', payload).then(function (response) {
                            _this.isLoading = false;
                            _this.response = [];
                            _this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS');
                        }).catch(function (error) {

                            var obj = error.response;
                            var keys = Object.keys(obj.data.errors);

                            _this.response = [];

                            if (keys.length > 0) {
                                keys.forEach(function (e) {
                                    obj.data.errors[e].forEach(function (d) {
                                        _this.response.push(d);
                                    });
                                });
                            }
                            _this.isLoading = false;
                        });
                    } else if (FORM_TYPE == "EDIT_ITEM") {
                        _this.$store.dispatch('ITEMS_MODULE/UPDATE_ITEM', payload).then(function (response) {
                            _this.isLoading = false;
                            _this.response = [];
                            _this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS');
                            $("#addmodal").modal('hide');
                        }).catch(function (error) {

                            var obj = error.response;
                            var keys = Object.keys(obj.data.errors);

                            _this.response = [];

                            if (keys.length > 0) {
                                keys.forEach(function (e) {
                                    obj.data.errors[e].forEach(function (d) {
                                        _this.response.push(d);
                                    });
                                });
                            }
                            _this.isLoading = false;
                        });
                    }
                }
            });
        }
    }
};

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal fade", attrs: { id: "addmodal" } }, [
    _c("div", { staticClass: "modal-dialog" }, [
      _c("div", { staticClass: "modal-content border-primary" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "modal-body" }, [
          _c("div", { staticClass: "card bg-primary shadow-primary" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("hr"),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "color-form",
                  attrs: { "data-vv-scope": "ITEM_FORM" }
                },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _vm.response.length
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "alert alert-danger alert-dismissible",
                              attrs: { role: "alert" }
                            },
                            [
                              _vm._m(1),
                              _vm._v(" "),
                              _c("div", { staticClass: "alert-message" }, [
                                _c(
                                  "ul",
                                  _vm._l(_vm.response, function(e, i) {
                                    return _c("li", { key: i }, [
                                      _vm._v(
                                        "\n                                                    " +
                                          _vm._s(e) +
                                          "\n                                                "
                                      )
                                    ])
                                  }),
                                  0
                                )
                              ])
                            ]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-row" }, [
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { attrs: { for: "input-1" } }, [
                        _vm._v("Item Name")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.item_name,
                            expression: "item.item_name"
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
                          name: "item_name",
                          type: "text",
                          id: "input-1",
                          placeholder: "Enter Item Name"
                        },
                        domProps: { value: _vm.item.item_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.item, "item_name", $event.target.value)
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
                              value: _vm.errors.has("ITEM_FORM.quantity"),
                              expression: "errors.has('ITEM_FORM.quantity')"
                            }
                          ],
                          staticClass: "form-text text-danger"
                        },
                        [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(_vm.errors.first("ITEM_FORM.item_name")) +
                              "\n                                    "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-6" }, [
                      _c("label", { attrs: { for: "input-4" } }, [
                        _vm._v("Item Code")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.item_code,
                            expression: "item.item_code"
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
                          name: "item_code",
                          "data-vv-as": "item code",
                          type: "text",
                          id: "input-4",
                          placeholder: "Enter Item Code"
                        },
                        domProps: { value: _vm.item.item_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.item, "item_code", $event.target.value)
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
                              value: _vm.errors.has("ITEM_FORM.item_code"),
                              expression: "errors.has('ITEM_FORM.item_code')"
                            }
                          ],
                          staticClass: "form-text text-danger"
                        },
                        [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(_vm.errors.first("ITEM_FORM.item_code")) +
                              "\n                                    "
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "basic-select" } }, [
                      _vm._v("Unit")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.unit,
                            expression: "item.unit"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "unit", id: "basic-select" },
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
                              _vm.item,
                              "unit",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { staticStyle: { color: "gray" } }, [
                          _vm._v("Please Select Unit")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.units, function(item) {
                          return _c(
                            "option",
                            {
                              key: item.unit_name,
                              domProps: { value: item.id }
                            },
                            [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(item.unit_name) +
                                  "\n                                    "
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
                            value: _vm.errors.has("ITEM_FORM.unit"),
                            expression: "errors.has('ITEM_FORM.unit')"
                          }
                        ],
                        staticClass: "form-text text-danger"
                      },
                      [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(_vm.errors.first("ITEM_FORM.unit")) +
                            "\n                                "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.form_type == "NEW_ITEM",
                          expression: "form_type == 'NEW_ITEM'"
                        }
                      ],
                      staticClass: "form-group"
                    },
                    [
                      _c("label", { attrs: { for: "input-6" } }, [
                        _vm._v("Quantity")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.quantity,
                            expression: "item.quantity"
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
                          id: "input-6",
                          placeholder: "Enter Quantity"
                        },
                        domProps: { value: _vm.item.quantity },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.item, "quantity", $event.target.value)
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
                              value: _vm.errors.has("ITEM_FORM.quantity"),
                              expression: "errors.has('ITEM_FORM.quantity')"
                            }
                          ],
                          staticClass: "form-text text-danger"
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.errors.first("ITEM_FORM.quantity")) +
                              "\n                                "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "input-7" } }, [
                      _vm._v("Price")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.item.price,
                          expression: "item.price"
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
                        name: "price",
                        type: "text",
                        id: "input-7",
                        placeholder: "Enter Price"
                      },
                      domProps: { value: _vm.item.price },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.item, "price", $event.target.value)
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
                            value: _vm.errors.has("ITEM_FORM.price"),
                            expression: "errors.has('ITEM_FORM.price')"
                          }
                        ],
                        staticClass: "form-text text-danger"
                      },
                      [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(_vm.errors.first("ITEM_FORM.price")) +
                            "\n                                "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "basic-select" } }, [
                      _vm._v("Site")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.site,
                            expression: "item.site"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "site", id: "basic-select" },
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
                              _vm.item,
                              "site",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { staticStyle: { color: "gray" } }, [
                          _vm._v("Please Select Site")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.sites, function(item) {
                          return _c(
                            "option",
                            {
                              key: item.site_name,
                              domProps: { value: item.id }
                            },
                            [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(item.site_name) +
                                  "\n                                    "
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
                            value: _vm.errors.has("ITEM_FORM.site"),
                            expression: "errors.has('ITEM_FORM.site')"
                          }
                        ],
                        staticClass: "form-text text-danger"
                      },
                      [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(_vm.errors.first("ITEM_FORM.site")) +
                            "\n                                "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.form_type == "NEW_ITEM",
                          expression: "form_type == 'NEW_ITEM'"
                        }
                      ],
                      staticClass: "form-group"
                    },
                    [
                      _c("label", { attrs: { for: "input-7" } }, [
                        _vm._v("DR Number")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.dr_number,
                            expression: "item.dr_number"
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
                          name: "dr_number",
                          "data-vv-as": "DR number",
                          type: "text",
                          id: "input-7",
                          placeholder: "Enter DR Number"
                        },
                        domProps: { value: _vm.item.dr_number },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.item, "dr_number", $event.target.value)
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
                              value: _vm.errors.has("ITEM_FORM.dr_number"),
                              expression: "errors.has('ITEM_FORM.dr_number')"
                            }
                          ],
                          staticClass: "form-text text-danger"
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.errors.first("ITEM_FORM.dr_number")) +
                              "\n                                "
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-footer" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { disabled: _vm.isLoading, type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.handleSubmit("ITEM_FORM")
                }
              }
            },
            [
              !_vm.isLoading
                ? _c("span", [
                    _c("i", { staticClass: "fa fa-floppy-o" }),
                    _vm._v(" Save Item\n                    ")
                  ])
                : _c("span", [_vm._v("Saving item...")])
            ]
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
    return _c("div", { staticClass: "modal-header bg-primary" }, [
      _c("h5", { staticClass: "modal-title text-white" }, [
        _c("i", { staticClass: "fa fa-plus-square" }),
        _vm._v("Item Details")
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
    return _c(
      "button",
      {
        staticClass: "btn btn-inverse-primary",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [
        _c("i", { staticClass: "fa fa-times" }),
        _vm._v("\n                    Close")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3785d13a", module.exports)
  }
}

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(350)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(352)
/* template */
var __vue_template__ = __webpack_require__(353)
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
Component.options.__file = "resources/js/components/form-modal/item-quantity.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0262cde5", Component.options)
  } else {
    hotAPI.reload("data-v-0262cde5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("4399336d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0262cde5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item-quantity.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0262cde5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item-quantity.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 352:
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

exports.default = {
    computed: {
        purchase: function purchase() {
            return this.$store.getters['PURCHASES_MODULE/GET_PURCHASE'];
        },
        items: function items() {
            return this.$store.getters['ITEMS_MODULE/GET_ITEMS_LIST'];
        }
    },
    data: function data() {
        return {
            isLoading: false,
            response: []
        };
    },
    methods: {
        computeTotalAmount: function computeTotalAmount() {
            var total_amount = 0;

            total_amount = parseFloat(this.purchase.quantity) * parseFloat(this.purchase.price_per_item);
            this.purchase.total_amount = total_amount.toFixed(2);
        },
        handleSubmit: function handleSubmit(form) {
            var _this = this;

            this.$validator.validateAll(form).then(function (result) {
                if (result) {
                    var payload = {
                        item_id: _this.purchase.item,
                        purchase_quantity: _this.purchase.quantity,
                        price_per_item: _this.purchase.price_per_item,
                        total_amount: _this.purchase.total_amount,
                        dr_number: _this.purchase.dr_number
                    };

                    _this.isLoading = true;
                    _this.$store.dispatch('PURCHASES_MODULE/STORE_PURCHASE', payload).then(function (response) {
                        _this.isLoading = false;
                        _this.response = [];
                        _this.$store.dispatch('ITEMS_MODULE/FETCH_ITEMS');
                        $("#itemquantitymodal").modal('hide');
                    }).catch(function (error) {
                        var obj = error.response;
                        var keys = Object.keys(obj.data.errors);

                        _this.response = [];

                        if (keys.length > 0) {
                            keys.forEach(function (e) {
                                obj.data.errors[e].forEach(function (d) {
                                    _this.response.push(d);
                                });
                            });
                        }
                        _this.isLoading = false;
                    });
                }
            });
        }
    }
};

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "modal fade", attrs: { id: "itemquantitymodal" } },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content border-primary" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "card bg-primary shadow-primary" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("hr"),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "color-form",
                    attrs: { "data-vv-scope": "ITEM_QUANTITY_FORM" }
                  },
                  [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _vm.response.length
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "alert alert-danger alert-dismissible",
                                attrs: { role: "alert" }
                              },
                              [
                                _vm._m(1),
                                _vm._v(" "),
                                _c("div", { staticClass: "alert-message" }, [
                                  _c(
                                    "ul",
                                    _vm._l(_vm.response, function(e, i) {
                                      return _c("li", { key: i }, [
                                        _vm._v(
                                          "\n                                                    " +
                                            _vm._s(e) +
                                            "\n                                                "
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ])
                              ]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "input-1" } }, [
                        _vm._v("Item")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.purchase.item,
                              expression: "purchase.item"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "item", id: "item" },
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
                                _vm.purchase,
                                "item",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select Item")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.items, function(item) {
                            return _c(
                              "option",
                              { key: item.id, domProps: { value: item.id } },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(item.item_name) +
                                    "\n                                    "
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
                              value: _vm.errors.has("ITEM_QUANTITY_FORM.item"),
                              expression:
                                "errors.has('ITEM_QUANTITY_FORM.item')"
                            }
                          ],
                          staticClass: "form-text text-danger"
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm.errors.first("ITEM_QUANTITY_FORM.item_")
                              ) +
                              "\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "input-6" } }, [
                        _vm._v("Quantity")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.purchase.quantity,
                            expression: "purchase.quantity"
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
                          id: "input-6",
                          placeholder: "Enter Quantity"
                        },
                        domProps: { value: _vm.purchase.quantity },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.purchase,
                              "quantity",
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
                                "ITEM_QUANTITY_FORM.quantity"
                              ),
                              expression:
                                "errors.has('ITEM_QUANTITY_FORM.quantity')"
                            }
                          ],
                          staticClass: "form-text text-danger"
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm.errors.first("ITEM_QUANTITY_FORM.quantity")
                              ) +
                              "\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "input-7" } }, [
                        _vm._v("Price per Item")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.purchase.price_per_item,
                            expression: "purchase.price_per_item"
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
                          name: "price_per_item",
                          "data-vv-as": "price per item",
                          type: "text",
                          id: "input-7",
                          placeholder: "Enter Price"
                        },
                        domProps: { value: _vm.purchase.price_per_item },
                        on: {
                          blur: _vm.computeTotalAmount,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.purchase,
                              "price_per_item",
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
                                "ITEM_QUANTITY_FORM.price_per_item"
                              ),
                              expression:
                                "errors.has('ITEM_QUANTITY_FORM.price_per_item')"
                            }
                          ],
                          staticClass: "form-text text-danger"
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm.errors.first(
                                  "ITEM_QUANTITY_FORM.price_per_item"
                                )
                              ) +
                              "\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "input-7" } }, [
                        _vm._v("Total Amount")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.purchase.total_amount,
                            expression: "purchase.total_amount"
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
                          name: "total_amount",
                          "data-vv-as": "total amount",
                          type: "text",
                          id: "input-7",
                          placeholder: "Enter Price"
                        },
                        domProps: { value: _vm.purchase.total_amount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.purchase,
                              "total_amount",
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
                                "ITEM_QUANTITY_FORM.total_amount"
                              ),
                              expression:
                                "errors.has('ITEM_QUANTITY_FORM.total_amount')"
                            }
                          ],
                          staticClass: "form-text text-danger"
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm.errors.first(
                                  "ITEM_QUANTITY_FORM.total_amount"
                                )
                              ) +
                              "\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "input-7" } }, [
                        _vm._v("DR Number")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.purchase.dr_number,
                            expression: "purchase.dr_number"
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
                          name: "dr_number",
                          "data-vv-as": "DR number",
                          type: "text",
                          id: "input-7",
                          placeholder: "Enter DR Number"
                        },
                        domProps: { value: _vm.purchase.dr_number },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.purchase,
                              "dr_number",
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
                                "ITEM_QUANTITY_FORM.dr_number"
                              ),
                              expression:
                                "errors.has('ITEM_QUANTITY_FORM.dr_number')"
                            }
                          ],
                          staticClass: "form-text text-danger"
                        },
                        [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm.errors.first("ITEM_QUANTITY_FORM.dr_number")
                              ) +
                              "\n                                "
                          )
                        ]
                      )
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { disabled: _vm.isLoading, type: "button" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.handleSubmit("ITEM_QUANTITY_FORM")
                  }
                }
              },
              [
                !_vm.isLoading
                  ? _c("span", [
                      _c("i", { staticClass: "fa fa-floppy-o" }),
                      _vm._v(" Save\n                    ")
                    ])
                  : _c("span", [_vm._v("Saving...")])
              ]
            )
          ])
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
        _vm._v("Purchase Details")
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
    return _c(
      "button",
      {
        staticClass: "btn btn-inverse-primary",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [
        _c("i", { staticClass: "fa fa-times" }),
        _vm._v("\n                    Close")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0262cde5", module.exports)
  }
}

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body table-responsive" },
            [
              _c("NavButtons"),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("ItemsTable", { attrs: { items: _vm.stocks.model } }),
              _vm._v(" "),
              _c("ItemForm"),
              _vm._v(" "),
              _c("ItemQuantityForm")
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
    return _c("div", { staticClass: "card-header" }, [
      _c("i", { staticClass: "fa fa-clone" }),
      _vm._v(" My Stocks\n                ")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6947f246", module.exports)
  }
}

/***/ })

});