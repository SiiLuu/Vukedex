<template>
  <div class="pokemonCard" @click="onCardClick(pokemon.name)">
    <div>
      <img
        v-lazy="
          `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageId}.png`
        "
      />
    </div>
    <h2>Number {{ id }}</h2>
    <h1>{{ pokemon.name }}</h1>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "PokemonCard",

  props: {
    id: Number,
    pokemon: Object
  },

  setup(props) {
    const router = useRouter();

    const imageId =
      props.id < 10
        ? "00" + props.id
        : props.id < 100
        ? "0" + props.id
        : props.id;

    function onCardClick(name) {
      router.push(`/${name}`);
    }

    return { imageId, onCardClick };
  }
};
</script>

<style lang="scss" scoped>
.pokemonCard {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0rem 1rem 1rem rgb(197, 189, 189);
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding: 1.25rem;
  text-align: left;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  transform: translateY(-10px);

  div {
    background-color: rgb(223, 217, 217);
    border-radius: 1rem;
    overflow: hidden;
    display: flex;

    img {
      width: 90%;
      margin: auto;
    }
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    margin-top: 0.75rem;
    color: gray;
    font-size: 0.8rem;
  }
}
</style>
