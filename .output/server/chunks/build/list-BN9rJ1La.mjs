import { _ as __nuxt_component_0 } from './nuxt-layout-CbZs1x10.mjs';
import { u as useI18n, d as useRoute, _ as _export_sfc } from './server.mjs';
import { useSSRContext, withCtx, createVNode, defineComponent, ref, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ListView",
  __ssrInlineRender: true,
  props: {
    collection: {
      type: String,
      required: true
    },
    fields: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const search = ref("");
    const items = ref([]);
    const filters = ref([]);
    useRouter();
    const visibleFields = computed(() => props.fields.filter((field) => field.visible));
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full h-full justify-start items-center flex-col" }, _attrs))} data-v-7efb7493><div class="flex justify-start items-center w-full" data-v-7efb7493><input type="text"${ssrRenderAttr("value", search.value)} placeholder="Search..." class="border-x border-black p-2 bg-rose-100 w-full" data-v-7efb7493><button class="p-2 h-full w-auto" data-v-7efb7493>`);
      _push(ssrRenderComponent(unref(Icon), { icon: "fluent:filter-add-20-filled" }, null, _parent));
      _push(`</button><button class="border-x border-black p-2 h-full w-auto" data-v-7efb7493>`);
      _push(ssrRenderComponent(unref(Icon), { icon: "carbon:query" }, null, _parent));
      _push(`</button></div><div class="flex flex-col w-full" data-v-7efb7493><!--[-->`);
      ssrRenderList(filters.value, (filter, index) => {
        _push(`<div class="flex border-t border-black w-full" data-v-7efb7493><select class="border-r border-black p-2 bg-transparent w-full" data-v-7efb7493><option disabled value="" data-v-7efb7493${ssrIncludeBooleanAttr(Array.isArray(filter.field) ? ssrLooseContain(filter.field, "") : ssrLooseEqual(filter.field, "")) ? " selected" : ""}>Select field</option><!--[-->`);
        ssrRenderList(__props.fields, (field) => {
          _push(`<option${ssrRenderAttr("value", field.field_name)} data-v-7efb7493>${ssrInterpolate(field.field_name)}</option>`);
        });
        _push(`<!--]--></select><select class="border-r border-black p-2 bg-transparent w-full" data-v-7efb7493><option value="equals" data-v-7efb7493${ssrIncludeBooleanAttr(Array.isArray(filter.condition) ? ssrLooseContain(filter.condition, "equals") : ssrLooseEqual(filter.condition, "equals")) ? " selected" : ""}>Equals</option><option value="contains" data-v-7efb7493${ssrIncludeBooleanAttr(Array.isArray(filter.condition) ? ssrLooseContain(filter.condition, "contains") : ssrLooseEqual(filter.condition, "contains")) ? " selected" : ""}>Contains</option><option value="starts_with" data-v-7efb7493${ssrIncludeBooleanAttr(Array.isArray(filter.condition) ? ssrLooseContain(filter.condition, "starts_with") : ssrLooseEqual(filter.condition, "starts_with")) ? " selected" : ""}>Starts with</option><option value="ends_with" data-v-7efb7493${ssrIncludeBooleanAttr(Array.isArray(filter.condition) ? ssrLooseContain(filter.condition, "ends_with") : ssrLooseEqual(filter.condition, "ends_with")) ? " selected" : ""}>Ends with</option></select><input type="text"${ssrRenderAttr("value", filter.value)} class="border-r border-black p-2 bg-rose-100 w-full" data-v-7efb7493><button class="p-2 w-full hover:bg-rose-100" data-v-7efb7493>Remove</button></div>`);
      });
      _push(`<!--]--></div><table class="min-w-full border-collapse" data-v-7efb7493><thead data-v-7efb7493><tr data-v-7efb7493><!--[-->`);
      ssrRenderList(visibleFields.value, (field) => {
        _push(`<th class="border border-black p-2 bg-rose-100" data-v-7efb7493>${ssrInterpolate(field.field_name.charAt(0).toUpperCase() + field.field_name.slice(1))}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody data-v-7efb7493><!--[-->`);
      ssrRenderList(items.value, (item) => {
        _push(`<tr class="even:bg-rose-100" data-v-7efb7493><!--[-->`);
        ssrRenderList(visibleFields.value, (field) => {
          _push(`<td class="border border-black p-2" data-v-7efb7493>${ssrInterpolate(item[field.field_name])}</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Views/ListView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7efb7493"]]);
const collection = "internal_users";
const _sfc_main = {
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    const fields = [
      { field_name: "username", visible: true, readonly: false, id: "username" },
      { field_name: "verified", visible: true, readonly: false, id: "verified" },
      { field_name: "email", visible: true, readonly: false, id: "email" },
      { field_name: "created", visible: true, readonly: true, id: "created" },
      { field_name: "updated", visible: true, readonly: true, id: "updated" },
      { field_name: "avatar", visible: true, readonly: false, id: "avatar" },
      { field_name: "roles", visible: true, readonly: false, id: "roles" },
      { field_name: "contact_fk", visible: true, readonly: false, id: "contact_fk" },
      { field_name: "company_id", visible: true, readonly: false, id: "company_id" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full h-full flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(ListView, {
              collection,
              fields
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                createVNode(ListView, {
                  collection,
                  fields
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=list-BN9rJ1La.mjs.map
