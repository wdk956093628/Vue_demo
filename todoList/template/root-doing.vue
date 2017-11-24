<template lang="html">
<div class="root-doing container">
  <h2>{{title}}<span class="doing-count">{{count}}</span></h2>
  <ul>
    <li class="doing-list" v-for="(item,index) in arr">
      <input @click="getDone(index)" class="doing-checkbox" type="checkbox">
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
      title:"正在进行",
      count:"0",
      arr:[],
      doneArr:""
    }
  },
  methods:{
    del(index){
      this.count--;
      this.arr.splice(index,1);
    },
    getDone(index){
      this.count--;
      this.doneArr = this.arr.splice(index,1);
      Bus.$emit("doneData",this.doneArr[0])
    }
  },
  created(){
    let _this = this;
    Bus.$on("doingData",function(val){
      _this.count++;
      _this.arr.push(val);
    });
    Bus.$on("getDoing",function(val){
      _this.count++;
      _this.arr.push(val);
    })
  }
}
</script>

<style lang="css" scoped>
h2{position: relative;}
.doing-count{
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
.doing-list{
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
.doing-checkbox{
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
  width: 92%;
  height: 27px;
  text-indent: 5px;
}
input[type=text]:focus{
  border: 1px solid #ccc;
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
