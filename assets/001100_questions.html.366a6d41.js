import { o as openBlock, c as createElementBlock, F as Fragment, a as createBaseVNode, d as createTextVNode } from "./app.fb818619.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var _imports_0 = "/cloud-pathfinder/assets/questions.cd1fc2c4.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "questions",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#questions",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Questions ?")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "image for questions and anwers"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "*This is where we would normally have a discussion if we were doing a live session")
], -1);
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3
  ], 64);
}
var _001100_questions_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _001100_questions_html as default };
