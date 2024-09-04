<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import useImageControls from "./composables/useImageControls";

const { isDarkMode, DARK_MODE_KEY } = useImageControls();

onMounted(() => {
  isDarkMode.value = localStorage.getItem(DARK_MODE_KEY) === "true";
});
</script>

<template>
  <div :class="{ dark: isDarkMode }">
    <RouterView />
  </div>
</template>

<style scoped></style>
