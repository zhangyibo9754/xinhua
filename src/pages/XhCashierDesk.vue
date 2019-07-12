<template>
  <div class="xhCashierDesk-bg">
    <!--  头部-->
    <div class="bannered-head">
      <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      <span class="head-name">收银台</span>
      <i class="iconfont "></i>
    </div>
    <!-- 头部结束-->

    <!-- 主体内容start-->
    <div class="payList-wrap">
      <ul class="paylist">
        <li class="payItem payable">
          <span class="payItem-size">应付金额</span>
          <span class="pay-money payItem-size">{{payMoney}}</span>
        </li>
        <li class="payItem">
          <span class="payItem-size">订单号</span>
          <span class="order-code payItem-size">{{orderCodea}}</span>
        </li>
        <li class="payItem payways">
          <span class="payItem-size payways-words">选择支付方式</span>
          <span></span>
        </li>
        <li class="payItem Alipay">
          <div class="alipay-vertical">
            <img class="pay-way-logo" src="../../static/images/pay/alipayLogo.png" alt="">
            <span class="payItem-size">支付宝</span>
          </div>
          <i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="payItem">
          <div class="wechats-vertical">
            <img class="pay-way-logo" src="../../static/images/pay/wechatsLogo.png" alt="">
            <span class="payItem-size">微信支付</span>
          </div>
          <i class="iconfont icon-jiantouyou"></i>
        </li>
      </ul>
    </div>
    <!-- 主体内容end-->
  </div>
</template>

<script>
  export default {
    name: "XhCashierDesk",
    data() {
      return {
        payMoney: "￥44.50",
        orderCodea: "8888888"
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  /*页面背景*/
  .xhCashierDesk-bg {
    height: 100%;
    overflow: hidden;
    background-color: #f7f7f7;
  }

  /*头部样式*/
  .bannered-head {
    height: 1rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
  }

  .icon-fanhui {
    font-size: 0.3rem;
    color: #c62f2e;
  }

  .head-name {
    font-size: 0.3rem;
  }

  /*主体内容样式*/
  .paylist {
    background-color: #fff;
  }

  .payItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    padding: 0 0.3rem;
  }

  .payItem-size {
    font-size: 0.26rem;
    color: #7a7a7a;
  }

  .icon-jiantouyou {
    font-size: 0.24rem;
    color: #f5f5f5;
  }

  .payable {
    border-bottom: 1px solid #ddd;
  }

  .pay-money {
    color: #c62f2e;
  }

  .payways {
    background-color: #f7f7f7;
    align-self: flex-end;
  }

  .pay-way-logo {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.1rem;
  }

  .payways-words {
    color: #000;
  }

  .Alipay {
    border-bottom: 1px solid #e9e9e9;
  }

  div[class$="vertical"] {
    display: flex;
    align-items: center;
  }
</style>
