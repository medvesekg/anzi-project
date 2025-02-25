<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import axios from "axios";
import { ref, watch } from "vue";
import { Column, DataTable } from "primevue";

const starships = ref([]);
const total = ref(0);
const loading = ref(false);
const page = ref(1);

watch(page, loadShips, { immediate: true });

function loadShips(page) {
  loading.value = true;
  axios
    .get(`https://swapi.dev/api/starships/?page=${page}`)
    .then((response) => {
      starships.value = response?.data?.results || [];
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
    <h1 class="text-center text-4xl font-thin mt-5 mb-10">Starships</h1>
    <DataTable
      :value="starships"
      :loading="loading"
      :paginator="true"
      :total-records="total"
      :rows="10"
      :lazy="true"
      @page="onPageChange"
    >
      <Column field="name" header="Name"
        ><template #body="{ data }">
          <RouterLink
            class="text-blue-600 underline"
            :to="`/starships/${extractId(data.url)}`"
            >{{ data.name }}
          </RouterLink>
        </template>
      </Column>
      <Column field="model" header="Model" />
      <Column field="starship_class" header="Starship Class" />
    </DataTable>
  </DefaultLayout>
</template>
