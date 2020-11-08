const state = {
    count: 1,
};

const mutations = {
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
};
