import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "KLShop",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("@/views/Cart.vue"),
    },
    {
      path: "/favorites",
      name: "Favorites",
      component: () => import("@/views/Favorites.vue"),
    },
    {
      path: "/build",
      name: "Build",
      component: () => import("@/views/Build.vue")
    },
    {
      path: "/:categoria/:id",
      name: ":categoria",
      component: () => import("@/views/Product.vue")
    }
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
