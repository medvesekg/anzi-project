<script setup>
defineProps({
  planet: {
    type: Object,
    required: true,
  },
});
const locale = navigator.language;
</script>
<template>
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <td>{{ planet.name }}</td>
      </tr>
      <tr>
        <th>Rotation period</th>
        <td>{{ planet.rotation_period }} hours</td>
      </tr>
      <tr>
        <th>Orbital period</th>
        <td>{{ planet.orbital_period }} days</td>
      </tr>
      <tr>
        <th>Diameter</th>
        <td>{{ planet.diameter }} km</td>
      </tr>
      <tr>
        <th>Climate</th>
        <td>{{ planet.climate }}</td>
      </tr>
      <tr>
        <th>Gravity</th>
        <td>{{ planet.gravity }}</td>
      </tr>
      <tr>
        <th>Terrain</th>
        <td>{{ planet.terrain }}</td>
      </tr>
      <tr>
        <th>Surface water</th>
        <td>{{ planet.surface_water }}</td>
      </tr>
      <tr>
        <th>Population</th>
        <td>
          {{ new Intl.NumberFormat(locale).format(planet.population) }}
        </td>
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
