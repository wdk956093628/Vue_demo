<template lang="html">
    <div class="root-content">
      <root-header></root-header>
      <root-doing></root-doing>
      <root-done></root-done>
    </div>
</template>

<script>
import rootHeader from "./root-header.vue";
import rootDoing from "./root-doing.vue";
import rootDone from "./root-done.vue";
export default {
    components:{
        rootHeader,
        rootDoing,
        rootDone
    }
}
</script>

<style lang="css" scoped="scoped">

</style>
