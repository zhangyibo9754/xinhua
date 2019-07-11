<template>
    <div class="XhShoppingCartHeader">
      <van-row>
        <van-col class="XhShoppingCartHeaderAndLocation" span="6" offset="9">购物车<van-icon name="location" /></van-col>
        <van-col class="XhShoppingCartHeaderManage" span="4" offset="5">管理</van-col>
      </van-row>
      <van-row>
        <button class="XhShoppingCartHeaderLogin">登录</button>
        <p class="XhShoppingCartHeaderP">登录后商品将合并到您的账号中</p>
      </van-row>
    </div>
</template>

<script>
    export default {
        name: "XhShoppingCartHeader",
        methods: {
        }
    }
</script>

<style scoped>
  .XhShoppingCartHeader{
    width: 100%;
    height: 2rem;
    background-color: #f7f7f7;
  }
  .XhShoppingCartHeaderAndLocation{
    height: 1rem;
    text-align: center;
    font-size: 0.4rem;
    color:#676767;
    line-height: 1rem;
  }
  .XhShoppingCartHeaderManage{
    height: 1rem;
    text-align: center;
    font-size: 0.4rem;
    color:#262423;
    line-height: 1rem;
  }
  .XhShoppingCartHeaderLogin{
    height: 0.6rem;
    width: 2rem;
    text-align: center;
    font-size: 0.28rem;
    color:#ae1c1b;
    line-height: 0.6rem;
    border: 1px solid #ae1c1b;
    float: left;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    background-color: #f7f7f7;
  }
  .XhShoppingCartHeaderP{
    height: 0.6rem;
    text-align: center;
    font-size: 0.28rem;
    color:#929292;
    line-height: 0.6rem;
    float: left;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }
</style>
