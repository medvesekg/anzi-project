import { createRouter, createWebHistory } from "vue-router";
import CharactersListPage from "@/pages/CharactersListPage.vue";
import CharacterDetailsPage from "@/pages/CharacterDetailsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CharactersListPage,
    },
    {
      path: "/characters/:id",
      name: "character-details",
      component: CharacterDetailsPage,
    },
  ],
});

export default router;
