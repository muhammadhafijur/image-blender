<template>
  <div
    class="fixed left-1/2 -translate-x-1/2 transition duration-500 origin-bottom ease-out bottom-10 z-10 w-full max-w-full h-full max-h-[400px] md:max-h-[500px] 2xl:max-h-[600px] sm:max-w-screen-xl px-4 sm:px-6 md:px-8 font-inter"
    :class="[showUniquePreset ? 'scale-100 ' : 'scale-0']"
  >
    <div class="w-full h-full bg-white dark:bg-custom-dark-400 border dark:border-gray-200 rounded-lg">
      <div
        class="flex min-h-full h-full overflow-auto [&::-webkit-scrollbar-thumb] [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-custom-green-500/70 [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar]:w-2.5 overflow-y-auto"
      >
        <div class="border-r flex min-h-full flex-col sticky top-0">
          <button
            class="border-b p-4 font-inter font-semibold text-emerald-500"
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
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
              />
            </svg>
          </button>
          <button
            class="p-4 text-gray-500 dark:text-gray-200 hover:text-green-500 hover:bg-gray-100 rounded-xl"
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
              <path d="M18 22H4a2 2 0 0 1-2-2V6" />
              <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
              <circle cx="12" cy="8" r="2" />
              <rect width="16" height="16" x="6" y="2" rx="2" />
            </svg>
          </button>
        </div>
        <div class="flex-1 w-full bg-white dark:bg-custom-dark-400 p-4 sm:px-6 sm:pt-6 sm:pb-12">
          <div
            v-if="!session"
            class="flex sticky top-2 rounded-lg justify-center mb-6"
          >
            <p
              class="text-sm text-gray-100 bg-emerald-500 font-medium font-inter rounded-full px-4 py-2 w-auto"
            >
              <button
                @click="signInWithGoogle"
                class="text-white font-bold underline decoration-2"
              >
                Sign in
              </button>
              to gain access to our unique presets
            </p>
          </div>
          <div class="w-full grid grid-cols-2 bg-gradient lg:grid-cols-4 gap-4">
            <button
              :disabled="!session"
              v-for="preset in presets"
              @click="handlePreset(preset.color)"
              class="rounded-md text-sm font-medium disabled:cursor-not-allowed h-auto p-2 flex flex-col items-center justify-center text-center bg-[var(--presetColor)]"
              :style="`--presetColor:${preset.color};`"
            >
              <img
                src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
                alt="Ocean"
                class="w-full h-12 sm:h-28 object-cover mb-2 rounded"
              /><span class="text-white font-medium">{{ preset.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    @click="handleUniquePreset"
    class="px-4 py-2 fixed left-1/2 -translate-x-1/2 bottom-6 z-20 text-xs sm:text-sm font-inter tracking-wider rounded-full mx-auto text-white flex items-center gap-2 sm:rounded-[20px] bg-slate-900 dark:bg-emerald-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-3 sm:size-4 animate-spin-slow"
    >
      <path
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
    Unique Presets
  </button>
  <button
    @click="toggleFullScreen"
    class="w-12 h-12 rounded-[20px] fixed grid place-items-center text-white right-6 bottom-6 bg-slate-800 dark:bg-indigo-500 transition duration-300 ease-out group-hover:-translate-y-32"
  >
    <svg
      v-if="isFullScreen"
      xmlns="http://www.w3.org/2000/svg"
      class="size-6"
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
      class="size-6"
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
        class="mt-4 sm:mt-6 grid grid-cols-2 gap-2 text-[8px] sm:text-xs font-medium"
      >
        <button class="bg-slate-900 text-white p-1.5 sm:p-3 rounded-xl">
          GIVE A STAR
        </button>
        <button class="bg-gray-100 text-gray-900 p-1.5 sm:p-3 rounded-xl">
          LEAVE A REVIEW
        </button>
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
  <TheImageFinder />

  <section
    class="pt-12 px-4 sm:px-6 md:px-8 flex justify-center font-inter dark:bg-custom-dark-400"
  >
    <p
      class="border px-4 py-1 w-auto text-center text-sm text-slate-500 dark:text-gray-300 dark:bg-slate-900 dark:border-emerald-500 rounded-full"
    >
      Over
      <span class="text-emerald-500 dark:text-gray-100 font-semibold">{{ downloadCount }}</span>
      images downloaded so far!
    </p>
    <!-- <button @click="toggleFullScreen" class="border px-4 py-2 rounded-md">
      {{ isFullScreen ? 'Exit Full Screen' : 'Enter Full Screen' }}
    </button> -->
  </section>


  <main class="font-inter bg-white  min-h-[calc(100vh-68px)] flex flex-col">
    <section class="w-full grow h-full bg-white dark:bg-custom-dark-400 py-12">
      <div
        class="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-start gap-8"
      >
        <DisplayBox />
        <ImageControls />
        

        
      </div>
    </section>
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
import TheImageFinder from "../components/TheImageFinder.vue";
// import "prismjs/themes/prism.css";
import DisplayBox from "@/components/DisplayBox.vue";
import ImageControls from "@/components/ImageControls.vue";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-tomorrow.css";
import useImageControls from "../composables/useImageControls";
import useSupabase from "../composables/useSupabase";

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
  toGradient
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

const showUniquePreset = ref(false);

const handleUniquePreset = () => {
  showUniquePreset.value = !showUniquePreset.value;
};

setTimeout(() => {
  showPopupFeedback.value = true;
}, 5000);

// https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480

const presets = [
  { name: "Ocean", color: "#0077BE" },
  { name: "Forest", color: "#228B22" },
  { name: "Sunset", color: "#FFA500" },
  { name: "Lavender", color: "#E6E6FA" },
  { name: "Cherry", color: "#DE3163" },
  { name: "Midnight", color: "#191970" },
  { name: "Ocean", color: "#0077BE" },
  { name: "Forest", color: "#228B22" },
  { name: "Sunset", color: "#FFA500" },
  { name: "Lavender", color: "#E6E6FA" },
  { name: "Cherry", color: "#DE3163" },
  { name: "Midnight", color: "#191970" },
  { name: "Ocean", color: "#0077BE" },
  { name: "Forest", color: "#228B22" },
  { name: "Sunset", color: "#FFA500" },
  { name: "Lavender", color: "#E6E6FA" },
  { name: "Cherry", color: "#DE3163" },
  { name: "Midnight", color: "#191970" },
];

const handlePreset = (presetColor: string) => {
  console.log("dev-tool");
  imageUrl.value =
    "https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480";
  mixBlendValue.value = "multiply";
  bgLayerColor.value = `${presetColor}`;
  aspectRatio.value = "video";
};

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
    // Fallback for older browsers (not needed for modern browsers)
    console.warn("Fullscreen API is not supported.");
  }

  isFullScreen.value = true;
};

const exitFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else {
    // Fallback for older browsers (not needed for modern browsers)
    console.warn("Fullscreen API is not supported.");
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
/* top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 */

.circle-animation {
  animation: dotCircleAnimation 3s cubic-bezier(0.42, 0, 0.58, 1);
  /* animation-delay: 1s; */
  transform-origin: center;
  will-change: transform, opacity;
}
</style>
