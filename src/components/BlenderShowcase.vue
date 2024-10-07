<template>
  <section class="bg-white dark:bg-custom-dark-400 pt-16 pb-44">
    <div
      class="mt-12 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 text-center"
    >
      <h2
        class="text-transparent bg-gradient-to-r from-sky-500 via-blue-500 via-20% to-purple-500 to-80% bg-clip-text font-inter text-xl md:text-2xl lg:text-5xl font-extrabold"
      >
        Creates Unique Images with Image Blender
      </h2>
      <p class="text-base md:text-lg mt-4 text-gray-500 dark:text-gray-300">
        Explore amazing images made with Image Blender
      </p>
    </div>
    <div class="w-full px-4 sm:px-6 md:px-8 lg:px-0 overflow-hidden">
      <Swiper
        :spaceBetween="10"
        :slidesPerView="1"
        :speed="5000"
        :autoplay="{
          delay: 1,
          disableOnInteraction: false,
        }"
        :loop="true"
        :modules="modules"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        class="mySwiper overflow-hidden"
      >
        <SwiperSlide>
          <div
            class="w-full h-full lg:h-80 aspect-video rounded-md overflow-hidden"
          >
            <img
              src="../images/showcase1.png"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="w-full h-full lg:h-80 aspect-video rounded-md overflow-hidden"
          >
            <img
              src="../images/showcase2.jpg"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="w-full h-full lg:h-80 aspect-video rounded-md overflow-hidden"
          >
            <img
              src="../images/showcase3.jpg"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="w-full h-full lg:h-80 aspect-video rounded-md overflow-hidden"
          >
            <img
              src="../images/showcase4.jpg"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="w-full h-full lg:h-80 aspect-video rounded-md overflow-hidden"
          >
            <img
              src="../images/showcase5.jpg"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="w-full h-full lg:h-80 aspect-video rounded-md overflow-hidden"
          >
            <img
              src="../images/showcase6.jpg"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="flex justify-center mt-8">
      <button
        class="bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-3/4 md:w-1/4 mx-4 sm:mx-8"
      >
        Try Image Blender
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import './style.css';

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const modules = [Autoplay, Pagination, Navigation];

// const breakpoints = {
//   640: {
//     slidesPerView: 2,
//     spaceBetween: 10,
//   },
//   768: {
//     slidesPerView: 3,
//     spaceBetween: 20,
//   },
//   1024: {
//     slidesPerView: 4,
//     spaceBetween: 30,
//   },
// };
</script>

<style>
.mySwiper .swiper-wrapper {
  -webkit-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
}
</style>
