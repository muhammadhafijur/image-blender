<template>
  <div class="relative h-full w-full rounded-xl">
    <div
      class="relative h-full w-full bg-[#131412] p-4 dark:bg-[#131412] sm:pb-12 sm:pt-6"
    >
      <SidebarTitle>COMMUNITY PRESETS</SidebarTitle>
      <div class="grid w-full grid-cols-2 gap-4">
        <div
          v-for="preset in communityPresets"
          :key="preset.id"
          class="text-center"
        >
          <button
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

            <span class="mt-1 font-medium text-white">{{ preset.name }}</span>
          </button>
          <a href="#" class="mt-3 block text-xs font-normal text-white">
            by - <span class="underline">{{ preset.author }}</span>
          </a>
        </div>
      </div>
      <a
        class="relative mt-6 block  bg-gradient-to-tr from-sky-400 to-purple-600 bg-clip-text p-4 text-center text-base font-bold text-transparent"
        href="https://github.com/muhammadhafijur/image-blender/tree/main/db"
        target="_blank"
        rel="noopener noreferrer"
        >
        Bring Your Presets to the Community!
        <div
          class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
        ></div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import useImageControls from "@/composables/useImageControls";

import { ref, type Ref } from "vue";
import communityPresets from "../../db/communityPresets.json";
import SidebarTitle from "./Typography/SidebarTitle.vue";

const activePreset: Ref<number | null> = ref(null);

const {
  mixBlendValue,
  selectedGradientDirection,
  fromGradient,
  viaGradient,
  toGradient,
  bgLayerOpacity,
  bgLayerColor,
} = useImageControls();

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
