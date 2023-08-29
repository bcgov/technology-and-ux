import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, F as Fragment, d as createTextVNode } from "./app.fb818619.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "_1-introduction",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_1-introduction",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 1. Introduction")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, "Open ID Connect (OIDC) is a set of protocols that simplifies the authorization process between two entities that trust each other. This How to will focus on creating the trust relationship between GitHub and AWS.")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, "When configuring in AWS to use OIDC the first requirement is to have the OIDC component available. When creating the project set for the different ministry teams, the Cloud Pathfinder Team(CPF) adds the OIDC component to the list of components available in AWS to the ministry teams so it is ready for use")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, "The ministry teams are responsible to configure their AWS and GitHub environments to use OIDC.")
  ])
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "note",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#note",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Note")
], -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Project sets created prior 2023 do not have the OIDC component configured in AWS. To verify if they are created log into ");
const _hoisted_5 = {
  href: "https://github.com/bcgov-c/aws-ecf-live-workspaces-settings-stack/tree/main/projects",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("GitHub");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" and find your project license plate. Open the folder and verify there is a subfolder named github-oidc.If this folder appears it means OIDC is configured on the AWS side.During the first two quarters of 2023 the OIDC layer will be added to Project sets created prior 2023. This addition is transparentand requires no action on the side of the user.However, once all Project sets have the OIDC layer added, the existing tokens which allow access to Terraform Cloud to create the different artifacts in an app deployment will be discontinued. Existing applications already deployed will continue running, but new deployments will be unable to use the existing procedures and will need to use the OIDC authentication procedure explained in this document.");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("p", null, [
      _hoisted_4,
      createBaseVNode("a", _hoisted_5, [
        _hoisted_6,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_7
    ])
  ], 64);
}
var _01_Intraduction_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _01_Intraduction_html as default };
