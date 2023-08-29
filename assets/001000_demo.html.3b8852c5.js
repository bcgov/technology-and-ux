import { o as openBlock, c as createElementBlock, F as Fragment, a as createBaseVNode, d as createTextVNode } from "./app.fb818619.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "demo",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#demo",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Demo")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createTextVNode("Demo of Authentication to AWS "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("p", null, "Showing lack of users to manage")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("p", null, "Make your life easy to not have to delete users")
      ])
    ])
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2
  ], 64);
}
var _001000_demo_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _001000_demo_html as default };
