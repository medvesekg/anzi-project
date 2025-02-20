<script setup>
import { useRoute } from "vue-router";
import { watch, ref } from "vue";
import axios from "axios";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PlanetDetails from "@/components/PlanetDetails.vue";

const route = useRoute();
const loading = ref(false);
const planet = ref({});

watch(() => route.params.id, loadPlanet, { immediate: true });

function loadPlanet(id) {
  loading.value = true;
  axios
    .get(`https://swapi.dev/api/planets/${id}`)
    .then((response) => {
      planet.value = response?.data || {};
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
<template>
  <DefaultLayout>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1 class="text-center text-4xl font-thin mt-5 mb-10 relative">
        <RouterLink to="/planets">
          <span class="pi pi-arrow-left back-button"></span>
        </RouterLink>
        {{ planet.name }}
      </h1>
      <div class="flex justify-center">
        <PlanetDetails :planet="planet" />
      </div>
    </div>
  </DefaultLayout>
</template>
<style scoped>
.header {
  position: relative;
}
.back-button {
  position: absolute;
  left: 0;
  top: 10px;
}
</style>
