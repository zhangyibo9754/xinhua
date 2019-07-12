<template>
    <ul class="index-list-box flex">
      <li class="index-list-each" v-for="(item,index) in each.indexListBrach" :key="index">
        <a href="">
          <img :src="item.src" alt="图片加载失败">
          <p>{{item.tltle}}</p>
          <span>￥{{item.price1}}</span>
          <s v-if="item.price2">￥{{item.price2}}</s>
        </a>
      </li>
    </ul>
</template>

<script>
    export default {
      props:["each"],
      name: "XhIndexListEach"
    }
</script>

<style scoped>
  @import '../../assets/css/index.css';
</style>
