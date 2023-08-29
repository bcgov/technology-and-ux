import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, F as Fragment, d as createTextVNode } from "./app.fb818619.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "read-more",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#read-more",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Read more")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "implementation-examples",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#implementation-examples",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" implementation examples")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("This project is a more complex example used with terragrunt");
const _hoisted_4 = {
  href: "https://github.com/bcgov/startup-sample-project-aws-containers/blob/main/README.md#deploy-application-on-the-aws-cloud",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Containers App");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("This project is the most straight foward implementation ");
const _hoisted_7 = {
  href: "https://github.com/bcgov/startup-sample-project-aws-serverless-OIDC/blob/main/README.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Serverless App");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("This project is a basic implementation with Github environment");
const _hoisted_10 = {
  href: "https://github.com/bcgov/startup-sample-project-aws-virtual-machines/blob/main/README.md",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Virtual Machine App");
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "documentation",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#documentation",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Documentation")
], -1);
const _hoisted_13 = {
  href: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode("OIDC Documentation");
const _hoisted_15 = {
  href: "https://docs.github.com/en/actions",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Github action");
const _hoisted_17 = {
  href: "https://developer.hashicorp.com/terraform/language/settings/backends/configuration",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Terraform Backend Configuration");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_3,
        createBaseVNode("a", _hoisted_4, [
          _hoisted_5,
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_6,
        createBaseVNode("a", _hoisted_7, [
          _hoisted_8,
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_9,
        createBaseVNode("a", _hoisted_10, [
          _hoisted_11,
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_12,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_13, [
            _hoisted_14,
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_15, [
            _hoisted_16,
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("a", _hoisted_17, [
            _hoisted_18,
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ])
    ])
  ], 64);
}
var _05_readmore_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _05_readmore_html as default };
