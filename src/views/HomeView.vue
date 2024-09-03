<template>
  <div
    class="fixed left-1/2 -translate-x-1/2 transition duration-500 origin-bottom ease-out bottom-10 z-10 w-full max-w-full h-full max-h-[400px] md:max-h-[500px] 2xl:max-h-[600px] sm:max-w-screen-xl px-4 sm:px-6 md:px-8 font-inter"
    :class="[showUniquePreset ? 'scale-100 ' : 'scale-0']"
  >
    <div class="w-full h-full bg-white border rounded-lg">
      <div
        class="flex min-h-full h-full overflow-auto [&::-webkit-scrollbar-thumb] [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-gray-300 hover:[&::-webkit-scrollbar-thumb]:bg-custom-green-500/70 [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar]:w-2.5 overflow-y-auto"
      >
        <div class="border-r flex min-h-full flex-col sticky top-0">
          <button
            class="border-b p-4 font-inter font-semibold text-emerald-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5"
            >
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
              />
            </svg>
          </button>
          <button
            class="p-4 text-gray-500 hover:text-green-500 hover:bg-gray-100 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5"
            >
              <path d="M18 22H4a2 2 0 0 1-2-2V6" />
              <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
              <circle cx="12" cy="8" r="2" />
              <rect width="16" height="16" x="6" y="2" rx="2" />
            </svg>
          </button>
        </div>
        <div class="flex-1 w-full bg-white p-4 sm:px-6 sm:pt-6 sm:pb-12">
          <div
            v-if="!session"
            class="flex sticky top-2 rounded-lg justify-center mb-6"
          >
            <p
              class="text-sm text-gray-100 bg-emerald-500 font-medium font-inter rounded-full px-4 py-2 w-auto"
            >
              <button
                @click="signInWithGoogle"
                class="text-white font-bold underline decoration-2"
              >
                Sign in
              </button>
              to gain access to our unique presets
            </p>
          </div>
          <div class="w-full grid grid-cols-2 bg-gradient lg:grid-cols-4 gap-4">
            <button
              :disabled="!session"
              v-for="preset in presets"
              @click="handlePreset(preset.color)"
              class="rounded-md text-sm font-medium disabled:cursor-not-allowed h-auto p-2 flex flex-col items-center justify-center text-center bg-[var(--presetColor)]"
              :style="`--presetColor:${preset.color};`"
            >
              <img
                src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
                alt="Ocean"
                class="w-full h-12 sm:h-28 object-cover mb-2 rounded"
              /><span class="text-white font-medium">{{ preset.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    @click="handleUniquePreset"
    class="px-4 py-2 fixed left-1/2 -translate-x-1/2 bottom-6 z-20 text-xs sm:text-sm font-inter tracking-wider rounded-full mx-auto text-white flex items-center gap-2 sm:rounded-[20px] bg-slate-900 tex-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-3 sm:size-4 animate-spin-slow"
    >
      <path
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
    Unique Presets
  </button>
  <button
    @click="toggleFullScreen"
    class="w-12 h-12 rounded-[20px] fixed grid place-items-center text-white right-6 bottom-6 bg-slate-800 transition duration-300 ease-out group-hover:-translate-y-32"
  >
    <svg
      v-if="isFullScreen"
      xmlns="http://www.w3.org/2000/svg"
      class="size-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-6"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  </button>

  <div
    class="fixed left-6 bottom-20 z-20 w-full max-w-56 sm:max-w-[428px] transition duration-500 origin-bottom-left font-inter"
    :class="[showPopupFeedback ? 'scale-100' : 'scale-0']"
  >
    <div class="p-4 ease-out sm:p-6 bg-white shadow rounded-2xl">
      <div class="flex justify-between items-center">
        <h6 class="text-xs sm:text-base font-semibold">
          Your Feedback Matters!
        </h6>
        <button
          @click="showPopupFeedback = false"
          class="rounded w-9 h-9 grid place-items-center text-gray-600 hover:text-slate-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4 sm:size-6"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <p class="mt-3 sm:mt-4 text-gray-500 text-[10px] sm:text-sm">
        There have been 117 billion+ people who have lived and died on this blue
        planet. But there has never been and will never be another
        <span
          class="underline decoration-wavy decoration-emerald-400 text-emerald-500 font-semibold"
          >You</span
        >. So take care of yourself and take care of your soul. Do not try to be
        the smartest in the room; try to be the
        <span
          class="underline decoration-wavy decoration-emerald-400 text-emerald-500 font-semibold"
          >Kindest</span
        >.
      </p>
      <div
        class="mt-4 sm:mt-6 grid grid-cols-2 gap-2 text-[8px] sm:text-xs font-medium"
      >
        <button class="bg-slate-900 text-white p-1.5 sm:p-3 rounded-xl">
          GIVE A STAR
        </button>
        <button class="bg-gray-100 text-gray-900 p-1.5 sm:p-3 rounded-xl">
          LEAVE A REVIEW
        </button>
      </div>
    </div>
  </div>
  <button
    @click="handlePopupFeedback"
    class="mt-4 w-8 h-8 sm:w-12 fixed animated-div left-6 bottom-6 z-20 sm:h-12 rounded-xl sm:rounded-[20px] bg-slate-900 grid place-items-center tex-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4 sm:size-6 fill-white stroke-white"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  </button>
  <TheHeader />
  <TheImageFinder />

  <section
    class="mt-12 max-w-screen-xl w-full mx-auto px-4 sm:px-6 md:px-8 flex justify-center font-inter"
  >
    <p
      class="border px-4 py-1 w-auto text-center text-sm text-slate-500 rounded-full"
    >
      Over
      <span class="text-emerald-500 font-semibold">{{ downloadCount }}</span>
      images downloaded so far!
    </p>
    <!-- <button @click="toggleFullScreen" class="border px-4 py-2 rounded-md">
      {{ isFullScreen ? 'Exit Full Screen' : 'Enter Full Screen' }}
    </button> -->
  </section>
  <!-- <div class=" h-16 relative grid place-items-center">
          <div class="absolute h-full w-full bg-gradient-to-tr from-blue-500 to-green-500 opacity-[40%] mix-blend-multiply z-10"></div>
          <img
            class="w-full h-full object-none  absolute inset-0"
            src="https://images.unsplash.com/photo-1561925403-813be1b06943?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1
            class="text-white z-10 tracking-wider bg-center bg-no-repeat  rounded-2xl font-madimi text-center text-4xl"
          >
            Image Blender
          </h1>
        </div> -->
  <!-- <div
      class="w-full bg-white sticky top-0 z-10 shadow-[0_1px_3px_rgba(15,23,42,0.08)]"
    >
      <div
        class="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 flex items-center gap-4"
      >
        <button
          class="cursor-pointer shrink-0 text-slate-400 rounded-full grid place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5"
          >
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            />
            <path
              d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            />
          </svg>
        </button>
        <input
          id="imageUrl"
          type="text"
          class="caret-indigo-500 w-full focus:outline-none py-6 font-normal text-slate-400"
          v-model="imageUrl"
        />
        <button
          @click="chooseRandomImage"
          class="text-white rotate-animation bg-gray-800 w-9 h-9 md:w-12 md:h-12 shrink-0 grid place-items-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5 md:size-6"
          >
            <path
              d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
            ></path>
            <path d="m14 7 3 3"></path>
            <path d="M5 6v4"></path>
            <path d="M19 14v4"></path>
            <path d="M10 2v2"></path>
            <path d="M7 8H3"></path>
            <path d="M21 16h-4"></path>
            <path d="M11 3H9"></path>
          </svg>
        </button>
        <label
          for="imageFile"
          title="Upload Image"
          class="cursor-pointer rotate-animation shrink-0 rounded-full text-white bg-gradient-to-tr from-sky-500 to-purple-400 w-9 h-9 md:w-12 md:h-12 grid place-items-center"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5 md:size-6"
          >
            <path
              d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
            />
            <path d="m14 19.5 3-3 3 3" />
            <path d="M17 22v-5.5" />
            <circle cx="9" cy="9" r="2" />
          </svg>
     
        </label>
        <input
          type="file"
          class="hidden"
          id="imageFile"
          @change="handleImageFileChange"
        />
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto w-full">
      <div
        class="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-emerald-200 to-transparent"
      ></div>
    </div> -->

  <main class="font-inter bg-white min-h-[calc(100vh-68px)] flex flex-col">
    <section class="w-full grow h-full bg-white py-12">
      <div
        class="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-start gap-8"
      >
        <DisplayBox />
        <ImageControls />
        <!-- <div class="">
          <div class="flex flex-col md:flex-row gap-4 md:gap-3">
            <div
              class="p-1 bg-slate-200/60 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.1)]  rounded-lg grid grid-cols-2 justify-center grow"
            >
              <button
                @click="toggleViewMode('preview')"
                :class="{ 'bg-white shadow text-slate-800': showPreview }"
                class="px-3 group py-1.5 rounded-md text-slate-500 text-sm font-semibold justify-center grow flex items-center gap-2"
              >
                <svg
                  :class="{ 'text-emerald-500': showPreview }"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 3h8m0 6h8M12 4v16"
                  />
                </svg>

                Preview
              </button>
              <button
                @click="toggleViewMode('code')"
                :class="{ 'bg-white shadow text-slate-800': !showPreview }"
                class="text-slate-500 justify-center px-3 py-1.5 text-sm font-semibold rounded-md flex items-center gap-2"
              >
                <svg
                  :class="{ 'text-emerald-500': !showPreview }"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-5"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>

                Code
              </button>
            </div>
            <button
              @click="copyCode"
              class="shadow active:translate-y-px duration-200 text-sm font-semibold transition ease-out bg-white group text-slate-700 justify-center px-3 py-1 rounded-md flex items-center gap-2"
            >
              <svg
                class="h-8 w-8 stroke-slate-700 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-800"
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.7475 16.2499L18.2475 16.2499"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M13.7475 19.2499L18.2475 19.2499"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <g class="opacity-0">
                  <path
                    d="M15.9975 5.99988L15.9975 3.99988"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M19.9975 5.99988L20.9975 4.99988"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M11.9975 5.99988L10.9975 4.99988"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>

              Copy
            </button>
            <div class="p-1 bg-slate-100 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.1)]  grid grid-cols-3 justify-items-center  rounded-lg">
              <button
                @click="handleAspectRatio('square')"
                :class="{
                  'bg-white shadow text-slate-800': aspectRatio === 'square',
                }"
                class="px-3 py-1.5 rounded-md text-slate-700 w-full md:w-auto flex justify-center md:flex-none"
              >
                <svg
                  :class="{ 'text-emerald-500': aspectRatio === 'square' }"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-5"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                </svg>
              </button>
              <button
                @click="handleAspectRatio('video')"
                :class="{
                  'bg-white shadow text-slate-800': aspectRatio === 'video',
                }"
                class="px-3 py-1.5 rounded-md text-slate-700 w-full md:w-auto flex justify-center md:flex-none"
              >
                <svg
                  :class="{ 'text-emerald-500': aspectRatio === 'video' }"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-5"
                >
                  <rect width="20" height="12" x="2" y="6" rx="2" />
                </svg>
              </button>
              <button
                @click="handleAspectRatio('auto')"
                :class="{
                  'bg-white shadow text-slate-800': aspectRatio === 'auto',
                }"
                class="px-3 py-1.5 rounded-md text-slate-700 w-full md:w-auto flex justify-center md:flex-none"
              >
                <svg
                  :class="{ 'text-emerald-500': aspectRatio === 'auto' }"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-5"
                >
                  <rect width="20" height="6" x="2" y="4" rx="2" />
                  <rect width="20" height="6" x="2" y="14" rx="2" />
                </svg>
              </button>
            </div>
          </div>

          <div class="mt-4 flex flex-col rounded-xl">
            <div
              v-if="showPreview"
              class="w-full h-full relative rounded-xl overflow-hidden"
              :class="[
                aspectRatio === 'square'
                  ? 'aspect-square'
                  : aspectRatio === 'video'
                    ? 'aspect-video'
                    : 'aspect-auto',
              ]"
            >
              <div
                class="absolute w-full h-full bg-[var(--bgLayerColor)] opacity-[var(--bgLayerOpacity)]"
                :style="`--bgLayerColor:${bgLayerColor}; --bgLayerOpacity:${bgLayerOpacity}%; --mixBlendValue:${mixBlendValue}; mix-blend-mode:${mixBlendValue}; ${console.log('test', mixBlendValue)}`"
              ></div>
              <img :src="imageUrl" alt="" class="w-full h-full object-cover" />
            </div>
            <div v-else class="h-full aspect-square w-full">
              <pre
                class="w-full h-full rounded-xl"
              ><code class="language-html">{{viewCode}}</code></pre>
            </div>
          </div>

          previos blur component
          <div
                  v-if="effect === 'bgEffect'"
                  class="rounded-2xl overflow-hidden relative mt-4"
                >
                  <div
                    class="absolute top-0 right-0 w-full h-full bg-[var(--bgLayerColor)] opacity-[var(--bgLayerOpacity)]"
                    :style="`--bgLayerColor:${bgLayerColor}; --mixBlendValue:${mixBlendValue}; --bgLayerOpacity:${bgLayerOpacity}%`"
                    style="mix-blend-mode: var(--mixBlendValue)"
                  ></div>
                  <img
                    :src="imageUrl"
                    class="w-full h-full overflow-hidden"
                    alt=""
                  />
                </div> 
        </div> -->

        <!-- <div class="">

          <div @click="isBgEffect = true" class="w-full grid grid-cols-2 lg:grid-cols-3 gap-2">
            <button
              class="capitalize text-sm font-medium border rounded-md p-2 text-gray-700"
              :class="[
                mixBlendValue === item ? 'bg-green-500 text-white' : 'bg-white',
              ]"
              v-for="item in mixBlendProperties"
              :key="item"
              @click="handleBgEffect(item)"
            >
              {{ item }}
            </button>
          </div>
          <div class="mt-4 w-full rounded-2xl gap-4">
            <div class="">
              <div class="flex gap-2">
                <input
                  type="text"
                  placeholder="#FFFFFF"
                  class="border p-2 rounded-md w-full"
                  v-model="bgLayerColor"
                />
                <label
                  for="color-picker"
                  class="grid shrink-0 group cursor-pointer w-10 h-10 relative place-items-center bg-[var(--bgLayerColor)] text-white rounded-md"
                  :style="`--bgLayerColor:${bgLayerColor};`"
                >
                  <div class="absolute hidden lg:block inset-0 w-full h-full rounded-full">
                    <div
                      class="dot-animation1 absolute top-1/2 left-1/2 text-emerald-400 z-20 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="size-6"
                      >
                        <path
                          d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                        />
                        <path d="M20 3v4" />
                        <path d="M22 5h-4" />
                        <path d="M4 17v2" />
                        <path d="M5 18H3" />
                      </svg>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="star1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500"
                    >
                      <path
                        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="star2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500"
                    >
                      <path
                        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="star3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500"
                      green
                    >
                      <path
                        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="star4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500"
                    >
                      <path
                        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                      />
                    </svg>

                    
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="size-4"
                  >
                    <circle
                      cx="13.5"
                      cy="6.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="17.5"
                      cy="10.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="8.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="6.5"
                      cy="12.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <path
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
                    ></path></svg
                ></label>
                <div class="sr-only">
                  <input
                    id="color-picker"
                    type="color"
                    class="w-full"
                    v-model="bgLayerColor"
                  />
                </div>
              </div>
              <div class="mt-4 grid grid-cols-3 gap-2">
                <div class="">
                  <label for="from-gd">From</label>
                  <input
                    id="from-gd"
                    type="text"
                    placeholder="#FFFFFF"
                    class="mt-1 border p-2 rounded-md w-full"
                    v-model="bgLayerColor"
                  />
                </div>
                <div class="">
                  <label for="via-gd">Via</label>
                  <input
                    id="via-gd"
                    type="text"
                    placeholder="#FFFFFF"
                    class="mt-1 border p-2 rounded-md w-full"
                    v-model="bgLayerColor"
                  />
                </div>
                <div class="">
                  <label for="to-gd">To</label>
                  <input
                    id="to-gd"
                    type="text"
                    placeholder="#FFFFFF"
                    class="mt-1 border p-2 rounded-md w-full"
                    v-model="bgLayerColor"
                  />
                </div>
              </div>
              <div class="mt-8">
                <input
                  class="h-3.5 w-full bg-gray-200 rounded-full border cursor-pointer appearance-none [&::-webkit-slider-thumb]:h-8 active:[&::-webkit-slider-thumb]:scale-105 duration-300 ease-out [&::-moz-range-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-moz-range-thumb]:w-8 active:[&::-moz-range-thumb]:scale-105 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-[#2b2b2b] [&::-moz-range-thumb]:bg-[#2b2b2b] [&::-ms-thumb]:h-8 active:[&::-ms-thumb]:scale-105 [&::-ms-thumb]:w-8 [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-[#2b2b2b]"
                  type="range"
                  min="0"
                  max="100"
                  value="bgLayerOpacity"
                  v-model="bgLayerOpacity"
                  @input="updateSliderBackground"
                  :style="{
                    background: sliderBackground,
                  }"
                />
              </div>
            </div>
            <div class="mt-12 w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
              <button
                @click="handlePreset"
                class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-auto p-2 flex flex-col items-center justify-center text-center"
                style="background-color: rgb(0, 119, 190)"
              >
                <img
                  src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
                  alt="Ocean"
                  class="w-full h-20 object-cover mb-2 rounded"
                /><span class="text-white font-medium">Ocean</span></button
              ><button
                class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-auto p-2 flex flex-col items-center justify-center text-center"
                style="background-color: rgb(34, 139, 34)"
              >
                <img
                  src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
                  alt="Forest"
                  class="w-full h-20 object-cover mb-2 rounded"
                /><span class="text-white font-medium">Forest</span></button
              ><button
                class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-auto p-2 flex flex-col items-center justify-center text-center"
                style="background-color: rgb(255, 165, 0)"
              >
                <img
                  src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
                  alt="Sunset"
                  class="w-full h-20 object-cover mb-2 rounded"
                /><span class="text-white font-medium">Sunset</span></button
              ><button
                class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-auto p-2 flex flex-col items-center justify-center text-center"
                style="background-color: rgb(230, 230, 250)"
              >
                <img
                  src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
                  alt="Lavender"
                  class="w-full h-20 object-cover mb-2 rounded"
                /><span class="text-white font-medium">Lavender</span></button
              ><button
                class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-auto p-2 flex flex-col items-center justify-center text-center"
                style="background-color: rgb(222, 49, 99)"
              >
                <img
                  src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
                  alt="Cherry"
                  class="w-full h-20 object-cover mb-2 rounded"
                /><span class="text-white font-medium">Cherry</span></button
              ><button
                class="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-auto p-2 flex flex-col items-center justify-center text-center"
                style="background-color: rgb(25, 25, 112)"
              >
                <img
                  src="https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480"
                  alt="Midnight"
                  class="w-full h-20 object-cover mb-2 rounded"
                /><span class="text-white font-medium">Midnight</span>
              </button>
            </div>
          </div>
        </div> -->
      </div>

      <!-- <p class="mt-4 text-red-500">{{ imageUrl }}</p> -->
    </section>
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";
import TheImageFinder from "../components/TheImageFinder.vue";
// import "prismjs/themes/prism.css";
import DisplayBox from "@/components/DisplayBox.vue";
import ImageControls from "@/components/ImageControls.vue";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-tomorrow.css";
import useImageControls from "../composables/useImageControls";
import useSupabase from "../composables/useSupabase";

