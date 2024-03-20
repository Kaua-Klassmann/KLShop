<script setup>
import { nextTick, ref } from "vue";
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";

const theme = ref(localStorage.getItem("theme") || "dark");
const reloadTheme = ref(true);

async function changeTheme() {
  if (theme.value == "dark") {
    theme.value = "light";
  } else {
    theme.value = "dark";
  }

  localStorage.setItem("theme", theme.value);

  reloadTheme.value = false;

  await nextTick();

  reloadTheme.value = true;
}
</script>

<template>
  <body v-if="reloadTheme">
    <Header :theme="theme" @changeTheme="changeTheme" />
    <RouterView :theme="theme" />
  </body>
</template>