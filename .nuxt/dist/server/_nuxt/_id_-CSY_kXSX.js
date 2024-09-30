import { _ as __nuxt_component_0 } from "./nuxt-layout-CbZs1x10.js";
import { defineComponent, ref, computed, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { F as FormView, A as ActionButton } from "./FormView-BoFyCaSH.js";
import { u as usePocketBase } from "./usePocketBase-BmK3GMf1.js";
import { E as EventBus } from "./event-bus-1ebWZuYj.js";
import "../server.mjs";
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
import "@headlessui/vue";
import "@iconify/vue";
import "pocketbase";
import "mitt";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: false
    }
  },
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
    const initialData = ref();
    const route = useRoute();
    const router = useRouter();
    const userId = computed(() => route.params.id);
    const formTitle = computed(() => userId.value ? "Update User" : "Create User");
    const { pb } = usePocketBase();
    const fetchUserData = async () => {
      try {
        if (userId.value) {
          EventBus.emit("loading", { show: true });
          const user = await pb.collection("internal_users").getOne(userId.value);
          console.log("user", user);
          initialData.value = user;
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        EventBus.emit("loading", { show: false });
      }
    };
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
                  _push3(ssrRenderComponent(ActionButton, {
                    type: "button",
                    icon: "mdi:cloud-refresh",
                    label: "Fetch",
                    onClick: fetchUserData
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(ActionButton, {
                      type: "button",
                      icon: "fluent:password-reset-48-filled",
                      label: "Psswd",
                      onClick: handleCancel
                    }),
                    createVNode(ActionButton, {
                      type: "button",
                      icon: "mdi:cloud-refresh",
                      label: "Fetch",
                      onClick: fetchUserData
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                createVNode(FormView, {
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
                    }),
                    createVNode(ActionButton, {
                      type: "button",
                      icon: "mdi:cloud-refresh",
                      label: "Fetch",
                      onClick: fetchUserData
                    })
                  ]),
                  _: 1
                }, 8, ["title", "initialData"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/form/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-CSY_kXSX.js.map
