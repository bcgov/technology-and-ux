"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vueRouter = require("vue-router");
var vue = require("vue");
var core = require("@vueuse/core");
var serverRenderer = require("vue/server-renderer");
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$e;
  })),
  "v-3f14a146": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _01_Intraduction_html$2;
  })),
  "v-6f5579e8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _02_Configuring_AWS_to_use_OIDC_html$2;
  })),
  "v-3fb1a346": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _03_Configuring_OIDC_in_GitHub_html$2;
  })),
  "v-166910e4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _04_Refining_the_policies_html$2;
  })),
  "v-6a8b3e72": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _05_readmore_html$2;
  })),
  "v-b4e84c9a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$c;
  })),
  "v-ba934fd8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$a;
  })),
  "v-fffb8e28": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$8;
  })),
  "v-79e93bb0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return usingVue_html$2;
  })),
  "v-6c4156d6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000100_who_are_you_html$2;
  })),
  "v-198dcdd4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000200_About_bcgov_cloud_html$2;
  })),
  "v-f5bac64c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000300_sea_at_bc_Gov_html$2;
  })),
  "v-47972128": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000400_procurement_value_proposition_html$2;
  })),
  "v-23ebbb5c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000500_shared_responsibility_model_html$2;
  })),
  "v-33831eca": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000600_Providing_an_sea_service_html$2;
  })),
  "v-5d500bf2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000700_billing_html$2;
  })),
  "v-9d1fc074": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000800_communities_of_practise_html$2;
  })),
  "v-4bec5dd9": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _000900_service_levels_html$2;
  })),
  "v-2b892ac5": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _001000_demo_html$2;
  })),
  "v-755bd53c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _001100_questions_html$2;
  })),
  "v-00f68eb0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _001200_training_html$2;
  })),
  "v-3b5059cf": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$6;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$3 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$4;
  }).then(({ data: data2 }) => data2),
  "v-3f14a146": () => Promise.resolve().then(function() {
    return _01_Intraduction_html;
  }).then(({ data: data2 }) => data2),
  "v-6f5579e8": () => Promise.resolve().then(function() {
    return _02_Configuring_AWS_to_use_OIDC_html;
  }).then(({ data: data2 }) => data2),
  "v-3fb1a346": () => Promise.resolve().then(function() {
    return _03_Configuring_OIDC_in_GitHub_html;
  }).then(({ data: data2 }) => data2),
  "v-166910e4": () => Promise.resolve().then(function() {
    return _04_Refining_the_policies_html;
  }).then(({ data: data2 }) => data2),
  "v-6a8b3e72": () => Promise.resolve().then(function() {
    return _05_readmore_html;
  }).then(({ data: data2 }) => data2),
  "v-b4e84c9a": () => Promise.resolve().then(function() {
    return index_html$3;
  }).then(({ data: data2 }) => data2),
  "v-ba934fd8": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-fffb8e28": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-79e93bb0": () => Promise.resolve().then(function() {
    return usingVue_html;
  }).then(({ data: data2 }) => data2),
  "v-6c4156d6": () => Promise.resolve().then(function() {
    return _000100_who_are_you_html;
  }).then(({ data: data2 }) => data2),
  "v-198dcdd4": () => Promise.resolve().then(function() {
    return _000200_About_bcgov_cloud_html;
  }).then(({ data: data2 }) => data2),
  "v-f5bac64c": () => Promise.resolve().then(function() {
    return _000300_sea_at_bc_Gov_html;
  }).then(({ data: data2 }) => data2),
  "v-47972128": () => Promise.resolve().then(function() {
    return _000400_procurement_value_proposition_html;
  }).then(({ data: data2 }) => data2),
  "v-23ebbb5c": () => Promise.resolve().then(function() {
    return _000500_shared_responsibility_model_html;
  }).then(({ data: data2 }) => data2),
  "v-33831eca": () => Promise.resolve().then(function() {
    return _000600_Providing_an_sea_service_html;
  }).then(({ data: data2 }) => data2),
  "v-5d500bf2": () => Promise.resolve().then(function() {
    return _000700_billing_html;
  }).then(({ data: data2 }) => data2),
  "v-9d1fc074": () => Promise.resolve().then(function() {
    return _000800_communities_of_practise_html;
  }).then(({ data: data2 }) => data2),
  "v-4bec5dd9": () => Promise.resolve().then(function() {
    return _000900_service_levels_html;
  }).then(({ data: data2 }) => data2),
  "v-2b892ac5": () => Promise.resolve().then(function() {
    return _001000_demo_html;
  }).then(({ data: data2 }) => data2),
  "v-755bd53c": () => Promise.resolve().then(function() {
    return _001100_questions_html;
  }).then(({ data: data2 }) => data2),
  "v-00f68eb0": () => Promise.resolve().then(function() {
    return _001200_training_html;
  }).then(({ data: data2 }) => data2),
  "v-3b5059cf": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData$2 = vue.ref(pagesData$3);
