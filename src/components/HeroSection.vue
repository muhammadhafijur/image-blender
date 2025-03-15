<template>
  <section
    class="relative w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black font-inter"
  >
    <TheHeader />
    <div class="w-full py-12 font-inter md:py-16 mt-[68px]">
      <!-- background sparkles animation -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <div
          v-for="i in 30"
          :key="i"
          class="sparkle absolute rounded-full"
          :class="`sparkle-${i}`"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            opacity: Math.random() * 0.5 + 0.2,
          }"
        ></div>
      </div>

      <!-- Spotlight gradient effects -->
      <div
        class="bg-gradient-radial absolute inset-0 z-0 from-purple-600/20 via-transparent to-transparent"
      ></div>
      <div
        class="bg-gradient-radial absolute inset-0 z-0 from-amber-500/10 via-transparent to-transparent"
        style="transform: translate(15%, 10%)"
      ></div>

      <div
        class="container relative z-10 mx-auto flex flex-col items-center px-4 md:px-6"
      >
        <div class="mb-12 max-w-3xl text-center md:mb-16">
          <div
            class="mb-8 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-sm"
          >
            <div class="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
            <p class="text-xs text-gray-300 sm:text-sm">
              Over
              <span class="font-bold text-white">{{ downloadCount }}</span>
              images downloaded so far!
            </p>
          </div>
          <h1
            class="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span
              class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >Transform Your Images</span
            >
            <br />
            <span
              class="bg-gradient-to-r from-purple-500 to-amber-400 bg-clip-text text-transparent"
              >with Powerful Effects.</span
            >
          </h1>

          <p class="mb-8 text-base text-gray-300 sm:text-lg md:text-xl">
            Transform your photos with powerful blending modes, gradients, and effects.
            Create stunning visuals with our intuitive editing tools.
          </p>

          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <RouterLink
              :to="{ name: 'editor' }"
              class="relative z-20 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-purple-500/25"
            >
              Get Started
            </RouterLink>
            <a
              href="#showcase"
              class="relative z-20 rounded-lg border border-purple-400 bg-transparent px-6 py-3 font-medium text-purple-300 transition-colors duration-300 hover:bg-purple-900/20"
            >
              See Examples
            </a>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-4xl">
          <!-- Glow effect behind the demo pic -->
          <div
            class="bg-gradient-radial absolute inset-0 z-0 scale-110 transform from-purple-500/30 via-blue-500/10 to-transparent blur-2xl"
          ></div>

          <div
            class="z-1 relative overflow-hidden rounded-xl border border-gray-800 shadow-2xl shadow-purple-500/20"
          >
            <img
              src="../images/product-phone.jpg"
              alt="ImageBlender interface showing photo editing tools"
              class="h-auto w-full block lg:hidden"
            />
            <img
              src="../images/product.jpg"
              alt="ImageBlender interface showing photo editing tools"
              class="h-auto w-full hidden lg:block"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5"
            ></div>
          </div>

          <div
            class="absolute -bottom-4 -right-4 z-0 h-24 w-24 rounded-full bg-gradient-to-r from-amber-500 to-purple-500 opacity-30 blur-xl"
          ></div>
          <div
            class="absolute -left-4 -top-4 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-xl"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import useSupabase from "@/composables/useSupabase";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import TheHeader from "./TheHeader.vue";

const { downloadCount, fetchDownloadCount } = useSupabase();

onMounted(() => {
  fetchDownloadCount();
});
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .bg-gradient-radial {
    background-image: radial-gradient(circle at center, var(--tw-gradient-stops));
  }
}

