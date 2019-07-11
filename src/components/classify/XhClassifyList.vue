<template>
  <div class="allList">
    <div v-for="(title,tId) in bookList" :key="tId">
      <h4>{{title.current.name}}</h4>
      <ul class="flex list">
        <li v-for="(list,lId) in title.children" :key="lId" :list="list">
          <a href="##">
<!--            图片反向代理-->
            <img :src="'https://api.isoyu.com/img-Proxy.php?url='+list.current.logo" alt="bookPicture">
            <p>{{list.current.name}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "XhClassifyList",
        props:['bookList']
    }
</script>

<style scoped>
  @import '../.././assets/css/classify/classify.css';
</style>
