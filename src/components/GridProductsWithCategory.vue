<script setup>
import { ref, defineProps, computed } from "vue";

const props = defineProps(["products", "category"]);

const category = props.category;
const productsProps = props.products[category];

const products = ref([])

const categories = computed(() => {
  if(category.value == 'processador') {
    return ['Intel', 'AMD']
  }

  return ['Intel', 'AMD']
})

for(const cat of categories.value) {
  for(const p of productsProps[cat]) {
    products.value.push(p)
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

products.value = shuffleArray(products.value)
</script>

<template>
  <h3 class="pb-3 ps-3 pt-5">
    <slot></slot>
  </h3>
  <div class="row p-3">
    <section
      class="col-md-3 mb-4"
      v-for="product in products.slice(0, 4)"
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
        <b class="text-danger">R$ {{ product.preco.toLocaleString("pt-BR") }}</b>
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
