<template lang="html">
    <div class="middle">
    <ul>
        <li class="tool_list" v-for="(item,index) in tool_arr" >
        <div>
        <img :src="tool_img[index]" alt="tool_arr">
        <span>{{tool_arr[index]}}</span>
        <i class="glyphicon glyphicon-menu-right"></i>
        </div>
        </li>
    </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tool_img:[
                    "../img/tool_1.jpg" ,
                    "../img/tool_2.jpg" ,
                    "../img/tool_3.jpg" ,
                    "../img/tool_4.jpg" ,
                    "../img/tool_5.jpg" ,
                    "../img/tool_6.jpg"
                ],
                tool_arr:["钱包","收藏","相册","卡包","表情","设置"]
            }
        }
    }
</script>

<style lang="css" scoped>
    .middle{
        width: 100%;
        height: 65px;
        line-height: 40px;
        color:#000;
    }
    .tool_list{
        list-style-type: none;
        height:55px;
        padding-left: 15px;
        background: #ffffff;
    }
    .tool_list div{
            width: 100%;
            height: 55px;
            background: #ffffff;
            border-bottom: 1px solid #eeeeee;
        }
    .tool_list:first-child{
        margin: 17px 0;
    }
    .tool_list:last-child{
        margin: 17px 0;
    }

    .tool_list img{
        margin:10px 10px 10px 5px ;
        height: 35px;
        width: 30px;
    }
    .tool_list i{
        position: relative;
        left:225px;
        font-size: 20px;
        vertical-align: middle;
        opacity: .5;
      }
</style>