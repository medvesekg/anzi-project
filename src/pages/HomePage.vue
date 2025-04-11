<script setup>
import { Card, Button } from "primevue";
</script>
<template>
  <div class="home">
    <div class="title">
      <h1>Star Wars</h1>
    </div>
    <div class="obi-wan-hello">
      <p>Hello there!</p>
    </div>
    <div class="categories">
      <Card
        class="category-card transition-transform hover:scale-105 shadow-2xl"
        style="width: 25rem; overflow: hidden"
      >
        <template #header>
          <img
            alt="Characters"
            src="/img/StarWarsCharacters.jpg"
            class="w-full h-60 object-cover"
          />
        </template>
        <template #title>Characters</template>
        <template #content>
          <p class="m-0 mt-3">
            By clicking on the explore button on this card you can explore
            characters in the Star Wars universe
          </p>
        </template>
        <template #footer>
          <RouterLink to="/characters" class="w-full">
            <Button
              label="Explore"
              icon="pi pi-users"
              severity="primary"
              outlined
              class="w-full"
            />
          </RouterLink>
        </template>
      </Card>

      <Card
        class="category-card transition-transform hover:scale-105 shadow-2xl"
        style="width: 25rem; overflow: hidden"
      >
        <template #header>
          <img
            alt="Ships"
            src="/img/StarWarsSpaceShips.jpg"
            class="w-full h-60 object-cover"
          />
        </template>
        <template #title>Ships</template>
        <template #content>
          <p class="m-0 mt-3">
            By clicking on the explore button on this card you can explore ships
            in the Star Wars universe
          </p>
        </template>
        <template #footer>
          <RouterLink to="/ships" class="w-full">
            <Button
              label="Explore"
              icon="pi pi-send"
              severity="primary"
              outlined
              class="w-full"
            />
          </RouterLink>
        </template>
      </Card>

      <Card
        class="category-card transition-transform hover:scale-105 shadow-2xl"
        style="width: 25rem; overflow: hidden"
      >
        <template #header>
          <img
            alt="Planets"
            src="/img/StarWarsPlanets.jpg"
            class="w-full h-60 object-cover"
          />
        </template>
        <template #title>Planets</template>
        <template #content>
          <p class="m-0 mt-3">
            By clicking on the explore button on this card you can explore
            planets in the Star Wars universe
          </p>
        </template>
        <template #footer>
          <RouterLink to="/planets" class="w-full">
            <Button
              label="Explore"
              icon="pi pi-globe"
              severity="primary"
              outlined
              class="w-full"
            />
          </RouterLink>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
h1 {
  display: inline-block;
  font-size: 100px;
  color: black;
  background-color: gold;
  width: 500px;
  margin-bottom: 50px;
}
p {
  display: inline-block;
  font-size: 30px;
  margin-bottom: 20px;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px;
  margin: 10px;
}
.categories {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  max-width: 100%;
}

@media (max-width: 768px) {
  .categories {
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: clamp(40px, 10vw, 100px);
    padding: 10px;
    text-align: center;
    width: auto;
  }
  p {
    font-size: clamp(10px, 10vw, 20px);
    width: auto;
  }
}
</style>
