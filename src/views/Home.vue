<template>
  <div class="home">
    <h1>Vukedex</h1>
    <Suspense>
      <template #default>
        <PokemonsList />
      </template>
      <template #fallback> Loading ... </template>
    </Suspense>
  </div>
</template>

<script>
import PokemonsList from "@/components/PokemonsList.vue";

export default {
  name: "Home",
  components: { PokemonsList }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 5% 5%;
}
</style>
