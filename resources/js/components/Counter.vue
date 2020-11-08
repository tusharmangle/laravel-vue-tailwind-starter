<template>
  <div class="my-6">
    <div class="text-xl my-6 capitalize">clicked {{ count }} times...</div>
    <div class="text-red-600">
      <button
        class="bg-red-600 text-white py-2 px-5 text-xl font-semibold focus:outline-none rounded"
        @click="increment"
      >
        Increment
      </button>
    </div>
  </div>
  <div>
    <div v-for="(number, index) in numbers" :key="index">
      {{ number }}
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated } from "vue";
import { mapState, useStore } from "vuex";
export default {
  setup(props) {
    const store = useStore();
    const count = computed(() => store.state.counter.count);

    const increment = () => {
      store.commit("counter/increment");
    };

    const decrement = () => {
      store.commit("counter/decrement");
    };

    onMounted(() => {
      console.log("Counter Component Loaded");
    });

    onUpdated(() => {
      console.log("Updated State", store.state.counter);
    });

    return {
      count,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
