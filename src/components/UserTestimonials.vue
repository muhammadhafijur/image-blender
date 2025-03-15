<template>
  <section class="relative z-10 bg-gradient-to-b from-gray-900 to-black">
    <div
      class="mx-auto mt-12 max-w-screen-xl px-4 py-12 sm:px-6 md:px-8 md:py-16"
    >
      
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-3xl font-bold md:text-4xl">
          <span
            class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >What Our Users Say</span
          >
        </h2>
        <p class="mx-auto max-w-2xl text-gray-300">
          See what users are saying about Image Blender.
        </p>
      </div>
      <div
        class="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3 mb-16"
      >
        <div
          v-for="review in reviews"
          :key="review.id"
          class="break-inside-avoid rounded-xl border border-slate-200 border-white/10 bg-slate-50 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
        >
          <q class="mb-4 block italic text-gray-100">{{ review.text }}</q>
          <div class="flex items-center gap-3">
            <span class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full border border-slate-300 dark:border-none"
                :alt="review.author.name"
                :src="review.author.avatar"
                :srcset="`${review.author.avatar} 2x`"
              />
            </span>
            <div>
              <a
                :href="`https://github.com/${review.author.username}`"
                rel="noopener noreferrer"
                target="_blank"
                :aria-label="review.author.name"
                class="rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <p class="text-sm font-semibold text-emerald-600">
                  {{ review.author.name }}
                </p>
                <p class="text-sm text-gray-300">
                  {{ review.author.role }}
                  {{ review.author.company ? "at" : "" }}
                  {{ review.author.company }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import userReviews from "../../db/userReviews.json";

interface Author {
  username: string;
  avatar: string;
  name: string;
  role: string;
  company: string;
}

interface Review {
  id: string;
  text: string;
  author: Author;
}

interface UserReviews {
  reviews: Review[];
}

export default {
  data() {
    return {
      reviews: (userReviews as UserReviews).reviews,
    };
  },
};
</script>
