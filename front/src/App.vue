<script setup>
import { nextTick, ref } from "vue";
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";

const theme = ref(localStorage.getItem("theme") || "dark");
const reloadTheme = ref(true);
const fixed = ref(false);

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

function changeFixed() {
  fixed.value = !fixed.value;
}
</script>

<template>
  <body v-if="reloadTheme">
    <Header :theme="theme" @changeTheme="changeTheme" @changeFixed="changeFixed"/>
    <RouterView :theme="theme" :class="{'fixed': fixed}"/>
  </body>
</template>

<style scoped>
.fixed {
  position: fixed;
}
</style>