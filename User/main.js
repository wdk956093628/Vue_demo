import Vue from "vue";
import root from "./template/root.vue";
import "./bower_components/bootstrap/dist/css/bootstrap.min.css";
import "./bower_components/animate.css";

Vue.filter("toSex",function(val){
  return +val===0?"男":"女";
});

const vm =new Vue({
    el:"#app",
    render:h=>h(root)
})
