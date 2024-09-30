import { u as usePocketBase } from "./usePocketBase-BmK3GMf1.js";
import { mergeProps, useSSRContext, ref, watch, unref, defineComponent, withCtx, openBlock, createBlock, createVNode, toDisplayString, renderSlot, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderVNode } from "vue/server-renderer";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { _ as _export_sfc } from "../server.mjs";
import { Icon } from "@iconify/vue";
const _sfc_main$9 = {
  __name: "TextField",
  __ssrInlineRender: true,
  props: {
    id: String,
    label: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 mb-4" }, _attrs))}><label${ssrRenderAttr("for", __props.id)} class="block mb-2">${ssrInterpolate(__props.label)}</label><input type="text"${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("value", __props.modelValue)} class="border border-black p-2 w-full"></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Fields/TextField.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const TextField = _sfc_main$9;
const _sfc_main$8 = {
  __name: "NumberField",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: Number,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-black p-4 mb-4" }, _attrs))}><label${ssrRenderAttr("for", __props.id)} class="block mb-2">${ssrInterpolate(__props.label)}</label><input type="number"${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("value", __props.modelValue)} class="border p-2 w-full"></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Fields/NumberField.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const NumberField = _sfc_main$8;
const _sfc_main$7 = {
  __name: "DatetimeField",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 mb-4" }, _attrs))}><label${ssrRenderAttr("for", __props.id)} class="block mb-2">${ssrInterpolate(__props.label)}</label><input type="date"${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("value", __props.modelValue)} class="p-2 w-full border border-black"></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Fields/DatetimeField.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const DatetimeField = _sfc_main$7;
const _sfc_main$6 = {
  __name: "BooleanField",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))} data-v-f0f52164><label${ssrRenderAttr("for", __props.id)} class="block mb-2" data-v-f0f52164>${ssrInterpolate(__props.label)}</label><div class="relative inline-block w-10 h-6 select-none transition-all duration-200 ease-in-out" data-v-f0f52164><input type="checkbox" id="toggle"${ssrIncludeBooleanAttr(__props.modelValue) ? " checked" : ""} class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform transform translate-x-0" data-v-f0f52164><label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300" data-v-f0f52164></label></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Fields/BooleanField.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const BooleanField = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f0f52164"]]);
const _sfc_main$5 = {
  __name: "SelectionField",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 mb-4" }, _attrs))}><label${ssrRenderAttr("for", __props.id)} class="block mb-2">${ssrInterpolate(__props.label)}</label><select${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("value", __props.modelValue)} class="border border-black p-2 w-full"><!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<option${ssrRenderAttr("value", option.value)}>${ssrInterpolate(option.label)}</option>`);
      });
      _push(`<!--]--></select></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Fields/SelectionField.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SelectionField = _sfc_main$5;
const _sfc_main$4 = {
  __name: "Many2ManyField",
  __ssrInlineRender: true,
  props: {
    label: String,
    collection: String,
    modelValue: Array
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    usePocketBase();
    const props = __props;
    const items = ref([]);
    const selectedItems = ref([...props.modelValue]);
    const isSelected = (item) => selectedItems.value.some((selected) => selected.id === item.id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 mb-4" }, _attrs))}><label class="block mb-2">${ssrInterpolate(__props.label)}</label><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(items.value, (item) => {
        _push(`<div class="${ssrRenderClass({
          "border border-black p-2 cursor-pointer": true,
          "bg-blue-500 text-white": isSelected(item),
          "bg-gray-100": !isSelected(item)
        })}">${ssrInterpolate(item.name)}</div>`);
      });
      _push(`<!--]--></div><div class="mt-2 flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(selectedItems.value, (item) => {
        _push(`<span class="border border-black p-2 bg-blue-500 text-white">${ssrInterpolate(item.name)}</span>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Fields/Many2ManyField.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Many2ManyField = _sfc_main$4;
const _sfc_main$3 = {
  __name: "Many2OneField",
  __ssrInlineRender: true,
  props: {
    label: String,
    collection: String,
    modelValue: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    usePocketBase();
    const props = __props;
    const emits = __emit;
    const items = ref([]);
    const selectedItem = ref(props.modelValue);
    watch(selectedItem, (newValue) => {
      emits("update:modelValue", newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 mb-4" }, _attrs))}><label class="block mb-2">${ssrInterpolate(__props.label)}</label><select class="border border-black p-2 w-full"><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(`<option${ssrRenderAttr("value", item.id)}>${ssrInterpolate(item.name)}</option>`);
      });
      _push(`<!--]--></select></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Fields/Many2OneField.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Many2OneField = _sfc_main$3;
const _sfc_main$2 = {
  __name: "One2ManyField",
  __ssrInlineRender: true,
  props: {
    label: String,
    collection: String,
    modelValue: Array
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    usePocketBase();
    const props = __props;
    const items = ref([]);
    const selectedItems = ref([...props.modelValue]);
    const isSelected = (item) => selectedItems.value.some((selected) => selected.id === item.id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 mb-4" }, _attrs))}><label class="block mb-2">${ssrInterpolate(__props.label)}</label><div class="flex flex-wrap gap-2 border border-black"><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(`<div class="${ssrRenderClass({
          "border p-2 cursor-pointer": true,
          "bg-blue-500 text-white": isSelected(item),
          "bg-gray-100": !isSelected(item)
        })}">${ssrInterpolate(item.name)}</div>`);
      });
      _push(`<!--]--></div><div class="mt-2 flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(unref(selectedItems), (item) => {
        _push(`<span class="border p-2 bg-blue-500 text-white">${ssrInterpolate(item.name)}</span>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Fields/One2ManyField.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const One2ManyField = _sfc_main$2;
const buttonClass = `
  w-16 h-16 flex flex-col items-center justify-center
  border border-black p-2 bg-rose-700 text-white
  hover:bg-rose-100 hover:text-rose-700 font-bold
`;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ActionButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: buttonClass
      }, _attrs))} data-v-04d30417>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: __props.icon,
        class: "w-full h-full"
      }, null, _parent));
      _push(`<span data-v-04d30417>${ssrInterpolate(__props.label)}</span></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/ActionButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ActionButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-04d30417"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormView",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Generic Form"
    },
    fields: {
      type: Array,
      required: true
    },
    initialData: {
      type: Object,
      default: () => ({})
    },
    collectionName: {
      type: String,
      required: true
    },
    onSubmit: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const { pb } = usePocketBase();
    const props = __props;
    const formData = ref({});
    const getFieldComponent = (type) => {
      switch (type) {
        case "text":
          return TextField;
        case "number":
          return NumberField;
        case "date":
          return DatetimeField;
        case "boolean":
          return BooleanField;
        case "selection":
          return SelectionField;
        case "many2many":
          return Many2ManyField;
        case "many2one":
          return Many2OneField;
        case "one2many":
          return One2ManyField;
        default:
          return TextField;
      }
    };
    const handleSubmit = async () => {
      try {
        let response;
        if (formData.value.id) {
          response = await pb.collection(props.collectionName).update(formData.value.id, formData.value);
        } else {
          response = await pb.collection(props.collectionName).create(formData.value);
        }
        props.onSubmit(response);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
    const handleCancel = () => {
      console.log("Cancel clicked");
    };
    const handlePrint = () => {
      console.log("Print clicked");
    };
    ref(false);
    watch(props, () => {
      console.log("props.initialData", props.initialData);
      formData.value = { ...props.initialData };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex w-full h-full justify-start items-center flex-col" }, _attrs))} data-v-b9fd3e90><div class="left-0 top-0 w-full flex space-x-2 justify-end items-center bg-transparent p-4 z-10" data-v-b9fd3e90><h2 class="text-xl" data-v-b9fd3e90>${ssrInterpolate(__props.title)}</h2>`);
      _push(ssrRenderComponent(ActionButton, {
        type: "submit",
        icon: "mdi:content-save",
        label: "Submit",
        onClick: handleSubmit
      }, null, _parent));
      _push(ssrRenderComponent(ActionButton, {
        type: "button",
        icon: "mdi:file-undo",
        label: "Cancel",
        onClick: handleCancel
      }, null, _parent));
      _push(ssrRenderComponent(ActionButton, {
        type: "button",
        icon: "mdi:printer",
        label: "Print",
        onClick: handlePrint
      }, null, _parent));
      _push(ssrRenderComponent(unref(Disclosure), null, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DisclosureButton), { class: "w-16 h-16 flex flex-col items-center justify-center border border-black p-2 bg-rose-700 text-white hover:bg-rose-100 hover:text-rose-700 font-bold" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (open) {
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: "mdi:eye",
                      class: "w-full h-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: "mdi:eye-off",
                      class: "w-full h-full"
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(`<span data-v-b9fd3e90${_scopeId2}>${ssrInterpolate(open ? "Hide" : "Show")}</span>`);
                } else {
                  return [
                    open ? (openBlock(), createBlock(unref(Icon), {
                      key: 0,
                      icon: "mdi:eye",
                      class: "w-full h-full"
                    })) : (openBlock(), createBlock(unref(Icon), {
                      key: 1,
                      icon: "mdi:eye-off",
                      class: "w-full h-full"
                    })),
                    createVNode("span", null, toDisplayString(open ? "Hide" : "Show"), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DisclosurePanel), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([{ "translate-x-0": open, "translate-x-full": !open }, "flex space-x-2 transition-transform duration-300 transform"])}" data-v-b9fd3e90${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "buttons", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["flex space-x-2 transition-transform duration-300 transform", { "translate-x-0": open, "translate-x-full": !open }]
                    }, [
                      renderSlot(_ctx.$slots, "buttons", {}, void 0, true)
                    ], 2)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DisclosureButton), { class: "w-16 h-16 flex flex-col items-center justify-center border border-black p-2 bg-rose-700 text-white hover:bg-rose-100 hover:text-rose-700 font-bold" }, {
                default: withCtx(() => [
                  open ? (openBlock(), createBlock(unref(Icon), {
                    key: 0,
                    icon: "mdi:eye",
                    class: "w-full h-full"
                  })) : (openBlock(), createBlock(unref(Icon), {
                    key: 1,
                    icon: "mdi:eye-off",
                    class: "w-full h-full"
                  })),
                  createVNode("span", null, toDisplayString(open ? "Hide" : "Show"), 1)
                ]),
                _: 2
              }, 1024),
              createVNode(unref(DisclosurePanel), null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: ["flex space-x-2 transition-transform duration-300 transform", { "translate-x-0": open, "translate-x-full": !open }]
                  }, [
                    renderSlot(_ctx.$slots, "buttons", {}, void 0, true)
                  ], 2)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><form class="p-4 mb-4 space-y-4 w-full overflow-auto" data-v-b9fd3e90><!--[-->`);
      ssrRenderList(__props.fields, (field, index) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(getFieldComponent(field.type)), {
          class: "w-full",
          key: index,
          modelValue: unref(formData)[field.name],
          "onUpdate:modelValue": ($event) => unref(formData)[field.name] = $event,
          label: field.label,
          options: field.options || []
        }, null), _parent);
      });
      _push(`<!--]--></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Views/FormView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b9fd3e90"]]);
export {
  ActionButton as A,
  FormView as F
};
//# sourceMappingURL=FormView-BoFyCaSH.js.map
