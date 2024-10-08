import { _ as __nuxt_component_0 } from './nuxt-layout-CbZs1x10.mjs';
import { useSSRContext, defineComponent, ref, provide, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, inject, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { _ as _export_sfc } from './server.mjs';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, DialogTitle } from '@headlessui/vue';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GameHeader",
  __ssrInlineRender: true,
  setup(__props) {
    inject("gameState");
    inject("startNewGame");
    inject("advanceGame");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center mb-4 p-4 bg-gray-800 text-white shadow-md" }, _attrs))}><div class="flex flex-col"><h1 class="text-4xl font-bold mb-2">Cajas misteriosas</h1><h2 class="text-lg font-medium">Questionario sobre automativacion</h2></div><div class="flex space-x-2"><button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">New Game</button><button class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">GO</button></div></header>`);
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["box", { opened: __props.box.opened }]
      }, _attrs))} data-v-ea950f4f><div class="${ssrRenderClass([{ opened: __props.box.opened }, "box-face front"])}" data-v-ea950f4f>`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: __props.box.icon,
        class: "text-3xl"
      }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ opened: __props.box.opened }, "box-face back"])}" data-v-ea950f4f><p class="text-lg font-bold text-center" data-v-ea950f4f> $${ssrInterpolate(__props.box.value)}</p></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blocks/Box.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Box = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ea950f4f"]]);
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const gameState = ref({
      boxes: [],
      currentQuestion: null,
      gameInstructions: ""
    });
    const standardBoxValues = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ];
    const isQuestionModalOpen = ref(false);
    const userSelectedOption = ref(null);
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    function initGame() {
      const shuffledValues = shuffleArray([...standardBoxValues]);
      const boxes = [];
      for (let i = 1; i <= NUM_BOXES; i++) {
        boxes.push({ id: i, value: shuffledValues[i - 1], opened: false });
      }
      gameState.value.boxes = boxes;
      gameState.value.gameInstructions = "Select a box to start the game.";
    }
    function openBox(boxId) {
      const boxIndex = gameState.value.boxes.findIndex((box) => box.id === boxId);
      if (boxIndex !== -1 && !gameState.value.boxes[boxIndex].opened) {
        gameState.value.boxes[boxIndex].opened = true;
        const questionIndex = gameState.value.boxes[boxIndex].value;
        gameState.value.currentQuestion = questions[questionIndex];
        isQuestionModalOpen.value = true;
      }
    }
    function closeQuestionModal() {
      console.warn("CERRANDO MODAL");
      isQuestionModalOpen.value = false;
      gameState.value.currentQuestion = null;
      userSelectedOption.value = null;
    }
    function selectOption(index) {
      userSelectedOption.value = index;
    }
    function startNewGame() {
      initGame();
      gameState.value.gameInstructions = "Select a box to start the game.";
    }
    provide("gameState", gameState);
    provide("openBox", openBox);
    provide("closeQuestionModal", closeQuestionModal);
    provide("selectOption", selectOption);
    provide("startNewGame", startNewGame);
    const questions = [
      {
        "question": "\xBFQu\xE9 es la automotivaci\xF3n?",
        "description": "La capacidad de impulsarse a uno mismo a actuar positivamente.",
        "options": [
          "La habilidad de influir en otros para que act\xFAen.",
          "La capacidad de impulsarse a uno mismo a actuar positivamente.",
          "La habilidad de evitar situaciones de tensi\xF3n."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:rocket"
        // Automotivación - impulso personal.
      },
      {
        "question": "\xBFDe d\xF3nde proviene la automotivaci\xF3n?",
        "options": [
          "De factores externos como el ambiente.",
          "De la necesidad de reconocimiento social.",
          "De tu interior y el deseo de lograr lo importante."
        ],
        "correctAnswerIndex": 2,
        "icon": "mdi:heart"
        // Motivación interna - relacionada con el corazón.
      },
      {
        "question": "\xBFQu\xE9 caracteriza a las personas resilientes?",
        "options": [
          "No tienen reacciones emocionales negativas.",
          "Usan el pensamiento positivo para manejar respuestas emocionales.",
          "Evitan enfrentar desaf\xEDos para no tener retrocesos."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:shield-half-full"
        // Resiliencia - protección y fuerza interna.
      },
      {
        "question": "Seg\xFAn la presentaci\xF3n, \xBFqu\xE9 es la ambici\xF3n?",
        "options": [
          "La habilidad de evitar riesgos.",
          "El impulso personal para lograr metas.",
          "La capacidad de tomar decisiones sin ayuda."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:trophy"
        // Ambición - relacionada con logros y metas.
      },
      {
        "question": "\xBFQu\xE9 mentalidad tiene una persona que cree que puede mejorar sus habilidades a trav\xE9s del esfuerzo?",
        "options": [
          "Mentalidad fija.",
          "Mentalidad de crecimiento.",
          "Mentalidad negativa."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:brain"
        // Mentalidad de crecimiento - aprendizaje y cambio.
      },
      {
        "question": "\xBFCu\xE1l es un componente clave para aprovechar oportunidades?",
        "options": [
          "Coraje para enfrentar lo desconocido.",
          "Tomar riesgos sin pensar en las consecuencias.",
          "Evitar decisiones importantes."
        ],
        "correctAnswerIndex": 0,
        "icon": "mdi:compass"
        // Coraje para lo desconocido - exploración.
      },
      {
        "question": "\xBFQu\xE9 destaca Maslow en su teor\xEDa de la jerarqu\xEDa de necesidades?",
        "options": [
          "Todas las necesidades humanas son iguales.",
          "La autorrealizaci\xF3n se alcanza tras cubrir necesidades b\xE1sicas.",
          "Las necesidades de estima son menos importantes."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:pyramid"
        // Jerarquía de Maslow - Pirámide.
      },
      {
        "question": "\xBFCu\xE1l es una diferencia clave entre la teor\xEDa de Maslow y la de Reeve sobre la motivaci\xF3n?",
        "options": [
          "Maslow se enfoca en las emociones.",
          "Reeve no sigue un orden jer\xE1rquico en las necesidades.",
          "Maslow no habla de autorrealizaci\xF3n."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:scale-balance"
        // Diferencia en teorías - equilibrio de ideas.
      },
      {
        "question": "\xBFQu\xE9 es un proyecto personal?",
        "options": [
          "Un plan para ayudar a los dem\xE1s.",
          "Un enfoque en las cosas que son relevantes para uno mismo.",
          "Una manera de delegar responsabilidades."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:account-circle"
        // Proyecto personal - individualidad.
      },
      {
        "question": "\xBFQu\xE9 es la motivaci\xF3n intr\xEDnseca?",
        "options": [
          "La que surge de est\xEDmulos externos como el dinero.",
          "La que surge del interior de uno mismo.",
          "La que depende de las metas de otros."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:lightbulb"
        // Motivación intrínseca - ideas y luz interior.
      },
      {
        "question": "\xBFCu\xE1l de las siguientes es una motivaci\xF3n extr\xEDnseca?",
        "options": [
          "La satisfacci\xF3n personal.",
          "El reconocimiento p\xFAblico.",
          "La fuerza interior."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:star"
        // Motivación extrínseca - reconocimiento.
      },
      {
        "question": "\xBFC\xF3mo se relacionan la automotivaci\xF3n y la autodisciplina?",
        "options": [
          "La autodisciplina depende de factores externos.",
          "Ambas implican el control de impulsos y emociones.",
          "La automotivaci\xF3n solo se basa en est\xEDmulos externos."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:run-fast"
        // Autodisciplina - impulso y control.
      },
      {
        "question": "\xBFCu\xE1l es el valor de la autonom\xEDa personal?",
        "options": [
          "Depender siempre de la opini\xF3n de los dem\xE1s.",
          "La capacidad de controlarse a s\xED mismo y sus decisiones.",
          "Evitar tomar decisiones personales."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:hand-peace"
        // Autonomía - independencia.
      },
      {
        "question": "\xBFQu\xE9 dice Arist\xF3teles sobre la autonom\xEDa?",
        "options": [
          "Es innecesaria para el desarrollo humano.",
          "Sin autonom\xEDa, el ser humano es como un animal.",
          "La autonom\xEDa solo es importante en ciertas situaciones."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:owl"
        // Aristóteles - sabiduría y filosofía.
      },
      {
        "question": "\xBFQu\xE9 es la autodisciplina?",
        "options": [
          "Controlar impulsos y emociones para alcanzar metas a largo plazo.",
          "Dejarse llevar por las emociones.",
          "Hacer lo que otros esperan de ti."
        ],
        "correctAnswerIndex": 0,
        "icon": "mdi:medal"
        // Autodisciplina - logros y control.
      },
      {
        "question": "\xBFQu\xE9 pasa cuando no se cuida la salud f\xEDsica?",
        "options": [
          "No hay consecuencias.",
          "Puede afectar la salud mental.",
          "Se mejora la capacidad de resistencia."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:heart-pulse"
        // Salud física - relación cuerpo y mente.
      },
      {
        "question": "\xBFQu\xE9 porcentaje de conductas autodestructivas est\xE1n relacionadas con descuidar la salud f\xEDsica?",
        "options": [
          "85%",
          "95%",
          "75%"
        ],
        "correctAnswerIndex": 2,
        "icon": "mdi:chart-bar"
        // Porcentajes - datos y estadísticas.
      },
      {
        "question": "\xBFCu\xE1l es la relaci\xF3n entre optimismo y resiliencia?",
        "options": [
          "No tienen ninguna relaci\xF3n.",
          "Ambas ayudan a manejar respuestas emocionales negativas.",
          "Son opuestos."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:sun"
        // Optimismo - luz y positividad.
      },
      {
        "question": "\xBFQu\xE9 puede evitar la falta de autodisciplina?",
        "options": [
          "Alcanzar metas a largo plazo.",
          "Tener una vida m\xE1s relajada.",
          "Aumentar la productividad diaria."
        ],
        "correctAnswerIndex": 0,
        "icon": "mdi:target"
        // Metas a largo plazo - enfoque en objetivos.
      },
      {
        "question": "\xBFQu\xE9 parte de la pir\xE1mide de Maslow representa la autorrealizaci\xF3n?",
        "options": [
          "La base.",
          "El nivel m\xE1s alto.",
          "El centro."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:chart-pyramid"
        // Pirámide de Maslow - autorrealización.
      },
      {
        "question": "\xBFQu\xE9 implica tener una mentalidad fija?",
        "options": [
          "Creer que no se pueden mejorar las habilidades.",
          "Creer que todo se puede cambiar con esfuerzo.",
          "Aceptar que los dem\xE1s controlan tu destino."
        ],
        "correctAnswerIndex": 0,
        "icon": "mdi:lock"
        // Mentalidad fija - cierre al cambio.
      },
      {
        "question": "\xBFCu\xE1l de las siguientes es una habilidad que mejora la automotivaci\xF3n?",
        "options": [
          "Evitar situaciones desafiantes.",
          "Mantener una actitud proactiva ante las dificultades.",
          "Depender de recompensas externas."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:rocket-launch"
        // Proactividad - impulso hacia adelante.
      },
      {
        "question": "\xBFC\xF3mo se define la competencia seg\xFAn Reeve?",
        "options": [
          "Es la habilidad de competir con otros.",
          "Es la capacidad de alcanzar metas con \xE9xito.",
          "Es la capacidad de gestionar emociones negativas."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:check-decagram"
        // Competencia - éxito y logros.
      },
      {
        "question": "\xBFQu\xE9 dice Reeve sobre la motivaci\xF3n?",
        "options": [
          "Es completamente intr\xEDnseca.",
          "Puede ser tanto intr\xEDnseca como extr\xEDnseca.",
          "Solo depende de factores externos."
        ],
        "correctAnswerIndex": 1,
        "icon": "mdi:scales"
        // Motivación intrínseca y extrínseca - equilibrio.
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              "game-state": gameState.value,
              onStartNewGame: initGame,
              onAdvanceGame: _ctx.advanceGame
            }, null, _parent2, _scopeId));
            _push2(`<div class="w-full flex justify-between space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              boxes: gameState.value.boxes,
              onOpenBox: openBox
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              "game-log": gameState.value.gameLog
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (isQuestionModalOpen.value) {
              _push2(ssrRenderComponent(unref(TransitionRoot), {
                appear: "",
                show: isQuestionModalOpen.value,
                as: "div"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Dialog), {
                      as: "div",
                      onClose: closeQuestionModal,
                      class: "relative z-10"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(TransitionChild), {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="fixed inset-0 bg-black/25"${_scopeId4}></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "fixed inset-0 bg-black/25" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="fixed inset-0 overflow-y-auto"${_scopeId3}><div class="flex min-h-full items-center justify-center p-4 text-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(TransitionChild), {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-lg font-semibold leading-6 text-gray-900"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(gameState.value.currentQuestion.question)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(gameState.value.currentQuestion.question), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="mt-4"${_scopeId5}><p class="text-sm text-gray-500 mb-4"${_scopeId5}>${ssrInterpolate(gameState.value.currentQuestion.description)}</p><div class="flex flex-wrap justify-between gap-1"${_scopeId5}><!--[-->`);
                                      ssrRenderList(gameState.value.currentQuestion.options, (option, index) => {
                                        _push6(`<button class="${ssrRenderClass([
                                          "w-full",
                                          "bg-blue-600",
                                          "text-white",
                                          "rounded-md",
                                          "p-2",
                                          "hover:bg-blue-700",
                                          "transition",
                                          "duration-200",
                                          "mb-2",
                                          {
                                            "bg-green-600": index === gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index,
                                            "bg-red-600": index !== gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index
                                          }
                                        ])}"${_scopeId5}>${ssrInterpolate(option)}</button>`);
                                      });
                                      _push6(`<!--]--></div>`);
                                      if (userSelectedOption.value !== null) {
                                        _push6(`<div class="mt-4"${_scopeId5}>`);
                                        if (userSelectedOption.value === gameState.value.currentQuestion.correctAnswerIndex) {
                                          _push6(`<p class="text-green-600"${_scopeId5}> \xA1Correcto! </p>`);
                                        } else {
                                          _push6(`<p class="text-red-600"${_scopeId5}> Incorrecto. La respuesta correcta es ${ssrInterpolate(gameState.value.currentQuestion.options[gameState.value.currentQuestion.correctAnswerIndex])}. </p>`);
                                        }
                                        _push6(`</div>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode(unref(DialogTitle), {
                                          as: "h3",
                                          class: "text-lg font-semibold leading-6 text-gray-900"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(gameState.value.currentQuestion.question), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "mt-4" }, [
                                          createVNode("p", { class: "text-sm text-gray-500 mb-4" }, toDisplayString(gameState.value.currentQuestion.description), 1),
                                          createVNode("div", { class: "flex flex-wrap justify-between gap-1" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(gameState.value.currentQuestion.options, (option, index) => {
                                              return openBlock(), createBlock("button", {
                                                key: index,
                                                onClick: ($event) => selectOption(index),
                                                class: [
                                                  "w-full",
                                                  "bg-blue-600",
                                                  "text-white",
                                                  "rounded-md",
                                                  "p-2",
                                                  "hover:bg-blue-700",
                                                  "transition",
                                                  "duration-200",
                                                  "mb-2",
                                                  {
                                                    "bg-green-600": index === gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index,
                                                    "bg-red-600": index !== gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index
                                                  }
                                                ]
                                              }, toDisplayString(option), 11, ["onClick"]);
                                            }), 128))
                                          ]),
                                          userSelectedOption.value !== null ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "mt-4"
                                          }, [
                                            userSelectedOption.value === gameState.value.currentQuestion.correctAnswerIndex ? (openBlock(), createBlock("p", {
                                              key: 0,
                                              class: "text-green-600"
                                            }, " \xA1Correcto! ")) : (openBlock(), createBlock("p", {
                                              key: 1,
                                              class: "text-red-600"
                                            }, " Incorrecto. La respuesta correcta es " + toDisplayString(gameState.value.currentQuestion.options[gameState.value.currentQuestion.correctAnswerIndex]) + ". ", 1))
                                          ])) : createCommentVNode("", true)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(DialogPanel), { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-lg font-semibold leading-6 text-gray-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(gameState.value.currentQuestion.question), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-4" }, [
                                        createVNode("p", { class: "text-sm text-gray-500 mb-4" }, toDisplayString(gameState.value.currentQuestion.description), 1),
                                        createVNode("div", { class: "flex flex-wrap justify-between gap-1" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(gameState.value.currentQuestion.options, (option, index) => {
                                            return openBlock(), createBlock("button", {
                                              key: index,
                                              onClick: ($event) => selectOption(index),
                                              class: [
                                                "w-full",
                                                "bg-blue-600",
                                                "text-white",
                                                "rounded-md",
                                                "p-2",
                                                "hover:bg-blue-700",
                                                "transition",
                                                "duration-200",
                                                "mb-2",
                                                {
                                                  "bg-green-600": index === gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index,
                                                  "bg-red-600": index !== gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index
                                                }
                                              ]
                                            }, toDisplayString(option), 11, ["onClick"]);
                                          }), 128))
                                        ]),
                                        userSelectedOption.value !== null ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "mt-4"
                                        }, [
                                          userSelectedOption.value === gameState.value.currentQuestion.correctAnswerIndex ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            class: "text-green-600"
                                          }, " \xA1Correcto! ")) : (openBlock(), createBlock("p", {
                                            key: 1,
                                            class: "text-red-600"
                                          }, " Incorrecto. La respuesta correcta es " + toDisplayString(gameState.value.currentQuestion.options[gameState.value.currentQuestion.correctAnswerIndex]) + ". ", 1))
                                        ])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode(unref(TransitionChild), {
                              as: "template",
                              enter: "duration-300 ease-out",
                              "enter-from": "opacity-0",
                              "enter-to": "opacity-100",
                              leave: "duration-200 ease-in",
                              "leave-from": "opacity-100",
                              "leave-to": "opacity-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "fixed inset-0 bg-black/25" })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                              createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                                createVNode(unref(TransitionChild), {
                                  as: "template",
                                  enter: "duration-300 ease-out",
                                  "enter-from": "opacity-0 scale-95",
                                  "enter-to": "opacity-100 scale-100",
                                  leave: "duration-200 ease-in",
                                  "leave-from": "opacity-100 scale-100",
                                  "leave-to": "opacity-0 scale-95"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(DialogPanel), { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(DialogTitle), {
                                          as: "h3",
                                          class: "text-lg font-semibold leading-6 text-gray-900"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(gameState.value.currentQuestion.question), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "mt-4" }, [
                                          createVNode("p", { class: "text-sm text-gray-500 mb-4" }, toDisplayString(gameState.value.currentQuestion.description), 1),
                                          createVNode("div", { class: "flex flex-wrap justify-between gap-1" }, [
                                            (openBlock(true), createBlock(Fragment, null, renderList(gameState.value.currentQuestion.options, (option, index) => {
                                              return openBlock(), createBlock("button", {
                                                key: index,
                                                onClick: ($event) => selectOption(index),
                                                class: [
                                                  "w-full",
                                                  "bg-blue-600",
                                                  "text-white",
                                                  "rounded-md",
                                                  "p-2",
                                                  "hover:bg-blue-700",
                                                  "transition",
                                                  "duration-200",
                                                  "mb-2",
                                                  {
                                                    "bg-green-600": index === gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index,
                                                    "bg-red-600": index !== gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index
                                                  }
                                                ]
                                              }, toDisplayString(option), 11, ["onClick"]);
                                            }), 128))
                                          ]),
                                          userSelectedOption.value !== null ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "mt-4"
                                          }, [
                                            userSelectedOption.value === gameState.value.currentQuestion.correctAnswerIndex ? (openBlock(), createBlock("p", {
                                              key: 0,
                                              class: "text-green-600"
                                            }, " \xA1Correcto! ")) : (openBlock(), createBlock("p", {
                                              key: 1,
                                              class: "text-red-600"
                                            }, " Incorrecto. La respuesta correcta es " + toDisplayString(gameState.value.currentQuestion.options[gameState.value.currentQuestion.correctAnswerIndex]) + ". ", 1))
                                          ])) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Dialog), {
                        as: "div",
                        onClose: closeQuestionModal,
                        class: "relative z-10"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "fixed inset-0 bg-black/25" })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                            createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                              createVNode(unref(TransitionChild), {
                                as: "template",
                                enter: "duration-300 ease-out",
                                "enter-from": "opacity-0 scale-95",
                                "enter-to": "opacity-100 scale-100",
                                leave: "duration-200 ease-in",
                                "leave-from": "opacity-100 scale-100",
                                "leave-to": "opacity-0 scale-95"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(DialogPanel), { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(DialogTitle), {
                                        as: "h3",
                                        class: "text-lg font-semibold leading-6 text-gray-900"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(gameState.value.currentQuestion.question), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "mt-4" }, [
                                        createVNode("p", { class: "text-sm text-gray-500 mb-4" }, toDisplayString(gameState.value.currentQuestion.description), 1),
                                        createVNode("div", { class: "flex flex-wrap justify-between gap-1" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(gameState.value.currentQuestion.options, (option, index) => {
                                            return openBlock(), createBlock("button", {
                                              key: index,
                                              onClick: ($event) => selectOption(index),
                                              class: [
                                                "w-full",
                                                "bg-blue-600",
                                                "text-white",
                                                "rounded-md",
                                                "p-2",
                                                "hover:bg-blue-700",
                                                "transition",
                                                "duration-200",
                                                "mb-2",
                                                {
                                                  "bg-green-600": index === gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index,
                                                  "bg-red-600": index !== gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index
                                                }
                                              ]
                                            }, toDisplayString(option), 11, ["onClick"]);
                                          }), 128))
                                        ]),
                                        userSelectedOption.value !== null ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "mt-4"
                                        }, [
                                          userSelectedOption.value === gameState.value.currentQuestion.correctAnswerIndex ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            class: "text-green-600"
                                          }, " \xA1Correcto! ")) : (openBlock(), createBlock("p", {
                                            key: 1,
                                            class: "text-red-600"
                                          }, " Incorrecto. La respuesta correcta es " + toDisplayString(gameState.value.currentQuestion.options[gameState.value.currentQuestion.correctAnswerIndex]) + ". ", 1))
                                        ])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$4, {
                "game-state": gameState.value,
                onStartNewGame: initGame,
                onAdvanceGame: _ctx.advanceGame
              }, null, 8, ["game-state", "onAdvanceGame"]),
              createVNode("div", { class: "w-full flex justify-between space-x-4" }, [
                createVNode(_sfc_main$2, {
                  boxes: gameState.value.boxes,
                  onOpenBox: openBox
                }, null, 8, ["boxes"]),
                createVNode(_sfc_main$1, {
                  "game-log": gameState.value.gameLog
                }, null, 8, ["game-log"])
              ]),
              isQuestionModalOpen.value ? (openBlock(), createBlock(unref(TransitionRoot), {
                key: 0,
                appear: "",
                show: isQuestionModalOpen.value,
                as: "div"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Dialog), {
                    as: "div",
                    onClose: closeQuestionModal,
                    class: "relative z-10"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "fixed inset-0 bg-black/25" })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                        createVNode("div", { class: "flex min-h-full items-center justify-center p-4 text-center" }, [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogPanel), { class: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" }, {
                                default: withCtx(() => [
                                  createVNode(unref(DialogTitle), {
                                    as: "h3",
                                    class: "text-lg font-semibold leading-6 text-gray-900"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(gameState.value.currentQuestion.question), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "mt-4" }, [
                                    createVNode("p", { class: "text-sm text-gray-500 mb-4" }, toDisplayString(gameState.value.currentQuestion.description), 1),
                                    createVNode("div", { class: "flex flex-wrap justify-between gap-1" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(gameState.value.currentQuestion.options, (option, index) => {
                                        return openBlock(), createBlock("button", {
                                          key: index,
                                          onClick: ($event) => selectOption(index),
                                          class: [
                                            "w-full",
                                            "bg-blue-600",
                                            "text-white",
                                            "rounded-md",
                                            "p-2",
                                            "hover:bg-blue-700",
                                            "transition",
                                            "duration-200",
                                            "mb-2",
                                            {
                                              "bg-green-600": index === gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index,
                                              "bg-red-600": index !== gameState.value.currentQuestion.correctAnswerIndex && userSelectedOption.value === index
                                            }
                                          ]
                                        }, toDisplayString(option), 11, ["onClick"]);
                                      }), 128))
                                    ]),
                                    userSelectedOption.value !== null ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "mt-4"
                                    }, [
                                      userSelectedOption.value === gameState.value.currentQuestion.correctAnswerIndex ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "text-green-600"
                                      }, " \xA1Correcto! ")) : (openBlock(), createBlock("p", {
                                        key: 1,
                                        class: "text-red-600"
                                      }, " Incorrecto. La respuesta correcta es " + toDisplayString(gameState.value.currentQuestion.options[gameState.value.currentQuestion.correctAnswerIndex]) + ". ", 1))
                                    ])) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["show"])) : createCommentVNode("", true)
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

export { _sfc_main as default };
//# sourceMappingURL=index-BeyJptgH.mjs.map
