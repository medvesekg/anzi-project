<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { Column, DataTable } from "primevue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const characters = ref([]);
const total = ref(0);
const loading = ref(false);
const page = ref(1);

watch(page, loadCharacters, {
  immediate: true,
});

function loadCharacters(page) {
  loading.value = true;
  axios
    .get(`https://swapi.dev/api/planets?page=${page}`)
    .then((response) => {
      characters.value = response?.data?.results || [];
      total.value = response?.data?.count || 0;
    })
    .finally(() => {
      loading.value = false;
    });
}

function onPageChange(e) {
  page.value = e.page + 1;
}

function extractId(url) {
  return url
    .split("/")
    .filter((part) => part)
    .pop();
}
</script>

<template>
  <DefaultLayout>
    <h1 class="text-center text-4xl font-thin mt-5 mb-10">Planets</h1>
    <DataTable
      :value="characters"
      :loading="loading"
      :paginator="true"
      :total-records="total"
      :rows="10"
      :lazy="true"
      @page="onPageChange"
    >
      <Column field="name" header="Name">
        <template #body="{ data }">
          <RouterLink
            :to="`/planets/${extractId(data.url)}`"
            class="text-blue-600 underline"
            >{{ data.name }}</RouterLink
          >
        </template>
      </Column>
      <Column field="climate" header="Climate" />
      <Column field="terrain" header="Terrain" />
    </DataTable>
  </DefaultLayout>
</template>