const pageDataEmpty$2 = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData$2 = vue.ref(pageDataEmpty$2);
const usePageData$2 = () => pageData$2;
const resolvePageData = async (pageKey) => {
  const pageDataResolver = pagesData$2.value[pageKey];
  if (!pageDataResolver) {
    return pageDataEmpty$2;
  }
  const pageData2 = await pageDataResolver();
  return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty$2;
};
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData$2.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData$2.value.key) {
      pageData$2.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const resolvePageFrontmatter = (pageData2) => pageData2.frontmatter;
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales, routePath) => {
  const localePaths = Object.keys(locales).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
  const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
  const head = [
    ...isArray(frontmatter.head) ? frontmatter.head : [],
    ...siteLocale.head,
    ["title", {}, headTitle],
    ["meta", { name: "description", content: description }]
  ];
  return dedupeHead(head);
};
const pageHeadTitleSymbol = Symbol("");
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const resolvePageLang = (pageData2) => pageData2.lang || "en";
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const resolveRouteLocale = (locales, routePath) => resolveLocalePath(locales, routePath);
const siteData$3 = {
  "base": "/cloud-pathfinder/",
  "lang": "en-US",
  "title": "",
  "description": "CPF Documentation",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/vuepress/src/.vuepress/public/ns/favicon-16x16.png"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "32x32",
        "href": "/images/icons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.webmanifest"
      }
    ],
    [
      "meta",
      {
        "name": "application-name",
        "content": "VuePress"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-title",
        "content": "VuePress"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/images/icons/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        "rel": "mask-icon",
        "href": "/images/icons/safari-pinned-tab.svg",
        "color": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileColor",
        "content": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ]
  ],
  "locales": {}
};
const siteData$2 = vue.ref(siteData$3);
const useSiteData = () => siteData$2;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData$2.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const resolveSiteLocaleData = (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale]);
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData$2();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData$2();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance$1 = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup$1 = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
var vars$3 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = (_, { slots }) => {
  var _a;
  return vue.h("span", [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
ExternalLinkIcon.displayName = "ExternalLinkIcon";
var clientAppEnhance0 = defineClientAppEnhance$1(({ app }) => {
  app.component("ExternalLinkIcon", ExternalLinkIcon);
});
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$2 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, {
      default: () => show.value ? backToTopEl : null
    });
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup$1(() => {
  return;
});
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "" }, ["/index.html", "/index.md"]],
  ["v-3f14a146", "/Github_OIDC/01_Intraduction.html", { "title": "1. Introduction" }, ["/Github_OIDC/01_Intraduction", "/Github_OIDC/01_Intraduction.md"]],
  ["v-6f5579e8", "/Github_OIDC/02_Configuring_AWS_to_use_OIDC.html", { "title": "2. Configuring AWS to use OIDC" }, ["/Github_OIDC/02_Configuring_AWS_to_use_OIDC", "/Github_OIDC/02_Configuring_AWS_to_use_OIDC.md"]],
  ["v-3fb1a346", "/Github_OIDC/03_Configuring_OIDC_in_GitHub.html", { "title": "3. Configuring OIDC in GitHub" }, ["/Github_OIDC/03_Configuring_OIDC_in_GitHub", "/Github_OIDC/03_Configuring_OIDC_in_GitHub.md"]],
  ["v-166910e4", "/Github_OIDC/04_Refining_the_policies.html", { "title": "4. Refining the policies" }, ["/Github_OIDC/04_Refining_the_policies", "/Github_OIDC/04_Refining_the_policies.md"]],
  ["v-6a8b3e72", "/Github_OIDC/05_readmore.html", { "title": "Read more" }, ["/Github_OIDC/05_readmore", "/Github_OIDC/05_readmore.md"]],
  ["v-b4e84c9a", "/Github_OIDC/", { "title": "Overview" }, ["/Github_OIDC/index.html", "/Github_OIDC/readme.md"]],
  ["v-ba934fd8", "/config/", { "title": "Config" }, ["/config/index.html", "/config/README.md"]],
  ["v-fffb8e28", "/guide/", { "title": "Introduction" }, ["/guide/index.html", "/guide/README.md"]],
  ["v-79e93bb0", "/guide/using-vue.html", { "title": "Using Vue in Markdown" }, ["/guide/using-vue", "/guide/using-vue.md"]],
  ["v-6c4156d6", "/Documentation/Pre-reading-material/000100_who_are_you.html", { "title": "Who are you ?" }, ["/Documentation/Pre-reading-material/000100_who_are_you", "/Documentation/Pre-reading-material/000100_who_are_you.md"]],
  ["v-198dcdd4", "/Documentation/Pre-reading-material/000200_About_bcgov_cloud.html", { "title": "About BC Government Cloud" }, ["/Documentation/Pre-reading-material/000200_About_bcgov_cloud", "/Documentation/Pre-reading-material/000200_About_bcgov_cloud.md"]],
  ["v-f5bac64c", "/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.html", { "title": "ECF at BC Government" }, ["/Documentation/Pre-reading-material/000300_sea_at_bc_Gov", "/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.md"]],
  ["v-47972128", "/Documentation/Pre-reading-material/000400_procurement_value_proposition.html", { "title": "Procurement Value Proposition" }, ["/Documentation/Pre-reading-material/000400_procurement_value_proposition", "/Documentation/Pre-reading-material/000400_procurement_value_proposition.md"]],
  ["v-23ebbb5c", "/Documentation/Pre-reading-material/000500_shared_responsibility_model.html", { "title": "Shared Responsibility Model" }, ["/Documentation/Pre-reading-material/000500_shared_responsibility_model", "/Documentation/Pre-reading-material/000500_shared_responsibility_model.md"]],
  ["v-33831eca", "/Documentation/Pre-reading-material/000600_Providing_an_sea_service.html", { "title": "Providing an ECF Service" }, ["/Documentation/Pre-reading-material/000600_Providing_an_sea_service", "/Documentation/Pre-reading-material/000600_Providing_an_sea_service.md"]],
  ["v-5d500bf2", "/Documentation/Pre-reading-material/000700_billing.html", { "title": "Billing" }, ["/Documentation/Pre-reading-material/000700_billing", "/Documentation/Pre-reading-material/000700_billing.md"]],
  ["v-9d1fc074", "/Documentation/Pre-reading-material/000800_communities_of_practise.html", { "title": "Communities of practice" }, ["/Documentation/Pre-reading-material/000800_communities_of_practise", "/Documentation/Pre-reading-material/000800_communities_of_practise.md"]],
  ["v-4bec5dd9", "/Documentation/Pre-reading-material/000900_service_levels.html", { "title": "Service Levels" }, ["/Documentation/Pre-reading-material/000900_service_levels", "/Documentation/Pre-reading-material/000900_service_levels.md"]],
  ["v-2b892ac5", "/Documentation/Pre-reading-material/001000_demo.html", { "title": "Demo" }, ["/Documentation/Pre-reading-material/001000_demo", "/Documentation/Pre-reading-material/001000_demo.md"]],
  ["v-755bd53c", "/Documentation/Pre-reading-material/001100_questions.html", { "title": "Questions ?" }, ["/Documentation/Pre-reading-material/001100_questions", "/Documentation/Pre-reading-material/001100_questions.md"]],
  ["v-00f68eb0", "/Documentation/Pre-reading-material/001200_training.html", { "title": "Training & Resources" }, ["/Documentation/Pre-reading-material/001200_training", "/Documentation/Pre-reading-material/001200_training.md"]],
  ["v-3b5059cf", "/Documentation/Pre-reading-material/", { "title": "Overview" }, ["/Documentation/Pre-reading-material/index.html", "/Documentation/Pre-reading-material/readme.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const pagesData$1 = vue.ref(pagesData$3);
const pageDataEmpty$1 = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData$1 = vue.ref(pageDataEmpty$1);
const usePageData$1 = () => pageData$1;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData$1.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData$1.value.key) {
      pageData$1.value = data2;
    }
  };
}
const siteData$1 = vue.ref(siteData$3);
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData$1.value = data2;
  };
}
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData$1();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports2) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        if (value !== void 0 && options.hasOwnProperty(key))
          Settings[key] = value;
      }
      return this;
    };
    NProgress.status = null;
    NProgress.set = function(n) {
      var started = NProgress.isStarted();
      n = clamp(n, Settings.minimum, 1);
      NProgress.status = n === 1 ? null : n;
      var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress.getPositioningCSS();
        css(bar, barPositionCSS(n, speed, ease));
        if (n === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress.isStarted = function() {
      return typeof NProgress.status === "number";
    };
    NProgress.start = function() {
      if (!NProgress.status)
        NProgress.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress.status)
            return;
          NProgress.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress.done = function(force) {
      if (!force && !NProgress.status)
        return this;
      return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress.inc = function(amount) {
      var n = NProgress.status;
      if (!n) {
        return NProgress.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
        }
        n = clamp(n + amount, 0, 0.994);
        return NProgress.set(n);
      }
    };
    NProgress.trickle = function() {
      return NProgress.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress.done();
          } else {
            NProgress.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress.render = function(fromStart) {
      if (NProgress.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n, min, max) {
      if (n < min)
        return min;
      if (n > max)
        return max;
      return n;
    }
    function toBarPerc(n) {
      return (-1 + n) * 100;
    }
    function barPositionCSS(n, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue = function() {
      var pending = [];
      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }
      return function(fn) {
        pending.push(fn);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style = document.body.style;
        if (name in style)
          return name;
        var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i--) {
          vendorName = cssPrefixes[i] + capName;
          if (vendorName in style)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }
      return function(element, properties) {
        var args = arguments, prop, value;
        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
  });
})(nprogress$1);
var vars$1 = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress$1.exports.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.exports.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.exports.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData$2();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData$2();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const themeData$1 = {
  "logo": "/cloud_pathfinder_icon_2022.png",
  "repo": "",
  "backToTop": true,
  "mediumZoom": true,
  "externalLinkIcon": true,
  "nprogress": true,
  "docsRepo": "https://github.com/bcgov/cloud-pathfinder",
  "docsBranch": "master",
  "docsDir": "vuepress/src",
  "editLinkPattern": ":repo/edit/:branch/:path",
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "Guide",
          "link": "/guide/"
        },
        {
          "text": "Documentation",
          "children": [
            {
              "text": "Pre-Reading Material",
              "children": [
                {
                  "text": "Pre-Reading Material",
                  "link": "/Documentation/Pre-reading-material/"
                },
                {
                  "text": "GitHub OIDC",
                  "link": "/Github_OIDC/"
                }
              ]
            }
          ]
        },
        {
          "text": "Material",
          "children": [
            {
              "text": "PDF's",
              "children": [
                {
                  "text": "Pre-reading-material",
                  "link": "https://github.com/bcgov/cloud-pathfinder/raw/master/docs/assets/Pre-reading-material.pdf"
                }
              ]
            }
          ]
        },
        {
          "text": "CloudPathfinder",
          "link": "https://github.com/bcgov/cloud-pathfinder"
        }
      ],
      "sidebar": {
        "/guide/": [
          {
            "text": "Guide",
            "children": [
              "",
              "using-vue"
            ]
          }
        ],
        "/Documentation/Pre-reading-material/": [
          {
            "text": "Pre Reading Material",
            "children": [
              "000100_who_are_you.md",
              "000200_About_bcgov_cloud.md",
              "000300_sea_at_bc_Gov.md",
              "000400_procurement_value_proposition.md",
              "000500_shared_responsibility_model.md",
              "000600_Providing_an_sea_service.md",
              "000700_billing.md",
              "000800_communities_of_practise.md",
              "000900_service_levels.md",
              "001000_demo.md",
              "001100_questions.md",
              "001200_training.md"
            ]
          }
        ],
        "/Github_OIDC/": [
          {
            "text": "Github-OIDC",
            "children": [
              "01_Intraduction.md",
              "02_Configuring_AWS_to_use_OIDC.md",
              "03_Configuring_OIDC_in_GitHub.md",
              "04_Refining_the_policies.md",
              "05_readmore.md"
            ]
          }
        ]
      },
      "editLinkText": "Edit this page on GitHub",
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var clientAppSetup2 = defineClientAppSetup$1(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const pagesData = vue.ref(pagesData$3);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const siteData = vue.ref(siteData$3);
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
var vars = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
var clientAppEnhance2 = defineClientAppEnhance$1(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$L = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$K = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(ExternalLinkIcon), _attrs, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(themeLocale).openInNewWindow)}</span>`);
          } else {
            return [
              vue.createVNode("span", { class: "sr-only" }, vue.toDisplayString(vue.unref(themeLocale).openInNewWindow), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/ExternalLinkIcon.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var index = "";
var clientAppEnhance3 = defineClientAppEnhance$1(({ app, router }) => {
  app.component("Badge", _sfc_main$L);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$K);
  delete app._context.components.ExternalLinkIcon;
  app.component("ExternalLinkIcon", _sfc_main$J);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var clientAppEnhance4 = defineClientAppEnhance$1(({ app, router, siteData: siteData2 }) => {
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4
];
const provideGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolveRouteLocale(siteData$2.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolveSiteLocaleData(siteData$2.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvePageFrontmatter(pageData$2.value));
  const pageHeadTitle = vue.computed(() => resolvePageHeadTitle(pageData$2.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvePageLang(pageData$2.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData$2.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData$2.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
};
const registerGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const appCreator = vue.createSSRApp;
const historyCreator = vueRouter.createMemoryHistory;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData$2.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData$2.value] = await Promise.all([
        resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  provideGlobalComputed(app, router);
  registerGlobalComponents(app);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData: siteData$2 });
  }
  app.use(router);
  return {
    app,
    router
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$I = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/index.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var index_html$d = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$o]]);
var index_html$e = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$d
});
const _sfc_main$H = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="_1-introduction" tabindex="-1"><a class="header-anchor" href="#_1-introduction" aria-hidden="true">#</a> 1. Introduction</h1><ul><li><p>Open ID Connect (OIDC) is a set of protocols that simplifies the authorization process between two entities that trust each other. This How to will focus on creating the trust relationship between GitHub and AWS.</p></li><li><p>When configuring in AWS to use OIDC the first requirement is to have the OIDC component available. When creating the project set for the different ministry teams, the Cloud Pathfinder Team(CPF) adds the OIDC component to the list of components available in AWS to the ministry teams so it is ready for use</p></li><li><p>The ministry teams are responsible to configure their AWS and GitHub environments to use OIDC.</p></li></ul><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h2><p>Project sets created prior 2023 do not have the OIDC component configured in AWS. To verify if they are created log into <a href="https://github.com/bcgov-c/aws-ecf-live-workspaces-settings-stack/tree/main/projects" target="_blank" rel="noopener noreferrer">GitHub`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> and find your project license plate. Open the folder and verify there is a subfolder named github-oidc.If this folder appears it means OIDC is configured on the AWS side.During the first two quarters of 2023 the OIDC layer will be added to Project sets created prior 2023. This addition is transparentand requires no action on the side of the user.However, once all Project sets have the OIDC layer added, the existing tokens which allow access to Terraform Cloud to create the different artifacts in an app deployment will be discontinued. Existing applications already deployed will continue running, but new deployments will be unable to use the existing procedures and will need to use the OIDC authentication procedure explained in this document.</p><!--]-->`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Github_OIDC/01_Intraduction.html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var _01_Intraduction_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$n]]);
var _01_Intraduction_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _01_Intraduction_html$1
});
var _imports_0$a = "/cloud-pathfinder/assets/policy.a5ae5fca.png";
var _imports_1$6 = "/cloud-pathfinder/assets/oidc-picture-2.713b0c86.png";
var _imports_2$6 = "/cloud-pathfinder/assets/oidc-picture-3.78132e7b.png";
const _sfc_main$G = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="_2-configuring-aws-to-use-oidc" tabindex="-1"><a class="header-anchor" href="#_2-configuring-aws-to-use-oidc" aria-hidden="true">#</a> 2. Configuring AWS to use OIDC</h1><ul><li><p>The AWS environment created for the ministry teams already includes the OIDC components, however, it is necessary to create roles and policies that, using OIDC authentication, will allow trusted third parties (GitHub in this tutorial) to use AWS resources. This trust relationship between GitHub and the AWS account needs to be created for each AWS account that GitHub will use to deploy resources</p></li><li><p>The process starts crafting policies. These policies will later be assigned to the role that will be used by the trusted third party (GitHub in this How To). These policies should provide only enough permissions for the third party to do its job, otherwise you may be introducing a security risk. Please check section 4 for suggestions on how to create policies</p></li></ul><h2 id="_2-1-crafting-policies" tabindex="-1"><a class="header-anchor" href="#_2-1-crafting-policies" aria-hidden="true">#</a> 2.1 Crafting policies</h2><ul><li><p>Policies grant specific rights to specific resources.You will need to create policies tailored to the needs ofthe application you are deploying in AWS.</p></li><li><p>To create custom policies:</p><ul><li><p>a. Log into AWS console</p><p>b. Open IAM &gt; Policies</p><p>c. Click on Create policy button</p><p>d. The Wizard will help you to create the policy. Choose a meaningful name for the policy.</p></li></ul></li><li><p>If later you need to change the policy, you can always open it and edit it.</p></li><li><p>For example, the code that deploys the application may need to create a S3 bucket, so the policy will Allow the <code>&quot;s3:CreateBucket&quot;</code> action. In this context, the code may check if the bucket exists before creating it by listing the existing buckets. So, the code requires to be allowed to execute the <code>&quot;s3:ListBucket&quot;</code> action. If the code also requires to delete the bucket after using it, then it the policy needs to allow the <code>&quot;s3:DeleteBuckets&quot;</code> action</p><p>So, the resulting policy will be:</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2012-10-17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Statement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;Sid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;S3&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;s3:CreateBucket&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;s3:ListBucket&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;s3:DeleteBucket&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li><p>In the above example these actions allow deletion of any bucket from the code invoked by GitHub Actions.As written above, this policy includes all buckets in the account. For example,it would include buckets created by the budgets service that has nothing to do with your current application. Overall, the code should have the minimum necessary permissions.</p></li><li><p>We can restrict the resources to which the policy allows the deletion of buckets. In this case, if we know the app creates a bucket with name <code>upload-bucket*</code> a better suited policy can be created, like</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2012-10-17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Statement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;Sid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;S3&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;s3:CreateBucket&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;s3:ListBucket&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;s3:DeleteBucket&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;arn:aws:s3:::upload-bucket*&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li><p>Policies are customized to the app you are deploying in AWS. You will need to craft different policies for different apps.</p></li><li><p>Please keep in mind that best practices recommend these policies should only grant the minimum set of permissions necessary for the app to be deployed. See section 4 for suggestions.</p></li></ul><h2 id="_2-2-creating-a-roles" tabindex="-1"><a class="header-anchor" href="#_2-2-creating-a-roles" aria-hidden="true">#</a> 2.2 Creating a Roles</h2><ul><li><p>Policies are attached to roles. The actions granted by the policies are bestowed on the entities for which the role has a trust relationship</p></li><li><p>The steps to create a role are:</p><p>a. Log to the AWS console using your AWS account credentials (for an example see section 5).</p><p>b. In the search tab, type IAM, once found, open the IAM dashboard</p><p>c. On the left side, click on Roles</p><p>d. Click on the Create Rolebutton</p><p>e. Select Web Identityas trusted entity type</p><p>f. Select token.actions.githubusercontent.comas identity providerfrom the drop down</p><p>g. As Audience enter <code>repo:&lt;repo address&gt;:ref:refs/heads/&lt;branch&gt;</code> then click Next</p><p>h. Select the policies you want to add to this roleand click Next(the policies created in section 2.1will be listed here)</p><ul><li><p>In the following screenshot the policies <code>Registry_Deployment_IAM_Policy_for_Con-tainers_App_Part1</code> and <code>Registry_Deployment_IAM_Policy_for_Containers_App_Part2</code> have been added to the list of policies for the role</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$a)} alt="Policy"></p><p>i. Give the role a name (in this example we will use the name testOIDCrole), write a description of it, review the information.</p><ul><li>Note: In the above page you will find the Select trusted entities section with an Edit button that sug-gests that is possible to edit the trusted entities from this page. When going through this procedure, the Edit button simply returned to the previous step in the role creation procedure. In this context, the instructions in this How to suggest proceeding and later edit the trusted entities (step k)</li></ul><p>j. Go to the end of the page and click on the Create Role button.</p><p>k. Once created, search and open the role . You can add, remove permissions, and edit the trusted entities by opening the Trust relationships tab and clicking on the Edit trust policy <img${serverRenderer.ssrRenderAttr("src", _imports_1$6)} alt="Trust Relationships"></p><p>tweak it to be like below</p></li></ul></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2012-10-17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Statement&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;Effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Allow&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sts:AssumeRoleWithWebIdentity&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Principal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;Federated&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arn:aws:iam::512345678905:oidc-provider/token.actions.githubusercontent.com&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;StringLike&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;token.actions.githubusercontent.com:sub&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;repo:myreporoot/myreponame:*&quot;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ForAllValues:StringEquals&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;token.actions.githubusercontent.com:aud&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sts.amazonaws.com&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;token.actions.githubusercontent.com:iss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://token.actions.githubusercontent.com&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul><li><p>The number in the Federated key is the AWS account number that you are using. The value for the Condition key corresponds to the repo and branch (see point g) used by GitHub actions to deploy the app</p><ul><li>Note: The step creates a trust relationship between AWS and GitHub and grants the permissions allowed in the policies to run the code in the repository indicated in Condition to GitHub actions. Code included in other repositories will require to be added as another Condition</li><li>The example covers all branches in the repository</li></ul></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;StringLike&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;token.actions.githubusercontent.com:sub&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;repo:myreporoot/myreponame:*&quot;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>So all branches in the repo can assume the role and deploy the app.</li></ul><p>l. Once the Trust relationships have been edited, click the Update policy button to save the edits</p><p>m. Find and save the arn for the newly created role. In the previous example, from the above screenshot</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$6)} alt="arn"></p><p>would be: arn:aws:iam::512345678906:role/testOIDCrole</p><ul><li><p>The arn value will be used later when configuring GitHub to use OIDC</p><ul><li>Note: Notice the role ties together the polices (listed in the Permissions tab) with the trust relationship. In the example above, GitHub can only assume the role that will allow to deploy the app when it connects to AWS through a web call and from a specific repo</li></ul></li></ul><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h2><ul><li><p>When using GitHub OIDC to deploy the applications to AWS via Infrastructure as a code(example Terraform), you need an S3 Bucket and DynamoDB table created. The S3 Bucket is to store the state files and the DynamoDB table is used to store the lock files.</p></li><li><p>More on using s3 backend with terraform can be found <a href="https://developer.hashicorp.com/terraform/language/settings/backends/s3" target="_blank" rel="noopener noreferrer">here`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p>You can use AWS CLI to create the s3 bucket and DynamoDB table.</p><ul><li><p>you need AWS CLI already installed to manage and interact with various services provided by the AWS.</p></li><li><p>Please refer to the documentation <a href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html" target="_blank" rel="noopener noreferrer">here`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> to install the AWS CLI for your operating system. We also recommend using package managers like <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">Homebrew`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> for mac or <a href="https://chocolatey.org/" target="_blank" rel="noopener noreferrer">Chocolatey`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> for windows to download and manage all the tools and softwares, which makes it easy to install, uninstall or upggrade the softwares.</p><ul><li><p>After the AWS CLI is installed, you can use the following commands to create S3 and DynamoDB tables.</p></li><li><p>To create an s3 bucket with the name <code>terraform-remote-state-167465127160</code> you can use the following command</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    aws s3api create-bucket --bucket terraform-remote-state-167465127160 --region ca-central-1 --create-bucket-configuration <span class="token assign-left variable">LocationConstraint</span><span class="token operator">=</span>ca-central-1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>To enable bucket versioning on the created s3 bucket <code>terraform-remote-state-167465127160</code> you can use the following command</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    aws s3api put-bucket-versioning --bucket terraform-remote-state-167465127160 --versioning-configuration <span class="token assign-left variable">Status</span><span class="token operator">=</span>Enabled
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>Note that the S3 bucket names should be globally unique. So please change the bucket name highlighted to a unique name. In the above bucket example we used the bucket name followed by a AWS AccountID which is unique to each AWS account.</code></p><ul><li>To create a DynamoDB table with the name <code>Terraform-backend-lock-167465127160</code> to store the lock files you can use the following command</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>aws dynamodb create-table --table-name Terraform-backend-lock-167465127160 --attribute-definitions <span class="token assign-left variable">AttributeName</span><span class="token operator">=</span>LockID,AttributeType<span class="token operator">=</span>S --key-schema <span class="token assign-left variable">AttributeName</span><span class="token operator">=</span>LockID,KeyType<span class="token operator">=</span>HASH --provisioned-throughput <span class="token assign-left variable">ReadCapacityUnits</span><span class="token operator">=</span><span class="token number">5</span>,WriteCapacityUnits<span class="token operator">=</span><span class="token number">5</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul></li></ul><!--]-->`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Github_OIDC/02_Configuring_AWS_to_use_OIDC.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var _02_Configuring_AWS_to_use_OIDC_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$m]]);
var _02_Configuring_AWS_to_use_OIDC_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _02_Configuring_AWS_to_use_OIDC_html$1
});
const _sfc_main$F = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_3-configuring-oidc-in-github" tabindex="-1"><a class="header-anchor" href="#_3-configuring-oidc-in-github" aria-hidden="true">#</a> 3. Configuring OIDC in GitHub</h1><ul><li><p>GitHub already has the OIDC components installed. However, you need to indicate to the GitHub action that will deploy the code to use OIDC authentication.</p></li><li><p>To show how to include OIDC authentication in a GitHub action,we will the following GitHub action named PushManual as an example :</p></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> PushManual
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
<span class="token key atrule">env</span><span class="token punctuation">:</span>
  <span class="token key atrule">IMAGE_ID</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.AWS_ECR_URI <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">TF_VERSION</span><span class="token punctuation">:</span> 1.2.2
  <span class="token key atrule">TG_VERSION</span><span class="token punctuation">:</span> 0.37.1
  <span class="token key atrule">TG_SRC_PATH</span><span class="token punctuation">:</span> terraform
  <span class="token key atrule">TFC_WORKSPACE</span><span class="token punctuation">:</span> dev

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">id-token</span><span class="token punctuation">:</span> write 
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> read  
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docker_push</span><span class="token punctuation">:</span>

  <span class="token key atrule">name</span><span class="token punctuation">:</span> docker push
  <span class="token key atrule">environment</span><span class="token punctuation">:</span> tools
  <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">22.04</span>
  <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Check out the repo
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Configure AWS Credentials
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> aws<span class="token punctuation">-</span>actions/configure<span class="token punctuation">-</span>aws<span class="token punctuation">-</span>credentials@v1
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token key atrule">role-to-assume</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.AWS_ROLE_ARN_TO_USE<span class="token punctuation">}</span><span class="token punctuation">}</span>aws<span class="token punctuation">-</span><span class="token key atrule">region</span><span class="token punctuation">:</span> ca<span class="token punctuation">-</span>central<span class="token punctuation">-</span><span class="token number">1</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Login to Amazon ECR
      <span class="token key atrule">id</span><span class="token punctuation">:</span> login<span class="token punctuation">-</span>ecr
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> aws<span class="token punctuation">-</span>actions/amazon<span class="token punctuation">-</span>ecr<span class="token punctuation">-</span>login@v1
    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ul><li>The above is a GitHub workflow. To make it use OIDC your need to add the permissions section before the jobs section</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">id-token</span><span class="token punctuation">:</span> write 
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> read 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>The second addition to the workflow is to add the following step to each job that needs to authenticate to AWS</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">permissions</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Configure AWS Credentials
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> aws<span class="token punctuation">-</span>actions/configure<span class="token punctuation">-</span>aws<span class="token punctuation">-</span>credentials@v1
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">role-to-assume</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.AWS_ROLE_ARN_TO_USE<span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">aws-region</span><span class="token punctuation">:</span> ca<span class="token punctuation">-</span>central<span class="token punctuation">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>This step assign to GitHub the role which will be used when interacting with AWS. The <code>secrets.AWS_ROLE_ARN_TO_USE</code> invokes the <code>AWS_ROLE_ARN_TO_USE</code> GitHub secret. Its value is the arn for the role created in step 2.2 section m.(<code>arn:aws:iam::512345678906:role/testOIDCrole</code>)</li></ul><!--]-->`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Github_OIDC/03_Configuring_OIDC_in_GitHub.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var _03_Configuring_OIDC_in_GitHub_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$l]]);
var _03_Configuring_OIDC_in_GitHub_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _03_Configuring_OIDC_in_GitHub_html$1
});
const _sfc_main$E = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_4-refining-the-policies" tabindex="-1"><a class="header-anchor" href="#_4-refining-the-policies" aria-hidden="true">#</a> 4. Refining the policies</h1><ul><li><p>It is tempting to grant to the role associated to the trusted third party a policy with a wide range of permissions. However, this approach may open unwanted access to your AWS account, and thus it could be exploited with important consequences.The following are a set of tips to help you to write the minimum set of permissions policies</p></li><li><p>As developer/architect of the application, you know which components it will use: for example a S3 container, a DynamoDB, a Cloudfront service and a load balancer, So, you can add <code>s3:*</code>,<code>dynamodb:*</code>, <code>cloudfront:*</code> and <code>elasticloadbalancing:*</code></p><ul><li><p>If your application can be deployed with the previous permissions, then you can proceed to tighten them. For example, if the app is only reading from an existing table in a dynamodb you will need the <code>dynamodb:getitem</code>, <code>dynamodb:getrecords</code> actions, but your app doesnot need the <code>dynamodb:createtable</code> action. Applying these criteria repeatedly will reduce all the possible actions to a handful.</p></li><li><p>If allowed actions are not present in the policies the deployment will fail. In this case, look at the logs provided by GitHub. Usually, you will get a 400, 403 error. Sometime the logs will clearly indicate the action the code was trying to execute and that was denied.</p></li><li><p>Many actions are pretty harmless, for example <code>cloudfront:describefunction</code> does not usually have associated sensitive information while <code>cloudfront:getfunction</code> may. However, if the GitHub repo is a public one, then <code>cloudfront:getfunction</code> action does not add any security concern.</p></li><li><p>You will need to consider each action that you grant to the trusted entity in its own context.</p></li><li><p>The more open the Audience(see steps g and k),the more you need to refine the policies. The allowed policy actions for a private repo with limited access and pull request procedures may be more open than for repo that does not require PR approvals</p></li><li><p>Never create an OIDC authentication relationship between a GitHub repo and AWS with public access.</p></li></ul></li></ul><h1 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h1><ul><li><p>The CPF team would like to remind you of the quote: <code>The Unix philosophy basically involves giving you just enough rope to hang yourself. And then a couple of feet more, just to be sure.</code></p></li><li><p>Mistakes, errors, bugs can create havoc on your whole Cloud environment. For example, you may delete S3 buckets without noticing. Wide open permissions means that a hacker needs only access to your GitHub account to cause damage on your whole cloud environment.</p></li></ul><!--]-->`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Github_OIDC/04_Refining_the_policies.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var _04_Refining_the_policies_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$k]]);
var _04_Refining_the_policies_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _04_Refining_the_policies_html$1
});
const _sfc_main$D = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="read-more" tabindex="-1"><a class="header-anchor" href="#read-more" aria-hidden="true">#</a> Read more</h1><h2 id="implementation-examples" tabindex="-1"><a class="header-anchor" href="#implementation-examples" aria-hidden="true">#</a> implementation examples</h2><ul><li>This project is a more complex example used with terragrunt<a href="https://github.com/bcgov/startup-sample-project-aws-containers/blob/main/README.md#deploy-application-on-the-aws-cloud" target="_blank" rel="noopener noreferrer">Containers App`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>This project is the most straight foward implementation <a href="https://github.com/bcgov/startup-sample-project-aws-serverless-OIDC/blob/main/README.md" target="_blank" rel="noopener noreferrer">Serverless App`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>This project is a basic implementation with Github environment<a href="https://github.com/bcgov/startup-sample-project-aws-virtual-machines/blob/main/README.md" target="_blank" rel="noopener noreferrer">Virtual Machine App`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h2 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation" aria-hidden="true">#</a> Documentation</h2><ul><li><p><a href="https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect" target="_blank" rel="noopener noreferrer">OIDC Documentation`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p><a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer">Github action`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p><a href="https://developer.hashicorp.com/terraform/language/settings/backends/configuration" target="_blank" rel="noopener noreferrer">Terraform Backend Configuration`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><!--]-->`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Github_OIDC/05_readmore.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var _05_readmore_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$j]]);
var _05_readmore_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _05_readmore_html$1
});
var _imports_0$9 = "/cloud-pathfinder/assets/oidc-architecture.7f0d2e95.png";
const _sfc_main$C = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><p>Welcome!</p><p>In these documentation we will explore the authentication process to access AWS (Amazon web services) Cloud through Github action witch Github OIDC (OpenID Connect).</p><p>This integration will allow to create easy automated pipeline.<br> To do so we will see how to setup the Github repository and the AWS IAM role to provide access to Github action.</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$9)} alt=""></p><h2 id="who-is-this-for" tabindex="-1"><a class="header-anchor" href="#who-is-this-for" aria-hidden="true">#</a> Who is this for?</h2><p>This is for every members of a team using AWS and Github. This document aims to give a general overview so it&#39;s designed toward an audience not familiar with devops or microservice experience.<br> Please refer to the README linked at the end of this document for more technical documentation.</p><!--]-->`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Github_OIDC/index.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var index_html$b = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$i]]);
var index_html$c = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$b
});
const _sfc_main$B = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h1><h2 id="foo" tabindex="-1"><a class="header-anchor" href="#foo" aria-hidden="true">#</a> foo</h2><ul><li>Type: <code>string</code></li><li>Default: <code>/</code></li></ul><h2 id="bar" tabindex="-1"><a class="header-anchor" href="#bar" aria-hidden="true">#</a> bar</h2><ul><li>Type: <code>string</code></li><li>Default: <code>/</code></li></ul><!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/config/index.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var index_html$9 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$h]]);
var index_html$a = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$9
});
const _sfc_main$A = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p>VuePress is composed of two parts: a <a href="https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core" target="_blank" rel="noopener noreferrer">minimalistic static site generator`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> with a Vue-powered <a href="https://v1.vuepress.vuejs.org/theme/" target="_blank" rel="noopener noreferrer">theming system`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> and <a href="https://v1.vuepress.vuejs.org/plugin/" target="_blank" rel="noopener noreferrer">Plugin API`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>, and a <a href="https://v1.vuepress.vuejs.org/theme/default-theme-config.html" target="_blank" rel="noopener noreferrer">default theme`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> optimized for writing technical documentation. It was created to support the documentation needs of Vue&#39;s own sub projects.</p><p>Each page generated by VuePress has its own pre-rendered static HTML, providing great loading performance and is SEO-friendly. Once the page is loaded, however, Vue takes over the static content and turns it into a full Single-Page Application (SPA). Additional pages are fetched on demand as the user navigates around the site.</p><!--]-->`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/index.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var index_html$7 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$g]]);
var index_html$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$7
});
const _sfc_main$z = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="using-vue-in-markdown" tabindex="-1"><a class="header-anchor" href="#using-vue-in-markdown" aria-hidden="true">#</a> Using Vue in Markdown</h1><h2 id="browser-api-access-restrictions" tabindex="-1"><a class="header-anchor" href="#browser-api-access-restrictions" aria-hidden="true">#</a> Browser API Access Restrictions</h2><p>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html" target="_blank" rel="noopener noreferrer">universal code requirements`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>. In short, make sure to only access Browser / DOM APIs in <code>beforeMount</code> or <code>mounted</code> hooks.</p><p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component:</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><!--]-->`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/using-vue.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var usingVue_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$f]]);
var usingVue_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": usingVue_html$1
});
var _imports_0$8 = "/cloud-pathfinder/assets/product_owner.0f7f639d.png";
var _imports_1$5 = "/cloud-pathfinder/assets/security.bec005cb.png";
var _imports_2$5 = "/cloud-pathfinder/assets/developer.38e17e21.png";
var _imports_3$5 = "/cloud-pathfinder/assets/audience.21ae0872.png";
const _sfc_main$y = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="who-are-you" tabindex="-1"><a class="header-anchor" href="#who-are-you" aria-hidden="true">#</a> Who are you ?</h1><h2 id="take-a-look-at-your-team" tabindex="-1"><a class="header-anchor" href="#take-a-look-at-your-team" aria-hidden="true">#</a> Take a look at your team</h2><ul><li><p>Teams are comprised of</p><ul><li>Government employees</li><li>Contractors</li></ul></li><li><p>Roles and titles like</p><ul><li>Project Manager, Product Owner, Manager, Expense Authority\u2026 Ministry Information Security Officer, Ministry Privacy Officer, Architect\u2026 Full Stack Developer, DevOps, Technologist, Site Reliability Specialist\u2026</li></ul></li></ul><h2 id="product-owner" tabindex="-1"><a class="header-anchor" href="#product-owner" aria-hidden="true">#</a> Product Owner</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$8)} alt="Product owner"></p><h2 id="security" tabindex="-1"><a class="header-anchor" href="#security" aria-hidden="true">#</a> Security</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$5)} alt="Security"></p><h2 id="developer" tabindex="-1"><a class="header-anchor" href="#developer" aria-hidden="true">#</a> Developer</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$5)} alt="Developer"></p><h2 id="audience" tabindex="-1"><a class="header-anchor" href="#audience" aria-hidden="true">#</a> Audience</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$5)} alt="people jumping into a swimming pool together"></p><ul><li>POs, Devs and Compliance; group start</li><li>Shared understanding from the beginning</li><li>Journey together</li></ul><!--]-->`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000100_who_are_you.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var _000100_who_are_you_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$e]]);
var _000100_who_are_you_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000100_who_are_you_html$1
});
var _imports_0$7 = "/cloud-pathfinder/assets/org_landscape.8767adb2.png";
const _sfc_main$x = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="about-bc-government-cloud" tabindex="-1"><a class="header-anchor" href="#about-bc-government-cloud" aria-hidden="true">#</a> About BC Government Cloud</h1><ul><li>What is BC Government Cloud Pathfinder ?</li></ul><div class="custom-container tip"><p class="custom-container-title">Acronyms</p><ul><li><p><strong>GoC</strong> = Government of Canada</p></li><li><p><strong>SEA</strong> = Secure Environment Accelerator</p></li><li><p><strong>CSP</strong> = Cloud Service Provider</p></li></ul></div><ul><li><p>We are a central team in BC Government tasked with delivering Cloud</p></li><li><p>We have onboarded to the GoC Cloud Brokerage</p></li><li><p>We have a service order with 1 Cloud Service Provider that includes a SEA</p></li><li><p>We are on a mission to collaborate with the GoC to use several CSPs</p></li><li><p>We want to offer a consistent service experience across several clouds; our on-prem OpenShift container platform, AWS and others.</p></li><li><p>Our clients are all ministries in BC Government</p></li><li><p>Customer Focus</p><ul><li>Our Customers: Project Managers / Product Owners / Expense Authorities</li><li>Our Users: Developer Teams</li><li>Compliance Users: Security Operations OCIO</li></ul></li><li><p>Good Service</p><ul><li>Who do I go to if I have quality issues with Cloud Pathfinder\u2019s service?</li></ul></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$7)} alt="organization ladder"></p><!--]-->`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000200_About_bcgov_cloud.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var _000200_About_bcgov_cloud_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$d]]);
var _000200_About_bcgov_cloud_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000200_About_bcgov_cloud_html$1
});
var _imports_0$6 = "/cloud-pathfinder/assets/bcgov_ecf.3f70b2bc.png";
var _imports_1$4 = "/cloud-pathfinder/assets/sea.ef90dc66.png";
var _imports_2$4 = "/cloud-pathfinder/assets/aws_sea_concepts.a65dd417.png";
var _imports_3$4 = "/cloud-pathfinder/assets/compliant_services_aws.653c0028.png";
var _imports_4$1 = "/cloud-pathfinder/assets/aws_sea_future_growth.4dc80d2f.png";
var _imports_5$1 = "/cloud-pathfinder/assets/aws_training_landscape.e8e4f1ea.png";
var _imports_6$1 = "/cloud-pathfinder/assets/aws_training_components.166a665d.png";
var _imports_7$1 = "/cloud-pathfinder/assets/Training-Track-All-CSPs-with-architecture.eabcf07e.png";
const _sfc_main$w = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="ecf-at-bc-government" tabindex="-1"><a class="header-anchor" href="#ecf-at-bc-government" aria-hidden="true">#</a> ECF at BC Government</h1><ul><li>The Cloud Pathfinder team have added Automation and Customization layers on top of the Secure Environment Accelerator(SEA) product solution provided by Government of Canada and Cloud Service Provider and calls it Enterprise Cloud Factory.</li></ul><h2 id="bc-government-enterprise-cloud-factory-ecf" tabindex="-1"><a class="header-anchor" href="#bc-government-enterprise-cloud-factory-ecf" aria-hidden="true">#</a> BC Government Enterprise Cloud Factory (ECF)</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$6)} alt="AWS ECF"></p><ul><li>AWS ECF at BC Government</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$4)} alt="AWS ECF"></p><ul><li>The above images shows the relationship between services offered in different scopes of the various contexts of the AWS ECF. BC Government teams will be working primarily in the green area with some services from the blue.</li><li>The green services have been tested by the Cloud Pathfinder team for good fit within the guardrails of the environment.</li><li>Some services are not compatible but in general there is a pattern for teams to use the blue ones if needed.</li></ul><h2 id="ecf-concepts" tabindex="-1"><a class="header-anchor" href="#ecf-concepts" aria-hidden="true">#</a> ECF Concepts</h2><ul><li>AWS ECF Concept</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$4)} alt="AWS ECF concepts"></p><h2 id="public-cloud-ecf-services" tabindex="-1"><a class="header-anchor" href="#public-cloud-ecf-services" aria-hidden="true">#</a> Public Cloud ECF Services</h2><ul><li>AWS</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$4)} alt="compliant services in aws"></p><div class="custom-container tip"><p class="custom-container-title">Acronyms</p><ul><li><strong>CPF:</strong> Cloud pathfinder Team</li><li><strong>ECS</strong> = Elastic Container Service</li><li><strong>EC2</strong> = Elastic Compute Cloud/Virtual Machines</li><li><strong>CSP</strong> = Cloud Service Provider</li><li><strong>Lambdas</strong> = a serverless technology where code is run on CSP maintained servers, turned off when not in use</li><li><strong>IAM</strong> = Identity Access Management of users in the CSP</li><li><strong>AI/ML</strong> = Artificial Intelligence and Machine Learning Cloud services</li></ul></div><ul><li>We are aiming for a common service experience regardless of which cloud you are consuming in BC Government.</li></ul><h2 id="ecf-future-growth" tabindex="-1"><a class="header-anchor" href="#ecf-future-growth" aria-hidden="true">#</a> ECF Future Growth</h2><p>Depicted as follows is the growth of services in AWS over time</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_4$1)} alt="Future growth of AWS ECF"></p><ul><li>Over time, regardless of the particular brand of the cloud, the number of services in the ECF available to BC Government teams will go up and we expect the green set of services to mostly overlap the blue.</li></ul><h2 id="training-landscape" tabindex="-1"><a class="header-anchor" href="#training-landscape" aria-hidden="true">#</a> Training Landscape</h2><p>Below is the Training landscape for the AWS</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_5$1)} alt="Trainig Landscape"></p><h2 id="training-components" tabindex="-1"><a class="header-anchor" href="#training-components" aria-hidden="true">#</a> Training Components</h2><ul><li>AWS ECF Training Components</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_6$1)} alt="Training Components"></p><ul><li>We see here that the training available online and from each Cloud Service Provider like AWS does not take into account the SEAs as these are very cutting-edge environments. Over time the training will catch up. For now, we have customized training so that teams do not get confused when the patterns they learned elsewhere do not function in the ECF. We show them equivalent, safe ways of operating in the ECF.</li></ul><h2 id="training-track" tabindex="-1"><a class="header-anchor" href="#training-track" aria-hidden="true">#</a> Training Track</h2><ul><li>Training Track (all CSP pattern)</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_7$1)} alt="Trainig Track"></p><!--]-->`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var _000300_sea_at_bc_Gov_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$c]]);
var _000300_sea_at_bc_Gov_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000300_sea_at_bc_Gov_html$1
});
var _imports_0$5 = "/cloud-pathfinder/assets/negotiation_service_order.c428f20e.png";
var _imports_1$3 = "/cloud-pathfinder/assets/map.8a3681f7.png";
var _imports_2$3 = "/cloud-pathfinder/assets/forest.7fc2f295.jpg";
var _imports_3$3 = "/cloud-pathfinder/assets/cloud_value_for_ministries.ea4ff1fb.png";
const _sfc_main$v = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="procurement-value-proposition" tabindex="-1"><a class="header-anchor" href="#procurement-value-proposition" aria-hidden="true">#</a> Procurement Value Proposition</h1><h2 id="negotiation-of-our-first-service-order" tabindex="-1"><a class="header-anchor" href="#negotiation-of-our-first-service-order" aria-hidden="true">#</a> Negotiation of our First Service Order</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$5)} alt="negotiation of our first service order"></p><p>Actually it went more like this</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$3)} alt="How it actually went"></p><h2 id="procurement-value-add-for-ministries" tabindex="-1"><a class="header-anchor" href="#procurement-value-add-for-ministries" aria-hidden="true">#</a> Procurement Value Add for Ministries</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$3)} alt="pathway in a forest with trees on either side"></p><ul><li>Don\u2019t have to negotiate privacy, security, legal terms with vendors</li><li>Don\u2019t have to dig into the cloud services</li><li>Only need to focus on describing their project in the PIA and STRA</li></ul><h2 id="cloud-lifecycle-value-add-for-ministries" tabindex="-1"><a class="header-anchor" href="#cloud-lifecycle-value-add-for-ministries" aria-hidden="true">#</a> Cloud LifeCycle Value Add for Ministries</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$3)} alt="cloud value for ministries"></p><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000400_procurement_value_proposition.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var _000400_procurement_value_proposition_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$b]]);
var _000400_procurement_value_proposition_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000400_procurement_value_proposition_html$1
});
const _sfc_main$u = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="shared-responsibility-model" tabindex="-1"><a class="header-anchor" href="#shared-responsibility-model" aria-hidden="true">#</a> Shared Responsibility Model</h1><p>Please refer to <a href="https://developer.gov.bc.ca/Cloud-Pathfinder-Onboarding-Journey/Performing" target="_blank" rel="noopener noreferrer">DevHub`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> for the Shared Responsibility Model.</p><!--]-->`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000500_shared_responsibility_model.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var _000500_shared_responsibility_model_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$a]]);
var _000500_shared_responsibility_model_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000500_shared_responsibility_model_html$1
});
var _imports_0$4 = "/cloud-pathfinder/assets/sea_architecture.89b4b9ff.png";
var _imports_1$2 = "/cloud-pathfinder/assets/path_report.502b5f13.png";
var _imports_2$2 = "/cloud-pathfinder/assets/aws_early_version.d958c085.png";
var _imports_3$2 = "/cloud-pathfinder/assets/bc_gov_aws_sea.756287fc.png";
const _sfc_main$t = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="providing-an-ecf-service" tabindex="-1"><a class="header-anchor" href="#providing-an-ecf-service" aria-hidden="true">#</a> Providing an ECF Service</h1><h2 id="the-ecf-is-non-trivial" tabindex="-1"><a class="header-anchor" href="#the-ecf-is-non-trivial" aria-hidden="true">#</a> The ECF is non-trivial</h2><ul><li>There is a lot of complexity that is simplified by Cloud Pathfinder providing ECF as a service to Ministries</li><li>Several thousand dollars per month to run empty</li><li>Requires a full-time highly-skilled team to stay on top of it</li></ul><p>The Below Images shows the Complexity of the ECF</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$4)} alt="The ECF Architecture"></p><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$2)} alt="Cloud pathfinder easiest path report"></p><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$2)} alt="BC Government AWS Early version"></p><ul><li>AWS calls this a \u201CLightweight Landing Zone\u201D</li><li>Product Custom built by AWS Professional Services \u201CProServe\u201D</li></ul><h2 id="bc-government-aws-ecf" tabindex="-1"><a class="header-anchor" href="#bc-government-aws-ecf" aria-hidden="true">#</a> BC Government AWS ECF</h2><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$2)} alt="BC Government AWS ECF"></p><ul><li>AWS calls this an \u201CEnterprise Landing Zone\u201D</li><li>Product built &amp; maintained by AWS and GoC Government of Canada</li></ul><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000600_Providing_an_sea_service.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var _000600_Providing_an_sea_service_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$9]]);
var _000600_Providing_an_sea_service_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000600_Providing_an_sea_service_html$1
});
var _imports_0$3 = "/cloud-pathfinder/assets/aws_cost_calculator.fbfc49c8.png";
var _imports_1$1 = "/cloud-pathfinder/assets/billing_email.891ee600.png";
var _imports_2$1 = "/cloud-pathfinder/assets/example_report.5d98b0d0.png";
var _imports_3$1 = "/cloud-pathfinder/assets/jv.29011eae.png";
const _sfc_main$s = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="billing" tabindex="-1"><a class="header-anchor" href="#billing" aria-hidden="true">#</a> Billing</h1><h2 id="billing-examples-t-shirt-estimate-scenario-1-small" tabindex="-1"><a class="header-anchor" href="#billing-examples-t-shirt-estimate-scenario-1-small" aria-hidden="true">#</a> Billing Examples T-Shirt Estimate Scenario 1 - Small</h2><p>! Usage based Expense may increase or decrease</p><table><thead><tr><th style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS Services</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Metrics</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">Estimated Expense / Month</th></tr></thead><tbody><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Traffic</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">25 Visitors a day</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"></td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon Simple Storage Service</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">80 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 2.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Load Balancer</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">300KB/second/client connection</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 25.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon DynamoDB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">1 GB, 1 million requests</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 4.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Container Service - Fargate</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">1 container deployed twice, each 2 vCPU, 4GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 48.39</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Data Transfer Out</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">50 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 4.50</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon CloudWatch Logs</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">50 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 28.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS SEA Services(*)</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Amazon GuardDuty, AWS Config, KMS</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 40.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Estimated Monthly Total</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">--</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 129.14</td></tr></tbody></table><ul><li>ALB: 1.08GB/hr, 25connections/sec, 2min duration,1 request per second</li><li>Factor in backups, cold storage, dev &amp; test environments which will increase costs depending on how far a team chooses to implement.</li></ul><h2 id="billing-examples-t-shirt-estimate-scenario-2-medium" tabindex="-1"><a class="header-anchor" href="#billing-examples-t-shirt-estimate-scenario-2-medium" aria-hidden="true">#</a> Billing Examples T-Shirt Estimate Scenario 2 - Medium</h2><p>! Usage based Expense may increase or decrease</p><table><thead><tr><th style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS Services</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Metrics</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">Estimated Expense / Month</th></tr></thead><tbody><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Traffic</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">250 Visitors a day</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"></td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon Simple Storage Service</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">800 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 20.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Load Balancer</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">300KB/second/client connection</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 88.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon DynamoDB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">10 GB, 10 million requests</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 18.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Container Service - Fargate</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">3 container deployed twice, each 2 vCPU, 4GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 145.16</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Data Transfer Out</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">500 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 45.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon CloudWatch Logs</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">500 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 278.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS SEA Services(*)</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Amazon GuardDuty, AWS Config, KMS</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 40.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Estimated Monthly Total</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">--</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 634.16</td></tr></tbody></table><ul><li>ALB: 10.8gb/hr, 250connections/sec, 2min duration,10 request per second</li><li>Factor in backups, cold storage, dev &amp; test environments which will increase costs depending on how far a team chooses to implement.</li></ul><h2 id="billing-examples-t-shirt-estimate-scenario-3-large" tabindex="-1"><a class="header-anchor" href="#billing-examples-t-shirt-estimate-scenario-3-large" aria-hidden="true">#</a> Billing Examples T-Shirt Estimate Scenario 3 - Large</h2><p>! Usage based Expense may increase or decrease</p><table><thead><tr><th style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS Services</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Metrics</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">Estimated Expense / Month</th></tr></thead><tbody><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Traffic</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">2500 Visitors a day</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"></td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon Simple Storage Service</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">8,000 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 200.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Load Balancer</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">300KB/second/client connection</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 712.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon DynamoDB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">100 GB, 100 million requests</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 178.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Elastic Container Service - Fargate</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">3 container deployed twice, each 2 vCPU, 4GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 145.16</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Data Transfer Out</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">5000 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 450.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Amazon CloudWatch Logs</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">5000 GB</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 2,775.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">AWS SEA Services(*)</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Amazon GuardDuty, AWS Config, KMS</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 40.00</td></tr><tr><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">Estimated Monthly Total</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">--</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">$ 4,500.16</td></tr></tbody></table><ul><li>ALB: 10.8gb/hr, 250connections/sec, 2min duration,10 request per second</li><li>Factor in backups, cold storage, dev &amp; test environments which will increase costs depending on how far a team chooses to implement.</li></ul><h2 id="custom-cost-examples" tabindex="-1"><a class="header-anchor" href="#custom-cost-examples" aria-hidden="true">#</a> Custom Cost Examples ?</h2><p>Yes!</p><ul><li>AWS Pricing Calculator</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$3)} alt="Screen Shot of the AWS Price Calculator page"></p><ul><li>Use <a href="https://calculator.aws" target="_blank" rel="noopener noreferrer">AWS Pricing Calculator`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> for now</li></ul><h2 id="billing-process-example" tabindex="-1"><a class="header-anchor" href="#billing-process-example" aria-hidden="true">#</a> Billing Process Example</h2><ul><li>These are samples of periodic billing report files we generate for Ministry teams</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_1$1)} alt="sample weekly billing report email"></p><ul><li><p>Email sent out to owners of the project every week with attached consumption report.</p></li><li><p>The Email contains information about the total cloud consumption cost across the environments and the details of the environments for the period mentioned in the email.</p></li><li><p>The Excell spredsheet attached to the email contains the cost spent on each resource inside the environment</p></li><li><p>Note that the cost also include the baseline costs for running the Secure Environment Accelerator guardrail and logging services within each account. You will see service charges from CloudTrail, CloudWatch, Systems Manager, Secrets Manager, S3, Simple Queue Service, Simple Notification Service, AWS Config, Elastic Load Balancing, GuardDuty, Key Management Service, Lambda, Macie, Security Hub, NAT gateway. If your team has a SandBox account workload environment, you will see EC2 charges due to the independent direct networking. We will will be migrating teams away from SandBoxes to more protected workload environments better aligned to the guardrails.</p></li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_2$1)} alt="Example SpreadSheet Report"></p><h2 id="jv-process" tabindex="-1"><a class="header-anchor" href="#jv-process" aria-hidden="true">#</a> JV Process</h2><ul><li>Accounting process that enables <ul><li>Cloud Services Providers and Shared Services Canada to invoice BC Government, and</li><li>You the ministry teams to pay-per-use to cover this cost while</li><li>We endeavour to provide a transparent experience</li></ul></li><li>Occurs every 3 months</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_3$1)} alt="JV Process"></p><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000700_billing.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var _000700_billing_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$8]]);
var _000700_billing_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000700_billing_html$1
});
var _imports_0$2 = "/cloud-pathfinder/assets/communities1.24a7a9bd.png";
var _imports_1 = "/cloud-pathfinder/assets/communities3.e6e3b8b8.png";
var _imports_2 = "/cloud-pathfinder/assets/communities2.7c4a61df.png";
var _imports_3 = "/cloud-pathfinder/assets/teams.86d58058.png";
var _imports_4 = "/cloud-pathfinder/assets/rocket_chat.b4b8d505.png";
var _imports_5 = "/cloud-pathfinder/assets/teams_rocketchat.85fabf93.png";
var _imports_6 = "/cloud-pathfinder/assets/teams_logo.93d00942.png";
var _imports_7 = "/cloud-pathfinder/assets/rocketchat_logo.1e5dfda2.png";
const _sfc_main$r = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="communities-of-practice" tabindex="-1"><a class="header-anchor" href="#communities-of-practice" aria-hidden="true">#</a> Communities of practice</h1><h2 id="value-of-communities" tabindex="-1"><a class="header-anchor" href="#value-of-communities" aria-hidden="true">#</a> Value of Communities</h2><ul><li>A strong community will <ul><li>Provide an answer before the platform team can <ul><li>Operational cost savings</li><li>Faster Service turnarounds</li></ul></li><li>Self-organize to co-create reusable artifacts <ul><li>Reduce duplication and one-offs</li><li>Lighten application maintenance lifecycle requirements</li></ul></li><li>Create Stewards <ul><li>Early adopters become Influencers</li><li>Influencers become Stewards</li></ul></li></ul></li></ul><h2 id="customer-focus-\u2013-3-cops" tabindex="-1"><a class="header-anchor" href="#customer-focus-\u2013-3-cops" aria-hidden="true">#</a> Customer Focus \u2013 3 CoPs</h2><div class="custom-container tip"><p class="custom-container-title">Acronyms</p><ul><li><p><strong>OCIO</strong> = Office of the Associate Deputy Minister and Government Chief Information Officer</p></li><li><p><strong>CoP</strong> = Community of Practise</p></li><li><p><strong>SecOps</strong> = OCIO Security Operations Team</p></li><li><p><strong>MISO</strong> = Ministry Information Security Officer, embedded as part of the developer team</p></li></ul></div><ul><li>Our Customers: Project Managers / Product Owners / Expense Authorities</li><li>Our Users: Developer Teams</li><li>Compliance Users: Security Operations OCIO, MISOs</li></ul><h2 id="service-design-customer-focus" tabindex="-1"><a class="header-anchor" href="#service-design-customer-focus" aria-hidden="true">#</a> Service Design Customer Focus</h2><div class="custom-container tip"><p class="custom-container-title">Acronyms</p><ul><li><strong>UX:</strong> User Experience experts</li><li><strong>SD:</strong> Service Designer</li></ul></div><ul><li>UX / SD engage with 3 Customer/Users groups <ul><li>Gain deep understanding of needs, workflows, pain points</li><li>Create tickets from this work prioritizing needs</li><li>Focus on delivery time <ul><li>Self-serve or fast turnaround</li><li>Reliability</li><li>Tools teams need</li></ul></li></ul></li></ul><h2 id="strong-communities-in-bc-government" tabindex="-1"><a class="header-anchor" href="#strong-communities-in-bc-government" aria-hidden="true">#</a> Strong Communities in BC Government</h2><ul><li>Devops Commons</li></ul><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$2)} alt="image of community in BC Government"><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="image of community in BC Government"><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="image of community in BC Government"></p><ul><li>Features <ul><li>Every 2 Months</li><li>History from 2016 onwards</li><li>Community Focused</li><li>Daily Open Participation</li></ul></li><li>Promotes <ul><li>Collaboration on Shared efforts</li><li>Networking across silos</li><li>Best practices via Stewards</li></ul></li></ul><h2 id="focus-of-teams-and-rocket-chat" tabindex="-1"><a class="header-anchor" href="#focus-of-teams-and-rocket-chat" aria-hidden="true">#</a> Focus of Teams and Rocket Chat</h2><p>Focus on Teams</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="image of microsoft teams"></p><ul><li>Teams <ul><li>&quot;The Workshop&quot;, it <ul><li>Internally connects team</li><li>Eases conferencing out</li><li>Is focused primarily on <ul><li>Leadership</li><li>Scrum Masters</li><li>Employees</li></ul></li></ul></li></ul></li></ul><p>Focus of RocketChat</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_4)} alt="image of rocketchat"></p><ul><li>RocketChat <ul><li>\u201CThe Bazaar\u201D, and just like OCIO Connect, it <ul><li>Connects People</li><li>Highlights Best Practices</li><li>Is Inclusive <ul><li>Contractors</li><li>vendors</li><li>Leadership</li><li>Scrum Masters</li><li>Employees</li></ul></li></ul></li></ul></li></ul><p>Recommend Both!</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_5)} alt="image of rocket chat"></p><ul><li>Bazaars and Workshops <ul><li>Together both provide team&#39;s collaboration space and access to community</li><li>Allows others to find your team and modern video call meetings</li></ul></li></ul><p>A Teams platform</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_6)} alt="logo of microsoft teams"></p><p>A Community platform</p><p><img${serverRenderer.ssrRenderAttr("src", _imports_7)} alt="Rocket chat logo"></p><ul><li><p>Cloud Pathfinder is available on both</p></li><li><p>Cloud Pathfinder Rocket chat channel : <a href="https://chat.developer.gov.bc.ca/channel/aws-lz2" target="_blank" rel="noopener noreferrer">aws-lz2`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000800_communities_of_practise.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var _000800_communities_of_practise_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$7]]);
var _000800_communities_of_practise_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000800_communities_of_practise_html$1
});
const _sfc_main$q = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="service-levels" tabindex="-1"><a class="header-anchor" href="#service-levels" aria-hidden="true">#</a> Service Levels</h1><ul><li>Cloud Pathfinder Service Levels <ul><li><p>Provide training for teams</p></li><li><p>Provision new team members (0.5 business day turnaround)</p></li><li><p>Facilitate and respond to open and private support channels</p></li><li><p>Connect vendor support (cut through vendor complexity)</p></li><li><p>Review and include new requests for cloud components (usually 3 week turnaround)</p></li><li><p>Provide clear billing in multi-tenancy</p></li><li><p>Remove overhead of offboarding contractors or departing employees (IDIR gone? AWS gone!)</p></li></ul></li></ul><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/000900_service_levels.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var _000900_service_levels_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$6]]);
var _000900_service_levels_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _000900_service_levels_html$1
});
const _sfc_main$p = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h1><ul><li>Demo of Authentication to AWS <ul><li><p>Showing lack of users to manage</p></li><li><p>Make your life easy to not have to delete users</p></li></ul></li></ul><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/001000_demo.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var _001000_demo_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$5]]);
var _001000_demo_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _001000_demo_html$1
});
var _imports_0$1 = "/cloud-pathfinder/assets/questions.cd1fc2c4.png";
const _sfc_main$o = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="questions" tabindex="-1"><a class="header-anchor" href="#questions" aria-hidden="true">#</a> Questions ?</h1><p><img${serverRenderer.ssrRenderAttr("src", _imports_0$1)} alt="image for questions and anwers"></p><ul><li>*This is where we would normally have a discussion if we were doing a live session</li></ul><!--]-->`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/001100_questions.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var _001100_questions_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$4]]);
var _001100_questions_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _001100_questions_html$1
});
const _sfc_main$n = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="training-resources" tabindex="-1"><a class="header-anchor" href="#training-resources" aria-hidden="true">#</a> Training &amp; Resources</h1><ul><li><p><a href="https://docs.aws.amazon.com/whitepapers/latest/public-sector-cloud-transformation/secure-environment-accelerator-canada.html" target="_blank" rel="noopener noreferrer">Secure Environment Accelerator (Canada)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p><a href="https://aws.amazon.com/blogs/publicsector/building-serverless-web-application-architecture-aws-secure-environment-accelerator-asea/" target="_blank" rel="noopener noreferrer">Building a serverless web application architecture for the AWS Secure Environment Accelerator`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p><a href="https://aws.amazon.com/serverless/serverlessrepo/?nc2=type_a" target="_blank" rel="noopener noreferrer">AWS Serverless Application Repository`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p><a href="https://aws.amazon.com/blogs/publicsector/aws-secure-environment-accelerator-connectivity-with-vmware-cloud-on-aws/" target="_blank" rel="noopener noreferrer">AWS Secure Environment Accelerator (ASEA) connectivity with VMware Cloud on AWS`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li><li><p><a href="https://aws.amazon.com/blogs/publicsector/canadian-centre-for-cyber-security-adds-additional-aws-services-to-its-assessment-of-the-aws-canada-central-region/" target="_blank" rel="noopener noreferrer">Canadian Centre for Cyber Security adds additional AWS services to its assessment of the AWS Canada (Central) Region`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/001200_training.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var _001200_training_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$3]]);
var _001200_training_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _001200_training_html$1
});
var _imports_0 = "/cloud-pathfinder/assets/cpf_logo.d53bd5ec.png";
const _sfc_main$m = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><p><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="logo called Cloud Pathfinder"></p><h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><p>Welcome to the Cloud Pathfinder Pre-Reading Material which is the information Pack for BC Gov Ministry Teams Considering Cloud.</p><p>Today we will go over the below topics</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000100_who_are_you.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Who are You ?`);
      } else {
        return [
          vue.createTextVNode("Who are You ?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000200_About_bcgov_cloud.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About BC Gov Cloud`);
      } else {
        return [
          vue.createTextVNode("About BC Gov Cloud")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ECF at BC Gov`);
      } else {
        return [
          vue.createTextVNode("ECF at BC Gov")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000400_procurement_value_proposition.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Procurement Value Proposition`);
      } else {
        return [
          vue.createTextVNode("Procurement Value Proposition")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000500_shared_responsibility_model.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Shared Responsibility`);
      } else {
        return [
          vue.createTextVNode("Shared Responsibility")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000600_Providing_an_sea_service.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Providing an ECF service`);
      } else {
        return [
          vue.createTextVNode("Providing an ECF service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000700_billing.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Billing`);
      } else {
        return [
          vue.createTextVNode("Billing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000800_communities_of_practise.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Communities of Practice`);
      } else {
        return [
          vue.createTextVNode("Communities of Practice")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/000900_service_levels.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Service Levels`);
      } else {
        return [
          vue.createTextVNode("Service Levels")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/001000_demo.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Demos`);
      } else {
        return [
          vue.createTextVNode("Demos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/001100_questions.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Questions &amp; Answers`);
      } else {
        return [
          vue.createTextVNode("Questions & Answers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/Documentation/Pre-reading-material/001200_training.html" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Training &amp; Resources`);
      } else {
        return [
          vue.createTextVNode("Training & Resources")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><!--]-->`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/Documentation/Pre-reading-material/index.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var index_html$5 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$2]]);
var index_html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$5
});
const _sfc_main$l = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/404.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$1]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _404_html$1
});
const data$n = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroText": null,
    "heroImage": "/cloud_pathfinder_logo_2022.png",
    "tagline": null,
    "actions": [
      {
        "text": "Quick Start",
        "link": "/guide/",
        "type": "primary"
      },
      {
        "text": "Cloud 101",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Compute and Storage",
        "details": "Compliant Compute and Storage in the cloud"
      },
      {
        "title": "Compute and Storage",
        "details": "Compliant Compute and Storage in the cloud"
      },
      {
        "title": "Compute and Storage",
        "details": "Compliant Compute and Storage in the cloud"
      }
    ],
    "footer": "The CloudPathFinder Team",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "index.md"
};
var index_html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$n
});
const data$m = {
  "key": "v-3f14a146",
  "path": "/Github_OIDC/01_Intraduction.html",
  "title": "1. Introduction",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Note",
      "slug": "note",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Github_OIDC/01_Intraduction.md"
};
var _01_Intraduction_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$m
});
const data$l = {
  "key": "v-6f5579e8",
  "path": "/Github_OIDC/02_Configuring_AWS_to_use_OIDC.html",
  "title": "2. Configuring AWS to use OIDC",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "2.1 Crafting policies",
      "slug": "_2-1-crafting-policies",
      "children": []
    },
    {
      "level": 2,
      "title": "2.2 Creating a Roles",
      "slug": "_2-2-creating-a-roles",
      "children": []
    },
    {
      "level": 2,
      "title": "Note",
      "slug": "note",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Github_OIDC/02_Configuring_AWS_to_use_OIDC.md"
};
var _02_Configuring_AWS_to_use_OIDC_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$l
});
const data$k = {
  "key": "v-3fb1a346",
  "path": "/Github_OIDC/03_Configuring_OIDC_in_GitHub.html",
  "title": "3. Configuring OIDC in GitHub",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Github_OIDC/03_Configuring_OIDC_in_GitHub.md"
};
var _03_Configuring_OIDC_in_GitHub_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$k
});
const data$j = {
  "key": "v-166910e4",
  "path": "/Github_OIDC/04_Refining_the_policies.html",
  "title": "4. Refining the policies",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Github_OIDC/04_Refining_the_policies.md"
};
var _04_Refining_the_policies_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$j
});
const data$i = {
  "key": "v-6a8b3e72",
  "path": "/Github_OIDC/05_readmore.html",
  "title": "Read more",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "implementation examples",
      "slug": "implementation-examples",
      "children": []
    },
    {
      "level": 2,
      "title": "Documentation",
      "slug": "documentation",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Github_OIDC/05_readmore.md"
};
var _05_readmore_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$i
});
const data$h = {
  "key": "v-b4e84c9a",
  "path": "/Github_OIDC/",
  "title": "Overview",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Who is this for?",
      "slug": "who-is-this-for",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Github_OIDC/readme.md"
};
var index_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$h
});
const data$g = {
  "key": "v-ba934fd8",
  "path": "/config/",
  "title": "Config",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "foo",
      "slug": "foo",
      "children": []
    },
    {
      "level": 2,
      "title": "bar",
      "slug": "bar",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "config/README.md"
};
var index_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$g
});
const data$f = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "Introduction",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/README.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$f
});
const data$e = {
  "key": "v-79e93bb0",
  "path": "/guide/using-vue.html",
  "title": "Using Vue in Markdown",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Browser API Access Restrictions",
      "slug": "browser-api-access-restrictions",
      "children": []
    },
    {
      "level": 2,
      "title": "",
      "slug": "",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/using-vue.md"
};
var usingVue_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$e
});
const data$d = {
  "key": "v-6c4156d6",
  "path": "/Documentation/Pre-reading-material/000100_who_are_you.html",
  "title": "Who are you ?",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Take a look at your team",
      "slug": "take-a-look-at-your-team",
      "children": []
    },
    {
      "level": 2,
      "title": "Product Owner",
      "slug": "product-owner",
      "children": []
    },
    {
      "level": 2,
      "title": "Security",
      "slug": "security",
      "children": []
    },
    {
      "level": 2,
      "title": "Developer",
      "slug": "developer",
      "children": []
    },
    {
      "level": 2,
      "title": "Audience",
      "slug": "audience",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000100_who_are_you.md"
};
var _000100_who_are_you_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$d
});
const data$c = {
  "key": "v-198dcdd4",
  "path": "/Documentation/Pre-reading-material/000200_About_bcgov_cloud.html",
  "title": "About BC Government Cloud",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000200_About_bcgov_cloud.md"
};
var _000200_About_bcgov_cloud_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$c
});
const data$b = {
  "key": "v-f5bac64c",
  "path": "/Documentation/Pre-reading-material/000300_sea_at_bc_Gov.html",
  "title": "ECF at BC Government",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "BC Government Enterprise Cloud Factory (ECF)",
      "slug": "bc-government-enterprise-cloud-factory-ecf",
      "children": []
    },
    {
      "level": 2,
      "title": "ECF Concepts",
      "slug": "ecf-concepts",
      "children": []
    },
    {
      "level": 2,
      "title": "Public Cloud ECF Services",
      "slug": "public-cloud-ecf-services",
      "children": []
    },
    {
      "level": 2,
      "title": "ECF Future Growth",
      "slug": "ecf-future-growth",
      "children": []
    },
    {
      "level": 2,
      "title": "Training Landscape",
      "slug": "training-landscape",
      "children": []
    },
    {
      "level": 2,
      "title": "Training Components",
      "slug": "training-components",
      "children": []
    },
    {
      "level": 2,
      "title": "Training Track",
      "slug": "training-track",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000300_sea_at_bc_Gov.md"
};
var _000300_sea_at_bc_Gov_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$b
});
const data$a = {
  "key": "v-47972128",
  "path": "/Documentation/Pre-reading-material/000400_procurement_value_proposition.html",
  "title": "Procurement Value Proposition",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Negotiation of our First Service Order",
      "slug": "negotiation-of-our-first-service-order",
      "children": []
    },
    {
      "level": 2,
      "title": "Procurement Value Add for Ministries",
      "slug": "procurement-value-add-for-ministries",
      "children": []
    },
    {
      "level": 2,
      "title": "Cloud LifeCycle Value Add for Ministries",
      "slug": "cloud-lifecycle-value-add-for-ministries",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000400_procurement_value_proposition.md"
};
var _000400_procurement_value_proposition_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$a
});
const data$9 = {
  "key": "v-23ebbb5c",
  "path": "/Documentation/Pre-reading-material/000500_shared_responsibility_model.html",
  "title": "Shared Responsibility Model",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000500_shared_responsibility_model.md"
};
var _000500_shared_responsibility_model_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$9
});
const data$8 = {
  "key": "v-33831eca",
  "path": "/Documentation/Pre-reading-material/000600_Providing_an_sea_service.html",
  "title": "Providing an ECF Service",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "The ECF is non-trivial",
      "slug": "the-ecf-is-non-trivial",
      "children": []
    },
    {
      "level": 2,
      "title": "BC Government AWS ECF",
      "slug": "bc-government-aws-ecf",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000600_Providing_an_sea_service.md"
};
var _000600_Providing_an_sea_service_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$8
});
const data$7 = {
  "key": "v-5d500bf2",
  "path": "/Documentation/Pre-reading-material/000700_billing.html",
  "title": "Billing",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Billing Examples T-Shirt Estimate Scenario 1 - Small",
      "slug": "billing-examples-t-shirt-estimate-scenario-1-small",
      "children": []
    },
    {
      "level": 2,
      "title": "Billing Examples T-Shirt Estimate Scenario 2 - Medium",
      "slug": "billing-examples-t-shirt-estimate-scenario-2-medium",
      "children": []
    },
    {
      "level": 2,
      "title": "Billing Examples T-Shirt Estimate Scenario 3 - Large",
      "slug": "billing-examples-t-shirt-estimate-scenario-3-large",
      "children": []
    },
    {
      "level": 2,
      "title": "Custom Cost Examples ?",
      "slug": "custom-cost-examples",
      "children": []
    },
    {
      "level": 2,
      "title": "Billing Process Example",
      "slug": "billing-process-example",
      "children": []
    },
    {
      "level": 2,
      "title": "JV Process",
      "slug": "jv-process",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000700_billing.md"
};
var _000700_billing_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$7
});
const data$6 = {
  "key": "v-9d1fc074",
  "path": "/Documentation/Pre-reading-material/000800_communities_of_practise.html",
  "title": "Communities of practice",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Value of Communities",
      "slug": "value-of-communities",
      "children": []
    },
    {
      "level": 2,
      "title": "Customer Focus \u2013 3 CoPs",
      "slug": "customer-focus-\u2013-3-cops",
      "children": []
    },
    {
      "level": 2,
      "title": "Service Design Customer Focus",
      "slug": "service-design-customer-focus",
      "children": []
    },
    {
      "level": 2,
      "title": "Strong Communities in BC Government",
      "slug": "strong-communities-in-bc-government",
      "children": []
    },
    {
      "level": 2,
      "title": "Focus of Teams and Rocket Chat",
      "slug": "focus-of-teams-and-rocket-chat",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000800_communities_of_practise.md"
};
var _000800_communities_of_practise_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$6
});
const data$5 = {
  "key": "v-4bec5dd9",
  "path": "/Documentation/Pre-reading-material/000900_service_levels.html",
  "title": "Service Levels",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/000900_service_levels.md"
};
var _000900_service_levels_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$5
});
const data$4 = {
  "key": "v-2b892ac5",
  "path": "/Documentation/Pre-reading-material/001000_demo.html",
  "title": "Demo",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/001000_demo.md"
};
var _001000_demo_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$4
});
const data$3 = {
  "key": "v-755bd53c",
  "path": "/Documentation/Pre-reading-material/001100_questions.html",
  "title": "Questions ?",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/001100_questions.md"
};
var _001100_questions_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$3
});
const data$2 = {
  "key": "v-00f68eb0",
  "path": "/Documentation/Pre-reading-material/001200_training.html",
  "title": "Training & Resources",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/001200_training.md"
};
var _001200_training_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$2
});
const data$1 = {
  "key": "v-3b5059cf",
  "path": "/Documentation/Pre-reading-material/",
  "title": "Overview",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1693352736e3,
    "contributors": [
      {
        "name": "Luke Gonis",
        "email": "Luke.Gonis@gov.bc.ca",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "Documentation/Pre-reading-material/readme.md"
};
var index_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$1
});
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data
});
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$k
});
const _sfc_main$j = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$g, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$b, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData$2();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData$2();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData$2();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$3, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$2, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData$2();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$1, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$4, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createVueApp = createVueApp;
