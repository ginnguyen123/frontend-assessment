import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const data = [
  {
    title: "Section 1",
    content: "<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>"
  },
  {
    title: "Section 2",
    content: "<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>"
  },
  {
    title: "Section 3",
    content: "<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
  },
  {
    title: "Section 4",
    content: "<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "example-2",
  __ssrInlineRender: true,
  setup(__props) {
    const key = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "example-2 dc-flex" }, _attrs))} data-v-439cec21><div class="dc-flex example-2__tab-header shadow" data-v-439cec21><!--[-->`);
      ssrRenderList(unref(data), (value) => {
        _push(`<section class="${ssrRenderClass([
          "example-2__tab-header__item",
          { "active": unref(key) === value.title }
        ])}" data-v-439cec21>${ssrInterpolate(value.title)}</section>`);
      });
      _push(`<!--]--></div><div class="example-2__tab-indicator" data-v-439cec21></div><div class="example-2__tab-body" data-v-439cec21><!--[-->`);
      ssrRenderList(unref(data), (value) => {
        var _a;
        _push(`<div class="${ssrRenderClass([
          "example-2__tab-body__detail",
          { "active": unref(key) === value.title }
        ])}" data-v-439cec21><h1 data-v-439cec21>${ssrInterpolate(value.title)}</h1><div data-v-439cec21>${(_a = value.content) != null ? _a : ""}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/example-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const example2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-439cec21"]]);

export { example2 as default };
//# sourceMappingURL=example-2-C36wEfgG.mjs.map
