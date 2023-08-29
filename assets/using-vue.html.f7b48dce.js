import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, F as Fragment, d as createTextVNode } from "./app.fb818619.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "using-vue-in-markdown",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#using-vue-in-markdown",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Using Vue in Markdown")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "browser-api-access-restrictions",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#browser-api-access-restrictions",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Browser API Access Restrictions")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the ");
const _hoisted_4 = {
  href: "https://ssr.vuejs.org/en/universal.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("universal code requirements");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(". In short, make sure to only access Browser / DOM APIs in ");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("code", null, "beforeMount", -1);
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" or ");
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("code", null, "mounted", -1);
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" hooks.");
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in "),
  /* @__PURE__ */ createBaseVNode("code", null, "<ClientOnly>"),
  /* @__PURE__ */ createTextVNode(" component:")
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#",
    "aria-hidden": "true"
  }, "#")
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      _hoisted_3,
      createBaseVNode("a", _hoisted_4, [
        _hoisted_5,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_6,
      _hoisted_7,
      _hoisted_8,
      _hoisted_9,
      _hoisted_10
    ]),
    _hoisted_11,
    _hoisted_12
  ], 64);
}
var usingVue_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { usingVue_html as default };
