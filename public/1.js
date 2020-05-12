webpackJsonp([1],{

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(362)
}
var normalizeComponent = __webpack_require__(1)
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
Component.options.__file = "resources/js/pages/admin/sales/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d6ab92c", Component.options)
  } else {
    hotAPI.reload("data-v-4d6ab92c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(326)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(328)
/* template */
var __vue_template__ = __webpack_require__(329)
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

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("66177662", content, false, {});
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

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 328:
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

/***/ 329:
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

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(363);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("49c14158", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d6ab92c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d6ab92c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _salesTable = __webpack_require__(365);

var _salesTable2 = _interopRequireDefault(_salesTable);

var _search = __webpack_require__(325);

var _search2 = _interopRequireDefault(_search);

var _dateFilter = __webpack_require__(370);

var _dateFilter2 = _interopRequireDefault(_dateFilter);

var _Pagination = __webpack_require__(154);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _modal = __webpack_require__(155);

var _modal2 = _interopRequireDefault(_modal);

var _report = __webpack_require__(375);

var _report2 = _interopRequireDefault(_report);

var _vuex = __webpack_require__(8);

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
//
//
//

var Card = function Card() {
  return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 153));
};

exports.default = {
  components: {
    Card: Card,
    SalesTable: _salesTable2.default,
    SearchForm: _search2.default,
    DateFilter: _dateFilter2.default,
    Pagination: _Pagination2.default,
    ReportForm: _report2.default,
    Modal: _modal2.default
  },
  computed: _extends({}, (0, _vuex.mapGetters)({
    sales: "SALES/GET_SALES",
    is_loading: "SALES/GET_LOADING_STATE",
    keyword: "FILTER_MODULE/GET_KEYWORD"
  }), {
    date_from: {
      get: function get() {
        return this.$store.getters["FILTER_MODULE/GET_DATE_FROM"];
      },
      set: function set(newVal) {
        this.$store.commit("FILTER_MODULE/SET_DATE_FROM", newVal);
      }
    },
    date_to: {
      get: function get() {
        return this.$store.getters["FILTER_MODULE/GET_DATE_TO"];
      },
      set: function set(newVal) {
        this.$store.commit("FILTER_MODULE/SET_DATE_TO", newVal);
      }
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
  data: function data() {
    return {
      data: [],
      is_submitting: false
    };
  },
  methods: _extends({}, (0, _vuex.mapActions)("SALES", {
    fetchSales: "FETCH_SALES",
    find: "FIND",
    delete: "DELETE"
  }), (0, _vuex.mapMutations)({
    setKeyword: "FILTER_MODULE/SET_KEYWORD",
    setDateFrom: "FILTER_MODULE/SET_DATE_FROM",
    setDateTo: "FILTER_MODULE/SET_DATE_TO"
  }), {
    handleEdit: function handleEdit(sales) {
      if (sales) {
        this.$router.push({
          name: "edit-sales",
          params: { receipt: sales.receipt_no }
        }).catch(function (err) {
          console.log(err);
        });
      }
    },
    handleDelete: function handleDelete(sales) {
      var _this = this;

      var options = { html: true, loader: true };
      this.$dialog.confirm("<h5>Delete " + sales.receipt_no + " ?</h5>", options).then(function (dialog) {
        _this.delete(sales.id).then(function () {
          dialog.close();
          _this.fetchSales("/api/sales?q=" + _this.keyword + "&page=" + _this.current_page + "&per_page=" + _this.page_size + "&order_by=" + _this.order_by + "&sort_by=" + _this.sort_by + "&date_from=" + _this.date_from + "&date_to=" + _this.date_to);
        });
      }).catch(function () {});
    },
    onChange: function onChange(e) {
      var name = e.target.name;
      var value = e.target.value;

      switch (name) {
        case "keyword":
          this.setKeyword(value);
          break;
        case "date_from":
          this.setDateFrom(value);
          break;
        case "date_to":
          this.setDateTo(value);
          break;
        default:
          break;
      }

      // this.$store.commit("FILTER_MODULE/SET_KEYWORD", value);
    },
    handleSearch: function handleSearch(keyword) {
      var url = "/api/sales?q=" + keyword + "&page=" + this.current_page + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by + "&date_from=" + this.date_from + "&date_to=" + this.date_to;
      this.fetchSales(url);
    },
    handleFilter: function handleFilter(evt) {
      var date_from = evt.date_from,
          date_to = evt.date_to;

      var url = "/api/sales?q=" + this.keyword + "&page=" + this.current_page + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by + "&date_from=" + date_from + "&date_to=" + date_to;

      this.fetchSales(url);
    },
    onReportSubmit: function onReportSubmit(evt) {
      var _this2 = this;

      var token = Cookies.get("_a.token");
      var type = evt.type;

      var baseURL = window.location.protocol + "//" + window.location.host;

      var anchor_tag = document.createElement("a");
      anchor_tag.style = "display:none";

      switch (type) {
        case "daily":
          var date_from = evt.date_from,
              date_to = evt.date_to;

          this.is_submitting = true;
          axios.get("/api/sales/report/daily?date_from=" + date_from + "&date_to=" + date_to, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + token
            }
          }).then(function (_ref) {
            var data = _ref.data;

            _this2.is_submitting = false;
            // ref: sofi-locatorslist
            anchor_tag.href = data.file;
            anchor_tag.target = "_blank";
            anchor_tag.download = data.filename;
            anchor_tag.click();
          }).catch(function (_ref2) {
            var response = _ref2.response;

            _this2.is_submitting = false;
            toastr.error("Server Response Error", "Oops something went wrong");
            console.log(response);
          });

          // window.open(
          //     `${baseURL}/api/sales/report/daily?date_from=${date_from}&date_to=${date_to}`,
          //     "Daily Sales Report",
          //     "width=700,heigth=300"
          // );
          break;
        case "monthly":
          var month = evt.month,
              year = evt.year;


          this.is_submitting = true;
          axios.get("/api/sales/report/monthly?month=" + month + "&year=" + year, {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + token
            }
          }).then(function (_ref3) {
            var data = _ref3.data;

            _this2.is_submitting = false;
            // ref: sofi-locatorslist
            anchor_tag.href = data.file;
            anchor_tag.target = "_blank";
            anchor_tag.download = data.filename;
            anchor_tag.click();
          }).catch(function (_ref4) {
            var response = _ref4.response;

            _this2.is_submitting = false;
            toastr.error("Server Response Error", "Oops something went wrong");
            console.log(response);
          });

          break;
        default:
          break;
      }
    },
    toPage: function toPage(page) {
      var url = "/api/sales?q=" + this.keyword + "&page=" + page + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by + "&date_from=" + this.date_from + "&date_to=" + this.date_to;
      this.fetchSales(url);
    },
    firstPage: function firstPage(first_page_url) {
      var url = first_page_url + "&q=" + this.keyword + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by + "&date_from=" + this.date_from + "&date_to=" + this.date_to;
      this.fetchSales(url);
    },
    prevPage: function prevPage(prev_page_url) {
      var url = prev_page_url + "&q=" + this.keyword + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by + "&date_from=" + this.date_from + "&date_to=" + this.date_to;
      this.fetchSales(url);
    },
    nextPage: function nextPage(next_page_url) {
      var url = next_page_url + "&q=" + this.keyword + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by + "&date_from=" + this.date_from + "&date_to=" + this.date_to;
      this.fetchSales(url);
    },
    lastPage: function lastPage(last_page_url) {
      var url = last_page_url + "&q=" + this.keyword + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by + "&date_from=" + this.date_from + "&date_to=" + this.date_to;
      this.fetchSales(url);
    },
    handleModal: function handleModal() {
      $("#generic-modal").modal("show");
    },
    setBreadcrumbs: function setBreadcrumbs() {
      var breadcrumbs = [{
        text: "Administrator",
        link: "/administrator"
      }, {
        text: "Sales",
        link: "/administrator/sales"
      }];
      this.$store.commit("setBreadcrumbs", breadcrumbs);
    }
  }),
  mounted: function mounted() {
    this.setBreadcrumbs();
  },
  created: function created() {
    this.fetchSales("/api/sales?q=" + this.keyword + "&page=" + this.current_page + "&per_page=" + this.page_size + "&order_by=" + this.order_by + "&sort_by=" + this.sort_by + "&date_from=" + this.date_from + "&date_to=" + this.date_to);
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
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(368)
/* template */
var __vue_template__ = __webpack_require__(369)
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
Component.options.__file = "resources/js/components/admin/tables/sales-table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-196853ae", Component.options)
  } else {
    hotAPI.reload("data-v-196853ae", Component.options)
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
var update = __webpack_require__(5)("08dacc1c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-196853ae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sales-table.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-196853ae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sales-table.vue");
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
exports.push([module.i, "\n.table td {\n  cursor: pointer;\n  text-align: center;\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 368:
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
  props: {
    items: {
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
};

/***/ }),

/***/ 369:
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
          _vm.isLoading ? _c("tr", [_vm._m(1)]) : _vm._e(),
          _vm._v(" "),
          !_vm.isLoading && _vm.items.data && _vm.items.data.length == 0
            ? _c("tr", [_vm._m(2)])
            : _vm._e(),
          _vm._v(" "),
          !_vm.isLoading && _vm.items.data && _vm.items.data.length != 0
            ? _vm._l(_vm.items.data, function(item, i) {
                return _c("tr", { key: i }, [
                  _c("td", [
                    _vm._v(_vm._s(_vm._f("humanReadable")(item.checkout_date)))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.receipt_no))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.payment_mode))]),
                  _vm._v(" "),
                  _c("td", [
                    item.payment_terms === null
                      ? _c("span", [_vm._v("N/A")])
                      : _c("span", [
                          _vm._v(_vm._s(item.payment_terms) + " months")
                        ])
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.total_item_cost.formatted))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(item.total_freebies_cost.formatted))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.revenue.formatted))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(item.net_income.formatted))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-2" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-default btn-sm waves-effect waves-light m-1",
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
                      [_c("i", { staticClass: "fa fa-edit fa-lg" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-sm btn-danger waves-effect waves-light m-1",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.$emit("on-delete", item)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-trash fa-lg" })]
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
        _c("th", [_vm._v("DATE")]),
        _vm._v(" "),
        _c("th", [_vm._v("RECEIPT")]),
        _vm._v(" "),
        _c("th", [_vm._v("PAYMENT MODE")]),
        _vm._v(" "),
        _c("th", [_vm._v("PAYMENT TERM")]),
        _vm._v(" "),
        _c("th", [_vm._v("TOTAL ITEM COST")]),
        _vm._v(" "),
        _c("th", [_vm._v("TOTAL FREEBIES COST")]),
        _vm._v(" "),
        _c("th", [_vm._v("GROSS INCOME")]),
        _vm._v(" "),
        _c("th", [_vm._v("NET INCOME")]),
        _vm._v(" "),
        _c("th", [_vm._v("OPTION")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center", attrs: { colspan: "8" } }, [
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
    require("vue-hot-reload-api")      .rerender("data-v-196853ae", module.exports)
  }
}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(371)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(373)
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

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(372);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("990b444e", content, false, {});
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

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 373:
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

