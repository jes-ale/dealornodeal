import { defineComponent, ref, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import "./event-bus-1ebWZuYj.js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Toast",
  __ssrInlineRender: true,
  setup(__props) {
    const toastPile = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(toastPile).length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-auto w-full lg:w-1/4 p-6 space-y-1 flex-col text-md text-left font-sans absolute bottom-0 right-0 z-50 overflow-auto" }, _attrs))} data-v-13555f87><!--[-->`);
        ssrRenderList(unref(toastPile), (toastItem, index) => {
          _push(`<div class="shadow-xl flex" data-v-13555f87><div class="${ssrRenderClass([[toastItem.show ? "animate-fade-in" : "animate-fade-out"], "w-full h-1/8 border rounded"])}" data-v-13555f87>`);
          if (toastItem.type === "success") {
            _push(`<div class="w-full h-full" data-v-13555f87><button class="text-left h-full w-full p-2 rounded border border-transparent bg-green-300 bg-opacity-50 hover:bg-opacity-25" data-v-13555f87><h1 class="text-lg flex font-bold text-emerald-700" data-v-13555f87>${ssrInterpolate(toastItem.title)}</h1><p class="text-sm h-24 text-emerald-700" data-v-13555f87>${ssrInterpolate(toastItem.message)}</p></button></div>`);
          } else {
            _push(`<!---->`);
          }
          if (toastItem.type === "warning") {
            _push(`<div class="w-full h-full" data-v-13555f87><button class="text-left h-full w-full p-2 rounded border border-transparent bg-yellow-300 bg-opacity-50 hover:bg-opacity-25" data-v-13555f87><h1 class="text-lg flex font-bold text-amber-700" data-v-13555f87>${ssrInterpolate(`${toastItem.title} `)}</h1><p class="text-sm h-24 text-amber-700" data-v-13555f87>${ssrInterpolate(toastItem.message)}</p></button></div>`);
          } else {
            _push(`<!---->`);
          }
          if (toastItem.type === "failure") {
            _push(`<div class="w-full h-full" data-v-13555f87><button class="text-left h-full w-full p-2 rounded border border-transparent bg-red-300 bg-opacity-50 hover:bg-opacity-25" data-v-13555f87><h1 class="text-lg flex font-bold text-red-700" data-v-13555f87>${ssrInterpolate(toastItem.title)}</h1><p class="text-sm h-24 text-red-700" data-v-13555f87>${ssrInterpolate(toastItem.message)}</p></button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Toast.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Toast = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13555f87"]]);
export {
  Toast as T
};
//# sourceMappingURL=Toast-gQ6R3mjs.js.map
