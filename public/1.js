webpackJsonp([1],{

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(346)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(348)
/* template */
var __vue_template__ = __webpack_require__(364)
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

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(256)
}
var normalizeComponent = __webpack_require__(6)
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

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
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

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

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

/***/ 259:
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

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(261)
}
var normalizeComponent = __webpack_require__(6)
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

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("7ad9c141", content, false, {});
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

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 263:
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

/***/ 264:
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
              })
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

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(347);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("412d8850", content, false, {});
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

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _customer = __webpack_require__(349);

var _customer2 = _interopRequireDefault(_customer);

var _index = __webpack_require__(359);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        // next(vm => {
        //    vm.$store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS');
        // })
        _index3.store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS').then(function () {
            next();
        });
    },

    components: {
        CustomerFormModal: _customer2.default,
        CustomersTable: _index2.default
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

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(350)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(352)
/* template */
var __vue_template__ = __webpack_require__(358)
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

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("7b03dc12", content, false, {});
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

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(353);

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

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(354)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(356)
/* template */
var __vue_template__ = __webpack_require__(357)
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

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(355);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("2f4d3bf0", content, false, {});
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

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _error = __webpack_require__(260);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ }),

/***/ 357:
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
          attrs: { "data-vv-scope": "customerForm" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.handleSubmit("customerForm")
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
                        "\n                            " +
                          _vm._s(item.label) +
                          "\n                        "
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-title text-uppercase text-white" }, [
      _c("i", { staticClass: "fa fa-address-book-o" }),
      _vm._v(" New Customer\n        ")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2fba4206", module.exports)
  }
}

/***/ }),

/***/ 358:
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

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(360)
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(362)
/* template */
var __vue_template__ = __webpack_require__(363)
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

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(361);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("453948ae", content, false, {});
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

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(255);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    computed: {
        isLoading: function isLoading() {
            return this.$store.getters['CUSTOMERS_MODULE/GET_LOADING_STATE'];
        },
        customers: function customers() {
            return this.$store.getters['CUSTOMERS_MODULE/GET_CUSTOMERS'];
        },

        keyword: {
            get: function get() {
                return this.$store.getters['FILTER_MODULE/GET_KEYWORD'];
            },
            set: function set(newVal, oldVal) {
                this.$store.commit('FILTER_MODULE/SET_KEYWORD', newVal);
            }
        },
        date_from: function date_from() {
            return this.$store.getters['FILTER_MODULE/GET_DATE_FROM'];
        },
        date_to: function date_to() {
            return this.$store.getters['FILTER_MODULE/GET_DATE_TO'];
        }
    },
    methods: {
        edit: function edit(customer) {
            this.$store.commit('FORM_MODULE/SET_FORM_TYPE', 'EDIT_CUSTOMER');
            this.$store.commit('CUSTOMERS_MODULE/SET_CUSTOMER', customer);
            $('#customermodal').modal('show');
        },
        destroy: function destroy(customer) {
            var _this = this;

            console.log(customer);
            var options = { html: true, loader: true };
            //https://github.com/Godofbrowser/vuejs-dialog
            this.$dialog.confirm('Delete <strong>' + customer.fullname + '</strong> record ?', options).then(function (dialog) {
                _this.$store.dispatch('CUSTOMERS_MODULE/DELETE_CUSTOMER', customer).then(function () {
                    dialog.close();
                    _this.$store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS', 'api/customers?keyword=' + _this.keyword + '&date_from=' + _this.date_from + '&date_to=' + _this.date_to);
                });
            }).catch(function () {});
        },
        handleSearch: function handleSearch() {
            var url = '/api/customers?keyword=' + this.keyword + '&date_from=' + this.date_from + '&date_to=' + this.date_to;
            this.$store.dispatch('CUSTOMERS_MODULE/FETCH_CUSTOMERS', url);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 363:
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
              attrs: {
                "data-toggle": "modal",
                "data-target": "#customermodal"
              },
              on: {
                click: function($event) {
                  _vm.$store.commit("FORM_MODULE/SET_FORM_TYPE", "NEW_CUSTOMER")
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-user-plus" }),
              _vm._v("\n                    ADD CUSTOMER\n                ")
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
            _vm.customers.data.length < 1 && !_vm.isLoading
              ? _c("tr", [_vm._m(3)])
              : !_vm.isLoading
                ? _vm._l(_vm.customers.data, function(customer, i) {
                    return _c("tr", { key: i }, [
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(customer.customer_id) +
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
                              _vm._s(customer.customer_type.toUpperCase()) +
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
                              _vm._s(customer.fullname) +
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
                                customer.customer_type == "student"
                                  ? customer.course
                                  : "N/A"
                              ) +
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
                                customer.customer_type == "student"
                                  ? customer.year
                                  : "N/A"
                              ) +
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
                              _vm._s(customer.department) +
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
                                _vm._f("humanReadableFormat")(
                                  customer.created_at
                                )
                              ) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
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
                                      _vm.edit(customer)
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
                                      _vm.destroy(customer)
                                    }
                                  }
                                },
                                [_c("span", { staticClass: "fa fa-trash" })]
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  })
                : _vm._e()
          ],
          2
        )
      ])
    ]),
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-success mb-2", attrs: { type: "submit" } },
      [_c("i", { staticClass: "fa fa-search" }), _vm._v("SEARCH")]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-primary shadow-primary" }, [
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
      _vm._v("\n                       Loading "),
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

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "card-body table-responsive" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12 mx-auto" },
                  [_c("CustomersTable")],
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
      _c("i", { staticClass: "fa fa-users" }),
      _vm._v(" Customers")
    ])
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