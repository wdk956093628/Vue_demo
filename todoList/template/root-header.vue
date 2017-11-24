<template lang="html">
    <div class="root-header container-fulid">
        <label class="title col-xs-5" for="enter">{{title}}</label>
        <div class="col col-xs-7">
          <input v-model="doing_val" :value="doing_val" @keydown.enter="getDoing" id="enter" class="enter form-control" type="text"   placeholder="添加ToDo">
        </div>
  
    </div>
</template>

<script>
import {Bus} from "../bus.js";
export default {
    data(){
        return{
          title:"ToDoList",
          doing_val:""
        }
    },
    methods:{
      getDoing(){
        Bus.$emit("doingData",this.doing_val);
        this.doing_val = "";
      }
    }
}
</script>

<style lang="css">
    .root-header{
        height: 50px;
        background: rgba(47,47,47,0.98);
    }
    .title{
      float: left;
      line-height: 50px;
      color: #ddd;
      font-size: 24px;
      font-weight: normal;
    }
    .enter{
      margin-top:12px;
      height: 25px;
      border-radius: 5px;
    }
    .entrt::-webkit-input-placeholder{
      color: #999;
    }
    h3{line-height: 40}
</style>