/* Sparkle animations */
.sparkle {
  background: linear-gradient(135deg, #ffffff, #c9a0ff, #8be9fd);
  box-shadow: 0 0 10px 2px rgba(137, 221, 255, 0.3), 0 0 20px 4px rgba(201, 160, 255, 0.2);
  animation: sparkle-float infinite linear;
  z-index: 0;
}

@keyframes sparkle-float {
  0% {
    transform: translate(0, 0) scale(0.8) rotate(0deg);
    opacity: 0;
    box-shadow: 0 0 10px 2px rgba(137, 221, 255, 0.3),
      0 0 20px 4px rgba(201, 160, 255, 0.2);
  }
  25% {
    opacity: 1;
    transform: translate(10px, -20px) scale(1) rotate(90deg);
    box-shadow: 0 0 15px 4px rgba(137, 221, 255, 0.5),
      0 0 30px 8px rgba(201, 160, 255, 0.3);
  }
  50% {
    transform: translate(20px, -40px) scale(1.2) rotate(180deg);
    box-shadow: 0 0 20px 6px rgba(137, 221, 255, 0.6),
      0 0 40px 10px rgba(201, 160, 255, 0.4);
  }
  75% {
    opacity: 1;
    transform: translate(10px, -60px) scale(1) rotate(270deg);
    box-shadow: 0 0 15px 4px rgba(137, 221, 255, 0.5),
      0 0 30px 8px rgba(201, 160, 255, 0.3);
  }
  100% {
    transform: translate(0, -80px) scale(0.8) rotate(360deg);
    opacity: 0;
    box-shadow: 0 0 10px 2px rgba(137, 221, 255, 0.3),
      0 0 20px 4px rgba(201, 160, 255, 0.2);
  }
}

/* different paths for each sparkle */
.sparkle-1 {
  animation-name: sparkle-float-1;
}
.sparkle-2 {
  animation-name: sparkle-float-2;
}
.sparkle-3 {
  animation-name: sparkle-float-3;
}

@keyframes sparkle-float-1 {
  0% {
    transform: translate(0, 0) scale(0.8) rotate(0deg);
    opacity: 0;
  }
  25% {
    opacity: 1;
    transform: translate(15px, -25px) scale(1) rotate(90deg);
  }
  50% {
    transform: translate(30px, -50px) scale(1.2) rotate(180deg);
  }
  75% {
    opacity: 1;
    transform: translate(15px, -75px) scale(1) rotate(270deg);
  }
  100% {
    transform: translate(0, -100px) scale(0.8) rotate(360deg);
    opacity: 0;
  }
}

@keyframes sparkle-float-2 {
  0% {
    transform: translate(0, 0) scale(0.8) rotate(0deg);
    opacity: 0;
  }
  25% {
    opacity: 1;
    transform: translate(-15px, -25px) scale(1) rotate(90deg);
  }
  50% {
    transform: translate(-30px, -50px) scale(1.2) rotate(180deg);
  }
  75% {
    opacity: 1;
    transform: translate(-15px, -75px) scale(1) rotate(270deg);
  }
  100% {
    transform: translate(0, -100px) scale(0.8) rotate(360deg);
    opacity: 0;
  }
}

@keyframes sparkle-float-3 {
  0% {
    transform: translate(0, 0) scale(0.8) rotate(0deg);
    opacity: 0;
  }
  25% {
    opacity: 1;
    transform: translate(0, -30px) scale(1) rotate(90deg);
  }
  50% {
    transform: translate(0, -60px) scale(1.2) rotate(180deg);
  }
  75% {
    opacity: 1;
    transform: translate(0, -90px) scale(1) rotate(270deg);
  }
  100% {
    transform: translate(0, -120px) scale(0.8) rotate(360deg);
    opacity: 0;
  }
}

/* different animation variations to different sparkles */
.sparkle:nth-child(3n + 1) {
  animation-name: sparkle-float-1;
}
.sparkle:nth-child(3n + 2) {
  animation-name: sparkle-float-2;
}
.sparkle:nth-child(3n + 3) {
  animation-name: sparkle-float-3;
}

/* color variations */
.sparkle:nth-child(5n + 1) {
  background: linear-gradient(135deg, #ffffff, #c9a0ff, #8be9fd);
}
.sparkle:nth-child(5n + 2) {
  background: linear-gradient(135deg, #ffffff, #ffb86c, #ff79c6);
}
.sparkle:nth-child(5n + 3) {
  background: linear-gradient(135deg, #ffffff, #8be9fd, #50fa7b);
}
.sparkle:nth-child(5n + 4) {
  background: linear-gradient(135deg, #ffffff, #bd93f9, #ff79c6);
}
.sparkle:nth-child(5n + 5) {
  background: linear-gradient(135deg, #ffffff, #f1fa8c, #ffb86c);
}
</style>
