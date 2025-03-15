<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10 font-inter">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all"
            >
              <div
                class="flex items-center justify-between border-b border-gray-700 pb-4"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-bold leading-6 text-gray-200 md:text-2xl"
                >
                  About Image Blender
                </DialogTitle>
                <button
                  type="button"
                  class="grid h-10 w-10 place-items-center rounded-md border border-transparent bg-zinc-900 text-sm font-medium text-gray-300 transition duration-300 ease-out hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  <X class="h-5 w-5" />
                </button>
              </div>

              <div class="mt-4 space-y-4">
                <p class="text-base text-gray-200">
                  Blend, overlay, and transform images in seconds! Image Blender
                  gives you creative control with real-time previews and
                  flexible customization.
                </p>

                <h4 class="text-xl font-bold text-gray-200">Contribution</h4>
                <p class="text-base text-gray-200">
                  Have a feature request or feedback? Join us on
                  <a
                    href="https://github.com/muhammadhafijur/image-blender"
                    class="text-sky-500 underline"
                    >GitHub</a
                  >
                  and make Image Blender even better.
                </p>

                <h4 class="text-xl font-bold text-gray-200">Support</h4>
                <p class="text-base text-gray-200">
                  If this tool saves you time, consider showing some love by
                  <a
                    href="https://github.com/muhammadhafijur/image-blender"
                    class="text-sky-500 underline"
                    >starring</a
                  >
                  the project or
                  <a
                    href="https://github.com/muhammadhafijur/image-blender/issues/1"
                    class="text-sky-500 underline"
                    >leaving</a
                  >
                  a review on GitHub.
                </p>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <aside
    class="[&::-webkit-scrollbar-thumb] flex h-auto w-full shrink-0 gap-x-4 gap-y-4 overflow-auto bg-[#131412] md:rounded-xl md:p-2 lg:h-full lg:w-16 lg:flex-col lg:justify-between lg:gap-x-0 [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-gray-600 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5"
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
      <div class="my-2 hidden h-0.5 w-full bg-zinc-800 lg:block"></div>
      <div
        class="relative mx-4 hidden h-20 w-10 rotate-90 cursor-pointer flex-col overflow-hidden rounded-lg border border-emerald-800 bg-zinc-800 shadow-md md:flex lg:mx-0 lg:rotate-0"
        aria-label="Toggle between code and preview view"
        tabindex="0"
      >
        <button
          @click="toggleViewMode('preview')"
          class="z-10 flex h-1/2 items-center justify-center transition-colors duration-300"
          :class="{
            'bg-emerald-500 text-white': showPreview,
            'text-gray-400': !showPreview,
          }"
        >
          <Eye class="h-5 w-5" />
        </button>
        <button
          @click="toggleViewMode('code')"
          class="z-10 flex h-1/2 items-center justify-center transition-colors duration-300"
          :class="{
            'bg-emerald-500 text-white': !showPreview,
            'text-gray-400': showPreview,
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
      <a
        href="https://github.com/muhammadhafijur/image-blender"
        target="_blank"
        rel="noopener noreferrer"
        class="flex h-12 w-12 items-center justify-center text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-gray-100 md:rounded-lg"
        :class="{
          'bg-emerald-500 text-white': !showPreview,
          'text-gray-400': showPreview,
        }"
      >
        <Github class="h-5 w-5" />
      </a>
      <button
        @click="openModal"
        class="flex h-12 w-12 items-center justify-center text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-gray-100 md:rounded-lg"
        :class="{
          'bg-emerald-500 text-white': !showPreview,
          'text-gray-400': showPreview,
        }"
      >
        <CircleHelp class="h-5 w-5" />
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
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  CircleHelp,
  Code,
  Eye,
  Github,
  Images,
  Pencil,
  Save,
  Sparkles,
  X,
} from "lucide-vue-next";
import { nextTick, ref } from "vue";

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

const isOpen = ref(true);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
