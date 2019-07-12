<template>
    <div class="XhShoppingCartProduct">
      <div class="XhShoppingCartShopName">
        <van-checkbox v-model="checked" checked-color="#c72f2e" class="XhShoppingCartShopChecked"></van-checkbox>
        <van-icon name="shop-o" class="XhShoppingCartShopIcon"/>
        <h4 class="XhShoppingCartShopTitle">新华书店网上商城自营图书</h4>
        <van-icon name="coupon-o" class="XhShoppingCartShopCoupon"/>
      </div>
      <div class="XhShoppingCartProductInfo">
        <van-checkbox v-model="checked" checked-color="#c72f2e" class="XhShoppingCartShopChecked"></van-checkbox>
        <div class="Product">
          <img src="https://img2.xinhuashudian.com/bookbasepic/C/02448/3858400-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200" alt="" class="ProductImg">
          <h5 class="ProductH5">习近平讲故事</h5>
          <p class="ProductPrice">￥45.60</p>
          <van-stepper class="AddReduce" :value="value" async-change @change="onChange"/>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        name: "XhShoppingCartProduct",
        data() {
          return {
            checked: true,
            value: 1
          }
        },
        methods: {
          onChange(value) {
            this.$toast.loading({ forbidClick: true });

            setTimeout(() => {
              this.$toast.clear();
              this.value = value;
            }, 500);
          }
        }
    }
</script>

<style scoped>
  .XhShoppingCartShopName{
    width: 100%;
    height: 0.9rem;
    background-color: #ffffff;
    border-bottom: 2px solid #efefef;
    overflow: hidden;
  }
  .XhShoppingCartShopChecked{
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    width: 0.4rem;
    height: 0.4rem;
  }
  .XhShoppingCartShopIcon{
    font-size: 0.34rem;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  .XhShoppingCartShopTitle{
    font-size: 0.34rem;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  .XhShoppingCartShopCoupon{
    font-size: 0.34rem;
    float: right;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
    color: #bf2e2d;
  }
  .XhShoppingCartProductInfo{
    width: 100%;
    height: 2.87rem;
    background-color: #ffffff;
  }
  .ProductImg{
    width: 1.54rem;
    height: 2.24rem;
    margin-top: 0.24rem;
    margin-left: 1.25rem;
    float: left;
  }
  .ProductH5{
    width: 2rem;
    font-size: 0.28rem;
    height: 0.28rem;
    margin-top: 0.3rem;
    margin-left: 0.6rem;
    float: left;
  }
  .ProductPrice{
    font-size: 0.24rem;
    height: 0.28rem;
    margin-top: 1.65rem;
    margin-left: 0.8rem;
    float: left;
    color:#c52726;
  }
  .AddReduce{
    margin-top: 1.60rem;
    margin-right: 0.04rem;
    float: right;
  }
</style>
