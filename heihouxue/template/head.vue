<template lang="html">
    <div class="content">
      <div class="head">
         <span><i class="glyphicon glyphicon-menu-left"></i></span>
         <div class="input_box">
            <i class="glyphicon glyphicon-search"></i>
            <input type="text" placeholder="厚黑学">
          </div>
          <slot name="btn"></slot>
        </div>
        <div class="choose">
        <ul>
            <li class="zonghe">综合</li>
            <li>销量</li>
            <li class="price">价格</li>
            <li>筛选<i class="glyphicon glyphicon-filter"></i></li>
        </ul>
        </div>
        <div class="category">
             <ul>
                <li>京东配送</li>
                <li class="brand">品牌</li>
                <li class="brand">类型</li>
                <li class="brand">市场营销...</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    }
}
</script>

<style lang="css" scoped>
    .head{
        padding-top: 5px;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #e7e7e7;
    }
    .input_box{
        display: inline-block;
        margin: 0 auto;
        padding-left: 10px;
        width: 75%;
        height: 35px;
        background: #eee;
        border-radius:40px;
    }
    .input_box>i{
        color: #ccc;
        margin-right: 2px;
    }
    .head input[type=text]{
        outline: none;
        border: 0;
        background: #eee;
        line-height: 35px;
    }
    .head span{
        display: inline-block;
        width: 10%;
        color: #666;
        text-align: center;
    }
    .choose{
        height: 30px;
        border-bottom: 1px solid #e7e7e7;
    }
    .choose li{
        list-style-type: none;
        float: left;
        padding: 0 31px;
    }
    .zonghe{
        position: relative;
    }
    .zonghe::before{
        content: '';
        position: absolute;
        top: 7px;
        right: 20px;
        border-width: 3px;
        border-style: solid;
        border-color: #000 transparent transparent transparent;
    }

    .price{
        position: relative;
    }
    .price::before{
        content: '';
        position: absolute;
        top: 2px;
        right: 20px;
        border-width: 3px;
        border-style: solid;
        border-color: transparent transparent #000  transparent;
    }
    .price::after{
        content: '';
        position: absolute;
        top: 11px;
        right: 20px;
        border-width: 3px;
        border-style: solid;
        border-color: #000 transparent transparent transparent;
    }

    .category{
        height: 35px;
    }

    .category li{
        list-style-type: none;
        float: left;
        padding: 4px 17px;
        margin: 0 10px;
        font-size: 12px;
        background: #eee;
        border-radius: 4px;
    }

    .brand{
        position: relative;
    }
    .brand::before{
        content: '';
        position: absolute;
        top: 9px;
        right: 5px;
        border-width: 3px;
        border-style: solid;
        border-color: #000 transparent transparent transparent;
    }

</style>
