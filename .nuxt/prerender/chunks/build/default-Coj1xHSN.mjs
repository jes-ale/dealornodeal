import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { u as usePocketBase, E as EventBus } from './usePocketBase-BmK3GMf1.mjs';
import { u as useI18n, _ as _export_sfc, a as useRouter$1 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, ref, computed, watch } from 'file:///home/jes/dealornodeal_web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'file:///home/jes/dealornodeal_web/node_modules/vue/server-renderer/index.mjs';
import { Icon } from 'file:///home/jes/dealornodeal_web/node_modules/@iconify/vue/dist/iconify.mjs';
import { T as Toast } from './Toast-gQ6R3mjs.mjs';
import { useRoute, useRouter } from 'file:///home/jes/dealornodeal_web/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/ufo/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/mitt/dist/mitt.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/pocketbase/dist/pocketbase.es.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/ofetch/dist/node.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/hookable/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/unctx/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/h3/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/unhead/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/radix3/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/framesync/dist/es/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/popmotion/dist/es/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/style-value-types/dist/es/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file:///home/jes/dealornodeal_web/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/is-https/dist/index.mjs';
import '../runtime.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/destr/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/klona/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/scule/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/ohash/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/unstorage/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file:///home/jes/dealornodeal_web/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/jes/dealornodeal_web/node_modules/pathe/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/unified/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/mdast-util-to-string/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/micromark/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/unist-util-stringify-position/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/micromark-util-character/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/micromark-util-chunked/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/micromark-util-resolve-all/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/slugify/slugify.js';
import 'file:///home/jes/dealornodeal_web/node_modules/remark-parse/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/remark-rehype/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/remark-mdc/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/hast-util-to-string/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/github-slugger/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/detab/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/remark-emoji/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/remark-gfm/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/rehype-external-links/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/rehype-sort-attributes/index.js';
import 'file:///home/jes/dealornodeal_web/node_modules/rehype-raw/index.js';

