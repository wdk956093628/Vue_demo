<template lang="html">
  <div class="find">
     <top>
        <h3 slot="title">{{title}}</h3>
     </top>
     <bottom></bottom>
     <div class="middle">
        <ul class="find_item">
            <li class="tool_list" v-for="(item,index) in tool_arr" >
            <div>
            <img :src="tool_img[index]" alt="tool_arr">
            <span>{{tool_arr[index]}}</span>
            <i class="glyphicon glyphicon-menu-right"></i>
            </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
    import top from "./top.vue";
    import bottom from "./bottom.vue";
    export default {
        data(){
            return{
                title:"发现",
                tool_img:[
                    "../img/f1.png" ,
                    "../img/f2.png" ,
                    "../img/f3.png" ,
                    "../img/f4.png" ,
                    "../img/f5.png" ,
                    "../img/f6.png" ,
                    "../img/f7.png" ,
                    "../img/f8.png" ,

                ],
                tool_arr:["朋友圈","扫一扫","摇一摇","附近的人","漂流瓶","购物","游戏","小程序"]
            }
        },
        components:{
            top,
            bottom
        }
    }
</script>

<style lang="css" scoped>
    .find{
        width: 100vw;
        height: 100vh;
        background: #eee;
    }
    .middle{

    }
    .tool_list{
        position: relative;
        padding-left: 15px;
        background: #fff;
        border-bottom: 1px solid #eeeeee;
    }
    .find_item{
        padding: 0;
        list-style-type: none;
    }
    .tool_list div{
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        height: 55px;
    }
    .tool_list:first-child{
        margin: 17px 0;
    }
    .tool_list:last-child{
        margin: 17px 0;
    }
    .tool_list:nth-child(2n+2){
        margin-top: 17px;
    }

    .tool_list img{
        height: 42px;
        width: 42px;
        margin-right: 10px;
        vertical-align: middle;
    }
    .tool_list i{
        position: absolute;
        right: 20px;
        top:30%;
        font-size: 20px;
        opacity: .3;
    }
</style>
