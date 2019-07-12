<template>
  <div class="XhFirmOrder">
    <!-- Header components中 index 复用 -->
    <Xh-nav-pages-header></Xh-nav-pages-header>
    <Xh-firm-order-address></Xh-firm-order-address>
    <Xh-firm-order-commodity></Xh-firm-order-commodity>
    <Xh-firm-order-freight></Xh-firm-order-freight>
    <Xh-firm-order-freight></Xh-firm-order-freight>
    <Xh-firm-order-freight></Xh-firm-order-freight>
    <Xh-firm-orderintegral></Xh-firm-orderintegral>
    <Xh-firm-order-freight></Xh-firm-order-freight>
    <Xh-firm-order-settlement></Xh-firm-order-settlement>
    <router-link to="/">
      <van-submit-bar :price="3725" button-text="提交订单" />
    </router-link>
  </div>
</template>

<script>
import XhNavPagesHeader from '../components/index/XhNavPagesHeader'
import XhFirmOrderAddress from '../components/shoppingCart/XhFirmOrderAddress'
import XhFirmOrderCommodity from '../components/shoppingCart/XhFirmOrderCommodity'
import XhFirmOrderFreight from '../components/shoppingCart/XhFirmOrderFreight'
import XhFirmOrderintegral from '../components/shoppingCart/XhFirmOrderintegral'
import XhFirmOrderSettlement from '../components/shoppingCart/XhFirmOrderSettlement'

  export default {
    name: "XhFirmOrder",

    // methods:{
    //   onSubmit(){
    //     console.log(1);
        
    //   }
    // },
      
      
    
    components: {
      XhNavPagesHeader,
      XhFirmOrderAddress,
      XhFirmOrderCommodity,
      XhFirmOrderFreight,
      XhFirmOrderintegral,
      XhFirmOrderSettlement
    }

  }
</script>

<style scoped>
  .XhFirmOrder {
    background-color: #f1f1f1;
  }
</style>
