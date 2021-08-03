<template>
  <div class="Pokemon">
    <router-link class="backToMenu" to="/">
      <i class="fas fa-angle-left"></i>
    </router-link>
    <h1>
      {{
        route.params.name.charAt(0).toUpperCase() + route.params.name.slice(1)
      }}
    </h1>
    <Suspense>
      <template #default>
        <PokemonDesc :name="route.params.name" />
      </template>
      <template #fallback> Loading ... </template>
    </Suspense>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import PokemonDesc from "@/components/PokemonDesc.vue";

export default {
  name: "Pokemon",
  components: { PokemonDesc },

  setup() {
    const route = useRoute();
    return { route };
  }
};
</script>

<style lang="scss" scoped>
.Pokemon {
  padding: 5% 5%;
  position: relative;

  .backToMenu {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 5%;
    margin-left: 5%;
    font-size: 2em;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
}
</style>
