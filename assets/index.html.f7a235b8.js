import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, d as createTextVNode } from "./app.fb818619.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var _imports_0 = "/cloud-pathfinder/assets/cpf_logo.d53bd5ec.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "logo called Cloud Pathfinder"
  })
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "overview",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#overview",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Overview")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Welcome to the Cloud Pathfinder Pre-Reading Material which is the information Pack for BC Gov Ministry Teams Considering Cloud.", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "Today we will go over the below topics", -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Who are You ?");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("About BC Gov Cloud");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("ECF at BC Gov");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Procurement Value Proposition");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Shared Responsibility");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Providing an ECF service");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Billing");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Communities of Practice");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Service Levels");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Demos");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Questions & Answers");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Training & Resources");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000100_who_are_you.html" }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000200_About_bcgov_cloud.html" }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.html" }, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000400_procurement_value_proposition.html" }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000500_shared_responsibility_model.html" }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000600_Providing_an_sea_service.html" }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000700_billing.html" }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000800_communities_of_practise.html" }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000900_service_levels.html" }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/001000_demo.html" }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/001100_questions.html" }, {
          default: withCtx(() => [
            _hoisted_15
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Documentation/Pre-reading-material/001200_training.html" }, {
          default: withCtx(() => [
            _hoisted_16
          ]),
          _: 1
        })
      ])
    ])
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index_html as default };
