<template>
  <div class="XhNavPagesMain">
    <div class="XhNavPagesMain-ImgWrapper">
      <router-link to="/">
        <img class="XhNavPagesMain-img" src="https://img1.xinhuashudian.com/images/2019/01/10/7f8e6ab7-d219-4808-8eb4-4affe1b26607.png?x-oss-process=image/resize,m_lfit,limit_0,h_424">
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "XhNavPagesMain"
    }
</script>

<style scoped>
  .XhNavPagesMain {
    padding-top: 0.25rem;
    flex: 1;
  }
  .XhNavPagesMain-img {
    width: 100%;
  }
      
</style>
