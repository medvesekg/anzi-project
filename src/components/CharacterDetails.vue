<script setup>
defineProps({
  character: {
    type: Object,
    required: true,
  },
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
        <td>100 kg</td>
      </tr>
      <tr>
        <th>Birth year</th>
        <td>{{ character.birth_year }}</td>
      </tr>
      <tr>
        <th>Gender</th>
        <td>{{ character.gender }}</td>
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
