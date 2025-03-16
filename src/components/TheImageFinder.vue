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
                  class="text-base font-bold leading-6 text-gray-200 md:text-xl"
                >
                Can't Download Linked Images
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
                <p class="text-sm md:text-base text-gray-200">
                  Unfortunately, images from external links cannot be downloaded
                  due to security restrictions. To customize and download your
                  image, please upload the image directly from your device.
                </p>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <div class="rounded-xl bg-zinc-950">
    <div
      class="mx-auto flex w-full max-w-full items-center gap-4 px-4 sm:px-6 md:px-8"
    >
      <button
        class="grid shrink-0 cursor-pointer place-items-center rounded-full text-indigo-500 dark:text-gray-100"
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
            d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          />
          <path
            d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          />
        </svg>
      </button>
      <input
        id="imageUrl"
        type="text"
        class="w-full bg-transparent py-4 text-base font-normal text-gray-200 caret-emerald-500 focus:outline-none dark:text-gray-100 md:py-6"
        v-model="imageUrl"
      />
      <div class="flex items-center gap-4">
        <button
          @click="chooseRandomImage"
          class="rotate-animation grid h-9 w-9 shrink-0 place-items-center rounded-full text-white md:h-11 md:w-11"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5 md:size-6"
          >
            <path
              d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
            ></path>
            <path d="m14 7 3 3"></path>
            <path d="M5 6v4"></path>
            <path d="M19 14v4"></path>
            <path d="M10 2v2"></path>
            <path d="M7 8H3"></path>
            <path d="M21 16h-4"></path>
            <path d="M11 3H9"></path>
          </svg>
        </button>
        <label
          for="imageFile"
          title="Upload Image"
          class="flex shrink-0 cursor-pointer items-center gap-2 rounded-full text-emerald-500"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5 md:size-6"
          >
            <path
              d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
            />
            <path d="m14 19.5 3-3 3 3" />
            <path d="M17 22v-5.5" />
            <circle cx="9" cy="9" r="2" />
          </svg>
          <span class="hidden text-sm font-semibold md:block">UPLOAD</span>
        </label>
        <input
          type="file"
          class="hidden"
          id="imageFile"
          @change="handleImageFileChange"
        />
      </div>

      <div class="block text-right xl:hidden">
        <Menu as="div" class="relative inline-block text-left">
          <div class="flex items-center gap-3 text-sm font-medium text-white">
            <MenuButton
              class="inline-flex w-full justify-center rounded-md bg-black/20 text-sm text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              <button
                class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 transition-all duration-300 hover:bg-gray-800 hover:text-gray-100"
              >
                <EllipsisVertical class="h-5 w-5" />
              </button>
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 z-40 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-custom-dark-600 shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-zinc-800"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <div
                    class="grid w-full max-w-64 grow grid-cols-2 justify-center rounded-lg bg-zinc-600/60 p-1 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.1)] dark:bg-gray-100"
                  >
                    <button
                      @click="toggleViewMode('preview')"
                      class="group flex grow items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold"
                      :class="[
                        showPreview
                          ? 'bg-custom-dark-600 text-gray-100 shadow dark:bg-custom-dark-400 dark:text-gray-100'
                          : 'text-gray-300',
                      ]"
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
                      :class="[
                        !showPreview
                          ? 'bg-custom-dark-600 text-gray-100 shadow dark:bg-custom-dark-400 dark:text-gray-100'
                          : 'text-gray-300',
                      ]"
                      class="flex items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold"
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
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <div
                    class="group relative mt-2 grid w-full grid-cols-3 justify-items-center rounded-lg bg-zinc-800 p-1 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.1)]"
                  >
                    <button
                      @click="handleAspectRatio('square')"
                      :class="{
                        'bg-custom-dark-600 text-slate-800 shadow dark:bg-custom-dark-400 dark:text-gray-100':
                          aspectRatio === 'square',
                      }"
                      class="flex w-full justify-center rounded-md px-3 py-1.5 text-gray-300 md:w-auto md:flex-none"
                    >
                      <svg
                        :class="{
                          'text-emerald-500': aspectRatio === 'square',
                        }"
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
                        'bg-custom-dark-600 text-slate-800 shadow dark:bg-custom-dark-400 dark:text-gray-100':
                          aspectRatio === 'video',
                      }"
                      class="flex w-full justify-center rounded-md px-3 py-1.5 text-gray-300 md:w-auto md:flex-none"
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
                        'bg-custom-dark-600 text-slate-800 shadow dark:bg-custom-dark-400 dark:text-gray-100':
                          aspectRatio === 'auto',
                      }"
                      class="flex w-full justify-center rounded-md px-3 py-1.5 text-gray-300 md:w-auto md:flex-none"
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
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <div
                    class="group relative mt-2 w-full justify-items-center rounded-lg bg-zinc-800 p-1 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.1)]"
                  >
                    <button
                      :disabled="loading"
                      @click="handleDownload"
                      class="flex w-full items-center justify-center gap-2 rounded-md bg-custom-dark-600 px-4 py-2 font-inter text-base text-emerald-400 disabled:bg-gray-200 disabled:text-gray-500"
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

                      <span v-else><ArrowDownToLine class="h-5 w-5" /></span>
                    </button>
                  </div>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div
        class="hidden w-full max-w-64 grow grid-cols-2 justify-center rounded-lg bg-zinc-600/60 p-1 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.1)] dark:bg-gray-100 xl:grid"
      >
        <button
          @click="toggleViewMode('preview')"
          class="group flex grow items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold"
          :class="[
            showPreview
              ? 'bg-custom-dark-600 text-gray-100 shadow dark:bg-custom-dark-400 dark:text-gray-100'
              : 'text-gray-300',
          ]"
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
          :class="[
            !showPreview
              ? 'bg-custom-dark-600 text-gray-100 shadow dark:bg-custom-dark-400 dark:text-gray-100'
              : 'text-gray-300',
          ]"
          class="flex items-center justify-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold"
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
      <div
        class="group relative hidden w-full max-w-36 grid-cols-3 justify-items-center rounded-lg bg-zinc-800 p-1 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.1)] xl:grid"
      >
        <div
          class="absolute -top-9 right-0 hidden rounded-md bg-slate-800 px-4 py-2 text-xs text-white group-hover:block"
        >
          <p>Aspect Ratio</p>
        </div>
        <button
          @click="handleAspectRatio('square')"
          :class="{
            'bg-custom-dark-600 text-slate-800 shadow dark:bg-custom-dark-400 dark:text-gray-100':
              aspectRatio === 'square',
          }"
          class="flex w-full justify-center rounded-md px-3 py-1.5 text-gray-300 md:w-auto md:flex-none"
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
            'bg-custom-dark-600 text-slate-800 shadow dark:bg-custom-dark-400 dark:text-gray-100':
              aspectRatio === 'video',
          }"
          class="flex w-full justify-center rounded-md px-3 py-1.5 text-gray-300 md:w-auto md:flex-none"
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
            'bg-custom-dark-600 text-slate-800 shadow dark:bg-custom-dark-400 dark:text-gray-100':
              aspectRatio === 'auto',
          }"
          class="flex w-full justify-center rounded-md px-3 py-1.5 text-gray-300 md:w-auto md:flex-none"
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
      <div
        class="group relative hidden w-auto justify-items-center rounded-lg bg-zinc-800 p-1 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.1)] xl:grid"
      >
        <button
          :disabled="loading"
          @click="handleDownload"
          class="flex w-full items-center justify-center gap-2 rounded-md bg-custom-dark-600 px-4 py-2 font-inter text-base text-emerald-400 disabled:bg-gray-200 disabled:text-gray-500"
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

          <span v-else><ArrowDownToLine class="h-5 w-5" /></span>
        </button>
      </div>

      <!-- <div class="flex">
        <button
          @click="handleAspectRatio('square')"
          :class="{
            'bg-white dark:bg-zinc-900 dark:text-gray-100 text-slate-800':
              aspectRatio === 'square',
          }"
          class="w-11 h-11 text-zinc-400 grid place-items-center hover:bg-zinc-800"
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
            class="size-5 md:size-6"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
          </svg>
        </button>
        <button
          @click="handleAspectRatio('video')"
          :class="{
            'bg-white dark:bg-zinc-900 dark:text-gray-100 text-slate-800':
              aspectRatio === 'video',
          }"
          class="w-11 h-11 text-zinc-400 grid place-items-center hover:bg-zinc-800"
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
            class="size-5 md:size-6"
          >
            <rect width="20" height="12" x="2" y="6" rx="2" />
          </svg>
        </button>
        <button
          @click="handleAspectRatio('auto')"
          :class="{
            'bg-white dark:bg-zinc-900 dark:text-gray-100 text-slate-800':
              aspectRatio === 'auto',
          }"
          class="w-11 h-11 text-zinc-400 grid place-items-center hover:bg-zinc-800"
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
            class="size-5 md:size-6"
          >
            <rect width="20" height="6" x="2" y="4" rx="2" />
            <rect width="20" height="6" x="2" y="14" rx="2" />
          </svg>
        </button>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ArrowDownToLine, EllipsisVertical, X } from "lucide-vue-next";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-tomorrow.css";
