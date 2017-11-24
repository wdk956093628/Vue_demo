<template lang="html">
    <div class="bottom">
        <router-link :to="toLink[index]"  class="nav_foot_item " v-for="(item,index) in arr" key="item">
            <div @click="change_menu(index)" style="width: 100%;">
                <img class="nav_foot_icon " :src="img_arr[index]" alt="">
                <span ref="menu_text" class="nav_foot_text">{{item.text}}</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                arr:[
                    {text:"微信"}, {text:"通讯录"}, {text:"发现"}, {text:"我"}
                ],
                img_arr:[
                    "../img/icon_1.jpg",
                    "../img/icon_2.jpg",
                    "../img/icon_3.jpg",
                    "../img/icon_4.jpg"
                ],
                toLink:["/","/contacts","/find","/mine"],
                changeColor:"menu_on"
            }
        },
        methods:{
            change_menu(index){
                this.$refs.menu_text[index].className="menu_on nav_foot_text";
            }
        }
    }
</script>

<style lang="css" scoped>
    .menu_on{
        color: #45c018;
    }
    .bottom{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        color: #adadad;
        background: #ffffff;
        padding-top: 1px;
        border-top: 1px solid gainsboro;
    }
    .nav_foot_icon{
        text-decoration: none;
        width: 25vw;
        display: inline-block;
        text-align: center;
        overflow: hidden;
        color: #7c7c7c;
    }
    .nav_foot_item{
        text-decoration: none;
        width: 25vw;
        display: inline-block;
        text-align: center;
        overflow: hidden;
        color: #adadad;
    }
    .nav_foot_text{
        margin: auto;
        display: block;
        font-size: 13px;

    }
</style>