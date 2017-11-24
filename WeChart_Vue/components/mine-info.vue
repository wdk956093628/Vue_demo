<template lang="html">
    <div class="info">
        <div class="info_left">
             <img class="head_img" src="../img/head1.jpg" alt="头像">
            <div class="info_left_content">
                <span class="info_left_name">{{name}}</span>
                <br>
                <span class="info_left_num">微信号：{{id}}</span>

            </div>
        </div>
        <div class="info_qrcode">
    <img src="../img/qr.png" alt="二维码">
   <i class="glyphicon glyphicon-menu-right"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name:"万端康",
                id:"cazia520"
            }
        }
    }
</script>

<style lang="css" scoped>
    .head_img{
      width: 60px;
      height: 60px;
      background-size: cover;
    }
    .info{
        width: 100vw;
        height: 90px;
        margin-top: 15px;
        background-color: #fff;
        border-top: 1px solid #DFDFDF;
        border-bottom: 1px solid #DFDFDF;
    }
    h3{
        line-height: 70px;
        text-align: center;
    }
    .info_left{
        width: 70vw;
        height: 90px;
        float: left;
        background: #ffffff;
    }
    .info_qrcode{
        width: 30vw;
        height: 90px;
        float: left;
        background:#ffffff;
        line-height: 90px;
        vertical-align: middle;
    }
    .info_qrcode img{
        height: 30px;
        width: 30px;
        margin: 0 5px 0 20px;
        vertical-align: middle;
    } .info_qrcode i{

        font-size: 20px;
        vertical-align: middle;
        opacity: .5;
      }
    .info_left img{
        margin: 15px;
        vertical-align: middle;
    }

    .info_left_content{
        display: inline-block;
        vertical-align: middle;
    }
    .info_left_name{
        font-size: 16px;
        font-weight:bold;
    }
    .info_left_num{
        line-height: 40px;
        font-size: 14px;
    }
</style>
