<template>
  <div class="flex h-screen flex-col">
    <TheHeader />
    <div
      class="relative flex h-full w-full flex-col-reverse overflow-hidden bg-custom-dark-400 md:gap-4 md:p-3 lg:flex-row"
    >
      <SidebarNavigationPanel />
      <!-- The Sidebar -->
      <section
        class="[&::-webkit-scrollbar-thumb] hover:[&::-webkit-scrollbar-thumb]:bg-custom-green-500/70 shrink-0 h-[150px] w-full overflow-hidden overflow-y-auto md:rounded-xl bg-[#131412] font-inter lg:h-full lg:w-[400px] [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:hidden [&::-webkit-scrollbar]:w-2"
      >
        <Transition :css="false" appear @enter="onEnter">
          <ImageControls v-if="activeMenu == 'imageControls'" />
        </Transition>
        <Transition :css="false" appear @enter="onEnter">
          <ThePresets v-if="activeMenu == 'presets'" />
        </Transition>

        <!-- For Leave Animation Experiment -->
        <!-- <Transition :css="false" appear @enter="onEnter" @leave="onLeave">
          <CommunityPresets v-if="activeMenu == 'communityPresets'" />
        </Transition> -->
        <Transition :css="false" appear @enter="onEnter">
          <CommunityPresets v-if="activeMenu == 'communityPresets'" />
        </Transition>
        <Transition :css="false" appear @enter="onEnter">
          <div v-if="activeMenu == 'save'">
            <DownloadImage />
            <SaveEdit />
          </div>
        </Transition>
      </section>
      <div
        class="relative flex h-full w-full flex-col gap-4 md:rounded-xl bg-[radial-gradient(#ffffff33_1px,#131412_1px)] bg-[size:20px_20px] p-2 md:p-4 dark:bg-black"
        @dragover.prevent="handleDragOver"
      >
        <div
          class="drop-area absolute left-0 top-0 z-30 h-full w-full rounded-xl bg-[#00C16A]/50 p-6 font-inter"
          :class="{ 'hover-active': isDragging }"
          v-if="isDragging"
          @dragleave="handleDragLeave"
          @drop.prevent="handleDrop"
        >
          <div
            class="grid h-full w-full place-items-center rounded-xl border-4 border-dashed"
          >
            <h4 v-if="isDragging" class="text-2xl font-bold text-white">
              Drop image anywhere
            </h4>
            <h4 v-else-if="!imageUrl">Drag & Drop Image Here</h4>
          </div>
        </div>
        <TheImageFinder />
        <DisplayBox />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommunityPresets from "@/components/CommunityPresets.vue";
import DisplayBox from "@/components/DisplayBox.vue";
import DownloadImage from "@/components/DownloadImage.vue";
import ImageControls from "@/components/ImageControls.vue";
import SaveEdit from "@/components/SaveEdit.vue";
import SidebarNavigationPanel from "@/components/SidebarNavigationPanel.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheImageFinder from "@/components/TheImageFinder.vue";
import ThePresets from "@/components/ThePresets.vue";
import useImageControls from "@/composables/useImageControls";
import { animate } from "motion";
import { ref } from "vue";

async function onEnter(el: Element, onComplete: () => void): Promise<void> {
  await animate(
    el,
    { opacity: [0, 1], y: [20, 0] } as any,
    { duration: 0.2, easing: "ease-out" } as any,
  );
  onComplete();
}

// async function onLeave(el, onComplete) {
//   await animate(
//     el,
//     { opacity: [1, 0], y: [0, 40] },
//     { duration: 0.2, easing: "ease-in" }
//   );
//   onComplete();
// }

const { activeMenu, imageUrl } = useImageControls();

const isDragging = ref(false);

const handleDragOver = () => {
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = (event: DragEvent) => {
  isDragging.value = false;
  const files = event.dataTransfer?.files;

  if (files && files.length > 0) {
    const file = files[0];

    if (file.type.startsWith("image/")) {
      if (imageUrl.value) {
        URL.revokeObjectURL(imageUrl.value);
        imageUrl.value = "";
      }
      imageUrl.value = URL.createObjectURL(file);
    } else {
      alert("Please drop a valid image file.");
    }
  }
};
</script>

<style scoped></style>
