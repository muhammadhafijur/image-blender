<template>
  <section
    id="showcase"
    class="relative bg-gradient-to-b from-black to-gray-900 py-20"
  >
    <div class="relative z-10 mx-auto max-w-7xl px-4">
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-3xl font-bold md:text-4xl">
          <span
            class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >See the Difference</span
          >
        </h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          See what's possible with ImageBlender through these stunning
          transformations.
        </p>
      </div>

      <div class="relative mb-16">
        <p class="mb-4 text-center text-sm text-blue-300">
          <span
            class="inline-block rounded-full bg-white/5 px-4 py-1 text-sm text-blue-300 backdrop-blur-sm"
            >Before & After</span
          >
        </p>

        <div
          ref="containerRef"
          class="group relative h-[400px] overflow-hidden rounded-xl border border-white/10 md:h-[500px]"
        >
          <img
            src="../images/before.jpg"
            alt="Original image"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <div
            ref="afterImageRef"
            class="absolute inset-0 h-full w-1/2 overflow-hidden"
          >
            <img
              src="../images/after.jpg"
              alt="Transformed image"
              class="absolute inset-0 h-full w-full object-cover"
              style="filter: saturate(1.5) contrast(1.2) brightness(1.1)"
            />
          </div>

          <div
            ref="sliderRef"
            class="absolute bottom-0 top-0 w-1 cursor-ew-resize bg-white"
            :style="{ left: sliderPosition + '%' }"
            @mousedown="startDrag"
            @touchstart="startDrag"
          >
            <div
              class="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7h8M8 12h8m-8 5h8"
                />
              </svg>
            </div>
          </div>

          <div
            class="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm"
          >
            Before
          </div>
          <div
            class="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm"
          >
            After
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const afterImageRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const sliderRef = ref<HTMLElement | null>(null);
const sliderPosition = ref<number>(50);
let isDragging = false;

const startDrag = (event: MouseEvent | TouchEvent) => {
  event.preventDefault();
  isDragging = true;
  window.addEventListener("mousemove", drag);
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("touchmove", drag);
  window.addEventListener("touchend", stopDrag);
};

const stopDrag = () => {
  isDragging = false;
  window.removeEventListener("mousemove", drag);
  window.removeEventListener("mouseup", stopDrag);
  window.removeEventListener("touchmove", drag);
  window.removeEventListener("touchend", stopDrag);
};

const drag = (event: MouseEvent | TouchEvent) => {
  if (!isDragging || !containerRef.value || !afterImageRef.value) return;

  const containerRect = containerRef.value.getBoundingClientRect();
  const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
  const x = clientX - containerRect.left;
  const percent = Math.max(0, Math.min(100, (x / containerRect.width) * 100));

  sliderPosition.value = percent;
  afterImageRef.value.style.width = `${percent}%`;
};

onMounted(() => {
  if (!sliderRef.value) return;
  sliderRef.value.style.transform = "translateX(-50%)";
});

onUnmounted(() => {
  stopDrag();
});
</script>

<style scoped></style>
