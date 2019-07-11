<template>
  <a href="">
    <img :src="item.src" alt="">
    <p>{{item.title}}</p>
  </a>
</template>

<script>
    export default {
        name: "XhIndexNav",
        props:['item']
    }
</script>

<style scoped>
  @import "../../assets/css/index.css";
</style>
