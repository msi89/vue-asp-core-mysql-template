(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../node_modules/vue-loader/lib/index.js?!./views/Product.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib??vue-loader-options!./views/Product.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  data() {\r\n    return {\r\n      products: null,\r\n      loading: true,\r\n      errored: false\r\n    };\r\n  },\r\n  mounted() {\r\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a\r\n      .get(\"api/Products/GetAllProducts\")\r\n      .then(response => {\r\n        this.products = response.data;\r\n      })\r\n      .catch(error => {\r\n        console.log(error);\r\n        this.errored = true;\r\n      })\r\n      .finally(() => (this.loading = false));\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./views/Product.vue?../node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Product.vue?vue&type=template&id=1cc37890&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./views/Product.vue?vue&type=template&id=1cc37890& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _vm.errored\n      ? _c(\"div\", { staticClass: \"alert alert-danger\" }, [\n          _c(\"p\", [\n            _vm._v(\n              \"We're sorry, we're not able to retrieve this information at the moment, please try back later\"\n            )\n          ])\n        ])\n      : _vm._e(),\n    _vm._v(\" \"),\n    _c(\"h2\", [_vm._v(\"Products\")]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"table-responsive\" }, [\n      _c(\"table\", { staticClass: \"table table-striped table-sm\" }, [\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\n          \"tbody\",\n          [\n            _vm.loading\n              ? _c(\"tr\", [\n                  _c(\"td\", { attrs: { colspan: \"4\", align: \"center\" } }, [\n                    _vm._v(\"Loading...\")\n                  ])\n                ])\n              : _vm._l(_vm.products, function(product, id) {\n                  return _c(\"tr\", { key: id }, [\n                    _c(\"td\", [_vm._v(_vm._s(product.id))]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(product.name))]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(product.category))]),\n                    _vm._v(\" \"),\n                    _c(\"td\", [_vm._v(_vm._s(product.price))])\n                  ])\n                })\n          ],\n          2\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [\n      _c(\"tr\", [\n        _c(\"th\", [_vm._v(\"#\")]),\n        _vm._v(\" \"),\n        _c(\"th\", [_vm._v(\"name\")]),\n        _vm._v(\" \"),\n        _c(\"th\", [_vm._v(\"category\")]),\n        _vm._v(\" \"),\n        _c(\"th\", [_vm._v(\"price\")])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./views/Product.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./views/Product.vue":
/*!***************************!*\
  !*** ./views/Product.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Product_vue_vue_type_template_id_1cc37890___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=1cc37890& */ \"./views/Product.vue?vue&type=template&id=1cc37890&\");\n/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ \"./views/Product.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Product_vue_vue_type_template_id_1cc37890___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Product_vue_vue_type_template_id_1cc37890___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"views/Product.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./views/Product.vue?");

/***/ }),

/***/ "./views/Product.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./views/Product.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ \"../node_modules/vue-loader/lib/index.js?!./views/Product.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./views/Product.vue?");

/***/ }),

/***/ "./views/Product.vue?vue&type=template&id=1cc37890&":
/*!**********************************************************!*\
  !*** ./views/Product.vue?vue&type=template&id=1cc37890& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_1cc37890___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=1cc37890& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./views/Product.vue?vue&type=template&id=1cc37890&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_1cc37890___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_1cc37890___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./views/Product.vue?");

/***/ })

}]);