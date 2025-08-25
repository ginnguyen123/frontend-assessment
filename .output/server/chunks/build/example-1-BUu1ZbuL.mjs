import { defineComponent, mergeProps, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { B as Button } from './Button-DmU1nAhM.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "example-1-banner dc-flex" }, _attrs))} data-v-b9b9c1df><img id="img-banner" src="https://placehold.co/1920x650" data-v-b9b9c1df><div class="example-1-banner__text dc-flex" data-v-b9b9c1df><h1 class="color-white" data-v-b9b9c1df>Hello Developer!</h1><span class="text color-white" data-v-b9b9c1df>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Example1/Banner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b9b9c1df"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CardItem",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card dc-flex shadow" }, _attrs))} data-v-b62f690d><img${ssrRenderAttr("src", props.data.image)} data-v-b62f690d><div class="card__text dc-flex" data-v-b62f690d><p class="text" data-v-b62f690d>${ssrInterpolate(props.data.content)}</p></div>`);
      _push(ssrRenderComponent(Button, { title: "READ MORE" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Example1/CardItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CardItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b62f690d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref([
      {
        image: "https://placehold.co/400x300",
        content: "Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere."
      },
      {
        image: "https://placehold.co/400x300",
        content: "Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi."
      },
      {
        image: "https://placehold.co/400x300",
        content: "Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-container" }, _attrs))} data-v-bbd749b2><!--[-->`);
      ssrRenderList(unref(data), (value) => {
        _push(ssrRenderComponent(CardItem, { data: value }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Example1/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bbd749b2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "example-1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "example-1-container" }, _attrs))} data-v-48ee0bf3>`);
      _push(ssrRenderComponent(Banner, null, null, _parent));
      _push(ssrRenderComponent(Card, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/example-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const example1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-48ee0bf3"]]);

export { example1 as default };
//# sourceMappingURL=example-1-BUu1ZbuL.mjs.map
