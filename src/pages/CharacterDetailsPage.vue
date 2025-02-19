<script setup>
import { useRoute } from "vue-router";
import { watch, ref } from "vue";
import axios from "axios";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CharacterDetails from "@/components/CharacterDetails.vue";

const route = useRoute();
const loading = ref(false);
const character = ref({});

watch(() => route.params.id, loadCharacter, { immediate: true });

function loadCharacter(id) {
  loading.value = true;
  axios
    .get(`https://swapi.dev/api/people/${id}`)
    .then((response) => {
      character.value = response?.data || {};
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
        <RouterLink to="/">
          <span class="pi pi-arrow-left back-button"></span>
        </RouterLink>
        {{ character.name }}
      </h1>
      <div class="flex justify-center">
        <CharacterDetails :character="character" />
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
