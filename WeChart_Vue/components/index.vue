<template lang="html">
  <div class="">
     <top>
        <h3 slot="title">{{title}}</h3>
        <span class="top_btn" slot="icon">+</span>
     </top>
     <search></search>
     <middle></middle>
     <bottom></bottom>
  </div>
</template>

<script>
    import top from "./top.vue";
    import search from "./search.vue";
    import bottom from "./bottom.vue";
    import middle from "./index-middle.vue";
export default {
  data(){
    return{
        title:"微信"
    }
  },
    components:{
        top,
        search,
        bottom,
        middle
    }
}
</script>

<style lang="css" scoped>
.top_btn{
    text-decoration: none;
    display: inline-block;
    line-height: 45px;
    color: white;
    font-size: 3rem;
    position: absolute;
    right: 15px;
    top:0;
}
</style>
