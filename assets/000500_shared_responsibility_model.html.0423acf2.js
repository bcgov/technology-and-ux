import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, F as Fragment, d as createTextVNode } from "./app.fb818619.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "shared-responsibility-model",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#shared-responsibility-model",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Shared Responsibility Model")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Please refer to ");
const _hoisted_3 = {
  href: "https://developer.gov.bc.ca/Cloud-Pathfinder-Onboarding-Journey/Performing",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("DevHub");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" for the Shared Responsibility Model.");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_2,
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_5
    ])
  ], 64);
}
var _000500_shared_responsibility_model_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _000500_shared_responsibility_model_html as default };