exports.default = {
    props: {
        dateFrom: {
            required: true
        },
        dateTo: {
            required: true
        }
    },
    methods: {
        handleFilter: function handleFilter() {
            var payload = {
                date_from: this.dateFrom,
                date_to: this.dateTo
            };
            this.$emit("on-submit", payload);
        }
    }
};

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-inline" }, [
    _c("div", { staticClass: "form-group" }, [
      _c(
        "label",
        { staticClass: "mr-1", attrs: { for: "exampleDropdownFormEmail1" } },
        [_vm._v("Date From")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control form-control-sm mr-sm-2",
        attrs: {
          name: "date_from",
          type: "date",
          id: "exampleDropdownFormEmail1"
        },
        domProps: { value: _vm.dateFrom },
        on: {
          input: function($event) {
            return _vm.$emit("on-change", $event)
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
        staticClass: "form-control form-control-sm mr-sm-2",
        attrs: {
          name: "date_to",
          type: "date",
          id: "exampleDropdownFormPassword1"
        },
        domProps: { value: _vm.dateTo },
        on: {
          input: function($event) {
            return _vm.$emit("on-change", $event)
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

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(376)
}
var normalizeComponent = __webpack_require__(1)
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
Component.options.__file = "resources/js/components/forms/report.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58822642", Component.options)
  } else {
    hotAPI.reload("data-v-58822642", Component.options)
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
var update = __webpack_require__(5)("314cf694", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58822642\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./report.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58822642\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./report.vue");
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 378:
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

exports.default = {
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            type: "monthly",
            year: moment().format("YYYY"),
            month: moment().format("MM"),
            date_from: moment().format("YYYY-MM-DD"),
            date_to: moment().format("YYYY-MM-DD"),
            months: [{
                name: "January",
                value: "01"
            }, {
                name: "February",
                value: "02"
            }, {
                name: "March",
                value: "03"
            }, {
                name: "April",
                value: "04"
            }, {
                name: "May",
                value: "05"
            }, {
                name: "June",
                value: "06"
            }, {
                name: "July",
                value: "07"
            }, {
                name: "August",
                value: "08"
            }, {
                name: "September",
                value: "09"
            }, {
                name: "October",
                value: 10
            }, {
                name: "November",
                value: 11
            }, {
                name: "December",
                value: 12
            }]
        };
    },
    computed: {
        years: function years() {
            var years = [];
            for (var index = moment().format("YYYY"); index >= 2000; index--) {
                years.push(index);
            }
            return years;
        }
    },
    methods: {
        handleSubmit: function handleSubmit() {
            var payload = {
                type: this.type
            };

            if (this.type === "daily") {
                payload = _extends({}, payload, {
                    date_from: this.date_from,
                    date_to: this.date_to
                });
            } else {
                payload = _extends({}, payload, { month: this.month, year: this.year });
            }
            this.$emit("on-submit", payload);
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
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.handleSubmit($event)
        }
      }
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Report Type")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.type,
                expression: "type"
              }
            ],
            staticClass: "form-control",
            attrs: { name: "report_type", id: "" },
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
                _vm.type = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          [
            _c("option", { attrs: { value: "daily" } }, [_vm._v("Daily")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "monthly" } }, [_vm._v("Monthly")])
          ]
        )
      ]),
      _vm._v(" "),
      _vm.type === "daily"
        ? [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("From Day")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.date_from,
                    expression: "date_from"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "date", name: "date_from", id: "" },
                domProps: { value: _vm.date_from },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.date_from = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("To Day")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.date_to,
                    expression: "date_to"
                  },
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "date", name: "date_to", id: "" },
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
            ])
          ]
        : [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Month")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.month,
                      expression: "month"
                    }
                  ],
                  staticClass: "form-control ",
                  attrs: { name: "month", id: "" },
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
                      _vm.month = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.months, function(month) {
                  return _c(
                    "option",
                    { key: month.value, domProps: { value: month.value } },
                    [_vm._v(_vm._s(month.name))]
                  )
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Year")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.year,
                      expression: "year"
                    }
                  ],
                  staticClass: "form-control ",
                  attrs: { name: "year", id: "" },
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
                      _vm.year = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.years, function(year) {
                  return _c(
                    "option",
                    { key: year, domProps: { value: year } },
                    [_vm._v(_vm._s(year))]
                  )
                }),
                0
              )
            ])
          ],
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success btn-block",
            attrs: { disabled: _vm.isLoading, type: "submit" }
          },
          [
            !_vm.isLoading
              ? _c("span", [
                  _vm._v("\n                Generate "),
                  _c("i", { staticClass: "fa fa-print" })
                ])
              : _c("span", [_vm._v("Generating Report...")])
          ]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58822642", module.exports)
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
        _c("card", {
          scopedSlots: _vm._u([
            {
              key: "card-header",
              fn: function() {
                return [
                  _c("h3", { staticClass: "card-title mb-0" }, [
                    _vm._v("Sales")
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
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("div", { staticClass: "clearfix" }, [
                        _c(
                          "div",
                          { staticClass: "float-lg-left py-2" },
                          [
                            _c("date-filter", {
                              attrs: {
                                "date-from": _vm.date_from,
                                "date-to": _vm.date_to
                              },
                              on: {
                                "on-change": _vm.onChange,
                                "on-submit": _vm.handleFilter
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "float-lg-right d-lg-flex py-2" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-success mr-2",
                                on: { click: _vm.handleModal }
                              },
                              [
                                _vm._v(
                                  "\n                  Generate Sales Report\n                "
                                )
                              ]
                            ),
                            _vm._v(" "),
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
                        _c("sales-table", {
                          attrs: {
                            items: _vm.sales,
                            "is-loading": _vm.is_loading
                          },
                          on: {
                            "on-edit": _vm.handleEdit,
                            "on-delete": _vm.handleDelete
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
                          attrs: { data: _vm.sales },
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
                  _c("h5", { staticClass: "modal-title text-white" }, [
                    _vm._v("\n          Generate Report\n        ")
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "modal-body",
              fn: function() {
                return [
                  _c("report-form", {
                    attrs: { "is-loading": _vm.is_submitting },
                    on: { "on-submit": _vm.onReportSubmit }
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
    require("vue-hot-reload-api")      .rerender("data-v-4d6ab92c", module.exports)
  }
}

/***/ })

});