import { nextTick, ref } from "vue";
import useImageControls from "../composables/useImageControls";
import useSupabase from "../composables/useSupabase";

import useCanvasImageEditor from "../composables/useCanvasImageEditor";

const { incrementDownloadCount, isExternalImageSource } = useSupabase();

const { myCanvas, loading } = useCanvasImageEditor();

const { imageUrl, aspectRatio, showPreview, handleViewCode } =
  useImageControls();

// Handle file input changes
const handleImageFileChange = (event: Event) => {
  imageUrl.value = "";
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (imageUrl.value) {
    URL.revokeObjectURL(imageUrl.value);
    imageUrl.value = "";
  }

  if (file) {
    imageUrl.value = URL.createObjectURL(file);
  }

  target.value = "";
};

const randomImageLinks = [
  "https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480",
  "https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645813.jpg?t=st=1724760537~exp=1724764137~hmac=4bff17ba654839cc96e45cd575306625742959ca4e2cc00ecfa7bf4dc84f4544&w=1380",
  "https://img.freepik.com/free-photo/hawaii-landscape-with-digital-art-style_23-2151793662.jpg?t=st=1724760578~exp=1724764178~hmac=992f2e02b9ac99dff1365495237a7dfd9e10999cd8432afe7f6ef2a353cf4825&w=1380",
  "https://img.freepik.com/premium-photo/garden-rainstorm-anime-garden-soaked-heavy_982322-197426.jpg?w=740",
  "https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498135.jpg?t=st=1724760645~exp=1724764245~hmac=eed5d30cca739c5e51e2de4e996a31b2f2bf44be3f1d1e0909995df30f746ef8&w=1380",
];

let imageIndex = 0;
const chooseRandomImage = () => {
  if (imageUrl.value) {
    URL.revokeObjectURL(imageUrl.value);
    imageUrl.value = "";
  }

  const nextImage = randomImageLinks[imageIndex];
  imageUrl.value = nextImage;
  imageIndex = (imageIndex + 1) % randomImageLinks.length;
};

const handleAspectRatio = (aspect: string) => {
  if (aspect === "square") {
    aspectRatio.value = "square";
  } else if (aspect === "video") {
    aspectRatio.value = "video";
  } else {
    aspectRatio.value = "auto";
  }
};

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

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}


function handleDownload() {
  if (imageUrl.value && imageUrl.value.startsWith("http")) {
    isOpen.value = true;
  } else {
    incrementDownloadCount();
  }
}
</script>

<style scoped>
@keyframes rotateAndTranslate {
  0% {
    opacity: 0;
    transform: translateX(-300px) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(360deg);
  }
}

.rotate-animation {
  animation: rotateAndTranslate 1s ease-in-out forwards;
  transform-origin: center;
}
</style>