const _sfc_main$3 = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const breadcrumbs = computed(() => {
      const paths = route.path.split("/").filter((path) => path);
      return paths.map((path, index) => ({
        name: path,
        path: "/" + paths.slice(0, index + 1).join("/")
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": "breadcrumb",
        class: "w-full px-2"
      }, _attrs))} data-v-0a445a8b><ol class="flex space-x-2 w-full" data-v-0a445a8b><li data-v-0a445a8b><span class="cursor-pointer text-rose-700 font-bold hover:text-rose-50 hover:bg-rose-700 px-2 py-1" data-v-0a445a8b> Home </span>`);
      if (breadcrumbs.value.length > 0) {
        _push(`<span class="px-2 py-1" data-v-0a445a8b> / </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><!--[-->`);
      ssrRenderList(breadcrumbs.value, (breadcrumb, index) => {
        _push(`<li data-v-0a445a8b>`);
        if (index < breadcrumbs.value.length - 1) {
          _push(`<span class="cursor-pointer text-rose-700 font-bold hover:text-rose-50 hover:bg-rose-700 px-2 py-1" data-v-0a445a8b>${ssrInterpolate(breadcrumb.name)}</span>`);
        } else {
          _push(`<span class="font-bold px-2 py-1" data-v-0a445a8b>${ssrInterpolate(breadcrumb.name)}</span>`);
        }
        if (index < breadcrumbs.value.length - 1) {
          _push(`<span data-v-0a445a8b> / </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ol></nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/Breadcrumb.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0a445a8b"]]);
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { pb, user, isLoggedIn, logout } = usePocketBase();
    const isMenuOpen = ref(false);
    ref("");
    const avatar = ref("");
    const roles = ref("");
    useRouter$1();
    watch(user, async () => {
      try {
        if (isLoggedIn && user.value) {
          EventBus.emit("loading", { show: true });
          const record = await pb.collection(user == null ? void 0 : user.value.collectionName).getOne(user.value.id, {
            expand: "roles",
            requestKey: "header_watch_auth"
          });
          let url = pb.files.getUrl(record, record.avatar);
          avatar.value = url;
          let arrayRoles = [];
          for (let id of record.roles) {
            const rol = await pb.collection("roles").getOne(id);
            arrayRoles.push(rol.name);
          }
          roles.value = arrayRoles.join(", ");
        }
      } catch (e) {
        console.error(e);
      } finally {
        EventBus.emit("loading", { show: false });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "shadow-lg form-wrapper bg-opacity-25 bg-white py-2 px-4 border-b border-black flex items-center justify-between w-full h-20" }, _attrs))} data-v-91b927f7><div class="flex items-center space-x-2" data-v-91b927f7><button class="p-2 h-full w-auto flex space-x-1 items-center justify-between border border-black hover:bg-rose-100" data-v-91b927f7>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "carbon:caret-left",
        class: ""
      }, null, _parent));
      _push(`</button></div><div class="flex w-full" data-v-91b927f7>`);
      _push(ssrRenderComponent(Breadcrumb, null, null, _parent));
      _push(`</div><div class="flex items-center space-x-2 justify-end w-full" data-v-91b927f7><div class="" data-v-91b927f7><span class="text-lg font-bold block" data-v-91b927f7>${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.username)}</span><span class="text-sm font-light block" data-v-91b927f7>${ssrInterpolate(unref(roles))}</span></div><div class="relative" data-v-91b927f7><img${ssrRenderAttr("src", unref(avatar))} class="w-16 h-16 rounded-full shadow-md border border-neutral-900 cursor-pointer" data-v-91b927f7><div style="${ssrRenderStyle(unref(isMenuOpen) ? null : { display: "none" })}" class="origin-top-right absolute right-0 mt-0 w-48 shadow-lg bg-rose-100 ring-1 ring-black ring-opacity-5 divide-y divide-black border border-black" role="menu" aria-orientation="vertical" aria-labelledby="user-menu" data-v-91b927f7><div class="py-1" role="none" data-v-91b927f7><a href="#" class="block px-4 py-2 text-sm text-neutral-900 hover:bg-rose-100" role="menuitem" data-v-91b927f7>Profile</a><a href="#" class="block px-4 py-2 text-sm text-neutral-900 hover:bg-rose-100" role="menuitem" data-v-91b927f7>Settings</a><a href="#" class="block px-4 py-2 text-sm text-neutral-900 hover:bg-rose-100" role="menuitem" data-v-91b927f7>Logout</a></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-91b927f7"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Loader",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (show.value) {
        _push(`<div class="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"><svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="#ffe4e6" stop-opacity="0" offset="0%"></stop><stop stop-color="#fecdd3" stop-opacity=".2" offset="20%"></stop><stop stop-color="#fda4af" stop-opacity=".4" offset="40%"></stop><stop stop-color="#fb7185" stop-opacity=".6" offset="60%"></stop><stop stop-color="#f43f5e" stop-opacity=".8" offset="80%"></stop><stop stop-color="#e11d48" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)"><path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="#e11d48" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g></g></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { isLoggedIn } = usePocketBase();
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col no-scrollbar overflow-y-scroll h-screen w-screen text-sm bg-rose-200 text-neutral-900 font-sans subpixel-antialiased slashed-zero diagonal-fractions" }, _attrs))}>`);
      _push(ssrRenderComponent(Toast, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      if (unref(isLoggedIn)) {
        _push(`<section as="div" class="w-full h-full">`);
        _push(ssrRenderComponent(Header, { class: "w-screen h-auto" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</section>`);
      } else {
        _push(`<section as="div" class="w-full h-full"><div class="w-full h-full flex"><div class="flex flex-col space-y-2 items-center justify-center w-full h-full px-16"><div class="font-bold bg-opacity-25 h-12 w-full lg:w-1/5 cursor-pointer flex space-x-2 items-center justify-center transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90"> ~ 401 Access Denied ~ </div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/5 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(unref(t)("Access"))}</span>`);
              _push2(ssrRenderComponent(unref(Icon), { icon: "mdi:terminal" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(unref(t)("Access")), 1),
                createVNode(unref(Icon), { icon: "mdi:terminal" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div to="/contact" class="bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/5 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90"><span>${ssrInterpolate(unref(t)("Contact"))}</span>`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "mdi:send",
          class: ""
        }, null, _parent));
        _push(`</div><div to="/about" class="bg-opacity-25 bg-neutral-50 h-12 w-full lg:w-1/5 cursor-pointer flex space-x-2 items-center justify-center bg-light-200 border border-black transform transition-transform hover:text-rose-500 hover:font-bold hover:scale-90"><span>${ssrInterpolate(unref(t)("About"))}</span>`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "mdi:about",
          class: ""
        }, null, _parent));
        _push(`</div></div></div></section>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Coj1xHSN.mjs.map
