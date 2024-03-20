<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["products"]);

const products = ref(props.products)
</script>

<template>
  <h3 class="ps-3 pt-5">
    <slot></slot>
  </h3>
  <div class="row p-3">
    <section
      class="col-md-3 mb-4"
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
    </section>
  </div>
</template>

<style scoped>
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
