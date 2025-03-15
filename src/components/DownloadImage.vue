<template>
  <div class="p-4 ">

    <SidebarTitle>DOWNLOAD</SidebarTitle>
    <div class="canvas-container relative">
      <canvas ref="myCanvas" class="w-[500px] hidden"></canvas>
      <button
        :disabled="loading"
        @click="incrementDownloadCount"
        class="mt-2 px-4 py-2 bg-emerald-500 dark:bg-indigo-500 disabled:bg-gray-200 disabled:text-gray-500 flex items-center gap-2 text-base font-inter justify-center w-full text-white rounded-md"
        :class="{ 'cursor-not-allowed': loading }"
      >
        <svg
          v-if="loading"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-6 animate-spin"
        >
          <path d="M12 2v4" />
          <path d="m16.2 7.8 2.9-2.9" />
          <path d="M18 12h4" />
          <path d="m16.2 16.2 2.9 2.9" />
          <path d="M12 18v4" />
          <path d="m4.9 19.1 2.9-2.9" />
          <path d="M2 12h4" />
          <path d="m4.9 4.9 2.9 2.9" />
        </svg>
        <svg
          v-else
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
            d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
          />
          <path d="m14 19 3 3v-5.5" />
          <path d="m17 22 3-3" />
          <circle cx="9" cy="9" r="2" />
        </svg>
        <span v-if="loading" class="flex items-center gap-2"> Downloading</span>
        <span v-else>Download Image</span>
      </button>

      <div
        v-if="isExternalImageSource"
        class="mt-6 flex items-start border p-4 bg-yellow-50 dark:bg-yellow-900 border-yellow-500 rounded-lg gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-6 shrink-0 text-yellow-500 dark:text-yellow-400"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        <p class="text-sm md:text-base text-yellow-600 dark:text-yellow-300">
          Unfortunately, images from external links cannot be downloaded due to
          security restrictions. To customize and download your image, please
          upload the image directly from your device.
        </p>
        <button
          @click="isExternalImageSource = false"
          class="w-8 h-8 shrink-0 rounded-full bg-yellow-200 dark:bg-yellow-700 grid place-items-center"
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
            class="size-4 text-yellow-600 dark:text-yellow-300"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSupabase from "../composables/useSupabase";

import useCanvasImageEditor from "../composables/useCanvasImageEditor";
import SidebarTitle from "./Typography/SidebarTitle.vue";

const {
  incrementDownloadCount,
  isExternalImageSource,
} = useSupabase();

const { myCanvas, loading } = useCanvasImageEditor();
</script>

<style scoped></style>
