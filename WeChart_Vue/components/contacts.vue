<template lang="html">
  <div class="contacts">
     <top>
        <h3 slot="title">{{title}}</h3>
        <i slot="icon" class="glyphicon glyphicon-user top_icon"></i>
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
                title:"通讯录",
                tool_img:[
                    "../img/c1.png" ,
                    "../img/c2.png" ,
                    "../img/c3.png" ,
                    "../img/c4.png" ,
                    "../img/c5.png" ,
                    "../img/c6.jpg" ,
                    "../img/c7.jpg" ,
                    "../img/c8.jpg" ,
                ],
                tool_arr:["新的朋友","群聊","标签","公众号","五五开","卢本伟","white"]
            }
        },
        components:{
            top,
            bottom
        }
    }
</script>

<style lang="css" scoped>
    .top_icon{
        color: #fff;
        font-size: 18px;
    }
    .contacts{
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
    /*.tool_list:first-child{*/
        /*margin: 17px 0;*/
    /*}*/
    /*.tool_list:last-child{*/
        /*margin: 17px 0;*/
    /*}*/
    .tool_list:nth-child(5n-0){
        margin-top: 17px;
    }

    .tool_list img{
        height: 45px;
        width: 45px;
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