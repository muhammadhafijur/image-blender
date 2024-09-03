<template>
  <div
    class="w-full bg-white/80 backdrop-blur-lg font-inter transition-colors duration-200 sticky top-0 z-10 shadow-[0_1px_3px_rgba(15,23,42,0.08)]"
  >
    <div
      class="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 flex items-center gap-4"
    >
      <button
        class="cursor-pointer shrink-0 text-slate-400 rounded-full grid place-items-center"
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
        class="caret-emerald-500 w-full focus:outline-none py-6 text-base bg-transparent font-normal text-slate-700"
        v-model="imageUrl"
      />
      <button
        @click="chooseRandomImage"
        class="text-white rotate-animation bg-gray-800 w-9 h-9 md:w-12 md:h-12 shrink-0 grid place-items-center rounded-full"
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
        class="cursor-pointer rotate-animation shrink-0 rounded-full text-white bg-gradient-to-tr from-sky-500 to-purple-400 w-9 h-9 md:w-12 md:h-12 grid place-items-center"
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
        <!-- Upload -->
      </label>
      <input
        type="file"
        class="hidden"
        id="imageFile"
        @change="handleImageFileChange"
      />
    </div>
  </div>
  <div class="max-w-screen-xl mx-auto w-full">
    <div
      class="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-emerald-200 to-transparent"
    ></div>
  </div>
</template>

<script setup lang="ts">
import useImageControls from "../composables/useImageControls";

const { imageUrl } = useImageControls();

// Handle file input changes
const handleImageFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    if (imageUrl.value) {
      URL.revokeObjectURL(imageUrl.value);
    }

    imageUrl.value = URL.createObjectURL(file);
  }
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
  const nextImage = randomImageLinks[imageIndex];
  imageUrl.value = nextImage;
  imageIndex = (imageIndex + 1) % randomImageLinks.length;
};
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
