<template>
  <div>
    <!--  头部-->
    <div class="banner-head">
      <i class="iconfont icon-fanhui" @click="onClickLeft"></i>
      <span class="head-name">{{headName}}</span>
      <i class="iconfont "></i>
    </div>
    <!-- 头部结束-->

    <!-- 主体内容start-->
    <ul>
      <li>
        <span>应付金额</span>
        <span class="pay-money"></span>
      </li>
      <li>
        <span>订单号</span>
        <span class="order-code"></span>
      </li>
      <li>
        <span>选择支付方式</span>
        <span></span>
      </li>
      <li>
        <span>支付宝</span>
        <i class="iconfont icon-jiantouyou"></i>
      </li>
      <li>
        <span>微信支付</span>
        <i class="iconfont icon-jiantouyou"></i>
      </li>
    </ul>
    <!-- 主体内容end-->

  </div>
</template>

<script>
  export default {
    name: "XhCashierDesk",
    data(){
      return{
        headName:"收银台"
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push('/XhFirmOrder')
      }
    }
  }
</script>

<style scoped>
  /*头部样式*/
  .banner-head {
    height: 1rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
  }

  .icon-fanhui, .icon-fenxiang {
    font-size: 0.3rem;
    color: #c62f2e;
  }

  .head-name {
    font-size: 0.34rem;
  }

</style>
