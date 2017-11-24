<template lang="html">
    <div class="content">
        <top><h3 slot="title">{{title}}</h3></top>
        <info></info>
        <middle></middle>
        <bottom></bottom>
    </div>
</template>

<script>
    import top from "./top.vue";
    import info from "./mine-info.vue";
    import middle from "./mine-content.vue";
    import bottom from "./bottom.vue";
    export default {
        data(){
            return {
                title:"我",
                arr:[1,2,3]
            }
        },
        components:{
            top,
            info,
            middle,
            bottom
        },

    }
</script>

<style lang="css" >
    *{
        margin: 0;
        padding: 0;
        font-family: "微软雅黑";
    }
    .content{
        width: 100vw;
        height: 100vh;
        background: #eeeeee;
    }
</style>