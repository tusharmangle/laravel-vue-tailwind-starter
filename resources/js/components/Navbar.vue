<template>
  <div class="bg-blue-500 py-4">
    <div class="max-w-6xl font-semibold text-white mx-auto space-x-5">
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
</style>
