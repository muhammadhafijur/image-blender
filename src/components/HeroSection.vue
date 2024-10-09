<template>
  <div class="p-4 py-48 md:py-64">
    <div
      class="relative max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 grid h-[50vh] grid-cols-1 gap-4 lg:h-[330px] lg:grid-cols-2"
    >
      <div
        class="flex flex-col justify-center rounded-xl bg-[#F5F5F7] py-16 lg:py-0"
      >
        <h1
          class="bg-gradient-to-r from-sky-500 via-blue-500 via-20% to-purple-500 to-80% bg-clip-text text-center text-xl font-extrabold text-transparent md:text-2xl lg:text-start lg:text-3xl xl:text-4xl p-4"
        >
          Image Blending Tool for transforming your images with powerful
          effects.
        </h1>
      </div>
      <div class="h-full w-full overflow-hidden rounded-xl">
        <div class="mx-auto grid h-full w-full max-w-3xl grid-cols-3 gap-4">
          <div class="col-span-2 h-full w-full overflow-hidden rounded-lg">
            <img
              class="h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/digital-art-style-illustration-thunderstorm_23-2151812816.jpg?t=st=1728405164~exp=1728408764~hmac=09995abf03f92b54d28ea5cb38438c8f81fc8551015d85237cc3a1b4e68de977&w=1380"
              alt="Image 1"
            />
          </div>
          <div class="h-full w-full overflow-hidden rounded-lg">
            <img
              class="h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/pixel-art-river-landscape-illustration_23-2151793199.jpg?t=st=1728405204~exp=1728408804~hmac=37aa0086cf6882ffb5c5eef19934634db4a941d5d0587d64ca3c78c62447120c&w=1380"
              alt="Image 2"
            />
          </div>
          <div class="h-full w-full overflow-hidden rounded-lg">
            <img
              class="h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/digital-art-style-illustration-thunderstorm_23-2151812816.jpg?t=st=1728405164~exp=1728408764~hmac=09995abf03f92b54d28ea5cb38438c8f81fc8551015d85237cc3a1b4e68de977&w=1380"
              alt="Image 3"
            />
          </div>
          <div class="col-span-2 h-full w-full overflow-hidden rounded-lg">
            <img
              class="h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/pixel-art-river-landscape-illustration_23-2151793199.jpg?t=st=1728405204~exp=1728408804~hmac=37aa0086cf6882ffb5c5eef19934634db4a941d5d0587d64ca3c78c62447120c&w=1380"
              alt="Image 4"
            />
          </div>
        </div>
      </div>
      <div class="absolute inset-0 grid place-items-center -top-8 md:top-0">
        <div class="h-28 w-28 bg-white grid place-items-center rounded-full">
          <a
            href="#editor"
            class="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center text-base font-semibold hover:bg-blue-700 transition-colors duration-300 text-white text-center"
          >
            Start <br />
            Blending
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
