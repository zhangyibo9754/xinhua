<template>
  <div class="theme-list">
    <a v-for="(p,index) in item.images" :key="index" href="">
      <img :src="p.src" alt="">
    </a>
  </div>

</template>

<script>
    export default {
      name: "XhIndexThemeList",
      props:["item"]
    }
</script>

<style scoped>
@import "../../assets/css/index.css";
</style>
