<template lang="html">
    <div class="search-page-content text-center">
    <top>
        <h3 slot="title">{{title}}</h3>
    </top>
    <p>搜索指定内容</p>
        <div class="search-type">
            <span v-for="(item,index) in typeArr">{{item}}</span>
        </div>
    <p>小程序</p>
    <div class="search-logo">
            <img v-for="(logo,index) in logoArr" :src="logoArr[index]">...
        </div>
    </div>

</template>
<script>
    import top from "./top.vue"
    export default {
        data(){
            return {
                title:"搜索",
                 typeArr:["朋友圈","咨询","朋友圈","朋友圈","咨询","朋友圈"],
                logoArr:["../img/1.jpg","../img/1.jpg","../img/1.jpg","../img/1.jpg"]
            }
        },
        components:{
            top
        }
    }
</script>

<style lang="css" scoped>
p{
    margin-top: 30px;
    color: gray;
}
.search-type{
    height: 100px;
    color: green;
    margin-top: 20px;
}
    .search-type span{
        display: inline-block;
        width: 33%;
    }
    .search-logo img{
        width: 50px;
        height: 50px;
    }
</style>