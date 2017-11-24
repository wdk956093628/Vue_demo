<template lang="html">
    <div class="root-list">
        <table class="table text-center">
            <thead v-if="peoples.length>0">
                <tr id="list-title">
                    <td>姓名</td>
                    <td>性别</td>
                    <td>电话</td>
                    <td>操作</td>
                </tr>
            </thead>
            <transition-group tag="tbody" name="list" leave-active-class="animated fadeOutRightBig">
                <tr v-for="(people,index) in peoples" v-bind:key="people.name">
                    <td>{{people.name}}</td>
                    <td>{{people.sex|toSex}}</td>
                    <td>{{people.tel}}</td>
                    <td>
                        <button type="button" @click="edit(index)" class="btn btn-xs btn-primary">修改</button>
                        <button type="button" @click="del(index)" class="btn btn-xs btn-danger">删除</button>
                    </td>
                </tr>
            </transition-group>
        </table>
    </div>
</template>
<script>
import {Bus} from "../bus.js";
export default {
    data(){
        return{
            toggleVal:false,
            isEdit:false,

            peoples:[
            {
              name:"万俟",
              sex:"0",
              tel:"15271818854"
            },
            {
              name:"万端康",
              sex:"1",
              tel:"15271818854"
            },
            {
              name:"赵丽颖",
              sex:"1",
              tel:"15271818854"
            },
            {
              name:"霍建华",
              sex:"0",
              tel:"15271818854"
            },
            {
              name:"胡歌",
              sex:"0",
              tel:"15271818854"
            }
            ]
        }
    },
    methods:{
        del(index){
            this.peoples.splice(index,1);
        },
        edit(index){
            this.$emit('getVal',this.peoples[index]);
          },
    },
    created:function(){
      let _this = this ;
      Bus.$on("peopleData",function(val){
        _this.peoples.push(val);
      });
    }
}
</script>

<style lang="css" scoped>
.list-move {
  transition: all 1s;
}
tr:nth-child(even){
  background: #b3e5fc;
}
tr:nth-child(odd){
  background: #e3f2fd;
}
#list-title{
background: #b3e5fc;
}
</style>
