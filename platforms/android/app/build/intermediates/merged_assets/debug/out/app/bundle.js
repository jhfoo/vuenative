require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.home-panel[data-v-763db97b] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-763db97b] {\n    margin-bottom: 15;\n}\n", "",{"version":3,"sources":["webpack://./../components/HelloWorld.vue"],"names":[],"mappings":";AAuFA;IACA,sBAAA;IACA,aAAA;IACA,UAAA;AACA;AAEA;IACA,iBAAA;AACA","sourcesContent":["<template>\r\n    <Page>\r\n        <ActionBar :title=\"title\" />\r\n        <ScrollView>\r\n            <StackLayout class=\"home-panel\">\r\n                <!--Add your page content here-->\r\n                <Label textWrap=\"true\" text=\"Welcome to Pablo\"\r\n                    class=\"h2 description-label\" />\r\n                <Label textWrap=\"true\" :text=\"count\" />\r\n                <Label textWrap=\"true\"\r\n                    text=\"Scan the QR code with your mobile device and watch the changes sync live while you play with the code.\"\r\n                    class=\"h2 description-label\" />\r\n                <Button text=\"Drawer\" class=\"btn -primary\"\r\n                    @tap=\"onToggleDrawer\" />\r\n                <Button text=\"Blue Button\" class=\"btn -primary\"\r\n                    @tap=\"onButtonTap\" />\r\n                <GridLayout rows=\"*\" height=\"1000px\">\r\n                    <RadPieChart allowAnimation=\"true\" row=\"0\">\r\n                        <PieSeries v-tkPieSeries selectionMode=\"DataPoint\"\r\n                            expandRadius=\"0.4\" outerRadiusFactor=\"0.7\"\r\n                            :items=\"pieSource\" valueProperty=\"Amount\"\r\n                            legendLabel=\"Brand\" />\r\n                        <RadLegendView v-tkPieLegend position=\"Right\"\r\n                            title=\"Brands\" offsetOrigin=\"TopRight\" width=\"110\"\r\n                            enableSelection=\"true\" />\r\n                    </RadPieChart>\r\n                </GridLayout>\r\n            </StackLayout>\r\n        </ScrollView>\r\n    </Page>\r\n</template>\r\n\r\n<script>\r\n    import Vue from \"nativescript-vue\";\r\n    import RadCartesianChart from \"nativescript-ui-chart/vue\";\r\n    import Page2 from \"./Page2\";\r\n    import SideDrawer from \"~/mixins/sidedrawer\";\r\n    Vue.use(RadCartesianChart);\r\n\r\n    export default {\r\n        mixins: [SideDrawer],\r\n        components: {\r\n            Page2\r\n        },\r\n        methods: {\r\n            onToggleDrawer() {\r\n                this.count++;\r\n                this.drawer = true;\r\n                console.log(this.drawer);\r\n            },\r\n            onButtonTap() {\r\n                this.count++;\r\n                console.log(\"Button was pressed\");\r\n                this.$navigateTo(Page2);\r\n            }\r\n        },\r\n        data() {\r\n            return {\r\n                count: 0,\r\n                pieSource: [{\r\n                        Brand: \"Audi\",\r\n                        Amount: 10\r\n                    },\r\n                    {\r\n                        Brand: \"Mercedes\",\r\n                        Amount: 76\r\n                    },\r\n                    {\r\n                        Brand: \"Fiat\",\r\n                        Amount: 60\r\n                    },\r\n                    {\r\n                        Brand: \"BMW\",\r\n                        Amount: 24\r\n                    },\r\n                    {\r\n                        Brand: \"Crysler\",\r\n                        Amount: 40\r\n                    }\r\n                ],\r\n                title: \"Woohoo!\"\r\n            };\r\n        }\r\n    };\r\n</script>\r\n\r\n<style scoped>\r\n    .home-panel {\r\n        vertical-align: center;\r\n        font-size: 20;\r\n        margin: 15;\r\n    }\r\n\r\n    .description-label {\r\n        margin-bottom: 15;\r\n    }\r\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);

    const { Application } = __webpack_require__("../node_modules/@nativescript/core/index.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (___CSS_LOADER_EXPORT___ && typeof ___CSS_LOADER_EXPORT___.forEach === "function") {
        ___CSS_LOADER_EXPORT___.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                Application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/HelloWorld.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-chart/vue/index.js");
/* harmony import */ var _Page2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Page2.vue");
/* harmony import */ var _mixins_sidedrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./mixins/sidedrawer.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_sidedrawer__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    Page2: _Page2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    onToggleDrawer() {
      this.count++;
      this.drawer = true;
      console.log(this.drawer);
    },

    onButtonTap() {
      this.count++;
      console.log("Button was pressed");
      this.$navigateTo(_Page2__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }

  },

  data() {
    return {
      count: 0,
      pieSource: [{
        Brand: "Audi",
        Amount: 10
      }, {
        Brand: "Mercedes",
        Amount: 76
      }, {
        Brand: "Fiat",
        Amount: 60
      }, {
        Brand: "BMW",
        Amount: 24
      }, {
        Brand: "Crysler",
        Amount: 40
      }],
      title: "Woohoo!"
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/vue/index.js");
/* harmony import */ var _HelloWorld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/HelloWorld.vue");
/* harmony import */ var _mixins_sidedrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./mixins/sidedrawer.js");
//
//
//
//
//
//
//
//
//
//
//
//




nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_sidedrawer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_sidedrawer__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    HelloWorld: _HelloWorld__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.showDrawer();
    },

    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.closeDrawer();
    }

  },

  data() {
    return {
      mainContentText: "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component" + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer."
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Page2.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onButtonTap() {
      this.count++;
      console.log("Button was pressed in Page2");
      this.$navigateBack();
    }

  },

  data() {
    return {
      count: 0
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/SideDrawer.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_sidedrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./mixins/sidedrawer.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_sidedrawer__WEBPACK_IMPORTED_MODULE_0__["default"]],

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: _vm.title } }),
      _c(
        "ScrollView",
        [
          _c(
            "StackLayout",
            { staticClass: "home-panel" },
            [
              _c("Label", {
                staticClass: "h2 description-label",
                attrs: { textWrap: "true", text: "Welcome to Pablo" }
              }),
              _c("Label", { attrs: { textWrap: "true", text: _vm.count } }),
              _c("Label", {
                staticClass: "h2 description-label",
                attrs: {
                  textWrap: "true",
                  text:
                    "Scan the QR code with your mobile device and watch the changes sync live while you play with the code."
                }
              }),
              _c("Button", {
                staticClass: "btn -primary",
                attrs: { text: "Drawer" },
                on: { tap: _vm.onToggleDrawer }
              }),
              _c("Button", {
                staticClass: "btn -primary",
                attrs: { text: "Blue Button" },
                on: { tap: _vm.onButtonTap }
              }),
              _c(
                "GridLayout",
                { attrs: { rows: "*", height: "1000px" } },
                [
                  _c(
                    "RadPieChart",
                    { attrs: { allowAnimation: "true", row: "0" } },
                    [
                      _c("PieSeries", {
                        directives: [
                          { name: "tkPieSeries", rawName: "v-tkPieSeries" }
                        ],
                        attrs: {
                          selectionMode: "DataPoint",
                          expandRadius: "0.4",
                          outerRadiusFactor: "0.7",
                          items: _vm.pieSource,
                          valueProperty: "Amount",
                          legendLabel: "Brand"
                        }
                      }),
                      _c("RadLegendView", {
                        directives: [
                          { name: "tkPieLegend", rawName: "v-tkPieLegend" }
                        ],
                        attrs: {
                          position: "Right",
                          title: "Brands",
                          offsetOrigin: "TopRight",
                          width: "110",
                          enableSelection: "true"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=template&id=f889b9d8&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "RadSideDrawer",
    {
      ref: "drawer",
      attrs: { drawerLocation: "Left", gesturesEnabled: _vm.gesturesEnabled }
    },
    [
      _c(
        "StackLayout",
        {
          directives: [
            {
              name: "view",
              rawName: "v-view:drawerContent",
              arg: "drawerContent",
              modifiers: {}
            }
          ],
          attrs: { backgroundColor: "gray" }
        },
        [_vm._t("drawerContent")],
        2
      ),
      _c(
        "Frame",
        {
          directives: [
            {
              name: "view",
              rawName: "v-view:mainContent",
              arg: "mainContent",
              modifiers: {}
            }
          ]
        },
        [_vm._t("mainContent")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Page2.vue?vue&type=template&id=376621b8&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "StackLayout",
        { attrs: { orientation: "vertical", backgroundColor: "lightgray" } },
        [
          _c("Label", { attrs: { text: "hello world!" } }),
          _c("Label", { attrs: { text: _vm.count } }),
          _vm.isIOS
            ? _c("BarcodeScanner", {
                attrs: {
                  row: "1",
                  height: "300",
                  formats: "QR_CODE, EAN_13, UPC_A",
                  beepOnScan: "true",
                  reportDuplicates: "true",
                  preferFrontCamera: "false",
                  pause: _vm.pause
                },
                on: { scanResult: _vm.onScanResult }
              })
            : _vm._e(),
          _c("Button", {
            attrs: { text: "Button" },
            on: { tap: _vm.onButtonTap }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/SideDrawer.vue?vue&type=template&id=7ee734c3&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ScrollView",
    [
      _c(
        "StackLayout",
        [
          _c("Label", { attrs: { text: "Navigation Menu" } }),
          _c("Label", {
            attrs: {
              text: "Primary",
              padding: "10",
              backgroundColor: "lightgray"
            }
          }),
          _c("Label", {
            attrs: { text: "Page 2", padding: "10" },
            on: {
              tap: function($event) {
                return _vm.closeDrawer()
              }
            }
          }),
          _c("Label", {
            attrs: { text: "Promotions", padding: "10" },
            on: {
              tap: function($event) {
                return _vm.closeDrawer()
              }
            }
          }),
          _c("Label", {
            attrs: {
              text: "Labels",
              padding: "10",
              backgroundColor: "lightgray"
            }
          }),
          _c("Label", {
            attrs: { text: "Important", padding: "10" },
            on: {
              tap: function($event) {
                return _vm.closeDrawer()
              }
            }
          }),
          _c("Label", {
            attrs: { text: "Starred", padding: "10" },
            on: {
              tap: function($event) {
                return _vm.closeDrawer()
              }
            }
          }),
          _c("Label", {
            attrs: { text: "Sent Mail", padding: "10" },
            on: {
              tap: function($event) {
                return _vm.closeDrawer()
              }
            }
          }),
          _c("Label", {
            attrs: { text: "Drafts", padding: "10" },
            on: {
              tap: function($event) {
                return _vm.closeDrawer()
              }
            }
          }),
          _c("Button", {
            staticStyle: { horizontalAlign: "center" },
            attrs: { text: "Close", color: "lightgray", padding: "10" },
            on: {
              tap: function($event) {
                return _vm.closeDrawer()
              }
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.scss": "./app.scss",
	"./main.js": "./main.js",
	"./mixins/sidedrawer.js": "./mixins/sidedrawer.js",
	"./routes.js": "./routes.js",
	"./store/SideDrawer.js": "./store/SideDrawer.js",
	"./store/index.js": "./store/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/HelloWorld.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
/* harmony import */ var _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HelloWorld.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "763db97b",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('763db97b')) {
      api.createRecord('763db97b', component.options)
    } else {
      api.reload('763db97b', component.options)
    }
    module.hot.accept("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
(function () {
      api.rerender('763db97b', {
        render: _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/HelloWorld.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_webpack_helpers_style_hot_loader_js_node_modules_nativescript_webpack_helpers_apply_css_loader_js_node_modules_css_loader_dist_cjs_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/webpack/helpers/style-hot-loader.js!../node_modules/@nativescript/webpack/helpers/apply-css-loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Main.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_f889b9d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Main.vue?vue&type=template&id=f889b9d8&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_f889b9d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_f889b9d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('f889b9d8')) {
      api.createRecord('f889b9d8', component.options)
    } else {
      api.reload('f889b9d8', component.options)
    }
    module.hot.accept("./components/Main.vue?vue&type=template&id=f889b9d8&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Main_vue_vue_type_template_id_f889b9d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Main.vue?vue&type=template&id=f889b9d8&");
(function () {
      api.rerender('f889b9d8', {
        render: _Main_vue_vue_type_template_id_f889b9d8___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Main_vue_vue_type_template_id_f889b9d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Main.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Main.vue?vue&type=template&id=f889b9d8&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_f889b9d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Main.vue?vue&type=template&id=f889b9d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_f889b9d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_f889b9d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Page2.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page2_vue_vue_type_template_id_376621b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Page2.vue?vue&type=template&id=376621b8&");
/* harmony import */ var _Page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Page2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Page2_vue_vue_type_template_id_376621b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Page2_vue_vue_type_template_id_376621b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('376621b8')) {
      api.createRecord('376621b8', component.options)
    } else {
      api.reload('376621b8', component.options)
    }
    module.hot.accept("./components/Page2.vue?vue&type=template&id=376621b8&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Page2_vue_vue_type_template_id_376621b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Page2.vue?vue&type=template&id=376621b8&");
(function () {
      api.rerender('376621b8', {
        render: _Page2_vue_vue_type_template_id_376621b8___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Page2_vue_vue_type_template_id_376621b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Page2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Page2.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Page2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Page2.vue?vue&type=template&id=376621b8&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_template_id_376621b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Page2.vue?vue&type=template&id=376621b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_template_id_376621b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_template_id_376621b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/SideDrawer.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideDrawer_vue_vue_type_template_id_7ee734c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/SideDrawer.vue?vue&type=template&id=7ee734c3&");
/* harmony import */ var _SideDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/SideDrawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideDrawer_vue_vue_type_template_id_7ee734c3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideDrawer_vue_vue_type_template_id_7ee734c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('7ee734c3')) {
      api.createRecord('7ee734c3', component.options)
    } else {
      api.reload('7ee734c3', component.options)
    }
    module.hot.accept("./components/SideDrawer.vue?vue&type=template&id=7ee734c3&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SideDrawer_vue_vue_type_template_id_7ee734c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/SideDrawer.vue?vue&type=template&id=7ee734c3&");
(function () {
      api.rerender('7ee734c3', {
        render: _SideDrawer_vue_vue_type_template_id_7ee734c3___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SideDrawer_vue_vue_type_template_id_7ee734c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/SideDrawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/SideDrawer.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/SideDrawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideDrawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/SideDrawer.vue?vue&type=template&id=7ee734c3&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideDrawer_vue_vue_type_template_id_7ee734c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/SideDrawer.vue?vue&type=template&id=7ee734c3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideDrawer_vue_vue_type_template_id_7ee734c3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideDrawer_vue_vue_type_template_id_7ee734c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./routes.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Main.vue");
/* harmony import */ var _components_SideDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/SideDrawer.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./store/index.js");

        const isAndroid = __webpack_require__("../node_modules/@nativescript/core/index.js").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        
        




 // if(TNS_ENV !== 'production') {
//   Vue.use(VueDevtools)
// }
// Prints Vue logs when --env.production is *NOT* set while building

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.config.silent = "development" === 'production';
nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.registerElement('BarcodeScanner', () => __webpack_require__("../node_modules/nativescript-barcodescanner/barcodescanner.js").BarcodeScannerView); // Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$routes = _routes__WEBPACK_IMPORTED_MODULE_3__["default"];
new nativescript_vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  store: _store__WEBPACK_IMPORTED_MODULE_6__["default"],

  render(h) {
    return h(_components_Main__WEBPACK_IMPORTED_MODULE_4__["default"], [h(_components_SideDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      slot: 'drawerContent'
    }), h(_routes__WEBPACK_IMPORTED_MODULE_3__["default"].HelloWorld, {
      slot: 'mainContent'
    })]);
  }

}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./mixins/sidedrawer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      // we'll use this to enable gestures on our sideDrawer.
      gesturesEnabled: false
    };
  },

  computed: {
    // drawerElement points to the drawer node using vue $refs
    drawerElement() {
      return this.$refs && this.$refs.drawer || null;
    },

    // drawer is responsible for getting and setting the sideDrawer property in vuex state.
    drawer: {
      get() {
        return this.$store.getters.isShow;
      },

      set(v) {
        return this.$store.commit('isShow', v);
      }

    }
  },
  watch: {
    // we watch the drawer prop for changes and open/close the sideDrawer accordingly
    drawer(v) {
      if (this.drawerElement) {
        return v ? this.drawerElement.nativeView.showDrawer() : this.drawerElement.nativeView.closeDrawer();
      }
    }

  },
  methods: {
    gotoPage(PageName) {
      this.closeDrawer();
      this.$navigateTo(this.$routes[PageName]);
    },

    // some helpful methods for opening and closing the drawer from the vue instance.
    openDrawer() {
      this.drawer = true;
    },

    closeDrawer() {
      this.drawer = false;
    }

  }
});

/***/ }),

/***/ "./routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue");
/* harmony import */ var _components_Page2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Page2.vue");


var routes = {
  HelloWorld: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_0__["default"],
  Page2: _components_Page2__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./store/SideDrawer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var state = {
  // this toggles the sidedrawer
  isShow: false
};
var mutations = {
  // always and only change vuex state through mutations.
  isShow(state, data) {
    state.isShow = data;
  }

};
var getters = {
  // the 'sideDrawer' getter will be available to listen to on the front end.
  // this is the change that we're watching in /app/mixins/sideDrawer.js
  isShow: state => state.isShow
}; // export this module.

/* harmony default export */ __webpack_exports__["default"] = ({
  state,
  mutations,
  getters
});

/***/ }),

/***/ "./store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./store/SideDrawer.js");



nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var debug = "development" !== 'production';
var store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    SideDrawer: _SideDrawer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  strict: debug
});
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$store = store;
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlP2Y0OWMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvTWFpbi52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUGFnZTIudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL1NpZGVEcmF3ZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWU/MDBiNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4udnVlPzhhOWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlMi52dWU/OGY2YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGVEcmF3ZXIudnVlP2EyN2YiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT8yOGRhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWU/YzY4NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzc4MzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4udnVlPzE5OTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYWluLnZ1ZT81ZWQ4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZTIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFnZTIudnVlP2RjMjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlMi52dWU/OTdmOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGVEcmF3ZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZURyYXdlci52dWU/ZTljOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGVEcmF3ZXIudnVlPzQ4MWQiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9taXhpbnMvc2lkZWRyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvU2lkZURyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ+L3BhY2thZ2UuanNvblwiIl0sIm5hbWVzIjpbIlZ1ZXgiLCJSb3V0ZXMiLCJNYWluIiwiU2lkZURyYXdlciIsInN0b3JlIiwiVnVlIiwiY29uZmlnIiwic2lsZW50IiwicmVnaXN0ZXJFbGVtZW50IiwicmVuZGVyIiwiaCIsInNsb3QiLCJIZWxsb1dvcmxkIiwiZGF0YSIsImdlc3R1cmVzRW5hYmxlZCIsImNvbXB1dGVkIiwiZHJhd2VyRWxlbWVudCIsIiRyZWZzIiwiZHJhd2VyIiwiZ2V0IiwiJHN0b3JlIiwiZ2V0dGVycyIsImlzU2hvdyIsInNldCIsInYiLCJjb21taXQiLCJ3YXRjaCIsIm5hdGl2ZVZpZXciLCJzaG93RHJhd2VyIiwiY2xvc2VEcmF3ZXIiLCJtZXRob2RzIiwiZ290b1BhZ2UiLCJQYWdlTmFtZSIsIiRuYXZpZ2F0ZVRvIiwiJHJvdXRlcyIsIm9wZW5EcmF3ZXIiLCJyb3V0ZXMiLCJQYWdlMiIsInN0YXRlIiwibXV0YXRpb25zIiwidXNlIiwiZGVidWciLCJwcm9jZXNzIiwiU3RvcmUiLCJtb2R1bGVzIiwic3RyaWN0IiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIs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RkUsQ0FBZDtBQUtBLElBQU1pQixTQUFTLEdBQUc7QUFDZDtBQUNBakIsUUFBTSxDQUFDZ0IsS0FBRCxFQUFRekIsSUFBUixFQUFjO0FBQ2hCeUIsU0FBSyxDQUFDaEIsTUFBTixHQUFlVCxJQUFmO0FBQ0g7O0FBSmEsQ0FBbEI7QUFPQSxJQUFNUSxPQUFPLEdBQUc7QUFDWjtBQUNBO0FBQ0FDLFFBQU0sRUFBR2dCLEtBQUQsSUFBV0EsS0FBSyxDQUFDaEI7QUFIYixDQUFoQixDLENBTUE7O0FBQ2U7QUFDWGdCLE9BRFc7QUFFWEMsV0FGVztBQUdYbEI7QUFIVyxDQUFmLEU7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQWhCLHVEQUFHLENBQUNtQyxHQUFKLENBQVF4Qyw0Q0FBUjtBQUVBLElBQUl5QyxLQUFLLEdBQUdDLGFBQUEsS0FBeUIsWUFBckM7QUFFQSxJQUFJdEMsS0FBSyxHQUFHLElBQUlKLDRDQUFJLENBQUMyQyxLQUFULENBQWU7QUFDdkJDLFNBQU8sRUFBRTtBQUNMekMsbUVBQVVBO0FBREwsR0FEYztBQUl2QjBDLFFBQU0sRUFBRUo7QUFKZSxDQUFmLENBQVo7QUFPQXBDLHVEQUFHLENBQUN5QyxTQUFKLENBQWMxQixNQUFkLEdBQXVCaEIsS0FBdkI7QUFFZUEsb0VBQWYsRTs7Ozs7OztBQ2xCQSwyQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi03NjNkYjk3Yl0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTc2M2RiOTdiXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi8uLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1RkE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0FBQ0E7QUFFQTtJQUNBLGlCQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8UGFnZT5cXHJcXG4gICAgICAgIDxBY3Rpb25CYXIgOnRpdGxlPVxcXCJ0aXRsZVxcXCIgLz5cXHJcXG4gICAgICAgIDxTY3JvbGxWaWV3PlxcclxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS1BZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZS0tPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIldlbGNvbWUgdG8gUGFibG9cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaDIgZGVzY3JpcHRpb24tbGFiZWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgOnRleHQ9XFxcImNvdW50XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJTY2FuIHRoZSBRUiBjb2RlIHdpdGggeW91ciBtb2JpbGUgZGV2aWNlIGFuZCB3YXRjaCB0aGUgY2hhbmdlcyBzeW5jIGxpdmUgd2hpbGUgeW91IHBsYXkgd2l0aCB0aGUgY29kZS5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaDIgZGVzY3JpcHRpb24tbGFiZWxcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiRHJhd2VyXFxcIiBjbGFzcz1cXFwiYnRuIC1wcmltYXJ5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQHRhcD1cXFwib25Ub2dnbGVEcmF3ZXJcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQmx1ZSBCdXR0b25cXFwiIGNsYXNzPVxcXCJidG4gLXByaW1hcnlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBAdGFwPVxcXCJvbkJ1dHRvblRhcFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKlxcXCIgaGVpZ2h0PVxcXCIxMDAwcHhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPFJhZFBpZUNoYXJ0IGFsbG93QW5pbWF0aW9uPVxcXCJ0cnVlXFxcIiByb3c9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWVTZXJpZXMgdi10a1BpZVNlcmllcyBzZWxlY3Rpb25Nb2RlPVxcXCJEYXRhUG9pbnRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZFJhZGl1cz1cXFwiMC40XFxcIiBvdXRlclJhZGl1c0ZhY3Rvcj1cXFwiMC43XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XFxcInBpZVNvdXJjZVxcXCIgdmFsdWVQcm9wZXJ0eT1cXFwiQW1vdW50XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmRMYWJlbD1cXFwiQnJhbmRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZExlZ2VuZFZpZXcgdi10a1BpZUxlZ2VuZCBwb3NpdGlvbj1cXFwiUmlnaHRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJCcmFuZHNcXFwiIG9mZnNldE9yaWdpbj1cXFwiVG9wUmlnaHRcXFwiIHdpZHRoPVxcXCIxMTBcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVNlbGVjdGlvbj1cXFwidHJ1ZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvUmFkUGllQ2hhcnQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPC9TY3JvbGxWaWV3PlxcclxcbiAgICA8L1BhZ2U+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQgVnVlIGZyb20gXFxcIm5hdGl2ZXNjcmlwdC12dWVcXFwiO1xcclxcbiAgICBpbXBvcnQgUmFkQ2FydGVzaWFuQ2hhcnQgZnJvbSBcXFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L3Z1ZVxcXCI7XFxyXFxuICAgIGltcG9ydCBQYWdlMiBmcm9tIFxcXCIuL1BhZ2UyXFxcIjtcXHJcXG4gICAgaW1wb3J0IFNpZGVEcmF3ZXIgZnJvbSBcXFwifi9taXhpbnMvc2lkZWRyYXdlclxcXCI7XFxyXFxuICAgIFZ1ZS51c2UoUmFkQ2FydGVzaWFuQ2hhcnQpO1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBtaXhpbnM6IFtTaWRlRHJhd2VyXSxcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgICAgICBQYWdlMlxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICBvblRvZ2dsZURyYXdlcigpIHtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlciA9IHRydWU7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZHJhd2VyKTtcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIG9uQnV0dG9uVGFwKCkge1xcclxcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50Kys7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJCdXR0b24gd2FzIHByZXNzZWRcXFwiKTtcXHJcXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhQYWdlMik7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgY291bnQ6IDAsXFxyXFxuICAgICAgICAgICAgICAgIHBpZVNvdXJjZTogW3tcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmFuZDogXFxcIkF1ZGlcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogMTBcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgQnJhbmQ6IFxcXCJNZXJjZWRlc1xcXCIsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50OiA3NlxcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmFuZDogXFxcIkZpYXRcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogNjBcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgQnJhbmQ6IFxcXCJCTVdcXFwiLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogMjRcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgQnJhbmQ6IFxcXCJDcnlzbGVyXFxcIixcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBbW91bnQ6IDQwXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIF0sXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcXFwiV29vaG9vIVxcXCJcXHJcXG4gICAgICAgICAgICB9O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAgIC5ob21lLXBhbmVsIHtcXHJcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwO1xcclxcbiAgICAgICAgbWFyZ2luOiAxNTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG5cbiAgICBjb25zdCB7IEFwcGxpY2F0aW9uIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIpO1xuICAgIHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmIChfX19DU1NfTE9BREVSX0VYUE9SVF9fXyAmJiB0eXBlb2YgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIF9fX0NTU19MT0FERVJfRVhQT1JUX19fLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8UGFnZT5cclxuICAgICAgICA8QWN0aW9uQmFyIDp0aXRsZT1cInRpdGxlXCIgLz5cclxuICAgICAgICA8U2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaG9tZS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLUFkZCB5b3VyIHBhZ2UgY29udGVudCBoZXJlLS0+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9XCJ0cnVlXCIgdGV4dD1cIldlbGNvbWUgdG8gUGFibG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaDIgZGVzY3JpcHRpb24tbGFiZWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiIDp0ZXh0PVwiY291bnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlNjYW4gdGhlIFFSIGNvZGUgd2l0aCB5b3VyIG1vYmlsZSBkZXZpY2UgYW5kIHdhdGNoIHRoZSBjaGFuZ2VzIHN5bmMgbGl2ZSB3aGlsZSB5b3UgcGxheSB3aXRoIHRoZSBjb2RlLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoMiBkZXNjcmlwdGlvbi1sYWJlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJEcmF3ZXJcIiBjbGFzcz1cImJ0biAtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQHRhcD1cIm9uVG9nZ2xlRHJhd2VyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJsdWUgQnV0dG9uXCIgY2xhc3M9XCJidG4gLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJvbkJ1dHRvblRhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGhlaWdodD1cIjEwMDBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRQaWVDaGFydCBhbGxvd0FuaW1hdGlvbj1cInRydWVcIiByb3c9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWVTZXJpZXMgdi10a1BpZVNlcmllcyBzZWxlY3Rpb25Nb2RlPVwiRGF0YVBvaW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZFJhZGl1cz1cIjAuNFwiIG91dGVyUmFkaXVzRmFjdG9yPVwiMC43XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcz1cInBpZVNvdXJjZVwiIHZhbHVlUHJvcGVydHk9XCJBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kTGFiZWw9XCJCcmFuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRMZWdlbmRWaWV3IHYtdGtQaWVMZWdlbmQgcG9zaXRpb249XCJSaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJyYW5kc1wiIG9mZnNldE9yaWdpbj1cIlRvcFJpZ2h0XCIgd2lkdGg9XCIxMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlU2VsZWN0aW9uPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SYWRQaWVDaGFydD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICA8L1BhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xyXG4gICAgaW1wb3J0IFJhZENhcnRlc2lhbkNoYXJ0IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvdnVlXCI7XHJcbiAgICBpbXBvcnQgUGFnZTIgZnJvbSBcIi4vUGFnZTJcIjtcclxuICAgIGltcG9ydCBTaWRlRHJhd2VyIGZyb20gXCJ+L21peGlucy9zaWRlZHJhd2VyXCI7XHJcbiAgICBWdWUudXNlKFJhZENhcnRlc2lhbkNoYXJ0KTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWl4aW5zOiBbU2lkZURyYXdlcl0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBQYWdlMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvblRvZ2dsZURyYXdlcigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZHJhd2VyKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25CdXR0b25UYXAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oUGFnZTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBwaWVTb3VyY2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyYW5kOiBcIkF1ZGlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50OiAxMFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmFuZDogXCJNZXJjZWRlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBbW91bnQ6IDc2XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyYW5kOiBcIkZpYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50OiA2MFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmFuZDogXCJCTVdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50OiAyNFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmFuZDogXCJDcnlzbGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogNDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV29vaG9vIVwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmhvbWUtcGFuZWwge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgICAgICBtYXJnaW46IDE1O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbi1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPFJhZFNpZGVEcmF3ZXIgcmVmPVwiZHJhd2VyXCIgZHJhd2VyTG9jYXRpb249XCJMZWZ0XCJcclxuICAgICAgICA6Z2VzdHVyZXNFbmFibGVkPVwiZ2VzdHVyZXNFbmFibGVkXCI+XHJcbiAgICAgICAgPFN0YWNrTGF5b3V0IH5kcmF3ZXJDb250ZW50IGJhY2tncm91bmRDb2xvcj1cImdyYXlcIj5cclxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImRyYXdlckNvbnRlbnRcIj48L3Nsb3Q+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICA8RnJhbWUgfm1haW5Db250ZW50PlxyXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwibWFpbkNvbnRlbnRcIj48L3Nsb3Q+XHJcbiAgICAgICAgPC9GcmFtZT5cclxuICAgIDwvUmFkU2lkZURyYXdlcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XHJcbiAgICBpbXBvcnQgUmFkU2lkZURyYXdlciBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvdnVlXCI7XHJcbiAgICBpbXBvcnQgSGVsbG9Xb3JsZCBmcm9tIFwiLi9IZWxsb1dvcmxkXCI7XHJcbiAgICBpbXBvcnQgU2lkZURyYXdlciBmcm9tIFwifi9taXhpbnMvc2lkZWRyYXdlclwiO1xyXG4gICAgVnVlLnVzZShSYWRTaWRlRHJhd2VyKTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWl4aW5zOiBbU2lkZURyYXdlcl0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBIZWxsb1dvcmxkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uT3BlbkRyYXdlclRhcCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZHJhd2VyLm5hdGl2ZVZpZXcuc2hvd0RyYXdlcigpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5kcmF3ZXIubmF0aXZlVmlldy5jbG9zZURyYXdlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1haW5Db250ZW50VGV4dDogXCJTaWRlRHJhd2VyIGZvciBOYXRpdmVTY3JpcHQgY2FuIGJlIGVhc2lseSBzZXR1cCBpbiB0aGUgWE1MIGRlZmluaXRpb24gb2YgeW91ciBwYWdlIGJ5IGRlZmluaW5nIG1haW4tIGFuZCBkcmF3ZXItY29udGVudC4gVGhlIGNvbXBvbmVudFwiICtcclxuICAgICAgICAgICAgICAgICAgICBcIiBoYXMgYSBkZWZhdWx0IHRyYW5zaXRpb24gYW5kIHBvc2l0aW9uIGFuZCBhbHNvIGV4cG9zZXMgbm90aWZpY2F0aW9ucyByZWxhdGVkIHRvIGNoYW5nZXMgaW4gaXRzIHN0YXRlLiBTd2lwZSBmcm9tIGxlZnQgdG8gb3BlbiBzaWRlIGRyYXdlci5cIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxQYWdlPlxyXG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgYmFja2dyb3VuZENvbG9yPVwibGlnaHRncmF5XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiaGVsbG8gd29ybGQhXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiY291bnRcIiAvPlxyXG4gICAgICAgICAgICA8QmFyY29kZVNjYW5uZXJcclxuICAgICAgICAgICAgICAgIHJvdz1cIjFcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcclxuICAgICAgICAgICAgICAgIGZvcm1hdHM9XCJRUl9DT0RFLCBFQU5fMTMsIFVQQ19BXCJcclxuICAgICAgICAgICAgICAgIGJlZXBPblNjYW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIHJlcG9ydER1cGxpY2F0ZXM9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgOnBhdXNlPVwicGF1c2VcIlxyXG4gICAgICAgICAgICAgICAgQHNjYW5SZXN1bHQ9XCJvblNjYW5SZXN1bHRcIlxyXG4gICAgICAgICAgICAgICAgdi1pZj1cImlzSU9TXCI+XHJcbiAgICAgICAgICAgIDwvQmFyY29kZVNjYW5uZXI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkJ1dHRvblwiIEB0YXA9XCJvbkJ1dHRvblRhcFwiIC8+XHJcbiAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIDwvUGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkJ1dHRvblRhcCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQrKztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkIGluIFBhZ2UyXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVCYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudDogMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxTY3JvbGxWaWV3PlxyXG4gICAgICAgIDxTdGFja0xheW91dD5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJOYXZpZ2F0aW9uIE1lbnVcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlByaW1hcnlcIiBwYWRkaW5nPVwiMTBcIiBiYWNrZ3JvdW5kQ29sb3I9XCJsaWdodGdyYXlcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlBhZ2UgMlwiIHBhZGRpbmc9XCIxMFwiIEB0YXA9XCJjbG9zZURyYXdlcigpXCIgLz5cclxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQcm9tb3Rpb25zXCIgcGFkZGluZz1cIjEwXCIgQHRhcD1cImNsb3NlRHJhd2VyKClcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkxhYmVsc1wiIHBhZGRpbmc9XCIxMFwiIGJhY2tncm91bmRDb2xvcj1cImxpZ2h0Z3JheVwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSW1wb3J0YW50XCIgcGFkZGluZz1cIjEwXCIgQHRhcD1cImNsb3NlRHJhd2VyKClcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlN0YXJyZWRcIiBwYWRkaW5nPVwiMTBcIiBAdGFwPVwiY2xvc2VEcmF3ZXIoKVwiIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiU2VudCBNYWlsXCIgcGFkZGluZz1cIjEwXCIgQHRhcD1cImNsb3NlRHJhd2VyKClcIiAvPlxyXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkRyYWZ0c1wiIHBhZGRpbmc9XCIxMFwiIEB0YXA9XCJjbG9zZURyYXdlcigpXCIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ2xvc2VcIiBjb2xvcj1cImxpZ2h0Z3JheVwiIHBhZGRpbmc9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImhvcml6b250YWwtYWxpZ246IGNlbnRlclwiIEB0YXA9XCJjbG9zZURyYXdlcigpXCIgLz5cclxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxyXG4gICAgPC9TY3JvbGxWaWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBTaWRlRHJhd2VyIGZyb20gXCJ+L21peGlucy9zaWRlZHJhd2VyXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1peGluczogW1NpZGVEcmF3ZXJdLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IF92bS50aXRsZSB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhvbWUtcGFuZWxcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoMiBkZXNjcmlwdGlvbi1sYWJlbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogXCJXZWxjb21lIHRvIFBhYmxvXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHRXcmFwOiBcInRydWVcIiwgdGV4dDogX3ZtLmNvdW50IH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIGRlc2NyaXB0aW9uLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHRXcmFwOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwiU2NhbiB0aGUgUVIgY29kZSB3aXRoIHlvdXIgbW9iaWxlIGRldmljZSBhbmQgd2F0Y2ggdGhlIGNoYW5nZXMgc3luYyBsaXZlIHdoaWxlIHlvdSBwbGF5IHdpdGggdGhlIGNvZGUuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJEcmF3ZXJcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uVG9nZ2xlRHJhd2VyIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJsdWUgQnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkJ1dHRvblRhcCB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKlwiLCBoZWlnaHQ6IFwiMTAwMHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlJhZFBpZUNoYXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYWxsb3dBbmltYXRpb246IFwidHJ1ZVwiLCByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiUGllU2VyaWVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcInRrUGllU2VyaWVzXCIsIHJhd05hbWU6IFwidi10a1BpZVNlcmllc1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlOiBcIkRhdGFQb2ludFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRSYWRpdXM6IFwiMC40XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzRmFjdG9yOiBcIjAuN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnBpZVNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wZXJ0eTogXCJBbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kTGFiZWw6IFwiQnJhbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiUmFkTGVnZW5kVmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJ0a1BpZUxlZ2VuZFwiLCByYXdOYW1lOiBcInYtdGtQaWVMZWdlbmRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQnJhbmRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldE9yaWdpbjogXCJUb3BSaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlU2VsZWN0aW9uOiBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJSYWRTaWRlRHJhd2VyXCIsXG4gICAge1xuICAgICAgcmVmOiBcImRyYXdlclwiLFxuICAgICAgYXR0cnM6IHsgZHJhd2VyTG9jYXRpb246IFwiTGVmdFwiLCBnZXN0dXJlc0VuYWJsZWQ6IF92bS5nZXN0dXJlc0VuYWJsZWQgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi12aWV3OmRyYXdlckNvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXJnOiBcImRyYXdlckNvbnRlbnRcIixcbiAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgYmFja2dyb3VuZENvbG9yOiBcImdyYXlcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkcmF3ZXJDb250ZW50XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcIkZyYW1lXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwidmlld1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmlldzptYWluQ29udGVudFwiLFxuICAgICAgICAgICAgICBhcmc6IFwibWFpbkNvbnRlbnRcIixcbiAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdChcIm1haW5Db250ZW50XCIpXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyYXlcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJoZWxsbyB3b3JsZCFcIiB9IH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uY291bnQgfSB9KSxcbiAgICAgICAgICBfdm0uaXNJT1NcbiAgICAgICAgICAgID8gX2MoXCJCYXJjb2RlU2Nhbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgICBmb3JtYXRzOiBcIlFSX0NPREUsIEVBTl8xMywgVVBDX0FcIixcbiAgICAgICAgICAgICAgICAgIGJlZXBPblNjYW46IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgcmVwb3J0RHVwbGljYXRlczogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgcGF1c2U6IF92bS5wYXVzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgc2NhblJlc3VsdDogX3ZtLm9uU2NhblJlc3VsdCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQnV0dG9uXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uQnV0dG9uVGFwIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU2Nyb2xsVmlld1wiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJOYXZpZ2F0aW9uIE1lbnVcIiB9IH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGV4dDogXCJQcmltYXJ5XCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JheVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIlBhZ2UgMlwiLCBwYWRkaW5nOiBcIjEwXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbG9zZURyYXdlcigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiUHJvbW90aW9uc1wiLCBwYWRkaW5nOiBcIjEwXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbG9zZURyYXdlcigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiTGFiZWxzXCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0Z3JheVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkltcG9ydGFudFwiLCBwYWRkaW5nOiBcIjEwXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbG9zZURyYXdlcigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU3RhcnJlZFwiLCBwYWRkaW5nOiBcIjEwXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbG9zZURyYXdlcigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU2VudCBNYWlsXCIsIHBhZGRpbmc6IFwiMTBcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlRHJhd2VyKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJEcmFmdHNcIiwgcGFkZGluZzogXCIxMFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2VEcmF3ZXIoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaG9yaXpvbnRhbEFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkNsb3NlXCIsIGNvbG9yOiBcImxpZ2h0Z3JheVwiLCBwYWRkaW5nOiBcIjEwXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbG9zZURyYXdlcigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLnNjc3NcIjogXCIuL2FwcC5zY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuc2Nzc1wiOiBcIi4vYXBwLnNjc3NcIixcblx0XCIuL21haW4uanNcIjogXCIuL21haW4uanNcIixcblx0XCIuL21peGlucy9zaWRlZHJhd2VyLmpzXCI6IFwiLi9taXhpbnMvc2lkZWRyYXdlci5qc1wiLFxuXHRcIi4vcm91dGVzLmpzXCI6IFwiLi9yb3V0ZXMuanNcIixcblx0XCIuL3N0b3JlL1NpZGVEcmF3ZXIuanNcIjogXCIuL3N0b3JlL1NpZGVEcmF3ZXIuanNcIixcblx0XCIuL3N0b3JlL2luZGV4LmpzXCI6IFwiLi9zdG9yZS9pbmRleC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOltdLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5zY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc2M2RiOTdiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2M2RiOTdiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3NjNkYjk3YlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGpoY29kZXNcXFxcdnVlbmF0aXZlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc2M2RiOTdiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc2M2RiOTdiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc2M2RiOTdiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjNkYjk3YiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NjNkYjk3YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY4ODliOWQ4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcamhjb2Rlc1xcXFx2dWVuYXRpdmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZjg4OWI5ZDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjg4OWI5ZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjg4OWI5ZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01haW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY4ODliOWQ4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y4ODliOWQ4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL01haW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Zjg4OWI5ZDgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2UyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzY2MjFiOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYWdlMi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2UyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcamhjb2Rlc1xcXFx2dWVuYXRpdmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzc2NjIxYjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzc2NjIxYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzc2NjIxYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2UyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzY2MjFiOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNzY2MjFiOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9QYWdlMi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZTIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZTIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2UyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzY2MjFiOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2lkZURyYXdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2VlNzM0YzMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2lkZURyYXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NpZGVEcmF3ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxqaGNvZGVzXFxcXHZ1ZW5hdGl2ZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZWU3MzRjMycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZWU3MzRjMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZWU3MzRjMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2lkZURyYXdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2VlNzM0YzMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2VlNzM0YzMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvU2lkZURyYXdlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZURyYXdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaWRlRHJhd2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaWRlRHJhd2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZWU3MzRjMyZcIiIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL01haW5cIjtcbmltcG9ydCBTaWRlRHJhd2VyIGZyb20gXCIuL2NvbXBvbmVudHMvU2lkZURyYXdlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gJ34vc3RvcmUnXG5cbi8vIGlmKFROU19FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuLy8gICBWdWUudXNlKFZ1ZURldnRvb2xzKVxuLy8gfVxuXG4vLyBQcmludHMgVnVlIGxvZ3Mgd2hlbiAtLWVudi5wcm9kdWN0aW9uIGlzICpOT1QqIHNldCB3aGlsZSBidWlsZGluZ1xuVnVlLmNvbmZpZy5zaWxlbnQgPSAoVE5TX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKVxuXG5WdWUucmVnaXN0ZXJFbGVtZW50KCdCYXJjb2RlU2Nhbm5lcicsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcicpLkJhcmNvZGVTY2FubmVyVmlldylcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vL1Z1ZS5jb25maWcuc2lsZW50ID0gZmFsc2U7XG5WdWUucHJvdG90eXBlLiRyb3V0ZXMgPSBSb3V0ZXNcblxubmV3IFZ1ZSh7XG4gICAgc3RvcmUsXG4gICAgcmVuZGVyKGgpIHtcbiAgICAgICAgcmV0dXJuIGgoXG4gICAgICAgICAgICBNYWluLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGgoU2lkZURyYXdlciwge1xuICAgICAgICAgICAgICAgICAgICBzbG90OiAnZHJhd2VyQ29udGVudCdcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBoKFJvdXRlcy5IZWxsb1dvcmxkLCB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q6ICdtYWluQ29udGVudCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICApXG4gICAgfVxufSkuJHN0YXJ0KCk7XG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gd2UnbGwgdXNlIHRoaXMgdG8gZW5hYmxlIGdlc3R1cmVzIG9uIG91ciBzaWRlRHJhd2VyLlxyXG4gICAgICAgICAgICBnZXN0dXJlc0VuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgLy8gZHJhd2VyRWxlbWVudCBwb2ludHMgdG8gdGhlIGRyYXdlciBub2RlIHVzaW5nIHZ1ZSAkcmVmc1xyXG4gICAgICAgIGRyYXdlckVsZW1lbnQoKSB7IHJldHVybiAodGhpcy4kcmVmcyAmJiB0aGlzLiRyZWZzLmRyYXdlcikgfHwgbnVsbCB9LFxyXG4gICAgICAgIC8vIGRyYXdlciBpcyByZXNwb25zaWJsZSBmb3IgZ2V0dGluZyBhbmQgc2V0dGluZyB0aGUgc2lkZURyYXdlciBwcm9wZXJ0eSBpbiB2dWV4IHN0YXRlLlxyXG4gICAgICAgIGRyYXdlcjoge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5pc1Nob3dcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0KHYpIHsgcmV0dXJuIHRoaXMuJHN0b3JlLmNvbW1pdCgnaXNTaG93JywgdikgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIC8vIHdlIHdhdGNoIHRoZSBkcmF3ZXIgcHJvcCBmb3IgY2hhbmdlcyBhbmQgb3Blbi9jbG9zZSB0aGUgc2lkZURyYXdlciBhY2NvcmRpbmdseVxyXG4gICAgICAgIGRyYXdlcih2KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYXdlckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2ID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdlckVsZW1lbnQubmF0aXZlVmlldy5zaG93RHJhd2VyKCkgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyRWxlbWVudC5uYXRpdmVWaWV3LmNsb3NlRHJhd2VyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ290b1BhZ2UoUGFnZU5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZURyYXdlcigpXHJcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8odGhpcy4kcm91dGVzW1BhZ2VOYW1lXSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHNvbWUgaGVscGZ1bCBtZXRob2RzIGZvciBvcGVuaW5nIGFuZCBjbG9zaW5nIHRoZSBkcmF3ZXIgZnJvbSB0aGUgdnVlIGluc3RhbmNlLlxyXG4gICAgICAgIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VEcmF3ZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSGVsbG9Xb3JsZCBmcm9tICd+L2NvbXBvbmVudHMvSGVsbG9Xb3JsZCdcclxuaW1wb3J0IFBhZ2UyIGZyb20gJ34vY29tcG9uZW50cy9QYWdlMidcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuICAgIEhlbGxvV29ybGQsXHJcbiAgICBQYWdlMlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXMiLCJjb25zdCBzdGF0ZSA9IHtcclxuICAgIC8vIHRoaXMgdG9nZ2xlcyB0aGUgc2lkZWRyYXdlclxyXG4gICAgaXNTaG93OiBmYWxzZVxyXG59XHJcblxyXG5jb25zdCBtdXRhdGlvbnMgPSB7XHJcbiAgICAvLyBhbHdheXMgYW5kIG9ubHkgY2hhbmdlIHZ1ZXggc3RhdGUgdGhyb3VnaCBtdXRhdGlvbnMuXHJcbiAgICBpc1Nob3coc3RhdGUsIGRhdGEpIHtcclxuICAgICAgICBzdGF0ZS5pc1Nob3cgPSBkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldHRlcnMgPSB7XHJcbiAgICAvLyB0aGUgJ3NpZGVEcmF3ZXInIGdldHRlciB3aWxsIGJlIGF2YWlsYWJsZSB0byBsaXN0ZW4gdG8gb24gdGhlIGZyb250IGVuZC5cclxuICAgIC8vIHRoaXMgaXMgdGhlIGNoYW5nZSB0aGF0IHdlJ3JlIHdhdGNoaW5nIGluIC9hcHAvbWl4aW5zL3NpZGVEcmF3ZXIuanNcclxuICAgIGlzU2hvdzogKHN0YXRlKSA9PiBzdGF0ZS5pc1Nob3dcclxufVxyXG5cclxuLy8gZXhwb3J0IHRoaXMgbW9kdWxlLlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzdGF0ZSxcclxuICAgIG11dGF0aW9ucyxcclxuICAgIGdldHRlcnNcclxufSIsImltcG9ydCBWdWUgZnJvbSAnbmF0aXZlc2NyaXB0LXZ1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuXHJcbmltcG9ydCBTaWRlRHJhd2VyIGZyb20gJy4vU2lkZURyYXdlcidcclxuXHJcblZ1ZS51c2UoVnVleClcclxuXHJcbmxldCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcclxuXHJcbmxldCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuICAgIG1vZHVsZXM6IHtcclxuICAgICAgICBTaWRlRHJhd2VyXHJcbiAgICB9LFxyXG4gICAgc3RyaWN0OiBkZWJ1Z1xyXG59KVxyXG5cclxuVnVlLnByb3RvdHlwZS4kc3RvcmUgPSBzdG9yZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9