const {
  imageUrl,
  aspectRatio,
  showPreview,
  viewCode,
  handleViewCode,
  bgLayerOpacity,
  bgLayerColor,
  mixBlendValue,
  selectedGradientDirection,
  fromGradient,
  viaGradient,
  toGradient
} = useImageControls();

const { downloadCount, session, signInWithGoogle, fetchDownloadCount } =
  useSupabase();

onMounted(() => {
  fetchDownloadCount();
});

const showPopupFeedback = ref(false);

const handlePopupFeedback = () => {
  showPopupFeedback.value = !showPopupFeedback.value;
};

const showUniquePreset = ref(false);

const handleUniquePreset = () => {
  showUniquePreset.value = !showUniquePreset.value;
};

setTimeout(() => {
  showPopupFeedback.value = true;
}, 5000);

// https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480

const presets = [
  { name: "Ocean", color: "#0077BE" },
  { name: "Forest", color: "#228B22" },
  { name: "Sunset", color: "#FFA500" },
  { name: "Lavender", color: "#E6E6FA" },
  { name: "Cherry", color: "#DE3163" },
  { name: "Midnight", color: "#191970" },
  { name: "Ocean", color: "#0077BE" },
  { name: "Forest", color: "#228B22" },
  { name: "Sunset", color: "#FFA500" },
  { name: "Lavender", color: "#E6E6FA" },
  { name: "Cherry", color: "#DE3163" },
  { name: "Midnight", color: "#191970" },
  { name: "Ocean", color: "#0077BE" },
  { name: "Forest", color: "#228B22" },
  { name: "Sunset", color: "#FFA500" },
  { name: "Lavender", color: "#E6E6FA" },
  { name: "Cherry", color: "#DE3163" },
  { name: "Midnight", color: "#191970" },
];

