import store from "../store";

const init = () => {
    store.commit("post/fetchPosts");
};

export default init;
