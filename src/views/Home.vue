<script setup>
import { ref, defineProps } from "vue";
import GridProductsWithCategory from "@/components/GridProductsWithCategory.vue";

const props = defineProps(["theme", "products"]);

const theme = ref(props.theme);
const products = ref(props.products);
</script>

<template>
  <body :class="`text-bg-${theme}`">
    <GridProductsWithCategory :products="products" category="processador">
      PROCESSADORES
    </GridProductsWithCategory>
  </body>
</template>

<style scoped>
body {
  max-width: 100vw;
}
</style>
