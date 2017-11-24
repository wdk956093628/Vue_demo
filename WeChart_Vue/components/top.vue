<template lang="html">
    <div class="home">
        <header class="home_head">
            <slot name="title"></slot>
            <router-link to="/index/dialog/" class="search_btn">
            <slot name="icon"></slot>
            </router-link>
            <router-view></router-view>
        </header>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isMask:false
        }
    }
}
</script>

<style lang="css" scoped="scoped">

    .home_head{
        width: 100vw;
        height: 45px;
        background: rgba(55,55,55,1);
        position: relative;
    }
    .home_head h3{
        margin: 0;
        color: white;
        font-size: 1.8rem;
        text-align: center;
        line-height: 45px;
    }
    .search_btn{
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
