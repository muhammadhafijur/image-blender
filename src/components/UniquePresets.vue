<template>
  <div
    class="fixed left-1/2 -translate-x-1/2 transition duration-500 origin-bottom ease-out bottom-10 z-10 w-full max-w-full h-full max-h-[300px] 2xl:max-h-[var(--uniquePresetBoxSize)] sm:max-w-screen-xl px-4 sm:px-6 md:px-8 font-inter"
    :class="[showUniquePreset ? 'scale-100 ' : 'scale-0']"
    :style="`--uniquePresetBoxSize:${uniquePresetBoxSize}px;`"
  >
    <div
      class="w-full h-full bg-white overflow-hidden dark:bg-custom-dark-400 border dark:border-gray-200 rounded-lg"
    >
      <div
        class="flex min-h-full h-full overflow-auto [&::-webkit-scrollbar-thumb] [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-custom-green-500/70 [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar]:w-2.5 overflow-y-auto"
      >
        <div class="border-r flex min-h-full flex-col sticky top-0">
          <div class="border-b p-4 font-inter font-semibold text-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5"
            >
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
              />
            </svg>
          </div>
          <div class="flex flex-col p-1">
            <!-- <button
              class="p-3 hover:bg-gray-100 text-gray-500 dark:text-gray-200 hover:text-green-500 rounded-md active:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-5"
              >
                <path d="M18 22H4a2 2 0 0 1-2-2V6" />
                <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
                <circle cx="12" cy="8" r="2" />
                <rect width="16" height="16" x="6" y="2" rx="2" />
              </svg>
            </button> -->
            <button
              title="size 500"
              @click="handleUniquePresetBoxSize(500)"
              class="p-3 hover:bg-gray-100 dark:text-gray-200 hover:text-green-500 rounded-md"
              :class="[
                uniquePresetBoxSize === 500
                  ? 'text-green-500'
                  : 'text-gray-500',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-5"
              >
                <path
                  d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </button>
            <button
              title="size 400"
              @click="handleUniquePresetBoxSize(400)"
              class="p-3 hover:bg-gray-100 dark:text-gray-200 hover:text-green-500 rounded-md"
              :class="[
                uniquePresetBoxSize === 400
                  ? 'text-green-500'
                  : 'text-gray-500',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-5 rotate-45"
              >
                <path
                  d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </button>
            <button
              title="size 300"
              @click="handleUniquePresetBoxSize(300)"
              class="p-3 hover:bg-gray-100 dark:text-gray-200 hover:text-green-500 rounded-md"
              :class="[
                uniquePresetBoxSize === 300
                  ? 'text-green-500'
                  : 'text-gray-500',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-5 rotate-90"
              >
                <path
                  d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="flex-1 w-full bg-white dark:bg-custom-dark-400 p-4 sm:px-6 sm:pt-6 sm:pb-12"
        >
          <div
            v-if="!session"
            class="flex sticky top-2 rounded-lg justify-center mb-6"
          >
            <p
              class="text-sm text-gray-100 bg-emerald-500 font-medium font-inter rounded-full px-4 py-2 w-auto"
            >
              <button
                @click="signInWithGoogle"
                class="text-white font-bold underline decoration-2"
              >
                Sign in
              </button>
              to gain access to our unique presets
            </p>
          </div>
          <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              :disabled="!session"
              v-for="preset in UniquePresets"
              @click="
                handlePreset(
                  preset.color,
                  preset.direction,
                  preset.from,
                  preset.via,
                  preset.to
                )
              "
              class="rounded-md text-sm font-medium disabled:cursor-not-allowed h-auto p-2 flex flex-col items-center justify-center text-center bg-[var(--presetColor)]"
              :style="`--presetColor:${preset.color};`"
            >
              <img
                src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
                alt="Ocean"
                class="w-full h-12 sm:h-28 object-cover mb-2 rounded"
              /><span class="text-white font-medium">{{ preset.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    @click="handleUniquePreset"
    class="px-4 py-2 fixed left-1/2 -translate-x-1/2 bottom-6 z-20 text-xs sm:text-sm font-inter tracking-wider rounded-full mx-auto text-white flex items-center gap-2 sm:rounded-[20px] bg-slate-900 dark:bg-emerald-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-3 sm:size-4 animate-spin-slow bg-purple-400"
    >
      <path
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
    Unique Presets
  </button>
</template>

<script setup lang="ts">
import useImageControls from "@/composables/useImageControls";
import useSupabase from "@/composables/useSupabase";
import { ref } from "vue";

const { session, signInWithGoogle } = useSupabase();
const {
  bgLayerOpacity,
  bgLayerColor,
  mixBlendValue,
  selectedGradientDirection,
  showGradientDropdown,
  fromGradient,
  viaGradient,
  toGradient,
} = useImageControls();

const showUniquePreset = ref(false);

const handleUniquePreset = () => {
  showUniquePreset.value = !showUniquePreset.value;
};

const UniquePresets = [
  {
    name: "Nature",
    color: "#228B22",
    direction: "bg-gradient-to-tr",
    from: "#3b82f6",
    via: "",
    to: "#4ade80",
  },
  {
    name: "Sunshine",
    color: "#FFA500",
    direction: "bg-gradient-to-tr",
    from: "#eab308",
    via: "",
    to: "#f87171",
  },
  {
    name: "Imagine",
    color: "#ef4444",
    direction: "bg-gradient-to-tr",
    from: "#ef4444",
    via: "",
    to: "#c084fc",
  },
  {
    name: "Ocean Breeze",
    color: "#00BFFF",
    direction: "bg-gradient-to-tr",
    from: "#1e90ff",
    via: "#87cefa",
    to: "#00bfff",
  },
  {
    name: "Twilight",
    color: "#4B0082",
    direction: "bg-gradient-to-tr",
    from: "#6a1b9a",
    via: "#8e24aa",
    to: "#4b0082",
  },
  {
    name: "Desert Sands",
    color: "#FFD700",
    direction: "bg-gradient-to-tr",
    from: "#ffcc00",
    via: "#ffb74d",
    to: "#f57c00",
  },
  {
    name: "Aurora",
    color: "#9400D3",
    direction: "bg-gradient-to-tr",
    from: "#4a148c",
    via: "#7b1fa2",
    to: "#d81b60",
  },
  {
    name: "Spring Bloom",
    color: "#FF69B4",
    direction: "bg-gradient-to-tr",
    from: "#ff4081",
    via: "#f50057",
    to: "#c2185b",
  },
  {
    name: "Misty Forest",
    color: "#2E8B57",
    direction: "bg-gradient-to-tr",
    from: "#388e3c",
    via: "#66bb6a",
    to: "#4caf50",
  },
  {
    name: "Starry Night",
    color: "#1E1F2A",
    direction: "bg-gradient-to-tr",
    from: "#0d47a1",
    via: "#1e88e5",
    to: "#bbdefb",
  },
  {
    name: "Vintage Rose",
    color: "#F08080",
    direction: "bg-gradient-to-tr",
    from: "#f44336",
    via: "#e57373",
    to: "#ffcdd2",
  },
  {
    name: "Autumn Leaves",
    color: "#FF4500",
    direction: "bg-gradient-to-tr",
    from: "#d32f2f",
    via: "#f57c00",
    to: "#ff9800",
  },
  {
    name: "Frosted Mint",
    color: "#00FA9A",
    direction: "bg-gradient-to-tr",
    from: "#004d40",
    via: "#009688",
    to: "#00bfae",
  },
  {
    name: "Neon Glow",
    color: "#00FF00",
    direction: "bg-gradient-to-tr",
    from: "#00e676",
    via: "#76ff03",
    to: "#b9fbc0",
  },
  {
    name: "Fiery Sunset",
    color: "#FF4500",
    direction: "bg-gradient-to-tr",
    from: "#ff5722",
    via: "#ff9800",
    to: "#ffc107",
  },
  {
    name: "Deep Sea",
    color: "#000080",
    direction: "bg-gradient-to-tr",
    from: "#003366",
    via: "#004080",
    to: "#0000ff",
  },
  {
    name: "Lush Garden",
    color: "#228B22",
    direction: "bg-gradient-to-tr",
    from: "#2e7d32",
    via: "#66bb6a",
    to: "#a5d6a7",
  },
  {
    name: "Golden Hour",
    color: "#FFD700",
    direction: "bg-gradient-to-tr",
    from: "#ffeb3b",
    via: "#fbc02d",
    to: "#f9a825",
  },
  {
    name: "Electric Blue",
    color: "#1E90FF",
    direction: "bg-gradient-to-tr",
    from: "#64b5f6",
    via: "#2196f3",
    to: "#0d47a1",
  },
  {
    name: "Cosmic Purple",
    color: "#6A0D91",
    direction: "bg-gradient-to-tr",
    from: "#8e24aa",
    via: "#9c27b0",
    to: "#6a1b9a",
  },
  {
    name: "Warm Sand",
    color: "#F4A460",
    direction: "bg-gradient-to-tr",
    from: "#dbe1e5",
    via: "#f5f5f5",
    to: "#f4a460",
  },
];

const handlePreset = (
  presetColor: string,
  direction: string,
  from: string,
  via: string,
  to: string
) => {
  console.log("dev-tool");
  mixBlendValue.value = "multiply";
  console.log("direction", direction, "from", from, "via", via, "to", to);
  selectedGradientDirection.value = direction;
  fromGradient.value = from;
  viaGradient.value = via;
  toGradient.value = to;
};

const uniquePresetBoxSize = ref(500);

const handleUniquePresetBoxSize = (size: number) => {
  uniquePresetBoxSize.value = size;
};
</script>

<style scoped></style>
