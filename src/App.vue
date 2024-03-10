<script setup>
import { nextTick, onBeforeMount, onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";

onBeforeMount(() => {
  getProducts();
});

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

const products = ref({});

async function getProducts() {
  products.value = await fetch("../src/assets/hardware.json").then((response) =>
    response.json(),
  );
}
</script>

<template>
  <body v-if="reloadTheme">
    <Header :theme="theme" @changeTheme="changeTheme" id="header" />
    <RouterView :theme="theme" :products="products" />
  </body>
</template>