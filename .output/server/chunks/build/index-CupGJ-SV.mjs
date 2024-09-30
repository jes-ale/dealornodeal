import { _ as __nuxt_component_0 } from './nuxt-layout-CbZs1x10.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { F as FormView, A as ActionButton } from './FormView-BoFyCaSH.mjs';
import { E as EventBus, u as usePocketBase } from './usePocketBase-BmK3GMf1.mjs';
import './server.mjs';
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
import '@headlessui/vue';
import '@iconify/vue';
import 'mitt';
import 'pocketbase';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const fields = [
      { name: "username", label: "Username", type: "text" },
      { name: "verified", label: "Verified", type: "boolean" },
      { name: "email", label: "Email", type: "text" },
      { name: "created", label: "Created", type: "date", readonly: true },
      { name: "updated", label: "Updated", type: "date", readonly: true },
      { name: "avatar", label: "Avatar", type: "text" },
      { name: "roles", label: "Roles", type: "selection", options: ["admin", "user", "guest"] },
      { name: "contact_fk", label: "Contact", type: "many2one" },
      { name: "company_id", label: "Company", type: "many2one" }
    ];
    const initialData = ref({});
    const route = useRoute();
    const router = useRouter();
    const userId = computed(() => route.params.id);
    const formTitle = computed(() => userId.value ? "Update User" : "Create User");
    const { pb } = usePocketBase();
    const handleFormSubmit = async (formData) => {
      try {
        if (userId.value) {
          EventBus.emit("loading", { show: true });
          await pb.collection("internal_users").update(userId.value, formData);
        } else {
          EventBus.emit("loading", { show: true });
          await pb.collection("internal_users").create(formData);
        }
        router.push("/user/list");
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        EventBus.emit("loading", { show: false });
      }
    };
    const handleCancel = () => {
      console.log("Cancel clicked");
      router.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full flex items-center justify-center"${_scopeId}>`);
            if (!_ctx.loading) {
              _push2(ssrRenderComponent(FormView, {
                title: formTitle.value,
                fields,
                initialData: initialData.value,
                collectionName: "internal_users",
                onSubmit: handleFormSubmit
              }, {
                buttons: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(ActionButton, {
                      type: "button",
                      icon: "fluent:password-reset-48-filled",
                      label: "Psswd",
                      onClick: handleCancel
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(ActionButton, {
                        type: "button",
                        icon: "fluent:password-reset-48-filled",
                        label: "Psswd",
                        onClick: handleCancel
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<div${_scopeId}>Loading...</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                !_ctx.loading ? (openBlock(), createBlock(FormView, {
                  key: 0,
                  title: formTitle.value,
                  fields,
                  initialData: initialData.value,
                  collectionName: "internal_users",
                  onSubmit: handleFormSubmit
                }, {
                  buttons: withCtx(() => [
                    createVNode(ActionButton, {
                      type: "button",
                      icon: "fluent:password-reset-48-filled",
                      label: "Psswd",
                      onClick: handleCancel
                    })
                  ]),
                  _: 1
                }, 8, ["title", "initialData"])) : (openBlock(), createBlock("div", { key: 1 }, "Loading..."))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/form/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CupGJ-SV.mjs.map
