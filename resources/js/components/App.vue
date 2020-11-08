<template>
  <div class="flex flex-col">
    <Navbar></Navbar>
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { watch } from "vue";
import Navbar from "./Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("titles/setPageTitle", to.meta.title);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
