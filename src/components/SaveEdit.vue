<template>
  <div class="w-full max-w-md space-y-6 p-4 font-inter">
    <SidebarTitle>SAVE PRESETS</SidebarTitle>
    <div class="relative">
      <div class="relative">
        <input
          type="text"
          v-model="name"
          placeholder="Name"
          class="w-full bg-[#2a2a2a] text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
        />
      </div>

      <button
        @click="handleSave"
        :disabled="name.length < 1"
        class="absolute top-1.5 right-1.5 text-sm flex items-center justify-center gap-2 bg-zinc-900 text-gray-300 px-3 py-2 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-45"
      >
        <Save :size="16" />
        <span>Save Edit</span>
      </button>
    </div>

    <div class="mt-8">
      <SidebarTitle>SAVED EDITS</SidebarTitle>

      <div class="space-y-2">
        <Transition
          v-for="(item, index) in items"
          :key="index"
          :css="false"
          appear
          @enter="onEnter"
          @leave="onLeave"
        >
          <div
            class="text-white w-full px-4 py-3 capitalize bg-zinc-800 rounded-lg flex items-center justify-between"
          >
            {{ item.name }}
            <div class="flex items-center gap-3">
              <button
                @click="getSavedPresets(item.id)"
                class="w-10 h-10 rounded-full bg-zinc-900 text-zinc-500 hover:text-zinc-100 transition-colors duration-300 ease-out grid place-items-center"
              >
                <MousePointerClick :size="20" />
              </button>
              <button
                @click="removeItemFromLocalStorage(item.id)"
                class="w-10 h-10 rounded-full bg-zinc-900 text-zinc-500 hover:text-rose-500 transition-colors duration-300 ease-out grid place-items-center"
              >
                <Trash2 :size="20" />
              </button>
            </div>
          </div>
        </Transition>
      </div>
      <button v-if="items.length > 0" @click="clearSaves" class="bg-[#E45245] text-black px-4 py-2 rounded-lg mt-4 text-base font-medium">Clear All Saves</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MousePointerClick, Save, Trash2 } from "lucide-vue-next";
import { animate } from "motion";
import { onMounted, ref } from "vue";
import useImageControls from "../composables/useImageControls";
import SidebarTitle from "./Typography/SidebarTitle.vue";

const {
  viewCode,
  bgLayerOpacity,
  bgLayerColor,
  mixBlendValue,
  selectedGradientDirection,
  showGradientDropdown,
  fromGradient,
  viaGradient,
  toGradient,
} = useImageControls();

const name = ref("");

const items = ref<{ id: string; name: string }[]>([]);

onMounted(() => {
  const storedItems = localStorage.getItem("items");
  if (storedItems) {
    items.value = JSON.parse(storedItems);
  }
});

const generateUniqueId = () => {
  return `item-${Date.now()}`;
};

const handleSave = () => {
  if (viewCode.value) {
    const id = generateUniqueId();

    const properties = {
      id,
      bgLayerOpacity: bgLayerOpacity.value,
      bgLayerColor: bgLayerColor.value,
      mixBlendValue: mixBlendValue.value,
      selectedGradientDirection: selectedGradientDirection.value,
      showGradientDropdown: showGradientDropdown.value,
      fromGradient: fromGradient.value,
      viaGradient: viaGradient.value,
      toGradient: toGradient.value,
    };
    console.log("tttt");
    // Save the properties in localStorage
    localStorage.setItem(id, JSON.stringify(properties));
    updateItemsInLocalStorage(id, name.value);
  } else {
    console.warn("viewCode is null. Cannot save.");
  }
};


const updateItemsInLocalStorage = (id: string, name:string) => {
  const item = { id, name };
  items.value.push(item);
  localStorage.setItem("items", JSON.stringify(items.value));
};

const removeItemFromLocalStorage = (idToRemove: string) => {
  items.value = items.value.filter((item) => item.id !== idToRemove);

  localStorage.setItem("items", JSON.stringify(items.value));

  localStorage.removeItem(idToRemove);
};

const getSavedPresets = (itemId: string) => {
  const itemValue = localStorage.getItem(itemId);
  console.log(itemId);
  if (itemValue) {
    const properties = JSON.parse(itemValue);

    bgLayerOpacity.value = properties.bgLayerOpacity;
    bgLayerColor.value = properties.bgLayerColor;
    mixBlendValue.value = properties.mixBlendValue;
    selectedGradientDirection.value = properties.selectedGradientDirection;
    showGradientDropdown.value = properties.showGradientDropdown;
    fromGradient.value = properties.fromGradient;
    viaGradient.value = properties.viaGradient;
    toGradient.value = properties.toGradient;
  } else {
    console.warn(`No item found in localStorage for ${itemId}`);
  }
};

const clearSaves = () => {
  localStorage.clear()
  items.value = []
}

// Motion Animation

async function onEnter(el: Element, onComplete: () => void): Promise<void> {
  await animate(
    el,
    { opacity: [0, 1], y: [20, 0] } as any,
    { duration: 0.2, easing: "ease-out" } as any
  );
  onComplete();
}

async function onLeave(el: Element, onComplete: () => void): Promise<void> {
  await animate(
    el,
    { opacity: [1, 0], y: [0, 40] } as any,
    { duration: 0.2, easing: "ease-in" } as any
  );
  onComplete();
}
</script>

<style scoped></style>
