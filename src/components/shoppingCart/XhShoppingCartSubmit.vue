<template>
      <div class="XhShoppingCartSubmit">
        <van-checkbox v-model="checked" class="AllChecked" checked-color="#c72f2e">全选</van-checkbox>
        <span class="AllPrice">合计：</span>
        <span class="PriceNumber">￥45.60</span>
        <button class="SubmitPrice">去结算(1)</button>
      </div>
</template>

<script>
    export default {
        name: "XhShoppingCartSubmit",
        data(){
          return{
            checked:true
          }
        }
    }
</script>

<style scoped>
  .XhShoppingCartSubmit{
    height: 1rem;
  }
  .AllChecked{
    float: left;
    margin-top: 0.34rem;
    margin-left: 0.3rem;
  }
  .AllPrice{
    float: left;
    margin-top: 0.36rem;
    margin-left: 1.4rem;
    font-size: 0.28rem;
    color:#696969;
  }
  .PriceNumber{
    float: left;
    margin-top: 0.36rem;
    margin-left: 0.24rem;
    font-size: 0.3rem;
    color:#c72725;
  }
  .SubmitPrice{
    float: left;
    width: 2.1rem;
    height: 0.88rem;
    margin-top: 0.08rem;
    margin-left: 0.26rem;
    font-size: 0.34rem;
    color:#ffffff;
    text-align: center;
    line-height: 0.88rem;
    border: none;
    background-color: #c72f2e;
  }
</style>
