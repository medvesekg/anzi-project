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
        <!-- I used formatNumber(), because the number looks better seperated with commas. If it's N/A or unknown it leaves it as it is-->
        <td>
          <span v-if="isNaN(Number(starship.cost_in_credits))">
            {{ starship.cost_in_credits }}
          </span>
          <span v-else>
            {{ formatNumber(starship.cost_in_credits) }} CRED
          </span>
        </td>
      </tr>
      <tr>
        <th>Length</th>
        <td>{{ starship.length }} m</td>
      </tr>
      <tr>
        <th>Crew</th>
        <td>{{ starship.crew }}</td>
      </tr>
      <tr>
        <th>Passengers</th>
        <td>{{ starship.passengers }}</td>
      </tr>
      <tr>
        <th>Cargo capacity</th>
        <td>{{ starship.cargo_capacity }} kg</td>
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
