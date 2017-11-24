<template lang="html">
    <div class="">
        <transition name="slide"
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp"
        >
        <root-tips v-if="isTips" ref="rootTips" @touchstart.native="cancel"></root-tips>
        </transition>
        <root-header></root-header>
        <root-list @getVal="toedit" ref="rootList"></root-list>
        <transition name="slide"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
        >
        <root-dialog ref="rootDialog" @sendMsg="getMsg" @toggleToClose="toggle" v-if="toggleVal"></root-dialog>
        </transition>
        <button v-if="!toggleVal" @click="toggle" type="button" name="button" class="btn btn btn-block">添加</button>
        <button @click="random" type="button" name="button" class="btn btn-warning btn-block">乱序排列</button>
        <button @click="onlyMale('male')" type="button" name="button" class="btn btn-primary btn-block">只看男生</button>
        <button @click="onlyMale('female')" type="button" name="button" class="btn btn-danger btn-block">只看女生</button>
        <button @click="onlyMale('all')" type="button" name="button" class="btn btn-danger btn-block">查看全部</button>
    </div>
</template>

<script>
import rootHeader from "./root-header.vue";
import rootList from "./root-list.vue";
import rootDialog from "./root-dialog.vue";
import rootTips from "./root-tips.vue";
import {Bus} from "../bus.js";
export default {
    data(){
        return{
            toggleVal:false,
            isTips:false
        }
    },
    components:{
        rootTips,
        rootHeader,
        rootList,
        rootDialog
    },
    methods:{
        toggle(){
            this.toggleVal=!this.toggleVal;
        },
        toedit(val){
          this.toggleVal=!this.toggleVal;
            this.$nextTick(function(){
              this.$refs.rootDialog.added_info=val;
            });
        },
        getMsg(val){
          this.isTips=true;
          const _this = this;
          var timer = setTimeout(function(){
            _this.isTips = false;
          },3000);
          this.$nextTick(function(){
            this.refs.rootTips.tips = val;
          })
        },
        random(){
          this.$refs.rootList.peoples.sort(function(){
            return Math.random()>0.5?-1:1;
          })
        },
        onlyMale(sex){
          let tmp_ref = this.$refs.rootList.peoples;
          let toFindIndexStr ="";
          let oldlist = [];

          switch(sex){
            case "male" : {
              tmp_ref.sort(function(a,b){
                return (+a.sex) - (+b.sex);
              })
              tmp_ref.forEach(function(val){
                toFindIndexStr+=val.sex;
              })
              this.oldlist = oFindIndexStr.indexOf("1")!=-1&&tmp_ref.splice(toFindIndexStr.indexOf("1"))
            }
            break;
            case "female" : {
              tmp_ref.sort(function(a,b){
                return (+a.sex) - (+b.sex);
              }).reverse();
              tmp_ref.forEach(function(val){
                toFindIndexStr+=val.sex;
              })
              this.oldlist = oFindIndexStr.indexOf("0")!=-1&&tmp_ref.splice(toFindIndexStr.indexOf("0"))
            }
            break;

            case "all" : {
              for(let i=0;i<this.oldlist.length;i++){
                tmp_ref.push(this.oldlist[i])
              }
              this.oldlist=[]
            }
            break;
          }
        },
        cancel(){
          // this.methods.getMsg.timer=null;
          this.isTips=false;
        }
    }
}
</script>

<style lang="css" scoped="scoped">

/*.slide-leave{position: absolute;bottom: 300px;}
.slide-leave-active{transition: all .3s ease-in;}
.slide-leave-to{position: absolute;bottom: 1000px;}
.slide-enter{position: absolute;bottom: 1000px;}
.slide-enter-active{transition: all .3s ease-in;}
.slide-enter-to{position: absolute;bottom: 300px;}*/

.btn{
  background: #58b2dc;
}
</style>
