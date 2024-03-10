<script setup>
import { defineProps, ref, watch } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";

const props = defineProps(["theme"]);
const route = useRoute();
const router = useRouter();

watch(route, () => {
  closeMenu();
});

const menu = ref(false);

function openMenu() {
  menu.value = true;
}

function closeMenu() {
  menu.value = false;
}

function goToHome() {
  router.push("/");
}

const search = ref(sessionStorage.getItem("search") || "");

watch(search, () => {
  sessionStorage.setItem("search", search.value);
});

function focusSearch() {
  document.querySelector("#inputSearch").focus();
}

const theme = props.theme;

function goToFavorites() {
  router.push("/favorites");
}

function goToCart() {
  router.push("/cart");
}
</script>

<template>
  <header class="navbar border-bottom" :class="`text-bg-${theme}`">
    <span @click="openMenu" class="mx-3 ms-xxl-5 me-xxl-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </span>
    <h3 @click="goToHome" id="logo" class="ps-1 pe-4 my-3">KLShop</h3>
    <div class="divSearch my-3">
      <input
        type="text"
        id="inputSearch"
        class="form-control"
        placeholder="Search"
        v-model="search"
      />
      <svg
        @click="focusSearch"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="text-dark bi bi-search"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
        />
      </svg>
    </div>
    <div class="ms-auto">
      <svg
        @click="$emit('changeTheme')"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="me-3 bi bi-brightness-high"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
        />
      </svg>
      <svg
        @click="goToFavorites"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="me-3 bi bi-heart"
        viewBox="0 0 16 16"
      >
        <path
          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
        />
      </svg>
      <svg
        @click="goToCart"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="me-3 bi bi-cart2"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
        />
      </svg>
    </div>
    <!-- MENU IN LEFT-->
    <main class="d-flex" v-if="menu">
      <div
        id="menu"
        class="border-end"
        :class="`text-bg-${theme}`, { 'border-dark': theme == 'light' }"
      >
      <!-- :class="`text-bg-${theme}`, { 'border-dark': theme == 'light' }" -->
        <h2 @click="goToHome" class="p-3">KLShop</h2>
        <div>
          <h6 class="px-2">Categorias</h6>
          <details class="px-3">
            <summary>HARDWARE</summary>
            <details class="row m-2">
              <summary>Processador</summary>
              <RouterLink
                to="/hardware/processador/intel"
                :class="`text-bg-${theme}`"
                class="link m-2 mb-0"
                >Intel</RouterLink
              >
              <RouterLink
                to="/hardware/processador/amd"
                :class="`text-bg-${theme}`"
                class="link m-2"
                >AMD</RouterLink
              >
            </details>
          </details>
        </div>
      </div>
      <div @click="closeMenu" id="rightFromMenu"></div>
    </main>
  </header>
</template>

<style scoped>
header {
  font-size: 16px;
  padding: 0;
}

svg,
#logo,
#menu > h2 {
  cursor: pointer;
}

main {
  width: 100vw;
  margin: 0;
  position: absolute;
  top: 0;
  z-index: 1;
}

#menu {
  height: 100vh;
  width: 300px;
  max-width: 80vw;
  overflow-y: scroll;
}

#rightFromMenu {
  width: calc(100vw - 300px);
}

.link {
  text-decoration: none;
}

#logo {
  display: none;
}

.divSearch {
  width: 45vw;
  display: flex;
  place-items: center;
}

.divSearch > svg {
  position: relative;
  right: 2rem;
}

@media (min-width: 605px) {
  #logo {
    display: block;
  }

  .divSearch {
    width: 50vw;
  }
}

@media (min-width: 1201px) {
  .divSearch {
    width: 40vw;
  }
}
</style>
