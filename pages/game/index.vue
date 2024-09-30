<template>
  <div>
    <NuxtLayout name="default">
      <div class="container mx-auto p-4">
        <GameHeader />
        <div class="w-full flex justify-between space-x-4">
          <GameBoard />
          <ChatLog />
        </div>
      </div>

      <!-- Modal para aceptar el maletín inicial -->
      <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
            leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95">
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" class="text-lg font-semibold leading-6 text-gray-900">
                    Seleccionar Maletín
                  </DialogTitle>
                  <div class="mt-4">
                    <p class="text-sm text-gray-500 mb-4">
                      Por favor, elige tu maletín:
                    </p>
                    <input type="number" v-model="inputBox"
                      class="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <div class="flex justify-between">
                      <button @click="aceptarInput()"
                        class="w-1/2 bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition duration-200">
                        Aceptar
                      </button>
                      <button @click="setIsOpen(false)"
                        class="w-1/2 bg-gray-300 text-gray-700 rounded-md py-2 hover:bg-gray-400 transition duration-200 ml-2">
                        Cancelar
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Modal para aceptar/rechazar oferta del banquero -->
      <TransitionRoot appear :show="isOfferModalOpen" as="template">
        <Dialog as="div" @close="closeOfferModal" class="relative z-10">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
            leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95">
                <DialogPanel
                  class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" class="text-lg font-semibold leading-6 text-gray-900">
                    Oferta del Banquero
                  </DialogTitle>
                  <div class="mt-4">
                    <p class="text-sm text-gray-500 mb-4">
                      El banquero ofrece: ${{ gameState.bankerOffer }}
                    </p>
                    <div class="flex justify-between">
                      <button @click="playerDecision(true)"
                        class="w-1/2 bg-green-600 text-white rounded-md py-2 hover:bg-green-700 transition duration-200">
                        Aceptar
                      </button>
                      <button @click="playerDecision(false)"
                        class="w-1/2 bg-red-600 text-white rounded-md py-2 hover:bg-red-700 transition duration-200 ml-2">
                        Rechazar
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
import { ref, provide } from 'vue'
import GameHeader from '~/components/Blocks/GameHeader.vue'
import GameBoard from '~/components/Blocks/GameBoard.vue'
import ChatLog from '~/components/Blocks/ChatLog.vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)
const isOfferModalOpen = ref(false) // Modal para la oferta del banquero

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}

function closeOfferModal() {
  isOfferModalOpen.value = false
}

function openOfferModal() {
  isOfferModalOpen.value = true
}

// Game constants
const NUM_BOXES = 26
const NUM_ROUNDS = 5
const BANKER_OFFER_ROUND = 3

const inputBox = ref(0)

// Game state
const gameState = ref({
  boxes: [],
  playerBox: null,
  currentRound: 0,
  bankerOffer: 0,
  gameLog: [],
  gameInstructions: ''
})


// Lista de valores estándar del juego (puedes personalizarlos como desees)
const standardBoxValues = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  15, 20, 25, 30, 35, 40, 50, 60,
  70, 80, 90, 100, 200, 300, 400, 500,
  1000, 5000
];

// Initialize game state
function initGame() {
  // Barajar la lista de valores
  const shuffledValues = shuffleArray([...standardBoxValues]); // Crea una copia y baraja
  const boxes = [];

  for (let i = 1; i <= NUM_BOXES; i++) {
    boxes.push({ id: i, value: shuffledValues[i - 1], opened: false }); // Asigna valores barajados
  }

  gameState.value.boxes = boxes;
  gameState.value.currentRound = 0;
  gameState.value.gameLog = [];
  gameState.value.bankerOffer = 0;
  gameState.value.playerBox = null;
  updateInstructions();
}

// Función para barajar un arreglo (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
  }
  return array;
}


// Start a new game
function startNewGame() {
  initGame()
  openModal()
}

function advanceGame() {
  if (gameState.value.playerBox) {
    nextRound();  // Avanza al siguiente paso del juego
  } else {
    alert("Debes seleccionar un maletín primero.");  // Verifica si se ha seleccionado un maletín
  }
}

// Accept input box and start the game
function aceptarInput() {
  const selectedBox = gameState.value.boxes.find(b => b.id === inputBox.value)
  if (selectedBox) {
    closeModal()
    gameState.value.playerBox = selectedBox
    gameState.value.gameLog.push(`Player has selected box ${selectedBox.id}`)
    gameState.value.currentRound = 1 // Set to round 1 after selection
    updateInstructions()
    nextRound(); // Proceed to the first round
  } else {
    alert("Invalid input. Please select a box between 1 and 26.")
  }
}

