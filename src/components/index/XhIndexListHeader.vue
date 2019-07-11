<template>
    <div class="index-list-title flex">
      <h3 v-if="title.tlt">{{title.tlt}}</h3>
      <span v-if="title.moreLink">更多 >></span>
    </div>
</template>

<script>
    export default {
      name: "XhIndexListHeader",
      props:["title"]
    }
</script>

<style scoped>
  @import '../../assets/css/index.css';
</style>
