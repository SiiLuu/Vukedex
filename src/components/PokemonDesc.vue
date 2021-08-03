<template>
  <div class="pokemonDesc">
    <div class="imgContainer">
      <img
        v-lazy="
          `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageId}.png`
        "
      />
    </div>
    <div class="baseStats">
      <div class="baseStat">
        Base experience : <span>{{ desc.base_experience }}</span>
      </div>
      <div class="baseStat">
        Height : <span>{{ desc.height }}</span>
      </div>
      <div class="baseStat">
        Weight : <span>{{ desc.weight }}</span>
      </div>
    </div>
    <div class="stats">
      <div class="stat" v-for="(stat, index) in desc.stats" :key="index">
        <span>{{ stat.stat.name }}</span>
        <div class="slider">
          <div :style="`width: ${stat.base_stat}%`"></div>
        </div>
      </div>
    </div>
    <div class="list">
      <label>Types :</label>
      <span class="item" v-for="(type, index) in desc.types" :key="index">
        {{ type.type.name }}
      </span>
    </div>
    <div class="list">
      <label>Abilities :</label>
      <span
        class="item"
        v-for="(ability, index) in desc.abilities"
        :key="index"
      >
        {{ ability.ability.name }}
      </span>
    </div>
    <div class="list">
      <label>Versions :</label>
      <span
        class="item"
        v-for="(version, index) in desc.game_indices"
        :key="index"
      >
        {{ version.version.name }}
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PokemonDesc",

  props: {
    name: String
  },

  async setup(props) {
    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${props.name}`
    );

    const imageId =
      result.data.id < 10
        ? "00" + result.data.id
        : result.data.id < 100
        ? "0" + result.data.id
        : result.data.id;

    return { imageId, desc: result.data };
  }
};
</script>

<style lang="scss" scoped>
.pokemonDesc {
  .imgContainer {
    margin-top: 1.5rem;
    background-color: rgb(223, 217, 217);
    border-radius: 1rem;
    overflow: hidden;
    display: flex;

    img {
      width: 90%;
      margin: auto;
    }
  }

  .baseStats {
    margin-top: 0.75rem;
    margin-bottom: 2rem;
    font-weight: 600;
    display: flex;

    .baseStat {
      margin: auto;

      span {
        color: orangered;
      }
    }
  }

  .stats {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 600;

    .stat {
      display: flex;
      width: 100%;
      margin: 0.5rem auto;

      span {
        width: 40%;
        margin-left: 0;
        margin-right: auto;
        text-align: left;
      }

      .slider {
        width: 60%;
        background-color: rgb(223, 217, 217);
        border: rgb(170, 165, 165) solid 2px;
        border-radius: 1rem;
        overflow: hidden;

        div {
          background-color: gold;
          border-radius: 1rem;
          height: 100%;
        }
      }
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;

    label {
      margin: auto 0;
      margin-bottom: 0.5rem;
      font-weight: 600;
      padding: 0.25rem 0;
    }

    .item {
      background: rgb(223, 217, 217);
      padding: 0.25rem 0.75rem;
      border-radius: 0.5rem;
      margin: auto 0.25rem;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