// Function to handle instructions based on the current round
function updateInstructions() {
  if (gameState.value.currentRound === 0) {
    gameState.value.gameInstructions = 'Please select your box to start the game.'
  } else if (gameState.value.currentRound < BANKER_OFFER_ROUND) {
    gameState.value.gameInstructions = `Round ${gameState.value.currentRound}: A random box will be opened.`;
  } else if (gameState.value.currentRound === BANKER_OFFER_ROUND) {
    gameState.value.gameInstructions = 'Banker offers a deal. Accept or reject it.';
    openOfferModal();  // Open the banker offer modal
  } else if (gameState.value.currentRound >= NUM_ROUNDS) {
    gameState.value.gameInstructions = 'Final round: Remaining boxes will be revealed.';
  }
}

// Function to handle opening a box
function openBox(boxId) {
  const boxIndex = gameState.value.boxes.findIndex(box => box.id === boxId)
  if (boxIndex !== -1 && !gameState.value.boxes[boxIndex].opened) {
    gameState.value.boxes[boxIndex].opened = true
    gameState.value.gameLog.push(`Box ${boxId} opened with value $${gameState.value.boxes[boxIndex].value}`)
  }
}

// Function to get a random box ID that is not opened and not the player's box
function getRandomBoxId() {
  const unopenedBoxes = gameState.value.boxes.filter(box => !box.opened && box.id !== gameState.value.playerBox.id);
  const randomIndex = Math.floor(Math.random() * unopenedBoxes.length);
  return unopenedBoxes[randomIndex].id;
}

// Make a banker offer
function makeBankerOffer() {
  const remainingBoxes = gameState.value.boxes.filter(box => !box.opened && box.id !== gameState.value.playerBox.id)
  if (remainingBoxes.length > 0) {
    const averageValue = remainingBoxes.reduce((sum, box) => sum + box.value, 0) / remainingBoxes.length
    gameState.value.bankerOffer = Math.round(averageValue * 0.75)  // Example logic for offer
  }
}

// Function to handle how many boxes to open in each round
function boxesToOpen() {
  switch (gameState.value.currentRound) {
    case 1:
      console.info(6)
      return 6;
    case 2:
      console.info(6)
      return 6;
    case 3:
      console.info(5)
      return 5;
    case 4:
      console.info(4)
      return 4;
    case 5:
      console.info(5)
      return 4;
    default:
      console.info(0)
      return 0;
  }
}

// Handle next round
function nextRound() {
  if (gameState.value.currentRound <= NUM_ROUNDS) {
    const boxesToOpenCount = boxesToOpen(); // Get the number of boxes to open for the current round

    for (let i = 0; i < boxesToOpenCount; i++) {
      const boxId = getRandomBoxId(); // Get a random box ID
      openBox(boxId); // Open the box
    }

    makeBankerOffer(); // Make the banker offer after opening the boxes
    gameState.value.currentRound += 1; // Move to the next round
    updateInstructions(); // Update instructions for the current round
  } else {
    endGame(); // Call end game function if rounds are over
  }
}

// Function to handle the end of the game
function endGame() {
  gameState.value.gameInstructions = 'Game over: Final boxes will be revealed.';
  // Logic for revealing final box values, etc., can be added here.
}

// Handle player's decision on the banker offer
function playerDecision(accepted) {
  if (accepted) {
    gameState.value.gameLog.push(`Player accepted the offer of $${gameState.value.bankerOffer}`)
    alert(`You accepted the offer of $${gameState.value.bankerOffer}`)
    endGame(); // Call end game when offer is accepted
  } else {
    gameState.value.gameLog.push(`Player rejected the offer. Proceeding to final round...`)
    alert('You rejected the offer. Revealing final boxes...')
  }
  closeOfferModal(); // Close the offer modal after decision
}

// Expose game logic to child components
provide('gameState', gameState)
provide('startNewGame', startNewGame)
provide('openBox', openBox)
provide('makeBankerOffer', makeBankerOffer)
provide('playerDecision', playerDecision)
provide('advanceGame', advanceGame)


const questions = [
  {
    name: "Pregunta 0", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 1", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  }, {
    name: "Pregunta 2", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 3", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 4", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  }, {
    name: "Pregunta 5", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 6", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 7", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  }, {
    name: "Pregunta 8", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 9", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 10", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  }, {
    name: "Pregunta 11", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 12", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 13", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  }, {
    name: "Pregunta 14", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 15", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 16", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  }, {
    name: "Pregunta 17", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 19", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 20", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  }, {
    name: "Pregunta 21", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 22", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 23", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 24", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 25", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  },
  {
    name: "Pregunta 26", options: [
      "A",
      "B",
      "C",
      "D",
    ]
  }
]
</script>
