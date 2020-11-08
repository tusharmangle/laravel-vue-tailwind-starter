import { createStore } from "vuex";

import counter from "./modules/counter";
import post from "./modules/post";
import titles from "./modules/titles";

const store = createStore({
    modules: {
        counter,
        post,
        titles,
    },
});

export default store;
