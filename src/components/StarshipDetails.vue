<script setup>
defineProps({
  starship: {
    type: Object,
    required: true,
  },
});

const formatNumber = (num) => {
  if (!num) return "Unknown"; // Handle missing values
  return new Intl.NumberFormat().format(
    Number(num.toString().replace(/,/g, ""))
  );
};
</script>

<template>
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <td>{{ starship.name }}</td>
      </tr>
      <tr>
        <th>Model</th>
        <td>{{ starship.model }}</td>
      </tr>
      <tr>
        <th>Starship class</th>
        <td>{{ starship.starship_class }}</td>
      </tr>
      <tr>
        <th>Manufacturer</th>
        <td>{{ starship.manufacturer }}</td>
      </tr>
      <tr>
        <th>Cost</th>
        <td>{{ formatNumber(starship.cost_in_credits) }} CRED</td>
      </tr>
      <tr>
        <th>Length</th>
        <td>{{ formatNumber(starship.length) }} m</td>
      </tr>
      <tr>
        <th>Crew</th>
        <td>{{ formatNumber(starship.crew) }}</td>
      </tr>
      <tr>
        <th>Passengers</th>
        <td>{{ formatNumber(starship.passengers) }}</td>
      </tr>
      <tr>
        <th>Cargo capacity</th>
        <td>{{ formatNumber(starship.cargo_capacity) }} kg</td>
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
  font-weight: bold;
}
</style>
