import { _ as __nuxt_component_0 } from './nuxt-layout-CbZs1x10.mjs';
import { _ as _export_sfc, u as useI18n } from './server.mjs';
import { useSSRContext, defineComponent, ref, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { G as GridActionPad } from './GridActionPad-B7tgbSIT.mjs';
import { Navigation, Pagination, Scrollbar, Autoplay, Parallax, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'vue-router';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unhead';
import '@unhead/shared';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';
import 'is-https';
import './nuxt-link-D35ckuRb.mjs';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Navigation, Pagination, Scrollbar, Autoplay, Parallax, EffectCreative];
    useI18n();
    const menus = ref([
      {
        name: "Home",
        menuItems: [
          { id: 1, name: "Entrar al juego", link: "/game", icon: "bxs:conversation" }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-cbbeebfc>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full flex items-start justify-center flex-col overflow-auto" data-v-cbbeebfc${_scopeId}><div class="w-full h-auto flex items-start justify-center flex-grow" data-v-cbbeebfc${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              "slides-per-view": 1,
              "space-between": 5,
              navigation: "",
              scrollbar: { draggable: true },
              modules,
              pagination: { clickable: true },
              class: "flex w-full h-full justify-center items-start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(menus), (menu) => {
                    _push3(ssrRenderComponent(unref(SwiperSlide), {
                      key: menu.name,
                      class: "flex w-full h-full text-center justify-center font-bold text-xs"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-black relative w-full h-full flex flex-col space-y-2 items-center justify- pt-6 px-2" data-v-cbbeebfc${_scopeId3}><h1 class="text-md p-2 border border-black w-auto bg-rose-100 font-bold" data-v-cbbeebfc${_scopeId3}>${ssrInterpolate(menu.name)}</h1>`);
                          _push4(ssrRenderComponent(GridActionPad, {
                            items: menu.menuItems
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-black relative w-full h-full flex flex-col space-y-2 items-center justify- pt-6 px-2" }, [
                              createVNode("h1", { class: "text-md p-2 border border-black w-auto bg-rose-100 font-bold" }, toDisplayString(menu.name), 1),
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
                        class: "flex w-full h-full text-center justify-center font-bold text-xs"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-black relative w-full h-full flex flex-col space-y-2 items-center justify- pt-6 px-2" }, [
                            createVNode("h1", { class: "text-md p-2 border border-black w-auto bg-rose-100 font-bold" }, toDisplayString(menu.name), 1),
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full flex items-start justify-center flex-col overflow-auto" }, [
                createVNode("div", { class: "w-full h-auto flex items-start justify-center flex-grow" }, [
                  createVNode(unref(Swiper), {
                    "slides-per-view": 1,
                    "space-between": 5,
                    navigation: "",
                    scrollbar: { draggable: true },
                    modules,
                    pagination: { clickable: true },
                    class: "flex w-full h-full justify-center items-start"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(menus), (menu) => {
                        return openBlock(), createBlock(unref(SwiperSlide), {
                          key: menu.name,
                          class: "flex w-full h-full text-center justify-center font-bold text-xs"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-black relative w-full h-full flex flex-col space-y-2 items-center justify- pt-6 px-2" }, [
                              createVNode("h1", { class: "text-md p-2 border border-black w-auto bg-rose-100 font-bold" }, toDisplayString(menu.name), 1),
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cbbeebfc"]]);

export { index as default };
//# sourceMappingURL=index-CEgGgxzE.mjs.map
