import { createRouter, createWebHistory } from "vue-router";
import CharactersListPage from "@/pages/CharactersListPage.vue";
import CharacterDetailsPage from "@/pages/CharacterDetailsPage.vue";
import PlanetsListPage from "@/pages/PlanetsListPage.vue";
import PlanetDetailsPage from "@/pages/PlanetDetailsPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ShipsListPage from "@/pages/ShipsListPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/characters",
      name: "character-list",
      component: CharactersListPage,
    },
    {
      path: "/characters/:id",
      name: "character-details",
      component: CharacterDetailsPage,
    },
    {
      path: "/planets",
      name: "planets-list",
      component: PlanetsListPage,
    },
    {
      path: "/planets/:id",
      name: "planet-details",
      component: PlanetDetailsPage,
    },
    /*
    {
      path: "/ships",
      name: "ships-list",
      component: ShipsListPage,
    },
    {
      path: "/ships/:id",
      name: "ships-details",
      component: ShipsDetailsPge,
    },
    */
  ],
});

export default router;
