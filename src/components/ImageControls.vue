<template>
  <div class="p-4">
    <SidebarTitle>APPEARANCE</SidebarTitle>
    <div class="grid w-full grid-cols-2 gap-2">
      <button
        class="rounded-md border border-zinc-800 p-2 text-xs font-medium capitalize shadow-lg transition duration-300 ease-out dark:text-gray-200 md:text-sm"
        :class="[
          mixBlendValue === item
            ? 'border-green-500 bg-green-500 text-white dark:border-indigo-500 dark:bg-indigo-500 '
            : ' bg-zinc-800 text-gray-300 hover:bg-zinc-900  dark:bg-custom-dark-400 dark:hover:bg-zinc-800',
        ]"
        v-for="item in mixBlendProperties"
        :key="item"
        @click="handleBgEffect(item)"
      >
        {{ item }}
      </button>
    </div>
    <div class="mt-4 w-full gap-4 rounded-2xl">
      <div class="">
        <div class="flex gap-2">
          <input
            @click="
              (selectedGradientDirection = ''), (showGradientDropdown = false)
            "
            type="text"
            placeholder="#FFFFFF"
            class="w-full rounded-md border border-zinc-700 bg-zinc-800 p-2 text-gray-100 dark:border-gray-100 dark:bg-custom-dark-400 dark:text-gray-200"
            v-model="bgLayerColor"
          />
          <label
            @click="
              (selectedGradientDirection = ''), (showGradientDropdown = false)
            "
            for="color-picker"
            class="group relative grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-md bg-[var(--bgLayerColor)] text-white"
            :style="`--bgLayerColor:${bgLayerColor};`"
          >
            <div
              class="absolute inset-0 hidden h-full w-full rounded-full lg:block"
            >
              <div
                class="dot-animation1 absolute left-1/2 top-1/2 z-20 rounded-full text-emerald-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-6"
                >
                  <path
                    d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                  />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="star1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500"
              >
                <path
                  d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="star2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500"
              >
                <path
                  d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="star3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500"
                green
              >
                <path
                  d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="star4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500"
              >
                <path
                  d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
              ></path></svg
          ></label>
          <div class="sr-only">
            <input
              id="color-picker"
              type="color"
              class="w-full"
              v-model="bgLayerColor"
            />
          </div>
        </div>

        <!-- bg gradient -->
        <div class="group relative mt-4" tabindex="1">
          <label for="Gradient" class="block text-sm font-medium text-gray-200">
            Gradient
          </label>

          <div class="relative mt-1.5">
            <input
              @click="showGradientDropdown = !showGradientDropdown"
              v-model="selectedGradientDirection"
              type="text"
              id="Gradient"
              class="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-2 py-3 pe-10 text-gray-100 dark:border-gray-100 dark:bg-custom-dark-400 dark:text-gray-200 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
              placeholder="Please select"
            />

            <span class="absolute inset-y-0 end-0 flex w-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </span>
          </div>

          <div
            ref="gradientDropdownTarget"
            v-if="showGradientDropdown"
            class="[&::-webkit-scrollbar-thumb] hover:[&::-webkit-scrollbar-thumb]:bg-custom-green-500/70 absolute top-20 z-10 h-52 w-full overflow-y-auto rounded-xl bg-white px-2 py-1 shadow [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar]:w-2.5"
          >
            <button
              v-for="gradient in gradientDirections"
              :key="gradient"
              @click="handleSelectedGradient(gradient)"
              class="block w-full px-2 py-2 text-start hover:bg-gray-100"
            >
              {{ gradient }}
            </button>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-3">
          <div class="">
            <label for="from-gd" class="text-sm font-medium text-gray-100"
              >From</label
            >
            <div class="mt-1 flex gap-1">
              <input
                id="from-gd"
                type="text"
                placeholder="#FFFFFF"
                class="w-full rounded-md border border-zinc-700 bg-zinc-800 p-2 text-gray-100 dark:border-gray-100 dark:bg-custom-dark-400 dark:text-gray-200"
                v-model="fromGradient"
              />
              <label
                for="from-gradient"
                class="group relative grid h-[42px] w-[42px] shrink-0 cursor-pointer place-items-center rounded-md bg-[var(--fromGradient)] text-white"
                :style="`--fromGradient:${fromGradient};`"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-4"
                >
                  <circle
                    cx="13.5"
                    cy="6.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="17.5"
                    cy="10.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  <circle
                    cx="6.5"
                    cy="12.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                  ></path>
                </svg>
              </label>
              <div class="sr-only">
                <input
                  id="from-gradient"
                  type="color"
                  class="w-full"
                  v-model="fromGradient"
                />
              </div>
            </div>
          </div>
          <div class="">
            <label for="via-gd" class="text-sm font-medium text-gray-100"
              >Via</label
            >
            <div class="mt-1 flex gap-1">
              <input
                id="via-gd"
                type="text"
                placeholder="#FFFFFF"
                class="w-full rounded-md border border-zinc-700 bg-zinc-800 p-2 text-gray-100 dark:border-gray-100 dark:bg-custom-dark-400 dark:text-gray-200"
                v-model="viaGradient"
              />
              <label
                for="via-gradient"
                class="group relative grid h-[42px] w-[42px] shrink-0 cursor-pointer place-items-center rounded-md bg-[var(--viaGradient)] text-white"
                :style="`--viaGradient:${viaGradient};`"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-4"
                >
                  <circle
                    cx="13.5"
                    cy="6.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="17.5"
                    cy="10.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  <circle
                    cx="6.5"
                    cy="12.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                  ></path>
                </svg>
              </label>
              <div class="sr-only">
                <input
                  id="via-gradient"
                  type="color"
                  class="w-full"
                  v-model="viaGradient"
                />
              </div>
            </div>
          </div>
          <div class="">
            <label for="to-gd" class="text-sm font-medium text-gray-100"
              >To</label
            >
            <div class="mt-1 flex gap-1">
              <input
                id="to-gd"
                type="text"
                placeholder="#FFFFFF"
                class="w-full rounded-md border border-zinc-700 bg-zinc-800 p-2 text-gray-100 dark:border-gray-100 dark:bg-custom-dark-400 dark:text-gray-200"
                v-model="toGradient"
              />
              <label
                for="to-gradient"
                class="group relative grid h-[42px] w-[42px] shrink-0 cursor-pointer place-items-center rounded-md bg-[var(--toGradient)] text-white"
                :style="`--toGradient:${toGradient};`"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-4"
                >
                  <circle
                    cx="13.5"
                    cy="6.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx="17.5"
                    cy="10.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  <circle
                    cx="6.5"
                    cy="12.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                  <path
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                  ></path>
                </svg>
              </label>
              <div class="sr-only">
                <input
                  id="to-gradient"
                  type="color"
                  class="w-full"
                  v-model="toGradient"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Range Customize Classes GG -->
        <div class="relative mt-8">
          <p
            class="absolute -top-4 right-0 text-sm text-gray-100 dark:text-gray-100"
          >
            {{ bgLayerOpacity }}%
          </p>
          <input
            class="h-3.5 w-full cursor-pointer appearance-none rounded-full border bg-gray-200 duration-300 ease-out [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#2b2b2b] active:[&::-moz-range-thumb]:scale-105 [&::-ms-thumb]:h-8 [&::-ms-thumb]:w-8 [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-[#2b2b2b] active:[&::-ms-thumb]:scale-105 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#2b2b2b] active:[&::-webkit-slider-thumb]:scale-105"
            type="range"
            min="0"
            max="100"
            value="bgLayerOpacity"
            v-model="bgLayerOpacity"
            @input="updateSliderBackground"
            :style="{
              background: sliderBackground,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import useImageControls from "../composables/useImageControls";
