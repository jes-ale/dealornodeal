import { _ as __nuxt_component_0 } from './nuxt-layout-CbZs1x10.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'file:///home/jes/dealornodeal_web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/jes/dealornodeal_web/node_modules/vue/server-renderer/index.mjs';
import { useRoute, useRouter } from 'file:///home/jes/dealornodeal_web/node_modules/vue-router/dist/vue-router.node.mjs';
import { F as FormView, A as ActionButton } from './FormView-BoFyCaSH.mjs';
import { E as EventBus, u as usePocketBase } from './usePocketBase-BmK3GMf1.mjs';
import './server.mjs';
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
import 'file:///home/jes/dealornodeal_web/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import 'file:///home/jes/dealornodeal_web/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/mitt/dist/mitt.mjs';
import 'file:///home/jes/dealornodeal_web/node_modules/pocketbase/dist/pocketbase.es.mjs';

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
