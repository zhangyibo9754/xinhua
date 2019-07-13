<template>
    <ul class="index-list-box flex">
      <li class="index-list-each" v-for="(item,index) in each.indexListBrach" :key="index">
        <a href="">
          <img :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(item.src)" alt="图片加载失败">
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
      name: "XhIndexListEach",
      methods:{
        urlEncode(str){
          if(str.indexOf("https:")==-1){
            str="https:"+str
            return encodeURI(str)
          }else{
            return encodeURI(str)
          }
        }
      }

    }
</script>

<style scoped>
  @import '../../assets/css/index.css';
</style>
