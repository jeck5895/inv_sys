webpackJsonp([4],{

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(451)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(453)
/* template */
var __vue_template__ = __webpack_require__(454)
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
Component.options.__file = "resources/js/pages/admin/colors.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3183bce", Component.options)
  } else {
    hotAPI.reload("data-v-e3183bce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(341)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(343)
/* template */
var __vue_template__ = __webpack_require__(344)
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
Component.options.__file = "resources/js/components/filters/search.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-162d1972", Component.options)
  } else {
    hotAPI.reload("data-v-162d1972", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(342);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("66177662", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-162d1972\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./search.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-162d1972\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./search.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 343:
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

exports.default = {
    props: {
        keyword: {
            required: true,
            type: String
        }
    },
    methods: {
        handleSearch: function handleSearch() {
            this.$emit("on-submit", this.keyword);
        }
    }
};

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "form-inline",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.handleSearch($event)
        }
      }
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "form-control form-control-sm mr-sm-2",
          attrs: {
            type: "text",
            name: "keyword",
            id: "inlineFormInputName2",
            placeholder: "Search item"
          },
          domProps: { value: _vm.keyword },
          on: {
            input: function($event) {
              return _vm.$emit("on-change", $event)
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-sm btn-success", attrs: { type: "submit" } },
      [_c("i", { staticClass: "fa fa-search" }), _vm._v("SEARCH\n    ")]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-162d1972", module.exports)
  }
}

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(346)
/* template */
var __vue_template__ = __webpack_require__(347)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/js/components/validation-errors.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b1b8d04", Component.options)
  } else {
    hotAPI.reload("data-v-0b1b8d04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 346:
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
    props: ["errorObject"],
    computed: {
        validationErrors: function validationErrors() {
            var errors_obj = Object.values(this.errorObject);
            errors_obj = errors_obj.flat();
            return errors_obj;
        }
    }
};

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.validationErrors
    ? _c("div", [
        _c(
          "div",
          { staticClass: "alert alert-danger", attrs: { role: "alert" } },
          [
            _c(
              "ul",
              { staticClass: "py-2" },
              _vm._l(_vm.validationErrors, function(value, key) {
                return _c("li", { key: key }, [
                  _vm._v(
                    "\n                " + _vm._s(value) + "\n            "
                  )
                ])
              }),
              0
            )
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b1b8d04", module.exports)
  }
}

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(349)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(351)
/* template */
var __vue_template__ = __webpack_require__(352)
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
Component.options.__file = "resources/js/components/admin/tables/suppliers-table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09c05889", Component.options)
  } else {
    hotAPI.reload("data-v-09c05889", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ba6b9004", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09c05889\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./suppliers-table.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09c05889\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./suppliers-table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 351:
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

exports.default = {
    props: {
        items: {
            required: true
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
};

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    { staticClass: "table table-bordered", attrs: { id: "example" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        [
          _vm.loading ? _c("tr", [_vm._m(1)]) : _vm._e(),
          _vm._v(" "),
          !_vm.loading && _vm.items.data && _vm.items.data.length == 0
            ? _c("tr", [_vm._m(2)])
            : _vm._e(),
          _vm._v(" "),
          !_vm.loading && _vm.items.data && _vm.items.data.length != 0
            ? _vm._l(_vm.items.data, function(item, i) {
                return _c("tr", { key: i }, [
                  _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                    _vm._v(_vm._s(item.id))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-secondary btn-sm waves-effect waves-light m-1",
                        attrs: {
                          type: "button",
                          "data-toggle": "modal",
                          "data-target": "#addmodal"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.$emit("on-edit", item)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-edit fa-lg" }),
                        _vm._v(" EDIT\n                    ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-danger btn-sm waves-effect waves-light",
                        attrs: { type: "button", id: "confirm-btn-alert4" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.$emit("on-delete", item)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-trash fa-lg" }),
                        _vm._v(" DELETE\n                    ")
                      ]
                    )
                  ])
                ])
              })
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-primary" }, [
      _c("tr", [
        _c("th", { attrs: { width: "10%" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "70%" } }, [_vm._v("NAME")]),
        _vm._v(" "),
        _c("th", { staticStyle: { witdh: "10%" }, attrs: { width: "20%" } }, [
          _vm._v("OPTIONS")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "8" } }, [
      _vm._v("\n                Loading\n                "),
      _c("img", {
        attrs: { src: "/images/ajax-loader.gif", alt: "Loading...." }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-09c05889", module.exports)
  }
}

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(354)
}
var normalizeComponent = __webpack_require__(1)
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
Component.options.__file = "resources/js/components/forms/settings-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74d15153", Component.options)
  } else {
    hotAPI.reload("data-v-74d15153", Component.options)
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
var update = __webpack_require__(3)("dd93bc82", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74d15153\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./settings-form.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74d15153\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./settings-form.vue");
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

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 356:
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

exports.default = {
  props: {
    item: {
      required: true,
      type: Object
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleSubmit: function handleSubmit(form) {
      var _this = this;

      // const payload = {
      //     form: this.$validator,
      //     errors: this.errors,
      //     item: this.item
      // };
      this.$validator.validateAll(form).then(function (valid) {
        if (valid) {
          _this.$emit("on-submit", _this.item);
        }
      });
    }
  },
  watch: {
    item: function item() {
      this.$validator.reset();
      this.errors.clear();
    }
  }
};

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      attrs: { "data-vv-scope": "settings-form" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.handleSubmit("settings-form")
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
              name: "validate",
              rawName: "v-validate",
              value: "required",
              expression: "'required'"
            },
            {
              name: "model",
              rawName: "v-model",
              value: _vm.item.name,
              expression: "item.name"
            }
          ],
          staticClass: "form-control",
          attrs: { name: "name", type: "text" },
          domProps: { value: _vm.item.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.item, "name", $event.target.value)
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
                value: _vm.errors.has("settings-form.name"),
                expression: "errors.has('settings-form.name')"
              }
            ],
            staticClass: "form-text text-danger"
          },
          [
            _vm._v(
              "\n      " +
                _vm._s(_vm.errors.first("settings-form.name")) +
                "\n    "
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-success",
            attrs: { disabled: _vm.loading }
          },
          [
            _vm.loading ? _c("span", [_vm._v("Saving...")]) : _vm._e(),
            _vm._v(" "),
            !_vm.loading ? _c("span", [_vm._v("Save")]) : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-74d15153", module.exports)
  }
}

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(452);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7b93d245", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3183bce\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./colors.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3183bce\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./colors.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 453:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var _suppliersTable = __webpack_require__(348);

var _suppliersTable2 = _interopRequireDefault(_suppliersTable);

var _Pagination = __webpack_require__(15);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _search = __webpack_require__(340);

var _search2 = _interopRequireDefault(_search);

var _modal = __webpack_require__(155);

var _modal2 = _interopRequireDefault(_modal);

var _settingsForm = __webpack_require__(353);

var _settingsForm2 = _interopRequireDefault(_settingsForm);

var _validationErrors = __webpack_require__(345);

var _validationErrors2 = _interopRequireDefault(_validationErrors);

var _vuex = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  components: {
    Card: _card2.default,
    SuppliersTable: _suppliersTable2.default,
    Pagination: _Pagination2.default,
    SearchForm: _search2.default,
    Modal: _modal2.default,
    Form: _settingsForm2.default,
    ValidationErrorComponent: _validationErrors2.default
  },
  data: function data() {
    return {
      form_type: "",
      submitting: false,
      response_errors: null
    };
  },
  computed: _extends({}, (0, _vuex.mapGetters)({
    colors: "COLORS/GET_COLORS",
    is_loading: "FILTER_MODULE/GET_LOADING",
    keyword: "FILTER_MODULE/GET_KEYWORD"
  }), {
    color: function color() {
      var item = this.$store.getters["COLORS/GET_COLOR"];

      return {
        id: item.id,
        name: item.name
      };
    },

    page_size: {
      get: function get() {
        return this.$store.getters["FILTER_MODULE/GET_PAGE_SIZE"];
      },
      set: function set(val) {
        this.$store.commit("FILTER_MODULE/SET_PAGE_SIZE", val);
      }
    },
    current_page: {
      get: function get() {
        return this.$store.getters["FILTER_MODULE/GET_CURRENT_PAGE"];
      },
      set: function set(val) {
        this.$store.commit("FILTER_MODULE/SET_PAGE_SIZE", val);
      }
    },
    order_by: {
      get: function get() {
        return this.$store.getters["FILTER_MODULE/GET_ORDER_BY"];
      },
      set: function set(val) {
        this.$store.commit("FILTER_MODULE/SET_ORDER_BY", val);
      }
    },
    sort_by: {
      get: function get() {
        return this.$store.getters["FILTER_MODULE/GET_SORT_BY"];
      },
      set: function set(val) {
        this.$store.commit("FILTER_MODULE/SET_SORT_BY", val);
      }
    }
  }),
  methods: _extends({}, (0, _vuex.mapActions)({
    fetchItems: "COLORS/fetchColors",
    store: "COLORS/store",
    update: "COLORS/update",
    delete: "COLORS/delete"
  }), (0, _vuex.mapMutations)({
    setKeyword: "FILTER_MODULE/SET_KEYWORD",
    clearItem: "COLORS/CLEAR_COLOR",
    setItem: "COLORS/SET_COLOR"
  }), {
    onChange: function onChange(e) {
      this.setKeyword(e.target.value);
    },
    handleSearch: function handleSearch(keyword) {
      var url = "/api/colors?q=" + keyword + "&page=" + this.current_page + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by;
      this.fetchItems(url);
    },
    toPage: function toPage(page) {
      var url = "/api/colors?q=" + this.keyword + "&page=" + page + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by;
      this.fetchItems(url);
    },
    firstPage: function firstPage(first_page_url) {
      var url = first_page_url + "?q=" + this.keyword + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by;
      this.fetchItems(url);
    },
    prevPage: function prevPage(prev_page_url) {
      var url = prev_page_url + "?q=" + this.keyword + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by;
      this.fetchItems(url);
    },
    nextPage: function nextPage(next_page_url) {
      var url = next_page_url + "?q=" + this.keyword + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by;
      this.fetchItems(url);
    },
    lastPage: function lastPage(last_page_url) {
      var url = last_page_url + "?q=" + this.keyword + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by;
      this.fetchItems(url);
    },
    setBreadcrumbs: function setBreadcrumbs() {
      var breadcrumbs = [{
        text: "Administrator",
        link: "/administrator"
      }, {
        text: "Colors",
        link: "/administrator/colors"
      }];
      this.$store.commit("setBreadcrumbs", breadcrumbs);
    },
    onCreate: function onCreate() {
      this.form_type = "CREATE";
      this.response_errors = null;
      this.clearItem();
      setTimeout(function () {
        $("#generic-modal").modal("show");
      }, 300);
    },
    onEdit: function onEdit(item) {
      this.form_type = "EDIT";
      this.response_errors = null;
      this.setItem(item);
      setTimeout(function () {
        $("#generic-modal").modal("show");
      }, 300);
    },
    onDelete: function onDelete(item) {
      var _this = this;

      var options = { html: true, loader: true };
      //https://github.com/Godofbrowser/vuejs-dialog
      this.$dialog.confirm("<h5>Delete " + item.name + " ?</h5>", options).then(function (dialog) {
        _this.delete(item.id).then(function () {
          dialog.close();
          _this.fetchItems("/api/colors?q=" + _this.keyword + "&page=" + _this.current_page + "&per_page=" + _this.page_size + "&order_by=" + _this.order_by + "&sort_by=" + _this.sort_by);
        });
      }).catch(function () {});
    },
    onSubmit: function onSubmit(item) {
      var _this2 = this;

      var payload = {
        id: item.id,
        name: item.name
      };

      this.submitting = true;

      switch (this.form_type) {
        case "CREATE":
          this.store(payload).then(function (response) {
            _this2.submitting = false;
            _this2.response_errors = null;
            toastr.success("Saved");

            setTimeout(function () {
              $("#generic-modal").modal("hide");
              // this.resetForm(form, errors);
            }, 300);
            _this2.fetchItems("/api/colors?q=" + _this2.keyword + "&page=" + _this2.current_page + "&per_page=" + _this2.page_size + "&order_by=" + _this2.order_by + "&sort_by=" + _this2.sort_by);
          }).catch(function (_ref) {
            var response = _ref.response;

            _this2.submitting = false;

            if (response.status === 422) {
              _this2.response_errors = response.data.errors;
              // toastr.error(response.data.message);
            }
          });
          break;
        case "EDIT":
          this.update(payload).then(function (response) {
            _this2.submitting = false;
            _this2.response_errors = null;
            toastr.success("Changes saved.");

            _this2.fetchItems("/api/colors?q=" + _this2.keyword + "&page=" + _this2.current_page + "&per_page=" + _this2.page_size + "&order_by=" + _this2.order_by + "&sort_by=" + _this2.sort_by);
            setTimeout(function () {
              $("#generic-modal").modal("hide");
              // this.resetForm(form, errors);
            }, 300);
          }).catch(function (_ref2) {
            var response = _ref2.response;

            _this2.submitting = false;
            if (response.status === 422) {
              _this2.response_errors = response.data.errors;
              // toastr.error(response.data.message);
            }
          });
          break;
        default:
          break;
      }
    },
    resetForm: function resetForm(form, errors) {
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
              this.setBreadcrumbs();
              this.setKeyword("");

              _context.next = 4;
              return this.fetchItems("/api/colors?q=" + this.keyword + "&page=" + this.current_page + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by);

            case 4:
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

/***/ 454:
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
                  _c("h3", { staticClass: "card-title mb-0 float-left" }, [
                    _vm._v("\n          MANAGE COLORS\n        ")
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "card-body",
              fn: function() {
                return [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-12 mb-2 " }, [
                      _c("div", { staticClass: "clearfix" }, [
                        _c(
                          "div",
                          { staticClass: "float-lg-left d-flex py-2" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-primary",
                                on: { click: _vm.onCreate }
                              },
                              [
                                _vm._v(
                                  "\n                  ADD COLOR\n                "
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "float-lg-right d-flex py-2" },
                          [
                            _c("search-form", {
                              attrs: { keyword: _vm.keyword },
                              on: {
                                "on-change": _vm.onChange,
                                "on-submit": _vm.handleSearch
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-12 mb-3 table-responsive" },
                      [
                        _c("suppliers-table", {
                          attrs: {
                            items: _vm.colors,
                            "is-loading": _vm.is_loading
                          },
                          on: {
                            "on-edit": _vm.onEdit,
                            "on-delete": _vm.onDelete
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [
                        _c("Pagination", {
                          attrs: { data: _vm.colors },
                          on: {
                            "to-page": _vm.toPage,
                            "first-page": _vm.firstPage,
                            "prev-page": _vm.prevPage,
                            "next-page": _vm.nextPage,
                            "last-page": _vm.lastPage
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              },
              proxy: true
            }
          ])
        }),
        _vm._v(" "),
        _c("modal", {
          scopedSlots: _vm._u([
            {
              key: "modal-title",
              fn: function() {
                return [
                  _c("h5", { staticClass: "text-white" }, [
                    _vm.form_type === "CREATE"
                      ? _c("span", [
                          _vm._v("\n            New Color\n          ")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.form_type === "EDIT" && _vm.color.name
                      ? _c("span", [
                          _vm._v(
                            "\n            Edit Color " +
                              _vm._s(_vm.color.name) +
                              "\n          "
                          )
                        ])
                      : _vm._e()
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "modal-body",
              fn: function() {
                return [
                  _vm.response_errors !== null
                    ? _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("validation-error-component", {
                            attrs: { "error-object": _vm.response_errors }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("Form", {
                    attrs: { item: _vm.color, loading: _vm.submitting },
                    on: { "on-submit": _vm.onSubmit }
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
    require("vue-hot-reload-api")      .rerender("data-v-e3183bce", module.exports)
  }
}

/***/ })

});