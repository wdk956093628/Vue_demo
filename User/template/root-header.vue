<template lang="html">
    <div class="root-header container-fulid">
        <i :class="[{'glyphicon glyphicon-menu-left':headerData.toBack},'col-xs-2 toBack']"></i>
        <span class="col-xs-8 text-center toBack">{{headerData.title}}</span>
        <span class="col-xs-2"></span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            headerData:{
                toBack:true,
                title:"用户管理",
                information:false
            }
        }
    }
}
</script>

<style lang="css">
    .toBack{
        line-height: 40px;
    }
    .root-header{
        height: 40px;
        background: #58b2dc;
        color: white;
        font-size: 17px;
    }
</style>
