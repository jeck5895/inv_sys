webpackJsonp([7],{

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(299)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(301)
/* template */
var __vue_template__ = __webpack_require__(302)
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
Component.options.__file = "resources/js/pages/admin/reports.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75fab634", Component.options)
  } else {
    hotAPI.reload("data-v-75fab634", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("68ae4f4e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75fab634\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./reports.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-75fab634\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./reports.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 301:
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

exports.default = {
    data: function data() {
        return {
            months: [{
                name: 'January',
                value: 1
            }, {
                name: 'February',
                value: 2
            }, {
                name: 'March',
                value: 3
            }, {
                name: 'April',
                value: 4
            }, {
                name: 'May',
                value: 5
            }, {
                name: 'June',
                value: 6
            }, {
                name: 'July',
                value: 7
            }, {
                name: 'August',
                value: 8
            }, {
                name: 'September',
                value: 9
            }, {
                name: 'October',
                value: 10
            }, {
                name: 'November',
                value: 11
            }, {
                name: 'December',
                value: 12
            }]
        };
    },
    computed: {
        years: function years() {
            var years = [];
            for (var index = moment().format('YYYY'); index >= 2000; index++) {
                years.push(index);
            }
            return years;
        }
    }
};

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row pt-2 pb-2" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card card-default" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("form", [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "select",
                      {
                        staticClass: "form-control form-control-sm",
                        attrs: { name: "", id: "" }
                      },
                      _vm._l(_vm.months, function(month) {
                        return _c(
                          "option",
                          {
                            key: month.value,
                            domProps: { value: month.value }
                          },
                          [_vm._v(_vm._s(month.name))]
                        )
                      })
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "select",
                      {
                        staticClass: "form-control form-control-sm",
                        attrs: { name: "", id: "" }
                      },
                      _vm._l(_vm.years, function(year) {
                        return _c(
                          "option",
                          { key: year, domProps: { value: year } },
                          [_vm._v(_vm._s(year))]
                        )
                      })
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ])
              ])
            ])
          ])
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
      _c("h3", [_vm._v("Generate Sales Report")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-success btn-block", attrs: { type: "submit" } },
        [
          _vm._v(
            "\n                                        Generate\n                                    "
          )
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75fab634", module.exports)
  }
}

/***/ })

});