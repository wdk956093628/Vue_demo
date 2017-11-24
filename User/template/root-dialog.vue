<template lang="html">
  <div class="root-dialog">
    <div class="mask" @click="cancel"></div>
      <form class="modul form-herizontal">
          <h4>{{title}}</h4>
          <div class="form-group col-xs-12">
              <label class="col-xs-3 label-control" for="added_name">姓名:</label>
              <div class="col-xs-9">
                <input class="form-control" type="text" id="added_name" v-model="added_info.name"  :value="added_info.name" placeholder="请输入姓名">
              </div>
          </div>
          <div class="form-group col-xs-12">
              <label class="col-xs-3 label-control" for="added_sex">性别:</label>
              <span>男</span>
              <input type="radio" id="sex1" v-model="added_info.sex" :value="0">
              <label class="input_label" for="sex1"></label>
              <span>女</span>
              <input type="radio" id="sex2" v-model="added_info.sex" :value="1">
              <label class="input_label" for="sex2"></label>

          </div>
          <div class="form-group col-xs-12">
              <label class="col-xs-3 label-control" for="added_tel">手机:</label>
              <div class="col-xs-9">
                <input class="form-control" type="text" id="added_tel" v-model="added_info.tel"  :value="added_info.tel" placeholder="请输入手机号码">
              </div>
          </div>

          <button class="btn btn-primary col-xs-3 col-xs-offset-3" type="button" @click="comfirm">确定</button>
          <button class="btn btn-danger col-xs-3" type="button" @click="cancel">取消</button>
      </form>
  </div>
</template>

<script>
import {Bus} from "../bus.js";
export default {
    data(){
        return{
            title:"添加成员",
            added_info:{
                name:"",
                sex:"",
                tel:""
            }
        }
    },
    methods:{
        comfirm(){
          var reg_tel=/^1[34578]\d{9}$/,
              reg_name=/^[\u4E00-\u9FA5]{1,6}$/;
          if(this.added_info.name!==""&&this.added_info.tel!==""){
            if(!reg_name.test(this.added_info.name)){
                this.$emit("sendMsg","！请输入正确的姓");
              }
              else if(!reg_tel.test(this.added_info.tel)){
                  this.$emit("sendMsg","！请输入正确的手机号码");
              }
              else {
                Bus.$emit("peopleData",this.added_info);
                this.$emit("toggleToClose");
              }
            }
            else{
                this.$emit("sendMsg","！请填写完整信息");
            }
        },
        cancel(){
            this.$emit("toggleToClose");
        }
    },
      created:function(){
        let _this=this;
        Bus.$on("toEdit",function(){

        });
      }
}
</script>

<style lang="css" scoped>
    .mask{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,.3);
    }
    h4{
      margin: auto;
      margin-bottom: 20px;
      padding: 15px  0 5px 0;
      width: 70%;
      color: #fff;
      text-align: center;
      border-bottom: 1px solid #fff;
    }
    .modul{
        width: 90vw;
        height: 80vw;
        background: #58b2dc;
        border-radius: 8px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .root-dialog-title{
        text-align: center;
    }
    .form-group{
      color: #fff;
    }

    .btn{
      margin-top: 10px;
    }
    .btn{margin-right: 5px;}
</style>
