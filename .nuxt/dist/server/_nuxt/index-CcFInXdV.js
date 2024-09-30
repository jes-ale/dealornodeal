import { _ as __nuxt_component_0 } from "./nuxt-layout-CbZs1x10.js";
import { u as useI18n } from "../server.mjs";
import { ref, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { G as GridActionPad } from "./GridActionPad-B7tgbSIT.js";
import { Navigation, Pagination, Scrollbar, Autoplay, Parallax, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "@iconify/vue";
import "vue-router";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
import "./nuxt-link-D35ckuRb.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Navigation, Pagination, Scrollbar, Autoplay, Parallax, EffectCreative];
    useI18n();
    const menus = ref(
      [
        {
          name: "ERP",
          menuItems: [
            { id: 0, name: "Create", link: "/user/form", icon: "codicon:new-file" },
            { id: 1, name: "List", link: "/user/list", icon: "mdi:table-large" }
          ]
        }
      ]
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              "slides-per-view": 1,
              "space-between": 5,
              navigation: "",
              scrollbar: { draggable: true },
              modules,
              pagination: { clickable: true },
              class: "flex w-full h-full justify-center items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(menus), (menu) => {
                    _push3(ssrRenderComponent(unref(SwiperSlide), {
                      key: menu.name,
                      class: "flex w-full h-full text-center font-bold text-xs"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-black relative w-full h-full flex items-center justify-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(GridActionPad, {
                            items: menu.menuItems
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-black relative w-full h-full flex items-center justify-center" }, [
                              createVNode(GridActionPad, {
                                items: menu.menuItems
                              }, null, 8, ["items"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (menu) => {
                      return openBlock(), createBlock(unref(SwiperSlide), {
                        key: menu.name,
                        class: "flex w-full h-full text-center font-bold text-xs"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-black relative w-full h-full flex items-center justify-center" }, [
                            createVNode(GridActionPad, {
                              items: menu.menuItems
                            }, null, 8, ["items"])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                createVNode(unref(Swiper), {
                  "slides-per-view": 1,
                  "space-between": 5,
                  navigation: "",
                  scrollbar: { draggable: true },
                  modules,
                  pagination: { clickable: true },
                  class: "flex w-full h-full justify-center items-center"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (menu) => {
                      return openBlock(), createBlock(unref(SwiperSlide), {
                        key: menu.name,
                        class: "flex w-full h-full text-center font-bold text-xs"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-black relative w-full h-full flex items-center justify-center" }, [
                            createVNode(GridActionPad, {
                              items: menu.menuItems
                            }, null, 8, ["items"])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CcFInXdV.js.map
