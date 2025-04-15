<script setup>
import { ref, onMounted } from "vue";
import axios from "@/plugins/axios";

const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
});

const loading = ref(false);
const planet = ref({});
const planetId = extractId(props.character.homeworld);

function extractId(url) {
  if (!url) return null;
  const idParts = url.split("/").filter(Boolean);
  return idParts[idParts.length - 1];
}

function loadPlanet(id) {
  loading.value = true;
  axios
    .get(`planets/${id}`)
    .then((response) => {
      planet.value = response?.data || {};
    })
    .finally(() => {
      loading.value = false;
    });
}

onMounted(() => {
  if (planetId) {
    loadPlanet(planetId);
  }
});
</script>
<template>
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <td>{{ character.name }}</td>
      </tr>
      <tr>
        <th>Height</th>
        <td>{{ character.height }}cm</td>
      </tr>
      <tr>
        <th>Mass</th>
        <td>{{ character.mass }} kg</td>
      </tr>
      <tr>
        <th>Birth year</th>
        <td>{{ character.birth_year }}</td>
      </tr>
      <tr>
        <th>Gender</th>
        <td>{{ character.gender }}</td>
      </tr>
      <tr>
        <th>Homeworld:</th>
        <td>
          <RouterLink
            :to="`/planets/${planetId}`"
            class="text-blue-600 underline"
          >
            {{ planet.name }}
          </RouterLink>
        </td>
      </tr>
      <tr>
        <th>Eye color</th>
        <td>{{ character.eye_color }}</td>
      </tr>
      <tr>
        <th>Hair color</th>
        <td>{{ character.hair_color }}</td>
      </tr>
      <tr>
        <th>Skin color</th>
        <td>{{ character.skin_color }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
td {
  text-align: left;
  padding: 5px 10px;
}
th {
  font-style: bold;
}
</style>
