import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { B as Button } from "./Button-DmU1nAhM.js";
import { _ as _export_sfc } from "../server.mjs";
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
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-container" }, _attrs))} data-v-641ef4c9>`);
      _push(ssrRenderComponent(Button, {
        title: "Example 1",
        path: "/example-1"
      }, null, _parent));
      _push(ssrRenderComponent(Button, {
        title: "Example 2",
        path: "/example-2"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-641ef4c9"]]);
export {
  Home as default
};
//# sourceMappingURL=home-1tYyhnmG.js.map
