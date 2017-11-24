<template lang="html">
      <ul>
         <li :class="changeName" class="list" v-for="(item, index) in banners" :key="changeName">
            <img :src="item.imgUrl" alt="厚黑学">
            <div class="intro">
                <span class="name">{{item.name}}</span>
                <span class="info" v-if="isShow">{{item.info}}</span>
                <span class="author">{{item.author}}</span>
                <span class="price">￥{{item.price}}</span>
                <span class="coupon">满减卷</span>
                <br>
                <span class="ziying">自营</span>
                <span class="comment">{{item.comment}}</span>
            </div>
         </li>
      </ul>
</template>

<script>
export default {
    props:{
      changeName:String
    },
    data(){
        return {
          banners:[
              {
                  imgUrl: "../img/1.png" ,
                  name:"厚黑学",
                  info:"图书音像勋章日！50万种图书满100减30",
                  author:"李宗吾",
                  price:"48.60",
                  comment:"21653条评价 98%好评"
              },
              {
                  imgUrl: "../img/02.png" ,
                  name:"厚黑学全集(足本典藏版)",
                  info:"图书音像勋章日！50万种图书满100减30",
                  author:"李宗吾",
                  price:"21.30",
                  comment:"21655条评价  98%好评"
              },
              {
                  imgUrl: "../img/03.png" ,
                  name:"厚黑学",
                  info:"影响中国20世纪的20大奇才怪杰之一",
                  author:"李宗吾",
                  price:"11.60",
                  comment:"21650条评价  98%好评"
              },
              {
                  imgUrl: "../img/04.png" ,
                  name:"墨菲定律 人性的弱点全集",
                  info:"你每天都需要一点技巧训练",
                  author:"李宗吾",
                  price:"32.60",
                  comment:"21643条评价  98%好评"
              }
          ],
          isShow:false
        }
    }

}
</script>

<style lang="css" scoped>
    ul{
        list-style-type: none;
    }
    .list{
        float: left;
        padding: 0 5px;
        width: 50%;
        height: 300px;
        background: #fff;
        border-right: 3px solid #eee;
        border-top: 3px solid #eee ;
        box-sizing: border-box;
    }
    .list:nth-child(even){
        border-right: none;
    }
    .list>img{
        margin: 5px 0 5px 10px;
        width: 90%;
        height: 65%;
    }

    .intro{
      letter-spacing: 1px;
      margin-left: 2px;
    }
    .name{ display: block; font-size: 12px; }
    .author{ display: block ; font-size: 10px;color: #9d9d9d}
    .price{ font-size: 14px;  color: red; }
    .coupon{
      display: inline;
      color: #fff;
      font-size: 10px;
      background:red;
      border-radius: 2px;
    }
    .ziying{
        display: inline;
        margin-right: 3px;
        font-size: 12px;
        color: red;
        border: 1px solid red;
        border-radius: 2px;
    }
    .comment{font-size: 10px ;color: #9d9d9d}

    .new_list{
        width: 100%;
        height: 132px;
        border-right: none;
        border-top: none;
        border-bottom: 2px solid #eee;
        box-sizing: border-box;
    }
    .new_list>img{
        float: left;
        width: 28%;
        height: 95%;
    }
    .new_list .intro{
      float: left;
        margin-top: 15px;
        margin-left: 10px;
    }
    .new_list .name{
        font-size: 14px;
        font-weight: 600;
    }
    .info{font-size: 10px;color: #9d9d9d}
    .author{ font-size: 12px}
    .price{ font-size: 16px;}
    .comment{font-size: 12px;}
</style>
