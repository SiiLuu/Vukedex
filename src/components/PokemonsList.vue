<template>
  <div class="pokemonsList">
    <PokemonCard
      v-for="(pokemon, index) in pokemons"
      :key="index"
      :id="index + 1"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import axios from "axios";
import PokemonCard from "@/components/PokemonCard.vue";

export default {
  name: "PokemonsList",
  components: { PokemonCard },

  async setup() {
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon");

    return { pokemons: result.data.results };
  }
};
</script>

<style lang="scss" scoped>
.pokemonsList {
  padding: 5% 5%;
  display: flex;
  flex-direction: column;
}
</style>
