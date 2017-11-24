<template lang="html">
  <div class="">
   <router-link to="/search" class="home_search">
            <div class="search_group">
                 <span class="search_ico_search glyphicon glyphicon-search"></span>
                 <span class="search_tit">搜索</span>
                 <span class="search_ico_voice glyphicon glyphicon-record"></span>
            </div>
        </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="css" scoped>
    .home_search{
        cursor: default;
        display: inline-block;
        height: 50px;
        width: 100vw;
        padding: 10px;
        color: rgba(0,0,0,.5);
        box-sizing: border-box;
        background: rgba(233, 233, 233, 1);
        position: relative;
    }
    .search_group{
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        border: .5px solid rgba(0,0,0,.2);
        background: #fff;
        text-align: center;
    }
    .search_group span{
        display: inline-block;
    }
    .search_ico_voice{
        position: absolute;
        right:20px;
        top: 18px;
    }
</style>
