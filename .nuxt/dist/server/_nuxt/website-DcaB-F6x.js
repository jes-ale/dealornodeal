import { u as useI18n } from "../server.mjs";
import { defineComponent, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "klona";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "framesync";
import "popmotion";
import "style-value-types";
import "@vue/shared";
import "js-cookie";
import "cookie-es";
import "is-https";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "website",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = resolveComponent("Header");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col no-scrollbar overflow-y-scroll h-screen w-screen text-black text-sm bg-neutral-100 font-sans subpixel-antialiased slashed-zero diagonal-fractions" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, { class: "w-screen h-auto" }, null, _parent));
      _push(`<section as="div" class="w-full h-full">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/website.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=website-DcaB-F6x.js.map
