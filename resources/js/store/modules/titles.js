const state = {
    title: "Welcome",
};
const getters = {
    pageTitle: (state) => {
        return state.title;
    },
};
const actions = {
    setPageTitle({ commit }, title) {
        commit("setTitle", title);
    },
};
const mutations = {
    setTitle(state, title) {
        state.title = title;
        if (title === undefined) {
            state.title = "Focus";
        }
        document.title = state.title;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
