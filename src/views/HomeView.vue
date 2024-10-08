<template>
  <UniquePresets />

  <!-- Back to Top Button -->
  <button
    v-if="showScrollToTopButton"
    @click="scrollToTop"
    class="w-8 h-8 sm:w-12 sm:h-12 rounded-[20px] fixed grid place-items-center z-20 text-white right-6 bottom-20 bg-slate-800 dark:bg-indigo-500 transition duration-300 ease-out"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-fading-arrow-up">
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
      <path d="m16 12-4-4-4 4" />
      <path d="M12 16V8" />
      <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
      <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
      <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
      <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
    </svg>
  </button>

  <button
    @click="toggleFullScreen"
    class="w-8 h-8 sm:w-12 sm:h-12 rounded-[20px] fixed grid place-items-center z-20 text-white right-6 bottom-6 bg-slate-800 dark:bg-indigo-500 transition duration-300 ease-out group-hover:-translate-y-32"
  >
    <svg
      v-if="isFullScreen"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4 sm:size-6"
    >
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
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
      class="size-4 sm:size-6"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  </button>

  <div
    class="fixed left-6 bottom-20 z-20 w-full max-w-56 sm:max-w-[428px] transition duration-500 origin-bottom-left font-inter"
    :class="[showPopupFeedback ? 'scale-100' : 'scale-0']"
  >
    <div class="p-4 ease-out sm:p-6 bg-white shadow rounded-2xl">
      <div class="flex justify-between items-center">
        <h6 class="text-xs sm:text-base font-semibold">
          Your Feedback Matters!
        </h6>
        <button
          @click="showPopupFeedback = false"
          class="rounded w-9 h-9 grid place-items-center text-gray-600 hover:text-slate-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4 sm:size-6"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <p class="mt-3 sm:mt-4 text-gray-500 text-[10px] sm:text-sm">
        There have been 117 billion+ people who have lived and died on this blue planet. But there has never been and will never be another
        <span class="underline decoration-wavy decoration-emerald-400 text-emerald-500 font-semibold">You</span>. So take care of yourself and take care of your soul. Do not try to be the smartest in the room; try to be the
        <span class="underline decoration-wavy decoration-emerald-400 text-emerald-500 font-semibold">Kindest</span>.
      </p>
      <div class="mt-4 sm:mt-6 grid grid-cols-2 gap-2 md:gap-4 text-[8px] sm:text-xs font-medium">
        <a
          href="https://github.com/muhammadhafijur/image-blender"
          target="_blank"
          rel="noopener noreferrer"
          class="block text-center bg-slate-900 text-white p-1.5 sm:p-3 rounded-xl"
        >
          GIVE A STAR
        </a>
        <a
          href="https://github.com/muhammadhafijur/image-blender/issues/1"
          target="_blank"
          rel="noopener noreferrer"
          class="block text-center bg-gray-100 text-gray-900 p-1.5 sm:p-3 rounded-xl"
        >
          LEAVE A REVIEW
        </a>
      </div>
    </div>
  </div>

  <button
    @click="handlePopupFeedback"
    class="mt-4 w-8 h-8 sm:w-12 fixed animated-div left-6 bottom-6 z-20 sm:h-12 rounded-xl sm:rounded-[20px] bg-slate-900 dark:bg-indigo-500 grid place-items-center text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4 sm:size-6 fill-white stroke-white"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  </button>

  <TheHeader />
  <TheImageFinder />

  <section class="pt-12 px-4 sm:px-6 md:px-8 flex justify-center font-inter dark:bg-custom-dark-400">
    <p class="border px-4 py-1 w-auto text-center text-sm text-slate-500 dark:text-gray-300 dark:bg-slate-900 dark:border-emerald-500 rounded-full">
      Over
      <span class="text-emerald-500 dark:text-gray-100 font-semibold">{{ downloadCount }}</span>
      images downloaded so far!
    </p>
  </section>

  <main class="font-inter bg-white min-h-[calc(100vh-68px)] flex flex-col">
    <section class="w-full grow h-full bg-white dark:bg-custom-dark-400 py-12">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
        <DisplayBox />
        <ImageControls />
      </div>
    </section>

    <BlenderShowcase />
  </main>

  <TheFooter />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
import TheImageFinder from "../components/TheImageFinder.vue";
import BlenderShowcase from "../components/BlenderShowcase.vue";
import ImageControls from "../components/ImageControls.vue";
import DisplayBox from "../components/DisplayBox.vue";
import UniquePresets from "../components/UniquePresets.vue";

const downloadCount = ref(0);
const showPopupFeedback = ref(false);
const showScrollToTopButton = ref(false);
const isFullScreen = ref(false);

const handlePopupFeedback = () => {
  showPopupFeedback.value = true;
};

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    isFullScreen.value = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullScreen.value = false;
    }
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleScroll = () => {
  showScrollToTopButton.value = window.scrollY > 200;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Add your styles here */
</style>
