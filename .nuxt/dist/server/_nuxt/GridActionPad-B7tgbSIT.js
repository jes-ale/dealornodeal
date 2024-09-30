import { _ as __nuxt_component_0 } from "./nuxt-link-D35ckuRb.js";
import { mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
const _sfc_main = {
  __name: "GridActionPad",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex justify-center" }, _attrs))}><div class="grid grid-cols-2 gap-1 lg:grid-cols-4 lg:gap-4"><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link,
          key: item.id,
          class: "border border-black p-2 h-32 w-32 flex flex-col items-center justify-center hover:scale-105 hover:bg-rose-100 hover:font-bold hover:shadow-lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: item.icon,
                class: "w-full h-full"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: item.icon,
                  class: "w-full h-full"
                }, null, 8, ["icon"]),
                createVNode("span", { class: "text-sm" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/GridActionPad.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GridActionPad = _sfc_main;
export {
  GridActionPad as G
};
//# sourceMappingURL=GridActionPad-B7tgbSIT.js.map
