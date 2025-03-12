<template>
  <UniquePresets />
  <button
    @click="toggleFullScreen"
    class="fixed bottom-6 right-6 z-20 grid h-8 w-8 place-items-center rounded-[20px] bg-slate-800 text-white transition duration-300 ease-out group-hover:-translate-y-32 dark:bg-indigo-500 sm:h-12 sm:w-12"
  >
    <svg
      v-if="isFullScreen"
      xmlns="http://www.w3.org/2000/svg"
      class="size-4 sm:size-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
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
    class="fixed bottom-20 left-6 z-20 w-full max-w-56 origin-bottom-left font-inter transition duration-500 sm:max-w-[428px]"
    :class="[showPopupFeedback ? 'scale-100' : 'scale-0']"
  >
    <div class="rounded-2xl bg-white p-4 shadow ease-out sm:p-6">
      <div class="flex items-center justify-between">
        <h6 class="text-xs font-semibold sm:text-base">
          Your Feedback Matters!
        </h6>
        <button
          @click="showPopupFeedback = false"
          class="grid h-9 w-9 place-items-center rounded text-gray-600 hover:text-slate-900"
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
      <p class="mt-3 text-[10px] text-gray-500 sm:mt-4 sm:text-sm">
        There have been 117 billion+ people who have lived and died on this blue
        planet. But there has never been and will never be another
        <span
          class="font-semibold text-emerald-500 underline decoration-emerald-400 decoration-wavy"
          >You</span
        >. So take care of yourself and take care of your soul. Do not try to be
        the smartest in the room; try to be the
        <span
          class="font-semibold text-emerald-500 underline decoration-emerald-400 decoration-wavy"
          >Kindest</span
        >.
      </p>
      <div
        class="mt-4 grid grid-cols-2 gap-2 text-[8px] font-medium sm:mt-6 sm:text-xs md:gap-4"
      >
        <a
          href="https://github.com/muhammadhafijur/image-blender"
          target="_blank"
          rel="noopener noreferrer"
          class="block rounded-xl bg-slate-900 p-1.5 text-center text-white sm:p-3"
        >
          GIVE A STAR
        </a>
        <a
          href="https://github.com/muhammadhafijur/image-blender/issues/1"
          target="_blank"
          rel="noopener noreferrer"
          class="block rounded-xl bg-gray-100 p-1.5 text-center text-gray-900 sm:p-3"
        >
          LEAVE A REVIEW
        </a>
      </div>
    </div>
  </div>
  <button
    @click="handlePopupFeedback"
    class="animated-div tex-white fixed bottom-6 left-6 z-20 mt-4 grid h-8 w-8 place-items-center rounded-xl bg-slate-900 dark:bg-indigo-500 sm:h-12 sm:w-12 sm:rounded-[20px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4 fill-white stroke-white sm:size-6"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  </button>
  <TheHeader />
  <HeroSection />

  <main class="flex min-h-[calc(100vh-68px)] flex-col bg-white font-inter">
    <BlenderShowcase />
    <UserTestimonials />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
// import "prismjs/themes/prism.css";
import BlenderShowcase from "@/components/BlenderShowcase.vue";
import HeroSection from "@/components/HeroSection.vue";
import UserTestimonials from "@/components/UserTestimonials.vue";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-tomorrow.css";
import { ref } from "vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";

const showPopupFeedback = ref(false);

const handlePopupFeedback = () => {
  showPopupFeedback.value = !showPopupFeedback.value;
};

setTimeout(() => {
  showPopupFeedback.value = true;
}, 5000);

// https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480

const isFullScreen = ref(false);

const toggleFullScreen = () => {
  if (!isFullScreen.value) {
    enterFullScreen();
  } else {
    exitFullScreen();
  }
};

const enterFullScreen = () => {
  const element = document.documentElement; // FULL PAGE

  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else {
    console.warn("Fullscreen api is not supported.");
  }

  isFullScreen.value = true;
};

const exitFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else {
    console.warn("Fullscreen api is not supported.");
  }
  isFullScreen.value = false;
};
</script>

<style scoped>
.animated-div {
  animation: jump-rotate 2s forwards;
  animation-delay: 3s;
  opacity: 0;
}

@keyframes jump-rotate {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  30% {
    transform: translateY(-200px) rotate(360deg); /* Adjust height and rotation */
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}

.circle-animation {
  animation: dotCircleAnimation 3s cubic-bezier(0.42, 0, 0.58, 1);
  /* animation-delay: 1s; */
  transform-origin: center;
  will-change: transform, opacity;
}
</style>
