<template lang="html">
    <div class="content">
        <_head>
          <span slot="btn" class="btn" @click="checked"><i class="glyphicon glyphicon-th-list"></i></span>
        </_head>
        <goods ref="goods" :changeName="newList"></goods>
    </div>
</template>

<script>
import _head from "./head.vue";
import goods from "./content.vue";
export default {
    data(){
        return {
          flag:false,
          newList:"list"
        }
    },
    methods:{
        checked(){
          this.$refs.goods.isShow=!this.$refs.goods.isShow;
          if(this.newList=="list"){
            this.newList="new_list";
          }else{
            this.newList="list";
          }
        }
    },
    components:{
        _head,
        goods
    }
}
</script>

<style lang="css" scoped>
</style>
