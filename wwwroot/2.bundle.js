(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../node_modules/vue-loader/lib/index.js?!./views/Test.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib??vue-loader-options!./views/Test.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      info: null,\n      loading: true,\n      errored: false\n    };\n  },\n  filters: {\n    currencydecimal(value) {\n      return value.toFixed(2);\n    }\n  },\n  mounted() {\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a\n      .get(\"https://api.coindesk.com/v1/bpi/currentprice.json\")\n      .then(response => {\n        this.info = response.data.bpi;\n      })\n      .catch(error => {\n        console.log(error);\n        this.errored = true;\n      })\n      .finally(() => (this.loading = false));\n  }\n});\n\n\n//# sourceURL=webpack:///./views/Test.vue?../node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Test.vue?vue&type=template&id=7deb6b7e&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./views/Test.vue?vue&type=template&id=7deb6b7e& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"h1\", [_vm._v(\"Bitcoin Price Index\")]),\n    _vm._v(\" \"),\n    _vm.errored\n      ? _c(\"section\", [\n          _c(\"p\", [\n            _vm._v(\n              \"We're sorry, we're not able to retrieve this information at the moment, please try back later\"\n            )\n          ])\n        ])\n      : _c(\n          \"section\",\n          [\n            _vm.loading\n              ? _c(\"div\", [_vm._v(\"Loading...\")])\n              : _vm._l(_vm.info, function(currency) {\n                  return _c(\"div\", { key: currency, staticClass: \"currency\" }, [\n                    _vm._v(\"\\n    \" + _vm._s(currency.description) + \":\\n    \"),\n                    _c(\"span\", { staticClass: \"lighten\" }, [\n                      _c(\"span\", {\n                        domProps: { innerHTML: _vm._s(currency.symbol) }\n                      }),\n                      _vm._v(\n                        _vm._s(_vm._f(\"currencydecimal\")(currency.rate_float)) +\n                          \"\\n    \"\n                      )\n                    ])\n                  ])\n                })\n          ],\n          2\n        )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./views/Test.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./views/Test.vue":
/*!************************!*\
  !*** ./views/Test.vue ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Test_vue_vue_type_template_id_7deb6b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Test.vue?vue&type=template&id=7deb6b7e& */ \"./views/Test.vue?vue&type=template&id=7deb6b7e&\");\n/* harmony import */ var _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Test.vue?vue&type=script&lang=js& */ \"./views/Test.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Test_vue_vue_type_template_id_7deb6b7e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Test_vue_vue_type_template_id_7deb6b7e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"views/Test.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./views/Test.vue?");

/***/ }),

/***/ "./views/Test.vue?vue&type=script&lang=js&":
/*!*************************************************!*\
  !*** ./views/Test.vue?vue&type=script&lang=js& ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=script&lang=js& */ \"../node_modules/vue-loader/lib/index.js?!./views/Test.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./views/Test.vue?");

/***/ }),

/***/ "./views/Test.vue?vue&type=template&id=7deb6b7e&":
/*!*******************************************************!*\
  !*** ./views/Test.vue?vue&type=template&id=7deb6b7e& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_7deb6b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=template&id=7deb6b7e& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Test.vue?vue&type=template&id=7deb6b7e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_7deb6b7e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_7deb6b7e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./views/Test.vue?");

/***/ })

}]);