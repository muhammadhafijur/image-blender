<template>
  <section class="bg-white dark:bg-custom-dark-400">
    <div
      class="mt-12 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16"
    >
      <h2
        class="text-transparent bg-gradient-to-r from-sky-500 via-blue-500 via-20% to-purple-500 to-80% bg-clip-text font-inter text-xl md:text-2xl lg:text-3xl font-extrabold text-center"
      >
        Loved by many worldwide.
      </h2>
      <p
        class="text-base md:text-lg mt-4 text-gray-500 dark:text-gray-300 text-center"
      >
        See what users are saying about Image Blender.
      </p>
      <div
        class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 py-8 md:py-12"
      >
        <div
          v-for="review in reviews"
          :key="review.id"
          class="break-inside-avoid border border-slate-200 dark:border-slate-700 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <q class="block mb-4 text-slate-700 dark:text-slate-300 italic">{{
            review.text
          }}</q>
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
                class="focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm"
              >
                <p
                  class="text-sm font-semibold text-slate-900 dark:text-slate-100"
                >
                  {{ review.author.name }}
                </p>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  {{ review.author.role }}
                  {{ review.author.company ? 'at' : '' }}
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
