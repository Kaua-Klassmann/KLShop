<script setup>
import { ref, defineProps, onBeforeMount } from "vue";
import axios from "axios";
import GridProductsWithCategory from "@/components/GridProductsWithCategory.vue";

const props = defineProps(["theme"]);

const theme = ref(props.theme);
const mostrarProdutos = ref(false);

const processors = ref();
const grapficCards = ref();

onBeforeMount(async () => {
  processors.value = await axios.get('processors').then(response => response.data);
  grapficCards.value = await axios.get('graphicCards').then(response => response.data);

  mostrarProdutos.value = true;
})
</script>

<template>
  <body :class="`text-bg-${theme}`">
    <GridProductsWithCategory :products="processors" :theme="theme" path="processor" v-if="mostrarProdutos">
      PROCESSADORES
    </GridProductsWithCategory>
    <GridProductsWithCategory :products="grapficCards" :theme="theme" path="graphicCard" v-if="mostrarProdutos">
      PLACA DE VIDEO
    </GridProductsWithCategory>
  </body>
</template>

<style scoped>
body {
  max-width: 100vw;
}
</style>
