<template>
  <UniquePresets />
  <button
    @click="toggleFullScreen"
    class="w-8 h-8 sm:w-12 sm:h-12 rounded-[20px] fixed grid place-items-center z-20 text-white right-6 bottom-6 bg-slate-800 dark:bg-indigo-500 transition duration-300 ease-out group-hover:-translate-y-32"
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
        There have been 117 billion+ people who have lived and died on this blue
        planet. But there has never been and will never be another
        <span
          class="underline decoration-wavy decoration-emerald-400 text-emerald-500 font-semibold"
          >You</span
        >. So take care of yourself and take care of your soul. Do not try to be
        the smartest in the room; try to be the
        <span
          class="underline decoration-wavy decoration-emerald-400 text-emerald-500 font-semibold"
          >Kindest</span
        >.
      </p>
      <div
        class="mt-4 sm:mt-6 grid grid-cols-2 gap-2 md:gap-4 text-[8px] sm:text-xs font-medium"
      >
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
    class="mt-4 w-8 h-8 sm:w-12 fixed animated-div left-6 bottom-6 z-20 sm:h-12 rounded-xl sm:rounded-[20px] bg-slate-900 dark:bg-indigo-500 grid place-items-center tex-white"
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
  <HeroSection />
  <section
    id="editor"
    class="pt-12 px-4 sm:px-6 md:px-8 flex justify-center font-inter dark:bg-custom-dark-400"
  >
    <p
      class="border px-4 py-1 w-auto text-center text-sm text-slate-500 dark:text-gray-300 dark:bg-slate-900 dark:border-emerald-500 rounded-full"
    >
      Over
      <span class="text-emerald-500 dark:text-gray-100 font-semibold">{{
        downloadCount
      }}</span>
      images downloaded so far!
    </p>
  </section>

  <main class="font-inter bg-white min-h-[calc(100vh-68px)] flex flex-col">
    <section class="w-full grow h-full bg-white dark:bg-custom-dark-400 py-12">
      <div
        class="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-start gap-8"
      >
        <DisplayBox />
        <ImageControls />
        <TheImageFinder />
      </div>
    </section>

    <BlenderShowcase />
    <UserTestimonials />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
// import "prismjs/themes/prism.css";
import BlenderShowcase from "@/components/BlenderShowcase.vue";
import DisplayBox from "@/components/DisplayBox.vue";
import ImageControls from "@/components/ImageControls.vue";
import UniquePresets from "@/components/UniquePresets.vue";
import UserTestimonials from "@/components/UserTestimonials.vue";
import { onMounted, ref } from "vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
import TheImageFinder from "../components/TheImageFinder.vue";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-tomorrow.css";
import useImageControls from "../composables/useImageControls";
import useSupabase from "../composables/useSupabase";
import HeroSection from "@/components/HeroSection.vue";

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
} = useImageControls();

const { downloadCount, session, signInWithGoogle, fetchDownloadCount } =
  useSupabase();

onMounted(() => {
  fetchDownloadCount();
});

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
