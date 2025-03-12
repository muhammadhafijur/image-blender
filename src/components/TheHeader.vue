<template>
  <header
    class=""
    :class="
      $route.path === '/'
        ? 'border-b bg-white dark:bg-custom-dark-400 dark:border-gray-700'
        : 'bg-zinc-950'
    "
  >
    <div
      class="mx-auto flex w-full items-center gap-4 px-4 py-3.5 sm:gap-8"
      :class="$route.path === '/' ? 'max-w-screen-xl  sm:px-6 lg:px-8' : ''"
    >
      <RouterLink
        to="/"
        class="block font-madimi text-xl font-bold tracking-wider text-[#1F2937] sm:text-2xl"
      >
        <span class="sr-only">Home</span>
        <span
          class="bg-[url('../images/wave.webp')] bg-clip-text bg-top bg-no-repeat text-transparent dark:bg-right-bottom"
          >Image</span
        >
        <span
          class="bg-gradient-to-r from-blue-500 via-blue-500 via-20% to-purple-500 to-80% bg-clip-text text-transparent"
          >Blender</span
        >
      </RouterLink>

      <div class="flex flex-1 items-center justify-end">
        <div class="flex items-center gap-4">
          <a
            href="https://github.com/muhammadhafijur/image-blender"
            target="_blank"
            rel="noopener noreferrer"
            class="grid h-8 w-8 place-items-center rounded-md sm:h-10 sm:w-10"
            :class="
              $route.path === '/'
                ? 'bg-gray-200 dark:bg-gray-100'
                : 'bg-zinc-800 text-gray-100'
            "
            >
            <span><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4 sm:size-5"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              ></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path></svg
            ><span class="sr-only">GitHub</span></span>
             </a
          ><button
            @click="toggleDarkMode"
            class="grid h-8 w-8 place-items-center rounded-md bg-gray-200 dark:bg-gray-100 sm:h-10 sm:w-10"
            :class="$route.path === '/' ? 'block' : 'hidden'"
          >
            <svg
              v-if="isDarkMode"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4 sm:size-5"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
            <svg
              v-else
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="size-4 sm:size-5"
            >
              <path
                d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Toggle dark mode</span>
          </button>
          <button
            v-if="!session"
            @click="signInWithGoogle"
            class="flex items-center gap-1 rounded-md bg-slate-900 px-2 py-1.5 text-white sm:px-4 sm:py-2"
          >
            <svg
              class="size-5 sm:size-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            <span class="hidden sm:block">Sign Up</span>
            <span class="sr-only">Sign up</span>
          </button>

          <div v-if="session" class="relative h-10 w-10">
            <button
              @click="showProfileDropdown = !showProfileDropdown"
              class="h-10 w-10 overflow-hidden rounded-full"
            >
              <img
                class="h-full w-full"
                :src="session.user.user_metadata.avatar_url"
                alt=""
              />
              <span class="sr-only">Profile</span>
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="showProfileDropdown && session"
              ref="dropdownTarget"
              class="absolute right-0 z-20 mt-1 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg"
            >
              <button
                @click="signOut"
                class="block w-full px-4 py-2 text-start text-gray-700 hover:bg-gray-100"
              >
                Log out
              </button>
              <!-- <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Option 2</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >Option 3</a
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import useImageControls from "@/composables/useImageControls";
import type { Session } from "@supabase/supabase-js";
import { onClickOutside } from "@vueuse/core";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import useSupabase from "../composables/useSupabase";
import supabase from "../lib/supabaseClient";

const showProfileDropdown = ref(false);

const { session, signInWithGoogle, signOut } = useSupabase();
const { isDarkMode, DARK_MODE_KEY } = useImageControls();

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem(DARK_MODE_KEY, isDarkMode.value.toString());
};

onMounted(async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error getting session:", error.message);
    } else {
      session.value = data.session as Session | null;
      if (session.value && session.value.user) {
        console.log("Logged in as user");
      }
    }
  } catch (error) {
    console.error("An error occurred", error);
  }
});

const dropdownTarget = ref(null);

onClickOutside(dropdownTarget, () => {
  showProfileDropdown.value = false;
});
</script>

<style scoped></style>
