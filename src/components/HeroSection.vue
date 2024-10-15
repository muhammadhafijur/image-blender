<template>
  <div class="py-4  dark:bg-zinc-950">
    <div
      class="relative max-w-screen-xl px-4 sm:px-6 md:px-8 mx-auto flex flex-col md:flex-row h-[50vh] gap-4 lg:h-[330px]"
    >
      <!-- bg-[#F5F5F7] -->
      <div
        class="h-full flex-1 flex flex-col justify-center rounded-xl bg-[#F5F5F7] dark:bg-[#1d1d1d]"
      >
        <div class="px-4">
          <h1
            class="bg-gradient-to-r font-inter from-sky-500 via-blue-500 via-20% to-purple-500 to-80% bg-clip-text text-xl font-extrabold text-transparent md:text-2xl text-start lg:text-3xl"
          >
            Transform Your Images <br />
            with Powerful Effects.
          </h1>
          <div
            class="mt-2 md:mt-4 flex justify-start font-inter "
          >
            <p
              class="py-1 bg-white/90 px-4 text-start text-sm text-slate-500 dark:text-gray-300 dark:bg-slate-800 rounded-full"
            >
              Over
              <span class="text-emerald-500 font-semibold">{{
                downloadCount - 1
              }}</span>
              images downloaded so far!
            </p>
          </div>
        </div>
      </div>
      <div class="md:h-full flex-1 w-full overflow-hidden rounded-xl h-full">
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

      <button
        class="h-16 w-16 md:h-28 md:w-28 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-950 grid place-items-center rounded-full"
      >
        <a
          href="#editor"
          class="h-14 w-14 md:h-24 md:w-24 rounded-full bg-indigo-500 dark:bg-emerald-500 flex items-center justify-center text-[10px] md:text-base font-semibold hover:bg-indigo-600 transition-colors duration-300 text-white text-center"
        >
          Start <br />
          Blending
        </a>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSupabase from "@/composables/useSupabase";
import { onMounted } from "vue";

const { downloadCount, fetchDownloadCount } = useSupabase();

onMounted(() => {
  fetchDownloadCount();
});
</script>

<style scoped></style>
