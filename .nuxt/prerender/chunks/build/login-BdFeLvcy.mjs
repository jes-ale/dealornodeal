import { _ as __nuxt_component_0 } from './nuxt-layout-CbZs1x10.mjs';
import { _ as _export_sfc, u as useI18n } from './server.mjs';
import { ref, withCtx, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from 'file:///home/jes/dealornodeal_web/node_modules/vue/index.mjs';
import { useRouter } from 'file:///home/jes/dealornodeal_web/node_modules/vue-router/dist/vue-router.node.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'file:///home/jes/dealornodeal_web/node_modules/vue/server-renderer/index.mjs';
import { E as EventBus, u as usePocketBase } from './usePocketBase-BmK3GMf1.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/ofetch/dist/node.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/hookable/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/unctx/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/h3/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/unhead/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/radix3/dist/index.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/ufo/dist/index.mjs';
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
import 'file:///home/jes/dealornodeal_web/node_modules/mitt/dist/mitt.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/pocketbase/dist/pocketbase.es.mjs';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const email = ref("");
    const password = ref("");
    const isLoading = ref(false);
    const { login: login2 } = usePocketBase();
    const router = useRouter();
    const handleLogin = async () => {
      isLoading.value = true;
      try {
        await login2(email.value, password.value);
        setTimeout(() => {
          EventBus.emit("notify", {
            type: "success",
            title: t("text.success"),
            message: t("text.successLogin"),
            action: "close"
          });
        }, 500);
        setTimeout(() => {
          isLoading.value = false;
          router.push("/");
        }, 1e3);
      } catch (err) {
        setTimeout(() => {
          EventBus.emit("notify", {
            type: "failure",
            title: t("text.failure"),
            message: `Usuario o clave no coinciden.`,
            action: "close"
          });
          isLoading.value = false;
        }, 3e3);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-0b2439d1>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "main" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="login-container relative w-full h-full flex items-center justify-center p-4 md:p-16" data-v-0b2439d1${_scopeId}><div class="${ssrRenderClass([[isLoading.value ? "spin-3d" : ""], "shadow-lg form-wrapper bg-opacity-25 bg-neutral-50 p-8 border border-neutral-900 transform transition-transform hover:scale-105 z-10 relative overflow-hidden"])}" data-v-0b2439d1${_scopeId}><h1 class="text-2xl font-bold mb-4" data-v-0b2439d1${_scopeId}>Login</h1><form data-v-0b2439d1${_scopeId}><div class="form-group mb-4" data-v-0b2439d1${_scopeId}><label for="email" class="block mb-2" data-v-0b2439d1${_scopeId}>Email</label><input${ssrRenderAttr("value", email.value)} type="email" id="email" required class="text-neutral-900 w-full p-2 border border-neutral-900 bg-white outline-none focus:border-neutral-900" data-v-0b2439d1${_scopeId}></div><div class="form-group mb-6" data-v-0b2439d1${_scopeId}><label for="password" class="block mb-2" data-v-0b2439d1${_scopeId}>Password</label><input${ssrRenderAttr("value", password.value)} type="password" id="password" required class="text-neutral-900 w-full p-2 border border-neutral-900 bg-white outline-none focus:border-neutral-900" data-v-0b2439d1${_scopeId}></div><button type="submit" class="text-neutral-900 bg-neutral-50 w-full h-12 flex items-center justify-center border border-neutral-900 transform transition-transform hover:text-black hover:font-bold hover:scale-90" data-v-0b2439d1${_scopeId}> Login </button></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "login-container relative w-full h-full flex items-center justify-center p-4 md:p-16" }, [
                createVNode("div", {
                  class: [[isLoading.value ? "spin-3d" : ""], "shadow-lg form-wrapper bg-opacity-25 bg-neutral-50 p-8 border border-neutral-900 transform transition-transform hover:scale-105 z-10 relative overflow-hidden"]
                }, [
                  createVNode("h1", { class: "text-2xl font-bold mb-4" }, "Login"),
                  createVNode("form", {
                    onSubmit: withModifiers(handleLogin, ["prevent"])
                  }, [
                    createVNode("div", { class: "form-group mb-4" }, [
                      createVNode("label", {
                        for: "email",
                        class: "block mb-2"
                      }, "Email"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => email.value = $event,
                        type: "email",
                        id: "email",
                        required: "",
                        class: "text-neutral-900 w-full p-2 border border-neutral-900 bg-white outline-none focus:border-neutral-900"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, email.value]
                      ])
                    ]),
                    createVNode("div", { class: "form-group mb-6" }, [
                      createVNode("label", {
                        for: "password",
                        class: "block mb-2"
                      }, "Password"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => password.value = $event,
                        type: "password",
                        id: "password",
                        required: "",
                        class: "text-neutral-900 w-full p-2 border border-neutral-900 bg-white outline-none focus:border-neutral-900"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, password.value]
                      ])
                    ]),
                    createVNode("button", {
                      type: "submit",
                      class: "text-neutral-900 bg-neutral-50 w-full h-12 flex items-center justify-center border border-neutral-900 transform transition-transform hover:text-black hover:font-bold hover:scale-90"
                    }, " Login ")
                  ], 32)
                ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b2439d1"]]);

export { login as default };
//# sourceMappingURL=login-BdFeLvcy.mjs.map
