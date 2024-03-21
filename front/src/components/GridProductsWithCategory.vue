<script setup>
import { ref, defineProps } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["products", "theme", "path"]);

const products = ref(props.products);
const theme = ref(props.theme);
const path = ref(props.path);
</script>

<template>
  <h3 class="ps-3 pt-4 pb-0">
    <slot></slot>
  </h3>
  <div class="row px-3 pt-3">
    <RouterLink
      :to="`/${path}/${product.id}`"
      class="col-md-3 mb-4"
      :class="`text-bg-${theme}`"
      v-for="product in products"
      :key="product.nome"
    >
        <img
          :src="product.imagem"
          :alt="`Imagem ${product.nome}`"
          class="img-fluid rounded-3 mb-4"
        />
        <p>{{ product.nome }}</p>
        <p class="span mt-1 text-success">à vista</p>
        <b class="text-success"
          >R$
          {{
            (product.preco * 85 / 100).toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
            })
          }}</b
        >
        <p class="span mb-1">no PIX com 15% de desconto</p>
        <b class="text-danger">R$ {{ (product.preco * 1).toLocaleString("pt-BR") }}</b>
        <div class="d-flex gap-1">
          <p class="span">em até 12x de</p>
          <b class="text-danger"
            >R$
            {{
              (product.preco / 12).toLocaleString("pt-BR", {
                maximumFractionDigits: 2,
              })
            }}</b
          >
        </div>
    </RouterLink>
  </div>
</template>

<style scoped>
* {
  text-decoration: none;
}

.row,
p,
b {
  margin: 0;
}

.span {
  font-size: smaller;
}

b.text-success {
  font-size: x-large;
}

.d-flex {
  place-items: center;
}
</style>
