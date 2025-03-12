<template>
  <div class="relative h-full w-full rounded-xl font-inter">
    <div
      class="relative h-full w-full bg-[#131412] p-4 dark:bg-[#131412] sm:pb-12 sm:pt-6"
    >
      <SidebarTitle>PRESETS</SidebarTitle>
      <div class="bg-gradient grid w-full grid-cols-3 gap-4 md:grid-cols-2">
        <button
          v-for="preset in presets"
          :key="preset.id"
          @click="
            handleNormalPresets(
              preset.id,
              preset.color,
              preset.direction,
              preset.from,
              preset.via,
              preset.to,
              preset.bgLayerColor,
              preset.bgLayerOpacity,
              preset.mixBlendValue,
            )
          "
          class="flex h-auto flex-col items-center justify-center rounded-md border-2 bg-[var(--presetColor)] bg-zinc-800 p-2 text-center text-sm font-medium disabled:cursor-not-allowed"
          :class="
            activePreset == preset.id
              ? ' border-emerald-400'
              : 'border-transparent'
          "
        >
          <div class="relative">
            <div
              class="absolute h-full w-full opacity-[var(--bgLayerOpacity)]"
              :class="`${
                preset.direction
                  ? `${preset.direction} ${
                      preset.from ? 'from-[var(--fromGradient)]' : ''
                    } ${preset.via ? 'via-[var(--viaGradient)]' : ''} ${
                      preset.to ? 'to-[var(--toGradient)]' : ''
                    }`
                  : 'bg-[var(--bgLayerColor)]'
              }`"
              :style="`--bgLayerColor:${preset.bgLayerColor}; --bgLayerOpacity:${preset.bgLayerOpacity}%;  mix-blend-mode:${preset.mixBlendValue}; --fromGradient:${preset.from}; --viaGradient:${preset.via}; --toGradient:${preset.to};`"
            ></div>
            <img
              src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
              alt="Ocean"
              class="mb-2 h-full w-full rounded object-cover"
            />
          </div>

          <span class="mt-2 text-sm font-normal text-white">{{
            preset.name
          }}</span>
        </button>
      </div>
      <div
        v-if="!session"
        class="sticky top-2 mb-6 mt-4 flex justify-center rounded-lg"
      >
        <p
          class="w-auto rounded-full bg-emerald-500 px-4 py-2 text-center font-inter text-xs font-medium text-gray-100 md:text-sm"
        >
          <button
            @click="signInWithGoogle"
            class="font-bold tracking-wider text-white underline decoration-2"
          >
            Sign in
          </button>
          to gain access to our unique presets
        </p>
      </div>
      <div class="grid w-full grid-cols-2 gap-4">
        <button
          :disabled="!session"
          v-for="preset in uniquePresets"
          :key="preset.id"
          @click="
            handlePreset(
              preset.id,
              preset.color,
              preset.direction,
              preset.from,
              preset.via,
              preset.to,
              preset.bgLayerColor,
              preset.bgLayerOpacity,
              preset.mixBlendValue,
            )
          "
          class="flex h-auto flex-col items-center justify-center rounded-md border-2 bg-[var(--presetColor)] bg-zinc-800 p-2 text-center text-sm font-medium disabled:cursor-not-allowed"
          :class="
            activePreset == preset.id
              ? ' border-emerald-400'
              : 'border-transparent'
          "
        >
          <div class="relative">
            <div
              class="absolute h-full w-full opacity-[var(--bgLayerOpacity)]"
              :class="`${
                preset.direction
                  ? `${preset.direction} ${
                      preset.from ? 'from-[var(--fromGradient)]' : ''
                    } ${preset.via ? 'via-[var(--viaGradient)]' : ''} ${
                      preset.to ? 'to-[var(--toGradient)]' : ''
                    }`
                  : 'bg-[var(--bgLayerColor)]'
              }`"
              :style="`--bgLayerColor:${preset.bgLayerColor}; --bgLayerOpacity:${preset.bgLayerOpacity}%;  mix-blend-mode:${preset.mixBlendValue}; --fromGradient:${preset.from}; --viaGradient:${preset.via}; --toGradient:${preset.to};`"
            ></div>
            <img
              src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
              alt="Ocean"
              class="mb-2 h-full w-full rounded object-cover"
            />
          </div>

          <span class="mt-2 text-sm font-normal text-white">{{
            preset.name
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useImageControls from "@/composables/useImageControls";
import useSupabase from "@/composables/useSupabase";
import { ref, type Ref } from "vue";
import uniquePresets from "../../db/uniquePresets.json";
import SidebarTitle from "./Typography/SidebarTitle.vue";

const { session, signInWithGoogle } = useSupabase();
const {
  bgLayerOpacity,
  bgLayerColor,
  mixBlendValue,
  selectedGradientDirection,
  fromGradient,
  viaGradient,
  toGradient,
} = useImageControls();

const activePreset: Ref<number | null> = ref(null);

const handleNormalPresets = (
  id: number,
  presetColor: string,
  direction: string,
  from: string,
  via: string,
  to: string,
  layerColor: string,
  bgOpacity: number,
  blendValue: string,
) => {
  activePreset.value = id;
  mixBlendValue.value = blendValue;
  selectedGradientDirection.value = direction;
  fromGradient.value = from;
  viaGradient.value = via;
  toGradient.value = to;
  bgLayerOpacity.value = bgOpacity;
  bgLayerColor.value = layerColor;
};

const presets = [
  {
    id: 1000,
    name: "Ocean",
    color: "#0077BE",
    direction: "bg-gradient-to-tr",
    from: "#00BFFF",
    via: "#0077BE",
    to: "#1E90FF",
    bgLayerColor: "#0077BE",
    bgLayerOpacity: 40,
    mixBlendValue: "multiply",
  },
  {
    id: 1001,
    name: "Forest",
    color: "#228B22",
    direction: "bg-gradient-to-tr",
    from: "#388E3C",
    via: "#66BB6A",
    to: "#4CAF50",
    bgLayerColor: "#228B22",
    bgLayerOpacity: 40,
    mixBlendValue: "multiply",
  },
  {
    id: 1002,
    name: "Sunset",
    color: "#FFA500",
    direction: "bg-gradient-to-tr",
    from: "#FF5733",
    via: "#FF8C00",
    to: "#F4A261",
    bgLayerColor: "#FFA500",
    bgLayerOpacity: 40,
    mixBlendValue: "multiply",
  },
  {
    id: 1003,
    name: "Lavender",
    color: "#E6E6FA",
    direction: "bg-gradient-to-tr",
    from: "#D1C4E9",
    via: "#B39DDB",
    to: "#9575CD",
    bgLayerColor: "#E6E6FA",
    bgLayerOpacity: 40,
    mixBlendValue: "multiply",
  },
  {
    id: 5,
    name: "Cherry",
    color: "#DE3163",
    direction: "bg-gradient-to-tr",
    from: "#D32F2F",
    via: "#F06292",
    to: "#F44336",
    bgLayerColor: "#DE3163",
    bgLayerOpacity: 40,
    mixBlendValue: "multiply",
  },
  {
    id: 6,
    name: "Midnight",
    color: "#191970",
    direction: "bg-gradient-to-tr",
    from: "#0D47A1",
    via: "#1565C0",
    to: "#1976D2",
    bgLayerColor: "#191970",
    bgLayerOpacity: 40,
    mixBlendValue: "multiply",
  },
];

const handlePreset = (
  id: number,
  presetColor: string,
  direction: string,
  from: string,
  via: string,
  to: string,
  layerColor: string,
  bgOpacity: number,
  blendValue: string,
) => {
  activePreset.value = id;
  mixBlendValue.value = blendValue;
  selectedGradientDirection.value = direction;
  fromGradient.value = from;
  viaGradient.value = via;
  toGradient.value = to;
  bgLayerOpacity.value = bgOpacity;
  bgLayerColor.value = layerColor;
};
</script>

<style scoped></style>
