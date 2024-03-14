<template>
  <main class="font-inter bg-[#f8f8f8]">
    <section class="h-screen grid place-items-center">
      <div class="">
        <h1
          class="bg-[url('https://images.unsplash.com/photo-1561925403-813be1b06943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] tracking-wider bg-center bg-no-repeat  py-12 rounded-2xl text-white font-madimi text-center text-4xl"
        >
          Image Blender
        </h1>
        <div class="mt-8 w-full max-w-4xl bg-white p-8 rounded-3xl">
          <input
            type="text"
            class="mt-8 border rounded-2xl caret-indigo-500 w-full p-4"
            v-model="imageUrl"
          />
          <!-- <p class="mt-4 text-red-500">{{ imageUrl }}</p> -->
          <div class="mt-4 flex w-full gap-10">
            <div class="w-1/2">
              <div class="w-full h-full relative">
                <div
                  class="absolute w-full h-full bg-[var(--bgLayerColor)] opacity-[var(--bgLayerOpacity)]"
                  :style="`--bgLayerColor:${bgLayerColor}; --bgLayerOpacity:${bgLayerOpacity}%`"
                ></div>
                <img
                  :src="imageUrl"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <div class="p-4 border rounded-2xl w-1/2">
              <input type="color" class="w-full" v-model="bgLayerColor" />
              <input
                class="accent-violet-500 w-full"
                type="range"
                min="0"
                max="100"
                value="bgLayerOpacity"
                v-model="bgLayerOpacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import demoImg from "../images/demo.png";

const demoImageUrls = {
  demoOne:
    "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const imageUrl = ref(demoImg);
const rounded = ref("");
const bgLayerOpacity = ref(40);
const bgLayerColor = ref("#00C16A");
</script>
