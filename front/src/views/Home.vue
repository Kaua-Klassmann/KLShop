<script setup>
import { ref, defineProps, onBeforeMount } from "vue";
import axios from "axios";
import GridProductsWithCategory from "@/components/GridProductsWithCategory.vue";

const props = defineProps(["theme"]);

const theme = ref(props.theme);
const mostrarProdutos = ref(false);

const products = ref();

onBeforeMount(async () => {
  products.value = await axios.get('processors').then(response => response.data);

  mostrarProdutos.value = true;
})
</script>

<template>
  <body :class="`text-bg-${theme}`">
    <GridProductsWithCategory :products="products" v-if="mostrarProdutos">
      PROCESSADORES
    </GridProductsWithCategory>
  </body>
</template>

<style scoped>
body {
  max-width: 100vw;
}
</style>
