<template>
  <div class="">
    <div class="flex flex-col md:flex-row gap-4 md:gap-3">
      <div
        class="p-1 bg-slate-200/60 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.1)] rounded-lg grid grid-cols-2 justify-center grow"
      >
        <button
          @click="toggleViewMode('preview')"
          :class="{ 'bg-white shadow text-slate-800': showPreview }"
          class="px-3 group py-1.5 rounded-md text-slate-500 text-sm font-semibold justify-center grow flex items-center gap-2"
        >
          <svg
            :class="{ 'text-emerald-500': showPreview }"
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 3h8m0 6h8M12 4v16"
            />
          </svg>

          Preview
        </button>
        <button
          @click="toggleViewMode('code')"
          :class="{ 'bg-white shadow text-slate-800': !showPreview }"
          class="text-slate-500 justify-center px-3 py-1.5 text-sm font-semibold rounded-md flex items-center gap-2"
        >
          <svg
            :class="{ 'text-emerald-500': !showPreview }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>

          Code
        </button>
      </div>
      <button
        @click="copyCode"
        class="shadow active:translate-y-px duration-200 text-sm font-semibold transition ease-out bg-white group text-slate-700 justify-center px-3 py-1 rounded-md flex items-center gap-2 relative"
      >
        <div
          v-if="showCopyTooltip"
          class="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 font-normal text-white rounded-md"
        >
          <div
            class="w-2 h-2 rotate-45 bg-slate-800 absolute -bottom-1 left-1/2 -translate-x-1/2"
          ></div>
          <p class="text-[10px] px-2 py-0.5">Copied</p>
        </div>

        <svg
          class="h-8 w-8 stroke-slate-700 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-800"
          fill="none"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13.7475 16.2499L18.2475 16.2499"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13.7475 19.2499L18.2475 19.2499"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <g class="opacity-0">
            <path
              d="M15.9975 5.99988L15.9975 3.99988"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19.9975 5.99988L20.9975 4.99988"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M11.9975 5.99988L10.9975 4.99988"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>

        Copy
      </button>
      <div
        class="p-1 bg-slate-100 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.1)] grid grid-cols-3 justify-items-center rounded-lg relative group"
      >
        <div
          class="absolute -top-9 hidden group-hover:block right-0 bg-slate-800 text-white px-4 py-2 rounded-md text-xs"
        >
          <p>Aspect Ratio</p>
        </div>
        <button
          @click="handleAspectRatio('square')"
          :class="{
            'bg-white shadow text-slate-800': aspectRatio === 'square',
          }"
          class="px-3 py-1.5 rounded-md text-slate-700 w-full md:w-auto flex justify-center md:flex-none"
        >
          <svg
            :class="{ 'text-emerald-500': aspectRatio === 'square' }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
          </svg>
        </button>
        <button
          @click="handleAspectRatio('video')"
          :class="{
            'bg-white shadow text-slate-800': aspectRatio === 'video',
          }"
          class="px-3 py-1.5 rounded-md text-slate-700 w-full md:w-auto flex justify-center md:flex-none"
        >
          <svg
            :class="{ 'text-emerald-500': aspectRatio === 'video' }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5"
          >
            <rect width="20" height="12" x="2" y="6" rx="2" />
          </svg>
        </button>
        <button
          @click="handleAspectRatio('auto')"
          :class="{
            'bg-white shadow text-slate-800': aspectRatio === 'auto',
          }"
          class="px-3 py-1.5 rounded-md text-slate-700 w-full md:w-auto flex justify-center md:flex-none"
        >
          <svg
            :class="{ 'text-emerald-500': aspectRatio === 'auto' }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5"
          >
            <rect width="20" height="6" x="2" y="4" rx="2" />
            <rect width="20" height="6" x="2" y="14" rx="2" />
          </svg>
        </button>
      </div>
    </div>

    <div class="mt-4 flex flex-col rounded-xl">
      <div
        v-if="showPreview"
        class="w-full h-full relative rounded-xl overflow-hidden"
        :class="[
          aspectRatio === 'square'
            ? 'aspect-square'
            : aspectRatio === 'video'
            ? 'aspect-video'
            : 'aspect-auto',
        ]"
      >
        <div
          class="absolute w-full h-full opacity-[var(--bgLayerOpacity)]"
          :class="`${
            selectedGradientDirection
              ? `${selectedGradientDirection} ${
                  fromGradient ? 'from-[var(--fromGradient)]' : ''
                } ${viaGradient ? 'via-[var(--viaGradient)]' : ''} ${
                  toGradient ? 'to-[var(--toGradient)]' : ''
                }`
              : 'bg-[var(--bgLayerColor)]'
          }`"
          :style="`--bgLayerColor:${bgLayerColor}; --bgLayerOpacity:${bgLayerOpacity}%; --mixBlendValue:${mixBlendValue}; mix-blend-mode:${mixBlendValue}; --fromGradient:${fromGradient}; --viaGradient:${viaGradient}; --toGradient:${toGradient};`"
        ></div>

        <img :src="imageUrl" alt="" class="w-full h-full object-cover" />
      </div>
      <div v-else class="h-full aspect-square w-full">
        <pre
          class="w-full h-full rounded-xl"
        ><code class="language-html">{{viewCode}}</code></pre>
      </div>
    </div>

    <div class="">
      <div class="canvas-container relative">
        <canvas ref="myCanvas" class="w-[500px] hidden"></canvas>
        <button
          :disabled="loading"
          @click="incrementDownloadCount"
          class="mt-2 px-4 py-2 bg-slate-800 disabled:bg-gray-200 disabled:text-gray-500 flex items-center gap-2 text-base font-inter justify-center w-full text-white rounded-md"
          :class="{'cursor-not-allowed': loading}"
        >
        <svg v-if="loading" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-6 animate-spin"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-tomorrow.css";
import { nextTick, onMounted, ref } from "vue";
import useSupabase from "../composables/useSupabase";

import useCanvasImageEditor from "../composables/useCanvasImageEditor";
import useImageControls from "../composables/useImageControls";

const {
  downloadCount,
  session,
  signInWithGoogle,
  signOut,
  incrementDownloadCount,
} = useSupabase();


const { myCanvas, drawImage, downloadImage, loading } = useCanvasImageEditor();

const {
  imageUrl,
  aspectRatio,
  showPreview,
  viewCode,
  handleViewCode,
  bgLayerOpacity,
  bgLayerColor,
  mixBlendValue,
  selectedGradientDirection,
  fromGradient,
  viaGradient,
  toGradient,
  showGradientDropdown,
} = useImageControls();

const showCopyTooltip = ref(false);
const imageFile = ref(null);

// setTimeout(() => {
//   mixBlendValue.value = "multiply";
// }, 2000)

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

const copyCode = () => {
  console.log("hello");

  const updatedHtml = `
  <div class="relative h-full w-full aspect-[${aspectRatio.value}] test">
    <div class="absolute h-full w-full ${
      selectedGradientDirection.value
        ? `${selectedGradientDirection.value} from-[${fromGradient.value}] via-[${viaGradient.value}] to-[${toGradient.value}]`
        : `bg-[${bgLayerColor.value}]`
    } opacity-[${bgLayerOpacity.value}%] mix-blend-${mixBlendValue.value}"></div>
    <img src="${imageUrl.value}" alt="" class="h-[300px] w-full object-cover" />
  </div>
`;

  console.log("Updated HTML:", updatedHtml);

  // Copy updated html
  navigator.clipboard
    .writeText(updatedHtml)
    .then(() => {
      showCopyTooltip.value = true;
      setTimeout(() => {
        showCopyTooltip.value = false;
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
};

onMounted(() => {
  Prism.highlightAll();
});

const handleAspectRatio = (aspect: string) => {
  if (aspect === "square") {
    aspectRatio.value = "square";
  } else if (aspect === "video") {
    aspectRatio.value = "video";
  } else {
    aspectRatio.value = "auto";
  }
};

</script>

<style scoped></style>
