<script setup></script>
<template>
  <div class="home">
    <div class="title">
      <h1>Star Wars</h1>
    </div>
    <div class="obi-wan-hello">
      <p>Hello there!</p>
    </div>
    <div class="categories">
      <div class="category-card">
        <img
          src="/img/StarWarsCharacters.jpg"
          alt="Heroes, villains and other characters"
        />
        <h2>Characters</h2>
        <RouterLink to="/characters">
          <button>explore the galaxy</button>
        </RouterLink>
      </div>
      <div class="category-card">
        <img
          src="/img/StarWarsPlanets.jpg"
          alt="Planets in Star Wars galaxies"
        />
        <h2>Planets</h2>
        <RouterLink to="/planets">
          <button>explore the galaxy</button>
        </RouterLink>
      </div>
      <div class="category-card">
        <img src="/img/StarWarsSpaceShips.jpg" alt="Space ships" />
        <!-- <img :src="require('@/img/StarWarsSpaceShips.jpg')" alt="Space ships" /> -->
        <h2>Ships</h2>
        <RouterLink to="/ships">
          <button>explore the galaxy</button>
        </RouterLink>
      </div>
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
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: 95%;
  max-width: 400px;
  min-width: 280px;
  width: 30%;
  padding: 10px;
  /*cursor: pointer;*/
  border: 1px solid #ccc;
  border-radius: 20px;
}
.category-card img {
  border: 2px black solid;
  border-radius: 40%;
  width: 100%;
  height: 200px;
  margin-bottom: 15px;
}
button {
  cursor: pointer;
  border: 3px solid black;
  padding: 10px;
  margin-top: 30px;
  border-radius: 30px;
}
button:hover {
  color: black;
  background-color: gold;
  transition-duration: 1s;
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
