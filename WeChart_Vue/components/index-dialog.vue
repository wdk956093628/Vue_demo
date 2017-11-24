<template lang="html">
    <div class="">
        <div class="dialog">
            <ul>
                <li v-for="(item,index) in item_arr.tit">
                    <span :class="[item_arr.ico[index],'btn_ico']"></span>
                     <span class="btn_tit">{{item_arr.tit[index]}}</span>
                </li>
            </ul>
        </div>
        <router-link to="/" class="mask"></router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            item_arr:{
                ico:["glyphicon glyphicon-user","glyphicon glyphicon-plus","glyphicon glyphicon-qrcode","glyphicon glyphicon-barcode"],
                tit:["发起群聊","添加朋友","扫一扫","收付款"]
            }
        }
    }
}
</script>

<style lang="css" scoped="scoped">
.dialog{
    display: inline-block;
    width: auto;
    height: auto;
    color: white;
    background: rgb(55,55,55);
    position: absolute;
    top: 55px;
    right: 5px;
    z-index: 999;
    border-radius: 3px;
}
.dialog::before{
    content: " ";
    width: 10px;
    height: 10px;
    background: rgb(55,55,55);
    position: absolute;
    top:-5px;
    right:15px;
    transform: rotate(45deg);
}
.dialog ul{
    padding: 0;
    margin: 15px;
    list-style-type: none;
}
.dialog ul li{
    cursor: pointer;
    margin-top: 5px;
    padding-top: 5px;
    border-bottom: 1px solid rgba(255,255,255,.2);
}
.btn_ico{
    margin-right: 2px;
}
.mask{
    position: absolute;
    width: 100vw;
    height: 100vh;
    top:0;
    bottom: 0;
    left:0;
    right: 0;
    z-index: 998;
}
</style>
