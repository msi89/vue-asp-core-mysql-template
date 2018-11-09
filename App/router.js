import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/products",
      name: "products",
      component: () => import("./views/Product.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/users",
      name: "users",
      component: () => import("./views/Users/List.vue")
    },
    {
      path: "/users/create",
      name: "users_create",
      component: () => import("./views/Users/Form.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/Test.vue")
    }
  ]
});
