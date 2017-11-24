<template lang="html">
<div class="root-done container">
  <h2>{{title}}<span class="done-count">{{count}}</span></h2>
  <ul>
    <li class="done-list" v-for="(item,index) in arr">
      <input @click="getDoing(index)" class="done-checkbox" type="checkbox" checked>
      <input type="text" v-model.lazy="arr[index]" :value="arr[index]">
      <i class="glyphicon glyphicon-menu-left del" @click="del(index)"></i>
    </li>
  </ul>
</div>
</template>

<script>
import {Bus} from "../bus";
export default {
  data(){
    return{
      title:"已经完成",
      count:"0",
      arr:[]
    }
  },
  methods:{
    del(index){
      this.count--;
      this.arr.splice(index,1);
    },
    getDoing(index){
      this.count--;
      Bus.$emit("getDoing",this.arr[index])
      this.arr.splice(index,1)
    }
  },
  created(){
    let _this = this;
    Bus.$on("doneData",function(val){
      _this.count++;
      _this.arr.push(val);
    });
  }
}
</script>

<style lang="css" scoped>
h2{position: relative;}
.done-count{
  position: absolute;
  top: 2px;
  right: 5px;
  display: inline-block;
  padding: 0 5px;
  height: 20px;
  border-radius: 20px;
  background: #E6E6FA;
  line-height: 22px;
  text-align: center;
  color: #666;
  font-weight: 600;
  font-size: 14px;
}
ul{
  padding: 0;
  list-style-type: none;
}
li{
  border-left: 5px solid #999;
  opacity: 0.5;
}
.done-list{
  margin-bottom: 10px;
  position: relative;
  width: 100%;
  height: 32px;
  line-height: 32px;
  background: #fff;
  padding: 0 45px;
  border-radius: 3px;
  border-left: 5px solid #629A9C;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}
.done-checkbox{
  position: absolute;
  top: 2px;
  left: 10px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}
input[type=text]{
  border: none;
  outline: 0;
  width: 100%;
  height: 100%;
}
.del{
  position: absolute;
  top: 2px;
  right: 5px;
  border-radius: 14px;
  border: 6px double #FFF;
  background: #CCC;
  line-height: 14px;
  text-align: center;
  color: #FFF;
  font-weight: bold;
  font-size: 14px;
}
</style>
