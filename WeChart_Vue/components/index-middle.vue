<template lang="html">
    <div class="middle">
       <ul class="middle_list">
            <li class="middle_list_item col-xs-12" v-for="(item,index) in iconSrc">
                 <img :src="item" alt="textArr">
                 <div class="middle_list_text">
                        <span class="title">{{textArrTitle[index]}}</span>
                        <span class="content">{{textArrContent[index]}}</span>
                 </div>
            </li>
            <span class="dynamic"></span>
       </ul>
     </div>
</template>
<script>
    export default {
        data(){
            return {
                iconSrc:[
                    "../img/i6.png",
                    "../img/i2.png",
                    "../img/i1.png",
                    "../img/i4.png",
                    "../img/i3.png",
                    "../img/i5.png"
                ],
                textArrTitle:["腾讯新闻","微信运动","订阅号","family","QQ邮箱提醒","中国移动10086"],
                textArrContent:["腾讯新闻:每天为你呈现国内外要闻","[应用消息]","盗墓笔记:讲故事|盗墓笔记 重启","[99条] 万俟：谢谢老板！","SegmentFault 精选：每周精选 | WebGl...","重阳登高，999元话费等你拿！"],
            }
        }
    }
</script>

<style lang="css" scoped>
    .title{
        font-weight: bold;
    }
    .content{
        font-size: 12px;
        color: #666;
    }
    .middle{
        width: 100vw;
        overflow: hidden;
        background: white;
    }
    .middle_list{
        padding: 0;
    }
    .middle_list_item{
        padding-top: 5px;
        list-style-type: none;
        height: 60px;
        border-bottom: 1px solid #eee;
    }
    .middle_list_item img{
        vertical-align: middle;
        width: 50px;
        height: 50px;
    }
    .middle_list_text{
        display: inline-block;
        vertical-align: middle;
    }
    .middle_list_text span:first-child{
        display: block;
    }
</style>