import { _ as __nuxt_component_0 } from "./nuxt-layout-CbZs1x10.js";
import { defineComponent, inject, mergeProps, unref, useSSRContext, ref, provide, withCtx, createTextVNode, createVNode, withDirectives, vModelText } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from "@headlessui/vue";
import { Icon } from "@iconify/vue";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GameHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const gameState = inject("gameState");
    inject("startNewGame");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex justify-between mb-4" }, _attrs))}><h1 class="text-3xl font-bold">Deal or No Deal</h1><p>Maletin del jugador: ${ssrInterpolate((_a = unref(gameState).playerBox) == null ? void 0 : _a.id)}</p><p>Ronda: ${ssrInterpolate(unref(gameState).currentRound)}</p><button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">New Game</button></header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/GameHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Box",
  __ssrInlineRender: true,
  props: {
    box: {
      type: Object,
      required: true
    }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const closed = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["p-4 rounded", [unref(closed) ? "text-black bg-gray-200 hover:border hover:shadow-xl hover:cursor-pointer hover:bg-gray-400" : "bg-gray-50 text-neutral-500 "]]
      }, _attrs))} data-v-f3f7b7de><div class="flex justify-center" data-v-f3f7b7de>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "mdi:briefcase",
        class: "text-3xl"
      }, null, _parent));
      _push(`</div><p class="text-lg font-bold text-center" data-v-f3f7b7de>${ssrInterpolate(__props.box.id)}</p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/Box.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Box = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f3f7b7de"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GameBoard",
  __ssrInlineRender: true,
  setup(__props) {
    const gameState = inject("gameState");
    const openBox = inject("openBox");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full grid grid-cols-6 gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(gameState).boxes, (box, index) => {
        _push(ssrRenderComponent(Box, {
          key: index,
          box,
          onSelect: unref(openBox)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/GameBoard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChatLog",
  __ssrInlineRender: true,
  setup(__props) {
    const gameState = inject("gameState");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-y-auto w-full h-48 p-4 border border-black" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(gameState).gameLog, (log, index) => {
        _push(`<p>${ssrInterpolate(log)}</p>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/ChatLog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NUM_BOXES = 26;
const NUM_ROUNDS = 5;
const BANKER_OFFER_ROUND = 3;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const input_player_box = ref(0);
    const isOpen = ref(true);
    function setIsOpen(value) {
      isOpen.value = value;
    }
    function aceptarInput(input) {
      if (gameState.boxes.includes(input)) {
        setIsOpen(false);
        input_player_box.value = 0;
        initGame();
        gameState.value.currentRound = 0;
        gameState.value.bankerOffer = 0;
        gameState.value.gameLog = [];
      } else {
        alert("VALOR INVALIDO, PORFAVOR INGRESE UN VALOR DE 1 A 26.");
      }
    }
    const gameState = ref({
      boxes: [],
      playerBox: null,
      currentRound: 0,
      bankerOffer: 0,
      gameLog: []
    });
    function initGame() {
      const boxes = [];
      for (let i = 1; i <= NUM_BOXES; i++) {
        boxes.push({ id: i, value: Math.floor(Math.random() * 100) + 1 });
      }
      gameState.value.boxes = boxes;
      const playerBoxIndex = Math.floor(Math.random() * NUM_BOXES);
      gameState.value.playerBox = boxes[playerBoxIndex];
    }
    function startNewGame() {
      setIsOpen(true);
    }
    function openBox(boxId) {
      const boxIndex = gameState.value.boxes.findIndex((box) => box.id === boxId);
      if (boxIndex !== -1) {
        gameState.value.boxes[boxIndex].opened = true;
        gameState.value.gameLog.push(`Box ${boxId} opened with value ${gameState.value.boxes[boxIndex].value}`);
      }
    }
    function makeBankerOffer() {
      const remainingBoxes = gameState.value.boxes.filter((box) => !box.opened);
      const averageValue = remainingBoxes.reduce((sum, box) => sum + box.value, 0) / remainingBoxes.length;
      gameState.value.bankerOffer = Math.floor(averageValue * 0.8);
      gameState.value.gameLog.push(`Banker offers $${gameState.value.bankerOffer}`);
    }
    function playerDecision(accept) {
      if (accept) {
        gameState.value.gameLog.push(`Player accepts offer of $${gameState.value.bankerOffer}`);
        endGame();
      } else {
        gameState.value.gameLog.push(`Player rejects offer of $${gameState.value.bankerOffer}`);
        nextRound();
      }
    }
    function endGame() {
      gameState.value.gameLog.push(`Player's box value is $${gameState.value.playerBox.value}`);
      if (gameState.value.bankerOffer > gameState.value.playerBox.value) {
        gameState.value.gameLog.push("Banker wins!");
      } else {
        gameState.value.gameLog.push("Player wins!");
      }
    }
    function nextRound() {
      gameState.value.currentRound++;
      if (gameState.value.currentRound >= NUM_ROUNDS) {
        gameState.value.boxes.forEach((box) => {
          if (!box.opened) {
            openBox(box.id);
          }
        });
        endGame();
      } else {
        const boxIndex = Math.floor(Math.random() * gameState.value.boxes.length);
        openBox(gameState.value.boxes[boxIndex].id);
        if (gameState.value.currentRound === BANKER_OFFER_ROUND) {
          makeBankerOffer();
        }
      }
    }
    provide("gameState", gameState);
    provide("startNewGame", startNewGame);
    provide("openBox", openBox);
    provide("makeBankerOffer", makeBankerOffer);
    provide("playerDecision", playerDecision);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container mx-auto p-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(`<div class="w-full flex justify-between space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(Dialog), {
              open: isOpen.value,
              onClose: setIsOpen
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DialogPanel), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogTitle), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Seleccionar Maletin inicial`);
                            } else {
                              return [
                                createTextVNode("Seleccionar Maletin inicial")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(DialogDescription), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Esta accion es permanente `);
                            } else {
                              return [
                                createTextVNode(" Esta accion es permanente ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<input type="number"${ssrRenderAttr("value", input_player_box.value)}${_scopeId3}><button${_scopeId3}>Aceptar</button><button${_scopeId3}>Cancel</button>`);
                      } else {
                        return [
                          createVNode(unref(DialogTitle), null, {
                            default: withCtx(() => [
                              createTextVNode("Seleccionar Maletin inicial")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(DialogDescription), null, {
                            default: withCtx(() => [
                              createTextVNode(" Esta accion es permanente ")
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode("input", {
                            type: "number",
                            "onUpdate:modelValue": ($event) => input_player_box.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, input_player_box.value]
                          ]),
                          createVNode("button", {
                            onClick: ($event) => aceptarInput(input_player_box.value)
                          }, "Aceptar", 8, ["onClick"]),
                          createVNode("button", {
                            onClick: ($event) => setIsOpen(false)
                          }, "Cancel", 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DialogPanel), null, {
                      default: withCtx(() => [
                        createVNode(unref(DialogTitle), null, {
                          default: withCtx(() => [
                            createTextVNode("Seleccionar Maletin inicial")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(DialogDescription), null, {
                          default: withCtx(() => [
                            createTextVNode(" Esta accion es permanente ")
                          ]),
                          _: 1
                        }),
                        withDirectives(createVNode("input", {
                          type: "number",
                          "onUpdate:modelValue": ($event) => input_player_box.value = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, input_player_box.value]
                        ]),
                        createVNode("button", {
                          onClick: ($event) => aceptarInput(input_player_box.value)
                        }, "Aceptar", 8, ["onClick"]),
                        createVNode("button", {
                          onClick: ($event) => setIsOpen(false)
                        }, "Cancel", 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "container mx-auto p-4" }, [
                createVNode(_sfc_main$4),
                createVNode("div", { class: "w-full flex justify-between space-x-4" }, [
                  createVNode(_sfc_main$2),
                  createVNode(_sfc_main$1)
                ])
              ]),
              createVNode(unref(Dialog), {
                open: isOpen.value,
                onClose: setIsOpen
              }, {
                default: withCtx(() => [
                  createVNode(unref(DialogPanel), null, {
                    default: withCtx(() => [
                      createVNode(unref(DialogTitle), null, {
                        default: withCtx(() => [
                          createTextVNode("Seleccionar Maletin inicial")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(DialogDescription), null, {
                        default: withCtx(() => [
                          createTextVNode(" Esta accion es permanente ")
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode("input", {
                        type: "number",
                        "onUpdate:modelValue": ($event) => input_player_box.value = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, input_player_box.value]
                      ]),
                      createVNode("button", {
                        onClick: ($event) => aceptarInput(input_player_box.value)
                      }, "Aceptar", 8, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => setIsOpen(false)
                      }, "Cancel", 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["open"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/game/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CQ36ROCt.js.map