import SidebarTitle from "./Typography/SidebarTitle.vue";

const {
  showPreview,
  handleViewCode,
  bgLayerOpacity,
  bgLayerColor,
  mixBlendValue,
  sliderBackground,
  selectedGradientDirection,
  fromGradient,
  viaGradient,
  toGradient,
  showGradientDropdown,
} = useImageControls();

// setTimeout(() => {
//   mixBlendValue.value = "multiply";
// }, 2000)

const mixBlendProperties = ref([
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
]);

const handleBgEffect = (value: string) => {
  mixBlendValue.value = value;
  console.log(mixBlendValue.value);
  if (!showPreview.value) {
    handleViewCode();
  }
};

const updateSliderBackground = () => {
  const fillPercentage = `${bgLayerOpacity.value}%`;

  sliderBackground.value = `linear-gradient(to right, #2b2b2b ${fillPercentage}, #D1D5DB ${fillPercentage})`;
};

// range background color initialize
updateSliderBackground();

const handleSelectedGradient = (gradient: string) => {
  selectedGradientDirection.value = gradient;
  showGradientDropdown.value = false;
};

const gradientDirections = [
  "bg-gradient-to-t",
  "bg-gradient-to-tr",
  "bg-gradient-to-r",
  "bg-gradient-to-br",
  "bg-gradient-to-b",
  "bg-gradient-to-bl",
  "bg-gradient-to-l",
  "bg-gradient-to-tl",
];

const gradientDropdownTarget = ref(null);

onClickOutside(gradientDropdownTarget, () => {
  showGradientDropdown.value = false;
});
</script>

<style scoped>
.dot-animation1 {
  opacity: 0;
  animation: sparklesAnimation 2s ease-out forwards;
  animation-delay: 3s;
  will-change: transform;
  transform: translate(-50%, -50%);
}

.star1 {
  opacity: 0;
  animation: fadeStar 1s ease-in-out forwards;
  animation-delay: 4.55s;
  will-change: transform;
}
.star2 {
  opacity: 0;
  animation: fadeStar2 1s ease-in-out forwards;
  animation-delay: 4.55s;
  will-change: transform;
}

.star3 {
  opacity: 0;
  animation: fadeStar3 1s ease-in-out forwards;
  animation-delay: 4.55s;
  will-change: transform;
}

.star4 {
  opacity: 0;
  animation: fadeStar4 1s ease-in-out forwards;
  animation-delay: 4.55s;
  will-change: transform;
}

@keyframes sparklesAnimation {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(0px, -100vh) scale(4)
      rotate(-360deg);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(0) scale(0) rotate(0);
  }
}

@keyframes fadeStar {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(50px, 50px) scale(0);
  }
}

@keyframes fadeStar2 {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(-50px, -50px) scale(0);
  }
}

@keyframes fadeStar3 {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(50px, -50px) scale(0);
  }
}

@keyframes fadeStar4 {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) translate(-50px, 50px) scale(0);
  }
}

@keyframes dotCircleAnimation {
  0% {
    opacity: 1;
    transform: scale(4) rotate(-360deg);
  }
  /* 50% {
    opacity: 0.5;
    transform: scale(0.5);
  } */
  100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
    display: none;
  }
}
</style>
