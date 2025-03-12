<template>
  <aside
    class="flex h-auto w-full shrink-0 gap-x-4 gap-y-4 overflow-auto bg-[#131412] md:justify-between md:gap-x-0 md:rounded-xl md:p-2 lg:h-full lg:w-16 lg:flex-col"
  >
    <!-- Top Section -->
    <div
      class="flex h-full flex-row items-center gap-x-4 gap-y-6 md:gap-x-0 lg:flex-col"
    >
      <button
        @click="handleActiveSection('imageControls')"
        class="flex h-12 w-12 items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:text-gray-100 md:rounded-lg"
        :class="[
          activeMenu == 'imageControls'
            ? 'bg-zinc-800 text-gray-100 '
            : 'text-gray-400',
        ]"
      >
        <Pencil class="h-5 w-5" />
      </button>
      <button
        @click="handleActiveSection('presets')"
        class="flex h-12 w-12 items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:text-gray-100 md:rounded-lg"
        :class="[
          activeMenu == 'presets'
            ? 'bg-zinc-800 text-gray-100 '
            : 'text-gray-400',
        ]"
      >
        <Images class="h-5 w-5" />
      </button>

      <button
        @click="handleActiveSection('save')"
        class="flex h-12 w-12 items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:text-gray-100 md:rounded-lg"
        :class="[
          activeMenu == 'save' ? 'bg-zinc-800 text-gray-100 ' : 'text-gray-400',
        ]"
      >
        <Save class="h-5 w-5" />
      </button>

      <button
        @click="handleActiveSection('communityPresets')"
        class="flex h-12 w-12 items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:text-gray-100 md:rounded-lg"
        :class="[
          activeMenu == 'communityPresets'
            ? ' bg-zinc-800 text-gray-100 '
            : 'text-gray-400',
        ]"
      >
        <Sparkles class="h-5 w-5" />
      </button>
      <div class="hidden md:block w-full h-0.5 bg-zinc-800 my-2"></div>
      <div
        class="relative flex h-20 mx-4 md:mx-0 w-10 rotate-90 cursor-pointer flex-col overflow-hidden rounded-lg border border-emerald-800 bg-zinc-800 shadow-md md:rotate-0"
        @click="showCode = !showCode"
        role="switch"
        :aria-checked="showCode"
        aria-label="Toggle between code and preview view"
        tabindex="0"
        @keydown.space.prevent="showCode = !showCode"
        @keydown.enter.prevent="showCode = !showCode"
      >
        <button
          @click="toggleViewMode('preview')"
          class="z-10 flex h-1/2 items-center justify-center transition-colors duration-300"
          :class="{
            'bg-emerald-500 text-white': !showCode,
            'text-gray-400': showCode,
          }"
        >
          <Eye class="h-5 w-5" />
        </button>
        <button
          @click="toggleViewMode('code')"
          class="z-10 flex h-1/2 items-center justify-center transition-colors duration-300"
          :class="{
            'bg-emerald-500 text-white': showCode,
            'text-gray-400': !showCode,
          }"
        >
          <Code class="h-5 w-5" />
        </button>

        <!-- <div
          class="absolute rounded-md bg-gray-800 w-8 h-8 left-[3px] transition-all duration-300 ease-in-out"
          
          
          :style="{
            transform: !showCode ? 'translateY(38px)' : 'translateY(3px)',
          }"
        ></div> -->
      </div>
    </div>

    <div class="flex items-center gap-x-4 lg:flex-col lg:gap-x-0 lg:gap-y-4">
      <button
        v-for="(item, index) in footerItems"
        :key="index"
        class="flex h-12 w-12 items-center justify-center text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-gray-100 md:rounded-lg"
      >
        <component :is="item.icon" class="h-5 w-5" />
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import useImageControls from "@/composables/useImageControls";
import Prism from "prismjs";
const { showPreview, handleViewCode, activeMenu, handleActiveSection } =
  useImageControls();

import {
  Code,
  Eye,
  Github,
  HelpCircle,
  Images,
  Pencil,
  Save,
  Sparkles
} from "lucide-vue-next";
import { nextTick, ref } from "vue";



const footerItems = ref([
  { icon: HelpCircle, active: false },
  { icon: Github, active: false },
]);

const toggleViewMode = async (mode: string) => {
  if (mode === "preview") {
    showPreview.value = true;
  } else {
    await handleViewCode();
    showPreview.value = false;
    await nextTick();
    Prism.highlightAll();
  }
};

const showCode = ref(false);
</script>