const handlePreset = (presetColor: string) => {
  console.log("dev-tool");
  imageUrl.value =
    "https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480";
  mixBlendValue.value = "multiply";
  bgLayerColor.value = `${presetColor}`;
  aspectRatio.value = "video";
};

const isFullScreen = ref(false);

const toggleFullScreen = () => {
  if (!isFullScreen.value) {
    enterFullScreen();
  } else {
    exitFullScreen();
  }
};

const enterFullScreen = () => {
  const element = document.documentElement; // FULL PAGE

  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else {
    // Fallback for older browsers (not needed for modern browsers)
    console.warn("Fullscreen API is not supported.");
  }

  isFullScreen.value = true;
};

const exitFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else {
    // Fallback for older browsers (not needed for modern browsers)
    console.warn("Fullscreen API is not supported.");
  }

  isFullScreen.value = false;
};
</script>

<style scoped>
.animated-div {
  animation: jump-rotate 2s forwards;
  animation-delay: 3s;
  opacity: 0;
}

@keyframes jump-rotate {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  30% {
    transform: translateY(-200px) rotate(360deg); /* Adjust height and rotation */
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}
/* top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 */

.circle-animation {
  animation: dotCircleAnimation 3s cubic-bezier(0.42, 0, 0.58, 1);
  /* animation-delay: 1s; */
  transform-origin: center;
  will-change: transform, opacity;
}
</style>
