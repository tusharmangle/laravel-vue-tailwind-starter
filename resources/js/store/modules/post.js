const state = {
    loading: false,
    posts: [],
};

// const actions ={},

const mutations = {
    async fetchPosts(state) {
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((response) => {
                state.posts = response.data;
            })
            .catch((err) => console.log(err));
    },
};

export default {
    namespaced: true,
    state,
    // actions,
    mutations,
};
