<template>
    <div class="xinhua-header">
      <header>
        <div class="header-title flex">
          <i class="iconfont icon-saoyisao"></i>
          <img src="../../../static/images/logo.png" alt="">
          <router-link to="/XhMessage">
            <i class="iconfont icon-tushuguan"></i>
          </router-link>
        </div>
        <router-link to="/XhSearch">
          <div class="header-search rel">
            <span class="abs">应物兄</span>
            <i class="iconfont icon-sousuo abs" ></i>
          </div>
        </router-link>

      </header>
    </div>
</template>

<script>
    export default {
        name: "XhHeader"
    }
</script>

<style scoped>
  @import "../../assets/css/index.css";

</style>
