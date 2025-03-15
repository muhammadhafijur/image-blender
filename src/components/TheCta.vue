<template>
  <section class="relative bg-black py-20">
    <div
      class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-55"
    ></div>
    <div
      class="absolute left-[40%] top-12 -z-0 flex -translate-x-1/2 items-center justify-center gap-4 md:left-[46%]"
    >
      <div
        class="h-3 w-64 rotate-[30deg] animate-pulse-slow rounded-r-full bg-white/80 blur-[30px] md:h-3.5 md:w-80"
      ></div>
    </div>
    <!-- Spotlight -->
    <div
      class="bg-gradient-radial absolute inset-0 z-0 from-purple-600/10 via-transparent to-transparent"
    ></div>

    <!-- Animated sparkles -->
    <div class="absolute inset-0 z-0 overflow-hidden opacity-30">
      <div
        v-for="i in 15"
        :key="`cta-sparkle-${i}`"
        class="sparkle absolute rounded-full"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 4 + 1}px`,
          height: `${Math.random() * 4 + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          opacity: Math.random() * 0.3 + 0.1,
        }"
      ></div>
    </div>

    <div
      class="relative mx-auto max-w-screen-xl px-4 py-4 dark:bg-zinc-950 sm:px-6 md:px-8"
    >
      <div class="mb-16 text-center">
        <h2
          class="mb-4 bg-gradient-to-r from-sky-500 via-blue-500 via-20% to-purple-500 to-80% bg-clip-text font-inter  text-transparent text-3xl font-bold md:text-4xl"
        >
          <span
            class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >Ready to
          </span>

          <span
            class="bg-gradient-to-r from-purple-500 to-amber-400 bg-clip-text text-transparent"
          >
            Transform Your Images?
          </span>
        </h2>
        <p class="mx-auto max-w-2xl text-sm sm:text-base text-gray-300">
          Start blending with ImageBlender today and create stunning visuals
          like never before.
        </p>
      </div>
      <div
        class="relative mx-auto flex h-[50vh] max-w-screen-xl flex-col gap-4 md:flex-row lg:h-[330px]"
      >
        <!-- bg-[#F5F5F7] -->
        <div
          class="relative flex h-full flex-1 flex-col items-center justify-center overflow-hidden rounded-xl bg-indigo-500/5 backdrop-blur-sm"
        >
          <!-- Background overlays and decorative elements -->
          <div
            class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_0.1px,#00091d_1px)] bg-[size:20px_20px]"
          ></div>
          <div
            class="absolute -bottom-[205%] h-96 w-96 shrink-0 animate-spin-slow rounded-full bg-gradient-to-tr from-amber-400 via-purple-500 to-sky-400 blur-3xl md:-bottom-[115%]"
          ></div>

          <img
            class="absolute mx-auto w-[80%]"
            style="animation-delay: 4s"
            src="../images/cta1.png"
            alt="Call to action 1"
          />

          <!-- <img
    class="animate-slideUp absolute mx-auto w-[80%]"
    style="animation-delay: 6s"
    src="../images/cta2.png"
    alt="Call to action 2"
  /> -->
          <!-- <img
    class="animate-slideUp absolute mx-auto w-[80%]"
    style="animation-delay: 4s"
    src="../images/cta3.png"
    alt="Call to action 3"
  /> -->
        </div>
        <div class="h-full w-full flex-1 overflow-hidden rounded-xl md:h-full">
          <div class="grid h-full w-full grid-cols-3 gap-4">
            <div class="col-span-2 h-full w-full overflow-hidden rounded-lg">
              <img
                class="h-full w-full object-cover"
                src="../images/showcase7.jpg"
                alt="Image 1"
              />
            </div>
            <div class="h-full w-full overflow-hidden rounded-lg">
              <img
                class="h-full w-full object-cover"
                src="../images/showcase1.png"
                alt="Image 2"
              />
            </div>
            <div class="h-full w-full overflow-hidden rounded-lg">
              <img
                class="h-full w-full object-cover"
                src="../images/showcase3.jpg"
                alt="Image 3"
              />
            </div>
            <div class="col-span-2 h-full w-full overflow-hidden rounded-lg">
              <img
                class="h-full w-full object-cover"
                src="../images/showcase2.jpg"
                alt="Image 4"
              />
            </div>
          </div>
        </div>

        <RouterLink
          :to="{ name: 'editor' }"
          class="group absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full bg-black dark:bg-zinc-950 md:h-28 md:w-28"
        >
          <!-- <RouterLink
            to="/editor"
            href="#editor"
            class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-center text-[10px] font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-purple-500/25 dark:bg-emerald-500 md:h-24 md:w-24 md:text-base"
          >
            Start <br />
            Blending
            
          </RouterLink> -->
          <button
            class="group group absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-inter text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-purple-500/25 md:h-[86px] md:w-[86px] md:text-sm"
          >
            <!-- <span class="relative z-10">Start Free Trial</span> -->
            <!-- <span class="relative z-10">Start 
                Blending</span> -->
            Start <br />
            Blending
            <span
              class="absolute inset-0 translate-y-full transform bg-white/20 transition-transform duration-300 group-hover:translate-y-0"
            ></span>
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
