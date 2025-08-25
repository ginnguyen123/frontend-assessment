import { withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import Home from "./home-1tYyhnmG.js";
import { n as navigateTo } from "../server.mjs";
import "./Button-DmU1nAhM.js";
import "D:/frontend-assessment/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "D:/frontend-assessment/node_modules/unctx/dist/index.mjs";
import "D:/frontend-assessment/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/frontend-assessment/node_modules/radix3/dist/index.mjs";
import "D:/frontend-assessment/node_modules/defu/dist/defu.mjs";
import "D:/frontend-assessment/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    [__temp, __restore] = withAsyncContext(() => navigateTo("/home")), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Home), null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DjrT3Vek.js.map
