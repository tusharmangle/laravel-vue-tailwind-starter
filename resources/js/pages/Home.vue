<template>
  <div class="my-5 text-2xl">Counter Component</div>
  <Counter></Counter>
</template>

<script>
import Counter from "../components/Counter";
export default {
  name: "Home",
  components: {
    Counter,
  },
};
</script>

<style lang="scss" scoped>
</style>
