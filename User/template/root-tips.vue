<template lang="html">
  <div class="title">
    <h4>{{tips}}</h4>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tips:"！请输入正确的信息"
    }
  }
}
</script>

<style lang="css" scoped>
.title{
  margin:0 auto;
  height: 35px;
  background: rgba(255,255,255,.8);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 0 10px #000;
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  z-index: 999;
}
h4{
  color: #000;
  font-size: 16px;
  text-align:center;
}
</style>
