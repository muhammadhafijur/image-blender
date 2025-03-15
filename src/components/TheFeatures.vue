<template>
  <section
    id="features"
    class="relative overflow-hidden bg-black py-20 font-inter"
  >
    <div
      class="spotlight-container absolute inset-0 z-0"
      ref="spotlightContainer"
    >
      <div class="spotlight" ref="spotlight"></div>
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"
    ></div>

    <div
      class="absolute left-10 top-20 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl"
    ></div>

    <div class="container relative z-10 mx-auto px-4">
      <div class="mb-16 text-center">
        <div
          class="mb-4 inline-block rounded-full bg-white/5 px-3 py-1 backdrop-blur-sm"
        >
          <span class="font-quicksand text-sm font-medium text-blue-300">
            Everything you need in one place
          </span>
        </div>
        <h2 class="mb-4 font-inter text-3xl font-bold md:text-4xl">
          <span
            class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Powerful Features
          </span>
        </h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          Transform your images with just a few clicks using our intuitive tools
          and effects.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <div
          class="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 md:col-span-8"
        >
          <div class="flex flex-col items-start gap-6">
            <div
              class="flex h-16 w-16 items-center justify-center rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-blue-400 transition-colors duration-300 group-hover:text-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="flex-1">
              <h3
                class="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-blue-300"
              >
                Paste or Upload Images
              </h3>
              <p
                class="text-gray-400 transition-colors group-hover:text-gray-300"
              >
                Easily paste image links or upload your images directly into the
                application. Supports drag and drop for maximum flexibility.
              </p>
            </div>
          </div>
        </div>

        <div
          class="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 md:col-span-4"
        >
          <div
            class="mb-5 flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 text-purple-400 transition-colors duration-300 group-hover:text-purple-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <h3
            class="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-purple-300"
          >
            Blend Effects
          </h3>
          <p class="text-gray-400 transition-colors group-hover:text-gray-300">
            Apply various blend modes such as multiply, screen, overlay, and
            more to create stunning visual effects.
          </p>
        </div>

        <div
          class="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 md:col-span-4"
        >
          <div
            class="mb-5 flex h-16 w-16 items-center justify-center rounded-lg border border-indigo-500/20 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3
            class="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-indigo-300"
          >
            Gradient Effects
          </h3>
          <p class="text-gray-400 transition-colors group-hover:text-gray-300">
            Customize your images with gradient effects, allowing you to blend
            colors seamlessly for beautiful results.
          </p>
        </div>

        <div
          class="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 md:col-span-8"
        >
          <div class="flex flex-col items-start gap-6">
            <div
              class="flex h-16 w-16 items-center justify-center rounded-lg border border-pink-500/20 bg-gradient-to-br from-pink-600/20 to-red-600/20 text-pink-400 transition-colors duration-300 group-hover:text-pink-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <div class="flex-1">
              <h3
                class="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-pink-300"
              >
                Unique Presets
              </h3>
              <p
                class="text-gray-400 transition-colors group-hover:text-gray-300"
              >
                Choose from a variety of aesthetically pleasing presets for
                quick and beautiful styling with just one click. Our curated
                collection includes modern, vintage, cinematic, and artistic
                styles to match any project.
              </p>
            </div>
          </div>
        </div>

        <div
          class="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 md:col-span-4"
        >
          <div
            class="mb-5 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3
            class="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-cyan-300"
          >
            Community Presets
          </h3>
          <p class="text-gray-400 transition-colors group-hover:text-gray-300">
            Discover and use presets created by the community to find
            inspiration and new creative styles.
          </p>
        </div>

        <div
          class="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 md:col-span-4"
        >
          <div
            class="mb-5 flex h-16 w-16 items-center justify-center rounded-lg border border-amber-500/20 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 text-amber-400 transition-colors duration-300 group-hover:text-amber-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <h3
            class="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-amber-300"
          >
            View and Copy Code
          </h3>
          <p class="text-gray-400 transition-colors group-hover:text-gray-300">
            Instantly view the generated Tailwind CSS code for the applied
            effects, copy it, and use it in your project.
          </p>
        </div>

        <div
          class="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10 md:col-span-4"
        >
          <div
            class="mb-5 flex h-16 w-16 items-center justify-center rounded-lg border border-green-500/20 bg-gradient-to-br from-green-600/20 to-emerald-600/20 text-green-400 transition-colors duration-300 group-hover:text-green-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </div>
          <h3
            class="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-green-300"
          >
            Download Modified Images
          </h3>
          <p class="text-gray-400 transition-colors group-hover:text-gray-300">
            Download your modified images with the applied effects directly from
            the app in high quality.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const spotlight = ref<HTMLElement | null>(null);
const spotlightContainer = ref<HTMLElement | null>(null);
let animationFrameId: number | null = null;
let mouseX = 0;
let mouseY = 0;
let spotlightX = 0;
let spotlightY = 0;

//  Calculate the mouse position relative to the spotlight container.
function handleMouseMove(e: MouseEvent) {
  if (spotlightContainer.value) {
    const rect = spotlightContainer.value.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }
}

function updateSpotlightPosition() {
  if (spotlight.value) {
    spotlight.value.style.transform = `translate(${spotlightX}px, ${spotlightY}px) translate(-50%, -50%)`;
  }
}

function startSpotlightAnimation() {
  const animate = () => {
    spotlightX += (mouseX - spotlightX) * 0.05;
    spotlightY += (mouseY - spotlightY) * 0.05;
    updateSpotlightPosition();
    animationFrameId = requestAnimationFrame(animate);
  };
  animate();
}

onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
  startSpotlightAnimation();
});

onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
  document.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
.spotlight-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;
}

.spotlight {
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(139, 92, 246, 0.15) 0%,
    rgba(79, 70, 229, 0.1) 20%,
    transparent 70%
  );
  /* The default transform centers the spotlight.
     The inline transform from updateSpotlightPosition() will combine with this offset */
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: screen;
}
</style>
