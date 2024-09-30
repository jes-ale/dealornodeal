import { _ as __nuxt_component_0 } from "./nuxt-layout-CbZs1x10.js";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import { ref, withCtx, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { u as usePocketBase } from "./usePocketBase-BmK3GMf1.js";
import { E as EventBus } from "./event-bus-1ebWZuYj.js";
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
import "pocketbase";
import "mitt";
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
export {
  login as default
};
//# sourceMappingURL=login-BdFeLvcy.js.map
