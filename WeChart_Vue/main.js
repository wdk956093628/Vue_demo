import Vue from "vue";
import "./bower_components/bootstrap/dist/css/bootstrap.min.css";

import Router from "vue-router";

Vue.use(Router);

import {routes} from "./router";

let router = new Router({
    routes
});


let vm = new Vue({

    router

});

vm.$mount("#vm");