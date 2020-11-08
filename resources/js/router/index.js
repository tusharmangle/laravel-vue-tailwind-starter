import { createRouter, createWebHistory } from "vue-router";

// Views
import Home from "../pages/Home";
import Posts from "../pages/Posts";

// WebHistory
const history = createWebHistory();

const routes = [
    {
        path: "/",
        component: Home,
        name: "home",
        meta: {
            title: "Home",
        },
    },
    {
        path: "/posts",
        component: Posts,
        name: "posts",
        meta: {
            title: "Posts",
        },
    },
];

const router = createRouter({
    history,
    routes,
});

export default router;
