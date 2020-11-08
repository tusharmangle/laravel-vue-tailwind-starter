<template>
  <div>
    <div class="my-5 text-xl capitalize" v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
import { computed, onBeforeMount, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    //   posts are loaded from init function
    const store = useStore();
    const posts = computed(() => store.state.post.posts);

    onMounted(() => {
      //   !posts.length && store.commit("post/fetchPosts");
    });

    return { posts };
  },
};
</script>

<style lang="scss" scoped>
</style>
