<script setup>
import { useRoute } from "vue-router";
import { watch, ref } from "vue";
import axios from "axios";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import StarshipDetails from "@/components/StarshipDetails.vue";

const route = useRoute();
const loading = ref(false);
const starship = ref({});

watch(() => route.params.id, loadStarship, { immediate: true });

function loadStarship(id) {
  loading.value = true;
  axios
    .get(`https://swapi.dev/api/starships/${id}`)
    .then((response) => {
      starship.value = response?.data || {};
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
        <RouterLink to="/starships">
          <span class="pi pi-arrow-left back-button"></span>
        </RouterLink>
        {{ starship.name }}
      </h1>
      <div class="flex justify-center">
        <StarshipDetails :starship="starship" />
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
